(() => {
  "use strict";

  const lessons = (window.TAMIL_LESSONS || []).sort((a, b) => a.number - b.number);
  const root = document.getElementById("top");
  const lessonMenu = document.getElementById("lessonMenu");
  const lessonMenuButton = document.getElementById("lessonMenuButton");
  const currentLessonLabel = document.getElementById("currentLessonLabel");
  const playAllButton = document.getElementById("playAllButton");
  const stopButton = document.getElementById("stopButton");
  const voiceStatus = document.getElementById("voiceStatus");
  const toast = document.getElementById("toast");

  let currentLessonIndex = Math.max(0, lessons.findIndex(lesson => lesson.id === location.hash.slice(1)));
  let speed = 1;
  let repeatCount = 1;
  let tamilVoice = null;
  let voiceReady = false;
  let runToken = 0;
  let activeCard = null;
  let toastTimer = null;

  const escapeHTML = value => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function getExample(lesson, id) {
    return lesson.examples.find(example => example.id === id);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function sentenceCard(example, options = {}) {
    if (!example) return "";
    const morphemes = Array.isArray(example.morphemes) && example.morphemes.length
      ? `<div class="morpheme-wrap"><table class="morpheme-table">
          <thead><tr><th>形</th><th>役割</th><th>ここで見ること</th></tr></thead>
          <tbody>${example.morphemes.map(row => `<tr><td class="morpheme-form">${escapeHTML(row[0])}</td><td>${escapeHTML(row[1])}</td><td>${escapeHTML(row[2])}</td></tr>`).join("")}</tbody>
        </table></div>`
      : "";

    return `<article class="example-card${options.hero ? " hero-card" : ""}" data-example-id="${escapeHTML(example.id)}">
      <button type="button" class="speak-button" data-speak-id="${escapeHTML(example.id)}" aria-label="このタミル語例文を再生">🔊</button>
      <div class="example-body">
        <p class="tamil-line" lang="ta">${escapeHTML(example.tamil)}</p>
        <p class="roman-line">${escapeHTML(example.romanised)}</p>
        ${example.surfaceRomanised ? `<p class="surface-line">表面形：${escapeHTML(example.surfaceRomanised)}</p>` : ""}
        <p class="katakana-line">${escapeHTML(example.katakana)}</p>
        <p class="japanese-line">${escapeHTML(example.japanese)}</p>
        ${example.literalJapanese ? `<p class="literal-line">構造に近い訳：${escapeHTML(example.literalJapanese)}</p>` : ""}
        ${example.grammarNote ? `<p class="card-note">${escapeHTML(example.grammarNote)}</p>` : ""}
      </div>
      ${options.showMorphemes ? morphemes : ""}
    </article>`;
  }

  function explanationCard(block) {
    const patterns = block.patterns?.length
      ? `<div class="pattern-list">${block.patterns.map(pattern => `<div class="pattern-row">
          <div class="pattern-tamil" lang="ta">${escapeHTML(pattern.tamil)}</div>
          <div class="pattern-roman">${escapeHTML(pattern.roman)}</div>
          <div class="pattern-japanese">${escapeHTML(pattern.japanese)}</div>
          ${pattern.note ? `<div class="pattern-note">${escapeHTML(pattern.note)}</div>` : ""}
        </div>`).join("")}</div>`
      : "";

    return `<article class="explain-card">
      <h3>${escapeHTML(block.title)}</h3>
      ${(block.paragraphs || []).map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      ${patterns}
    </article>`;
  }

  function compareCard(group) {
    return `<article class="compare-card">
      <h3>${escapeHTML(group.title)}</h3>
      ${(group.rows || []).map(row => `<div class="compare-row">
        <div class="compare-tamil" lang="ta">${escapeHTML(row.tamil)}</div>
        <div class="compare-roman">${escapeHTML(row.roman)}</div>
        <div class="compare-japanese">${escapeHTML(row.japanese)}</div>
        ${row.note ? `<div class="compare-note">${escapeHTML(row.note)}</div>` : ""}
      </div>`).join("")}
    </article>`;
  }

  function pronounTable(rows) {
    if (!rows?.length) return "";
    const cell = data => `<span class="ta" lang="ta">${escapeHTML(data[0])}</span><br><span class="rom">${escapeHTML(data[1])}</span>${data[2] ? `<br><span class="register-chip">${escapeHTML(data[2])}</span>` : ""}`;
    return `<div class="pronoun-table-wrap"><table class="pronoun-table">
      <thead><tr><th>意味</th><th>中心（主格）</th><th>対象（対格）</th><th>届く先（与格）</th></tr></thead>
      <tbody>${rows.map(row => `<tr><td>${escapeHTML(row.meaning)}</td><td>${cell(row.nominative)}</td><td>${cell(row.accusative)}</td><td>${cell(row.dative)}</td></tr>`).join("")}</tbody>
    </table></div>`;
  }

  function quizCard(quiz, index) {
    return `<article class="quiz-card" data-quiz-index="${index}">
      <p class="quiz-number">Q${index + 1}</p>
      <p class="quiz-prompt">${escapeHTML(quiz.prompt)}</p>
      <div class="quiz-options">${quiz.options.map((option, optionIndex) => `<button type="button" class="quiz-option" data-option-index="${optionIndex}">${escapeHTML(option)}</button>`).join("")}</div>
      <p class="quiz-feedback" aria-live="polite"></p>
    </article>`;
  }

  function renderLesson(index, options = {}) {
    const lesson = lessons[index];
    if (!lesson) {
      root.innerHTML = `<p>教材データを読み込めませんでした。</p>`;
      return;
    }

    stopSpeech();
    currentLessonIndex = index;
    currentLessonLabel.textContent = `第${lesson.number}課`;
    document.title = `第${lesson.number}課 ${lesson.title}｜சென்னை தமிழ்`;
    location.hash = lesson.id;

    root.innerHTML = `
      <section class="lesson-hero">
        <p class="lesson-number">LESSON ${String(lesson.number).padStart(2, "0")}</p>
        <h1>${escapeHTML(lesson.title)}</h1>
        <p class="lesson-question">${escapeHTML(lesson.question)}</p>
        <div class="hero-example">${sentenceCard(getExample(lesson, lesson.heroId), { hero: true })}</div>
      </section>

      <section class="lesson-section" id="listen">
        <h2 class="section-heading">まず聞く</h2>
        <div class="example-grid">${lesson.firstIds.map(id => sentenceCard(getExample(lesson, id), { showMorphemes: true })).join("")}</div>
      </section>

      <section class="lesson-section" id="shape">
        <h2 class="section-heading">形を見る</h2>
        <div class="explain-stack">${lesson.explanation.map(explanationCard).join("")}</div>
      </section>

      ${lesson.pronouns ? `<section class="lesson-section" id="pronouns">
        <h2 class="section-heading">形を並べる</h2>
        <p class="section-lead">代名詞は、主格に語尾を足すだけでは作れません。三つの役割を横に並べます。</p>
        ${pronounTable(lesson.pronouns)}
      </section>` : ""}

      <section class="lesson-section" id="compare">
        <h2 class="section-heading">比べる</h2>
        <div class="compare-grid">${lesson.comparisons.map(compareCard).join("")}</div>
      </section>

      <section class="lesson-section" id="expand">
        <h2 class="section-heading">例文を広げる</h2>
        <div class="example-grid two-column">${lesson.expandIds.map(id => sentenceCard(getExample(lesson, id))).join("")}</div>
      </section>

      <section class="lesson-section" id="reading">
        <h2 class="section-heading">文で読む</h2>
        <div class="reading-card">${lesson.readingIds.map(id => sentenceCard(getExample(lesson, id))).join("")}</div>
      </section>

      <section class="lesson-section" id="quiz">
        <h2 class="section-heading">確かめる</h2>
        <div class="quiz-list">${lesson.quizzes.map(quizCard).join("")}</div>
      </section>

      <section class="lesson-section" id="map">
        <h2 class="section-heading">この課の地図</h2>
        <div class="lesson-map">${lesson.map.map(row => `<div class="map-row"><strong>${escapeHTML(row[0])}</strong><span>${escapeHTML(row[1])}</span></div>`).join("")}</div>
      </section>

      <section class="lesson-section" id="vocabulary">
        <h2 class="section-heading">ことば</h2>
        <div class="vocab-grid">${lesson.vocabulary.map(row => `<div class="vocab-item"><div class="ta" lang="ta">${escapeHTML(row[0])}</div><div class="rom">${escapeHTML(row[1])}</div><div class="jp">${escapeHTML(row[2])}</div></div>`).join("")}</div>
      </section>`;

    renderLessonMenu();
    bindLessonInteractions();
    if (!options.keepPosition) root.focus({ preventScroll: true });
    if (options.scrollTop !== false) window.scrollTo({ top: 0, behavior: "auto" });
  }

  function renderLessonMenu() {
    lessonMenu.innerHTML = lessons.map((lesson, index) => `<button type="button" data-lesson-index="${index}" class="${index === currentLessonIndex ? "is-current" : ""}">
      <span><strong>第${lesson.number}課</strong><br><small>${escapeHTML(lesson.title)}</small></span><span aria-hidden="true">›</span>
    </button>`).join("");

    lessonMenu.querySelectorAll("[data-lesson-index]").forEach(button => {
      button.addEventListener("click", () => {
        closeLessonMenu();
        renderLesson(Number(button.dataset.lessonIndex));
      });
    });
  }

  function bindLessonInteractions() {
    root.querySelectorAll("[data-speak-id]").forEach(button => {
      button.addEventListener("click", () => {
        const lesson = lessons[currentLessonIndex];
        const example = getExample(lesson, button.dataset.speakId);
        if (example) playExamples([example]);
      });
    });

    root.querySelectorAll(".quiz-card").forEach(card => {
      const quizIndex = Number(card.dataset.quizIndex);
      const quiz = lessons[currentLessonIndex].quizzes[quizIndex];
      const feedback = card.querySelector(".quiz-feedback");
      card.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => {
          card.querySelectorAll(".quiz-option").forEach(option => option.classList.remove("is-correct", "is-wrong"));
          const selected = Number(button.dataset.optionIndex);
          button.classList.add(selected === quiz.answer ? "is-correct" : "is-wrong");
          if (selected !== quiz.answer) card.querySelector(`[data-option-index="${quiz.answer}"]`).classList.add("is-correct");
          feedback.textContent = quiz.explanation;
        });
      });
    });
  }

  function openLessonMenu() {
    lessonMenu.hidden = false;
    lessonMenuButton.setAttribute("aria-expanded", "true");
  }

  function closeLessonMenu() {
    lessonMenu.hidden = true;
    lessonMenuButton.setAttribute("aria-expanded", "false");
  }

  lessonMenuButton.addEventListener("click", () => {
    lessonMenu.hidden ? openLessonMenu() : closeLessonMenu();
  });

  document.addEventListener("click", event => {
    if (!lessonMenu.hidden && !lessonMenu.contains(event.target) && !lessonMenuButton.contains(event.target)) closeLessonMenu();
  });

  document.querySelectorAll("[data-speed]").forEach(button => {
    button.addEventListener("click", () => {
      speed = Number(button.dataset.speed);
      document.querySelectorAll("[data-speed]").forEach(item => item.classList.toggle("is-active", item === button));
    });
  });

  document.querySelectorAll("[data-repeat]").forEach(button => {
    button.addEventListener("click", () => {
      repeatCount = Number(button.dataset.repeat);
      document.querySelectorAll("[data-repeat]").forEach(item => item.classList.toggle("is-active", item === button));
    });
  });

  playAllButton.addEventListener("click", () => {
    const lesson = lessons[currentLessonIndex];
    playExamples(lesson.examples);
  });
  stopButton.addEventListener("click", stopSpeech);

  function selectTamilVoice() {
    if (!("speechSynthesis" in window)) {
      voiceReady = false;
      voiceStatus.textContent = "このブラウザでは音声再生を利用できません。教材本文はそのまま読めます。";
      return;
    }
    const voices = speechSynthesis.getVoices();
    tamilVoice = voices.find(voice => /^ta([-_]|$)/i.test(voice.lang)) || null;
    voiceReady = Boolean(tamilVoice);
    voiceStatus.textContent = voiceReady
      ? `Tamil音声：${tamilVoice.name}`
      : "端末にタミル語音声が見つかりません。音声以外の機能は利用できます。";
  }

  function clearActiveCard() {
    if (activeCard) activeCard.classList.remove("is-playing");
    activeCard = null;
  }

  function highlightExample(id) {
    clearActiveCard();
    activeCard = root.querySelector(`[data-example-id="${CSS.escape(id)}"]`);
    if (activeCard) {
      activeCard.classList.add("is-playing");
      activeCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function stopSpeech() {
    runToken += 1;
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    clearActiveCard();
  }

  function speakOnce(text, token) {
    return new Promise(resolve => {
      if (token !== runToken || !voiceReady) return resolve(false);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ta-IN";
      utterance.voice = tamilVoice;
      utterance.rate = speed;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.onend = () => resolve(token === runToken);
      utterance.onerror = () => resolve(false);
      speechSynthesis.speak(utterance);
    });
  }

  function wait(ms, token) {
    return new Promise(resolve => setTimeout(() => resolve(token === runToken), ms));
  }

  async function playExamples(examples) {
    stopSpeech();
    const token = runToken;
    if (!voiceReady) {
      showToast("タミル語音声が端末にありません");
      return;
    }

    for (const example of examples) {
      if (token !== runToken) break;
      highlightExample(example.id);
      for (let count = 0; count < repeatCount; count += 1) {
        const completed = await speakOnce(example.ttsText, token);
        if (!completed || token !== runToken) break;
        if (count + 1 < repeatCount) await wait(520, token);
      }
      if (token !== runToken) break;
      await wait(720, token);
    }
    if (token === runToken) clearActiveCard();
  }

  if ("speechSynthesis" in window) {
    selectTamilVoice();
    if (typeof speechSynthesis.addEventListener === "function") {
      speechSynthesis.addEventListener("voiceschanged", selectTamilVoice);
    } else {
      speechSynthesis.onvoiceschanged = selectTamilVoice;
    }
    window.setTimeout(selectTamilVoice, 450);
  } else {
    selectTamilVoice();
  }

  window.addEventListener("hashchange", () => {
    const index = lessons.findIndex(lesson => lesson.id === location.hash.slice(1));
    if (index >= 0 && index !== currentLessonIndex) renderLesson(index);
  });

  if (!lessons.length) {
    root.innerHTML = "<p>課データがありません。</p>";
  } else {
    renderLesson(currentLessonIndex, { scrollTop: false });
  }
})();
