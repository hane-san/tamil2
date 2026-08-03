(() => {
  "use strict";

  // v4.9 practice layer UI.
  //
  // Adds three things on top of the twenty published lessons without touching
  // their data, scoring or storage:
  //   1. scene phrases in the listen view, grouped by travel situation,
  //   2. extra drills in the practice view, with their own retry and score,
  //   3. a self-test mode that hides the Japanese until you tap a card.
  //
  // It renders after the lesson app draws, so it never fights the app for the
  // DOM: everything it inserts lives inside the current .view element, and it
  // redraws when that element is replaced.

  const app = window.TAMIL_APP_V28;
  const lessonRoot = document.getElementById("lesson");
  if (!app || !lessonRoot) return;

  const DRILL_STORAGE_KEY = "tamil-practice-drills-v49";
  const PREFS_STORAGE_KEY = "tamil-practice-prefs-v49";
  const MARKER = "data-practice-v49";
  const TEXT_SIZES = [
    { id: "small", label: "小" },
    { id: "medium", label: "中" },
    { id: "large", label: "大" }
  ];

  const drillState = readJson(DRILL_STORAGE_KEY, {});
  const prefs = normalizePrefs(readJson(PREFS_STORAGE_KEY, {}));

  function readJson(key, fallback) {
    try {
      return JSON.parse(window.localStorage.getItem(key) || "null") ?? fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (_error) {
      // Progress is a convenience here; the pack stays usable without storage.
    }
  }

  function normalizePrefs(stored) {
    return {
      textSize: TEXT_SIZES.some(size => size.id === stored.textSize) ? stored.textSize : "medium",
      selfTest: stored.selfTest === true,
      scene: typeof stored.scene === "string" ? stored.scene : "ALL"
    };
  }

  function savePrefs() {
    writeJson(PREFS_STORAGE_KEY, prefs);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[character]);
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, "&#39;");
  }

  function chapterDrills(chapterId) {
    if (!drillState[chapterId]) drillState[chapterId] = { answers: {} };
    return drillState[chapterId];
  }

  // ---------------------------------------------------------------- rendering

  function renderScenePhrase(phrase) {
    return `<article class="scene-card" data-scene="${escapeAttr(phrase.scene)}" data-tts="${escapeAttr(phrase.ttsText || phrase.targetTamil)}" data-label="${escapeAttr(phrase.meaningJa)}" role="button" tabindex="0" aria-label="${escapeAttr(phrase.targetTamil)}を再生">
      <div class="scene-card-head"><span class="scene-tag">${escapeHtml(phrase.scene)}</span><span class="scene-play" aria-hidden="true">▶</span></div>
      <div class="tamil-line" lang="ta">${escapeHtml(phrase.targetTamil)}</div>
      <div class="reading-line structure-reading"><span class="reading-tag">構造</span><span class="roman-line morph">${escapeHtml(phrase.structuredRoman)}</span></div>
      <div class="reading-line kana-reading"><span class="reading-tag">カナ</span><span class="kana-line">${escapeHtml(phrase.katakana)}</span></div>
      <div class="reading-line spoken-reading"><span class="reading-tag">発音</span><span class="roman-line plain">${escapeHtml(phrase.pronunciationRoman)}</span></div>
      <div class="meaning-line">${escapeHtml(phrase.meaningJa)}</div>
      ${phrase.literalJapanese ? `<div class="literal-line">${escapeHtml(phrase.literalJapanese)}</div>` : ""}
      ${phrase.note ? `<p class="scene-tip">${escapeHtml(phrase.note)}</p>` : ""}
    </article>`;
  }

  function renderScenePack(chapter) {
    const phrases = chapter.scenePhrases ?? [];
    if (!phrases.length) return "";
    const scenes = [...new Set(phrases.map(phrase => phrase.scene))];
    const active = scenes.includes(prefs.scene) ? prefs.scene : "ALL";
    const visible = active === "ALL" ? phrases : phrases.filter(phrase => phrase.scene === active);
    return `<section class="scene-pack" ${MARKER} aria-label="実践フレーズ">
      <div class="section-intro"><span class="eyebrow">REAL SITUATIONS</span><h2>そのまま使える実践フレーズ</h2></div>
      <p class="scene-pack-lead">この課の文法だけで組み立てた、旅行中にそのまま言える${phrases.length}文です。カードを押すと再生します。</p>
      <div class="practice-toolbar">
        <button type="button" class="practice-toggle ${prefs.selfTest ? "on" : ""}" data-self-test aria-pressed="${prefs.selfTest ? "true" : "false"}">${prefs.selfTest ? "✓ " : ""}意味を隠して自己テスト</button>
      </div>
      <div class="scene-filter" role="group" aria-label="場面で絞り込む">
        <button type="button" data-scene-filter="ALL" class="${active === "ALL" ? "active" : ""}" aria-pressed="${active === "ALL" ? "true" : "false"}">全て</button>
        ${scenes.map(scene => `<button type="button" data-scene-filter="${escapeAttr(scene)}" class="${active === scene ? "active" : ""}" aria-pressed="${active === scene ? "true" : "false"}">${escapeHtml(scene)}</button>`).join("")}
      </div>
      <div class="scene-grid ${prefs.selfTest ? "self-test" : ""}">${visible.map(renderScenePhrase).join("")}</div>
      <p class="scene-pack-status">機械検査済み・ネイティブ音声監査待ちのプレビューです。語形はすべて本課で確認済みのものだけを使っています。</p>
    </section>`;
  }

  function renderDrillOption(drill, option, drillIndex, optionIndex, selected) {
    const locked = selected != null;
    const isSelected = optionIndex === selected;
    const status = isSelected ? (optionIndex === drill.answer ? "correct" : "wrong") : "";
    return `<button class="quiz-option drill-option ${isSelected ? `selected ${status}` : ""}" type="button" data-drill="${drillIndex}" data-drill-option="${optionIndex}" ${locked ? "disabled" : ""}>
      <span class="quiz-option-ta" lang="ta">${escapeHtml(option.targetTamil)}</span>
      <span class="quiz-option-roman">${escapeHtml(option.structuredRoman)}</span>
      <span class="quiz-option-ja">${escapeHtml(option.ja)}</span>
    </button>`;
  }

  function renderDrill(drill, index, answers) {
    const selected = answers[index];
    const locked = selected != null;
    const correct = locked && selected === drill.answer;
    return `<article class="quiz-card drill-card">
      <div class="quiz-meta"><span class="quiz-number">DRILL ${String(index + 1).padStart(2, "0")}</span><span class="quiz-focus">${escapeHtml(drill.type)}</span><span class="drill-scene">${escapeHtml(drill.scene)}</span></div>
      <h3>${escapeHtml(drill.prompt)}</h3>
      <div class="quiz-options">${drill.options.map((option, optionIndex) => renderDrillOption(drill, option, index, optionIndex, selected)).join("")}</div>
      ${locked
        ? `<div class="quiz-feedback"><strong>${correct ? "✓ 正解" : `診断：${escapeHtml(drill.options[selected].tag)}`}</strong><p>${escapeHtml(drill.feedback)}</p></div>`
        : `<details class="drill-hint"><summary>ヒントを見る</summary><p>${escapeHtml(drill.hint)}</p></details>`}
    </article>`;
  }

  function renderDrills(chapter) {
    const drills = chapter.drills ?? [];
    if (!drills.length) return "";
    const answers = chapterDrills(chapter.id).answers;
    const answered = Object.keys(answers).length;
    const score = drills.reduce((total, drill, index) => total + (answers[index] === drill.answer ? 1 : 0), 0);
    return `<section class="drill-pack" ${MARKER} aria-label="追加ドリル">
      <div class="section-intro"><span class="eyebrow">EXTRA DRILLS</span><h2>場面から選ぶ追加ドリル</h2></div>
      <div class="quiz-intro drill-intro">
        <div class="quiz-score-ring">${answered ? `${score}/${drills.length}` : `0/${drills.length}`}</div>
        <div>
          <h2>実際の場面で選ぶ${drills.length}問</h2>
          <p>上の5問が形の急所なら、こちらは「その場面でどれを言うか」の練習です。選択肢はどれも正しい文なので、場面に合うものを選びます。</p>
        </div>
        ${answered ? `<button type="button" class="drill-reset" data-drill-reset>やり直す</button>` : ""}
      </div>
      ${drills.map((drill, index) => renderDrill(drill, index, answers)).join("")}
    </section>`;
  }

  function inject() {
    const chapter = app.currentChapter();
    if (!chapter) return;
    const view = lessonRoot.querySelector(".view");
    if (!view || view.querySelector(`[${MARKER}]`)) return;

    if (view.classList.contains("view-examples")) {
      const markup = renderScenePack(chapter);
      if (markup) view.insertAdjacentHTML("beforeend", markup);
      return;
    }
    if (view.classList.contains("view-practice")) {
      const markup = renderDrills(chapter);
      if (markup) view.insertAdjacentHTML("beforeend", markup);
      addQuizRetry(view, chapter);
    }
  }

  // The published quiz locks each answer once chosen. Clearing the whole record
  // used to be the only way back, so offer a per-lesson retry instead.
  function addQuizRetry(view, chapter) {
    if (view.querySelector("[data-quiz-retry]")) return;
    const finish = view.querySelector(".quiz-finish");
    const anchor = finish ?? view.querySelector(".drill-pack");
    if (!anchor) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-retry";
    button.textContent = "この課の5問をやり直す";
    button.setAttribute("data-quiz-retry", chapter.id);
    anchor.insertAdjacentElement("afterend", button);
  }

  function redraw() {
    lessonRoot.querySelectorAll(`[${MARKER}]`).forEach(node => node.remove());
    lessonRoot.querySelectorAll("[data-quiz-retry]").forEach(node => node.remove());
    inject();
  }

  // ------------------------------------------------------------- interactions

  lessonRoot.addEventListener("click", event => {
    const sceneFilter = event.target.closest("[data-scene-filter]");
    if (sceneFilter) {
      prefs.scene = sceneFilter.dataset.sceneFilter;
      savePrefs();
      redraw();
      return;
    }

    const selfTest = event.target.closest("[data-self-test]");
    if (selfTest) {
      prefs.selfTest = !prefs.selfTest;
      savePrefs();
      redraw();
      return;
    }

    const drillOption = event.target.closest("[data-drill-option]");
    if (drillOption) {
      answerDrill(Number(drillOption.dataset.drill), Number(drillOption.dataset.drillOption));
      return;
    }

    const drillReset = event.target.closest("[data-drill-reset]");
    if (drillReset) {
      chapterDrills(app.currentChapter().id).answers = {};
      writeJson(DRILL_STORAGE_KEY, drillState);
      redraw();
      return;
    }

    const quizRetry = event.target.closest("[data-quiz-retry]");
    if (quizRetry) {
      app.resetChapterQuiz(quizRetry.getAttribute("data-quiz-retry"));
      return;
    }

    // In self-test mode a tap both plays the card and uncovers its meaning.
    const card = event.target.closest(".scene-card");
    if (card && prefs.selfTest) card.classList.add("revealed");
  });

  lessonRoot.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".scene-card");
    if (!card || event.target !== card) return;
    event.preventDefault();
    if (prefs.selfTest) card.classList.add("revealed");
    card.click();
  });

  function answerDrill(drillIndex, optionIndex) {
    const chapter = app.currentChapter();
    const record = chapterDrills(chapter.id);
    if (record.answers[drillIndex] != null) return;
    record.answers[drillIndex] = optionIndex;
    writeJson(DRILL_STORAGE_KEY, drillState);
    redraw();
    requestAnimationFrame(() => {
      lessonRoot.querySelector(`[data-drill="${drillIndex}"]`)?.closest(".drill-card")?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  }

  // ------------------------------------------------------------ text size row

  function applyTextSize() {
    document.body.setAttribute("data-text-size", prefs.textSize);
    document.querySelectorAll("[data-text-size-option]").forEach(button => {
      const selected = button.dataset.textSizeOption === prefs.textSize;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  function mountTextSizeControl() {
    const panel = document.getElementById("settingsPanel");
    const audioSection = panel?.querySelector(".settings-audio-section");
    if (!panel || !audioSection || panel.querySelector("[data-text-size-option]")) return;
    const row = document.createElement("div");
    row.className = "audio-choice-row text-size-row";
    row.innerHTML = `<div class="audio-choice-copy"><strong>文字の大きさ</strong><small>タミル文字・カナ・訳をまとめて調整</small></div>
      <div class="audio-choice-buttons" aria-label="文字の大きさ">
        ${TEXT_SIZES.map(size => `<button type="button" data-text-size-option="${size.id}" aria-pressed="false">${size.label}</button>`).join("")}
      </div>`;
    audioSection.insertAdjacentElement("beforebegin", row);
    row.addEventListener("click", event => {
      const button = event.target.closest("[data-text-size-option]");
      if (!button) return;
      prefs.textSize = button.dataset.textSizeOption;
      savePrefs();
      applyTextSize();
    });
    applyTextSize();
  }

  // ------------------------------------------------------------------ startup

  new MutationObserver(() => inject()).observe(lessonRoot, { childList: true });
  mountTextSizeControl();
  applyTextSize();
  inject();

  window.TAMIL_PRACTICE_UI_V49 = Object.freeze({
    version: "4.9-preview",
    redraw,
    getPreferences: () => ({ ...prefs })
  });
})();
