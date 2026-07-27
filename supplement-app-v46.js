(() => {
  "use strict";

  const ui = window.TAMIL_SUPPLEMENT_UI_V42;
  const root = document.getElementById("supplementRoot");
  const launcher = document.getElementById("supplementHubButton");
  const coreMain = document.getElementById("main");
  const coreBottomNav = document.querySelector(".bottom-nav");
  const supplementBottomNav = document.getElementById("supplementBottomNav");
  const audioDock = document.getElementById("supplementAudioDock");

  if (!ui || !root || !launcher || !supplementBottomNav || !audioDock) return;

  const VIEW_LABELS = Object.freeze({ read: "読む", examples: "聞く", forms: "形", practice: "練習" });
  const state = ui.load();
  const audio = {
    queue: [],
    index: -1,
    rate: 1,
    repeats: 1,
    completedRepeats: 0,
    continuous: false,
    speaking: false,
    utterance: null,
    voice: null,
    voiceNoticeShown: false
  };

  let active = false;
  let toastTimer = null;

  init();

  function init() {
    launcher.hidden = false;
    launcher.addEventListener("click", openHub);
    supplementBottomNav.addEventListener("click", event => {
      const button = event.target.closest("button[data-supp-view]");
      if (!button || !state.currentCode) return;
      openSupplement(state.currentCode, button.dataset.suppView);
    });
    root.addEventListener("click", handleRootClick);
    root.addEventListener("keydown", handleRootKeydown);
    bindAudioEvents();
    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("beforeunload", () => ui.save(state));
    loadVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", loadVoices);
    syncFromHash();
  }

  function parseRoute() {
    const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const supplement = params.get("supp");
    const view = VIEW_LABELS[params.get("view")] ? params.get("view") : "read";
    if (supplement === "hub") return { mode: "hub", code: null, view: "read" };
    if (ui.getSupplement(supplement)) return { mode: "supplement", code: supplement, view };
    return { mode: "core", code: null, view: null };
  }

  function syncFromHash() {
    const route = parseRoute();
    if (route.mode === "core") {
      leaveSupplementMode();
      return;
    }
    enterSupplementMode();
    if (route.mode === "hub") renderHub();
    else renderSupplement(route.code, route.view);
  }

  function openHub() {
    closeDrawer();
    setHash("#supp=hub");
  }

  function openSupplement(code, view = "read") {
    if (!ui.getSupplement(code) || !VIEW_LABELS[view]) return;
    setHash(`#supp=${encodeURIComponent(code)}&view=${encodeURIComponent(view)}`);
  }

  function setHash(hash) {
    if (window.location.hash === hash) syncFromHash();
    else window.location.hash = hash;
  }

  function enterSupplementMode() {
    active = true;
    stopAudio(false);
    document.body.classList.add("supplement-mode");
    coreMain.hidden = true;
    coreBottomNav.hidden = true;
    root.hidden = false;
    document.getElementById("progressFill").style.width = `${ui.overallCompletion(state).percent}%`;
  }

  function leaveSupplementMode() {
    if (!active) return;
    active = false;
    stopAudio(false);
    document.body.classList.remove("supplement-mode");
    root.hidden = true;
    supplementBottomNav.hidden = true;
    audioDock.hidden = true;
    coreMain.hidden = false;
    coreBottomNav.hidden = false;
  }

  function renderHub() {
    stopAudio(false);
    supplementBottomNav.hidden = true;
    const overall = ui.overallCompletion(state);
    document.getElementById("progressLabel").textContent = `補講 A〜H / ${overall.percent}%`;
    document.getElementById("progressFill").style.width = `${overall.percent}%`;
    document.title = `補講A〜H｜口語タミル語の教科書`;
    root.innerHTML = `
      <div class="supplement-preview-shell">
        <aside class="supplement-review-gate" role="note">
          <strong>補講プレビュー</strong>
          <span>教材構造と機械検査は合格済みです。発音・韻律・地域横断的自然さはネイティブ音声監査前のため、公開承認前として表示しています。</span>
        </aside>
        ${ui.renderHub(state)}
        <button class="supplement-return-core" type="button" data-return-core="true">← 本課へ戻る</button>
      </div>`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderSupplement(code, view) {
    const supplement = ui.getSupplement(code);
    if (!supplement) return renderHub();
    ui.markView(state, code, view);
    ui.save(state);
    state.currentCode = code;
    state.view = view;
    stopAudio(false);

    const completion = ui.completion(state, code);
    document.getElementById("progressLabel").textContent = `補講 ${code} / 8補講`;
    document.getElementById("progressFill").style.width = `${completion.percent}%`;
    document.title = `補講${code} ${supplement.navTitle}｜口語タミル語の教科書`;

    root.innerHTML = `
      <article class="supplement-preview-shell" data-current-supplement="${escapeAttr(code)}">
        ${renderSupplementHero(supplement, completion)}
        ${ui.renderBridge(supplement)}
        <aside class="supplement-review-gate" role="note">
          <strong>機械検査済み・音声監査待ち</strong>
          <span>タミル文字・転写・構造境界・TTS入力・教材構成は検査済みです。発音カナと地域横断的自然さは公開前レビュー対象です。</span>
        </aside>
        <section class="supplement-view supplement-view-${escapeAttr(view)}">${renderView(supplement, view)}</section>
        ${renderSupplementFooter(code)}
      </article>`;

    updateBottomNav(view);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderSupplementHero(supplement, completion) {
    return `<header class="supplement-hero">
      <div class="supplement-hero-top">
        <button type="button" class="supplement-back-hub" data-open-hub="true">← 補講一覧</button>
        <span class="supplement-code-badge">SUPPLEMENT ${escapeHtml(supplement.code)}</span>
      </div>
      <span class="supplement-release">${escapeHtml(supplement.release)} · ${completion.done}/${completion.total}段階</span>
      <h1>${escapeHtml(supplement.title)}<span lang="ta">${escapeHtml(supplement.tamilTitle)}</span></h1>
      <p>${escapeHtml(supplement.deck)}</p>
      <div class="supplement-targets">${supplement.targets.map(target => `<span>${escapeHtml(target)}</span>`).join("")}</div>
    </header>`;
  }

  function renderView(supplement, view) {
    if (view === "read") return renderRead(supplement);
    if (view === "examples") return renderExamples(supplement);
    if (view === "forms") return renderForms(supplement);
    return renderPractice(supplement);
  }

  function renderRead(supplement) {
    return `
      <section class="supplement-section-heading"><span>START HERE</span><h2>まず代表例を、音と形から見る</h2></section>
      ${renderExample(supplement.heroExample, true)}
      <aside class="roman-guide"><strong>読み方メモ</strong>括弧内は表面形を保つ構造ローマ字です。発音ローマ字・カナとは役割を分けています。</aside>
      <section class="critical-points" aria-label="この補講の急所">
        <div class="critical-points-head"><span>3 KEY POINTS</span><strong>この補講で持ち帰る3点</strong></div>
        <ol>${supplement.criticalPoints.map(point => `<li>${point}</li>`).join("")}</ol>
      </section>
      <div class="prose supplement-prose">${supplement.readSections.map(renderReadingSection).join("")}</div>`;
  }

  function renderReadingSection(section) {
    return `<section class="reading-section">
      <section class="supplement-section-heading"><span>${escapeHtml(section.kicker)}</span><h2>${section.heading}</h2></section>
      ${section.takeaway ? `<div class="reading-takeaway"><span>この段落の結論</span><strong>${section.takeaway}</strong></div>` : ""}
      ${section.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
      ${section.note ? `<aside class="note-card ${escapeAttr(section.note.tone || "")}"><strong>${escapeHtml(section.note.title)}</strong>${section.note.body}</aside>` : ""}
    </section>`;
  }

  function renderExamples(supplement) {
    const featured = supplement.examples.filter(example => example.featured);
    const bank = supplement.examples.filter(example => !example.featured);
    return `
      <div class="continuous-bar">
        <span>タミル語だけを、上から連続再生</span>
        <button type="button" data-supp-continuous="true">▶ 全例文を聞く</button>
      </div>
      <section class="supplement-section-heading"><span>CORE SENTENCES</span><h2>まず代表例を聞く</h2></section>
      <div class="supplement-featured-list">${featured.map(example => renderExample(example, true)).join("")}</div>
      <section class="supplement-section-heading"><span>READING BANK</span><h2>対照例文</h2></section>
      <div class="supplement-example-bank">${bank.map(example => renderExample(example, false)).join("")}</div>`;
  }

  function renderExample(example, featured) {
    const register = example.primaryRegister || "SST";
    const readingOnly = example.styleTags?.includes("reading-only");
    return `<article class="${featured ? "supplement-example-feature" : "supplement-example-row"} is-playable" data-supp-play-id="${escapeAttr(example.id)}" role="button" tabindex="0" aria-label="${escapeAttr(example.targetTamil)}を再生">
      <div class="supplement-example-meta">
        <span>${featured ? "CORE" : "EXAMPLE"}</span>
        <span class="register-badge ${readingOnly ? "reading-only" : ""}">${escapeHtml(register)}${readingOnly ? "・読解" : ""}</span>
      </div>
      <span class="supplement-play-icon" aria-hidden="true">▶</span>
      <div class="tamil-line" lang="ta">${escapeHtml(example.targetTamil)}</div>
      <div class="reading-line structure-reading"><span class="reading-tag">構造</span><span class="roman-line morph">${escapeHtml(example.structuredRoman)}</span></div>
      <div class="reading-line kana-reading"><span class="reading-tag">カナ</span><span class="kana-line">${escapeHtml(example.katakana)}</span></div>
      <div class="reading-line spoken-reading"><span class="reading-tag">発音</span><span class="roman-line plain">${escapeHtml(example.pronunciationRoman)}</span></div>
      <div class="meaning-line">${escapeHtml(example.meaningJa)}</div>
      ${example.literalJapanese ? `<div class="literal-line">${escapeHtml(example.literalJapanese)}</div>` : ""}
    </article>`;
  }

  function renderForms(supplement) {
    const config = supplement.formConfig;
    return `
      <section class="supplement-section-heading"><span>FORM ATLAS</span><h2>${escapeHtml(config.title)}</h2></section>
      <p class="supplement-form-intro">${escapeHtml(config.intro)}</p>
      <div class="supplement-form-grid">${config.patterns.map(pattern => `
        <article class="supplement-form-card">
          <div class="supplement-form-meta"><span>${escapeHtml(pattern.group || "対照")}</span><strong>${escapeHtml(pattern.kind || "形")}</strong></div>
          <div class="supplement-form-tamil" lang="ta">${escapeHtml(pattern.targetTamil)}</div>
          <div class="supplement-form-roman">${escapeHtml(pattern.structuredRoman)}</div>
          <div class="supplement-form-kana">${escapeHtml(pattern.katakana)}</div>
          <div class="supplement-form-ja">${escapeHtml(pattern.meaningJa)}</div>
          <small>${escapeHtml(pattern.note || pattern.grammarNote || "")}</small>
          ${pattern.primaryRegister === "LT-WR" ? `<span class="register-badge reading-only">LT-WR・読解</span>` : ""}
        </article>`).join("")}</div>
      <aside class="supplement-checkpoint"><strong>この補講の確認線</strong>${escapeHtml(config.checkpoint || "代表形を、意味と構造から選べるようにする。")}</aside>`;
  }

  function renderPractice(supplement) {
    const quiz = ui.getQuiz(state, supplement.code);
    const answered = Object.keys(quiz.answers).length;
    const score = supplement.quiz.reduce((sum, question, index) => sum + (quiz.answers[String(index)] === question.answer ? 1 : 0), 0);
    return `
      <section class="supplement-section-heading"><span>CHECK</span><h2>5問で、形ではなく判断軸を確認する</h2></section>
      <div class="supplement-quiz-list">${supplement.quiz.map((question, index) => renderQuizQuestion(question, index, quiz)).join("")}</div>
      <section class="supplement-quiz-finish">
        <strong>${quiz.finished ? `${score} / ${supplement.quiz.length}問` : `${answered} / ${supplement.quiz.length}問 回答`}</strong>
        <div>
          <button type="button" data-finish-supp-quiz="true">確認を完了</button>
          <button type="button" class="soft-button" data-reset-supp-quiz="true">この5問をやり直す</button>
        </div>
      </section>`;
  }

  function renderQuizQuestion(question, index, quiz) {
    const selected = quiz.answers[String(index)];
    return `<article class="supplement-quiz-card" data-supp-question="${index}">
      <div class="supplement-quiz-head"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(question.focus)}</strong></div>
      <h3>${question.q}</h3>
      <div class="supplement-quiz-options">${question.options.map((option, optionIndex) => {
        const classes = [selected === optionIndex ? "selected" : "", selected != null && optionIndex === question.answer ? "correct" : "", selected === optionIndex && selected !== question.answer ? "wrong" : ""].filter(Boolean).join(" ");
        return `<button type="button" class="${classes}" data-supp-quiz-option="${optionIndex}" data-question-index="${index}" ${selected != null ? "disabled" : ""}>${option}</button>`;
      }).join("")}</div>
      ${selected != null ? `<div class="supplement-quiz-feedback"><strong>${selected === question.answer ? "正解" : "この場面では別の形"}</strong>${question.feedback}<small>${escapeHtml(question.rule)}</small></div>` : ""}
    </article>`;
  }

  function renderSupplementFooter(code) {
    const codes = (window.TAMIL_SUPPLEMENTS_V42 || []).map(item => item.code);
    const index = codes.indexOf(code);
    return `<nav class="supplement-footer-nav" aria-label="前後の補講">
      <button type="button" data-open-supplement="${escapeAttr(codes[index - 1] || "")}" ${index <= 0 ? "disabled" : ""}>← 前の補講</button>
      <button type="button" data-open-hub="true">補講一覧</button>
      <button type="button" data-open-supplement="${escapeAttr(codes[index + 1] || "")}" ${index >= codes.length - 1 ? "disabled" : ""}>次の補講 →</button>
    </nav>`;
  }

  function updateBottomNav(view) {
    supplementBottomNav.hidden = false;
    supplementBottomNav.querySelectorAll("button[data-supp-view]").forEach(button => {
      const selected = button.dataset.suppView === view;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-current", selected ? "page" : "false");
    });
  }

  function handleRootClick(event) {
    const hubButton = event.target.closest("[data-open-hub]");
    if (hubButton) return openHub();

    const returnCore = event.target.closest("[data-return-core]");
    if (returnCore) return goToLesson(1);

    const openButton = event.target.closest("[data-open-supplement]");
    if (openButton && openButton.dataset.openSupplement) return openSupplement(openButton.dataset.openSupplement, "read");

    const lessonButton = event.target.closest("[data-go-lesson]");
    if (lessonButton) return goToLesson(Number(lessonButton.dataset.goLesson));

    const playCard = event.target.closest("[data-supp-play-id]");
    if (playCard) return playById(playCard.dataset.suppPlayId, currentSupplement().examples.map(example => example.id), false);

    const continuousButton = event.target.closest("[data-supp-continuous]");
    if (continuousButton) {
      const queue = currentSupplement().examples.map(example => example.id);
      return playById(queue[0], queue, true);
    }

    const quizOption = event.target.closest("[data-supp-quiz-option]");
    if (quizOption) {
      ui.saveQuizAnswer(state, state.currentCode, Number(quizOption.dataset.questionIndex), Number(quizOption.dataset.suppQuizOption));
      ui.save(state);
      return renderSupplement(state.currentCode, "practice");
    }

    if (event.target.closest("[data-finish-supp-quiz]")) return finishQuiz();
    if (event.target.closest("[data-reset-supp-quiz]")) return resetQuiz();
  }

  function handleRootKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-supp-play-id]");
    if (!card || event.target !== card) return;
    event.preventDefault();
    playById(card.dataset.suppPlayId, currentSupplement().examples.map(example => example.id), false);
  }

  function finishQuiz() {
    const supplement = currentSupplement();
    const quiz = ui.getQuiz(state, supplement.code);
    if (Object.keys(quiz.answers).length < supplement.quiz.length) {
      showToast("5問すべてに回答してください");
      return;
    }
    const passed = ui.finishQuiz(state, supplement.code);
    ui.save(state);
    renderSupplement(supplement.code, "practice");
    showToast(passed ? `補講${supplement.code}の確認が完了しました` : "違いを確認して、もう一度挑戦できます");
  }

  function resetQuiz() {
    state.quizzes[state.currentCode] = { answers: {}, finished: false };
    ui.getProgress(state, state.currentCode).practice = false;
    ui.getProgress(state, state.currentCode).check = false;
    ui.save(state);
    renderSupplement(state.currentCode, "practice");
  }

  function goToLesson(number) {
    ui.save(state);
    stopAudio(false);
    window.location.hash = `#ch=${number}&view=read`;
  }

  function closeDrawer() {
    document.getElementById("drawerClose")?.click();
  }

  function currentSupplement() {
    return ui.getSupplement(state.currentCode);
  }

  function findExample(id) {
    return currentSupplement()?.examples.find(example => example.id === id) || null;
  }

  function bindAudioEvents() {
    document.getElementById("suppAudioPrev").addEventListener("click", () => moveAudio(-1));
    document.getElementById("suppAudioNext").addEventListener("click", () => moveAudio(1));
    document.getElementById("suppAudioPlay").addEventListener("click", toggleAudio);
    document.getElementById("suppAudioStop").addEventListener("click", () => stopAudio(true));
    document.getElementById("suppAudioSpeed").addEventListener("click", toggleSpeed);
    document.getElementById("suppAudioRepeat").addEventListener("click", toggleRepeat);
    document.getElementById("suppAudioClose").addEventListener("click", closeAudioDock);
  }

  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    audio.voice = voices.find(voice => /^ta-IN$/i.test(voice.lang)) || voices.find(voice => /^ta([_-]|$)/i.test(voice.lang)) || null;
  }

  function isTamilTtsText(value) {
    const text = String(value ?? "").normalize("NFC");
    return Boolean(text) && /^[\u0B80-\u0BFF\s.,?!…;:()'’]+$/u.test(text);
  }

  function playById(id, queue, continuous) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      showToast("このブラウザは音声読み上げに対応していません");
      return;
    }
    const example = findExample(id);
    if (!example) return;
    audio.queue = [...queue];
    audio.index = Math.max(0, audio.queue.indexOf(id));
    audio.continuous = Boolean(continuous);
    audio.completedRepeats = 0;
    ui.markListening(state, state.currentCode);
    ui.save(state);
    speakExample(example);
  }

  function speakExample(example, preserveRepeat = false) {
    stopAudio(false, true, preserveRepeat);
    const ttsText = example.ttsText || example.targetTamil;
    if (!isTamilTtsText(ttsText)) {
      showToast("音声用テキストにタミル文字以外が含まれています");
      return;
    }
    if (!audio.voice && !audio.voiceNoticeShown) {
      audio.voiceNoticeShown = true;
      showToast("端末にタミル語音声が見つかりません。既定音声で試します");
    }
    openAudioDock(example);
    highlightExample(example.id);
    const utterance = new SpeechSynthesisUtterance(ttsText);
    utterance.lang = "ta-IN";
    utterance.rate = audio.rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (audio.voice) utterance.voice = audio.voice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onerror = event => {
      setSpeaking(false);
      if (event.error !== "canceled" && event.error !== "interrupted") showToast("タミル語音声を再生できませんでした。端末の音声設定を確認してください");
    };
    utterance.onend = () => handleUtteranceEnd(example);
    audio.utterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function handleUtteranceEnd(example) {
    audio.completedRepeats += 1;
    if (audio.completedRepeats < audio.repeats) {
      setTimeout(() => speakExample(example, true), 180);
      return;
    }
    audio.completedRepeats = 0;
    setSpeaking(false);
    if (audio.continuous && audio.index < audio.queue.length - 1) {
      audio.index += 1;
      const next = findExample(audio.queue[audio.index]);
      if (next) setTimeout(() => speakExample(next), 260);
    }
  }

  function moveAudio(direction) {
    if (!audio.queue.length) return;
    const nextIndex = Math.min(audio.queue.length - 1, Math.max(0, audio.index + direction));
    if (nextIndex === audio.index) return;
    audio.index = nextIndex;
    audio.completedRepeats = 0;
    const example = findExample(audio.queue[nextIndex]);
    if (example) speakExample(example);
  }

  function toggleAudio() {
    if (audio.speaking) return stopAudio(true, true);
    const example = findExample(audio.queue[audio.index]);
    if (example) speakExample(example);
  }

  function toggleSpeed() {
    audio.rate = audio.rate === 1 ? 0.72 : 1;
    document.getElementById("suppAudioSpeed").textContent = audio.rate === 1 ? "1.0×" : "ゆっくり";
    if (audio.speaking) {
      const example = findExample(audio.queue[audio.index]);
      if (example) speakExample(example);
    }
  }

  function toggleRepeat() {
    audio.repeats = audio.repeats === 1 ? 2 : 1;
    audio.completedRepeats = 0;
    document.getElementById("suppAudioRepeat").textContent = `×${audio.repeats}`;
  }

  function stopAudio(updateButton = true, preserveQueue = false, preserveRepeat = false) {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    audio.utterance = null;
    audio.speaking = false;
    if (!preserveRepeat) audio.completedRepeats = 0;
    if (!preserveQueue) audio.continuous = false;
    document.querySelectorAll("#supplementRoot .playing").forEach(element => element.classList.remove("playing"));
    if (updateButton) setSpeaking(false);
  }

  function openAudioDock(example) {
    document.getElementById("suppAudioTamil").textContent = example.targetTamil;
    document.getElementById("suppAudioJapanese").textContent = example.meaningJa;
    document.getElementById("suppAudioSpeed").textContent = audio.rate === 1 ? "1.0×" : "ゆっくり";
    document.getElementById("suppAudioRepeat").textContent = `×${audio.repeats}`;
    audioDock.hidden = false;
    audioDock.classList.add("open");
    audioDock.setAttribute("aria-hidden", "false");
  }

  function closeAudioDock() {
    stopAudio(true);
    audioDock.classList.remove("open");
    audioDock.setAttribute("aria-hidden", "true");
    audioDock.hidden = true;
  }

  function setSpeaking(speaking) {
    audio.speaking = speaking;
    const button = document.getElementById("suppAudioPlay");
    button.textContent = speaking ? "Ⅱ" : "▶";
    button.setAttribute("aria-label", speaking ? "停止" : "再生");
  }

  function highlightExample(id) {
    document.querySelectorAll("#supplementRoot .playing").forEach(element => element.classList.remove("playing"));
    const safeId = window.CSS?.escape ? window.CSS.escape(id) : String(id).replace(/"/g, "\\\"");
    document.querySelector(`#supplementRoot [data-supp-play-id="${safeId}"]`)?.classList.add("playing");
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[character]);
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  window.TAMIL_SUPPLEMENT_APP_V46 = Object.freeze({
    openHub,
    openSupplement,
    syncFromHash,
    getState: () => ui.serialize(state),
    getAudioState: () => ({ ...audio, queue: [...audio.queue], utterance: null, voice: audio.voice ? { lang: audio.voice.lang } : null }),
    isActive: () => active,
    stopAudio
  });
})();