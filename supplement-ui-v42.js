(() => {
  "use strict";

  const STORAGE_KEY = "tamil-supplements-v42";
  const STORAGE_SCHEMA_VERSION = 1;
  const VIEWS = Object.freeze(["read", "examples", "forms", "practice"]);
  const VIEW_TO_STEP = Object.freeze({ read: "read", examples: "listen", forms: "forms", practice: "practice" });
  const PROGRESS_STEPS = Object.freeze(["read", "listen", "forms", "practice", "check"]);

  function emptyProgress() {
    return { read: false, listen: false, forms: false, practice: false, check: false };
  }

  function normalizeProgress(value) {
    const source = value && typeof value === "object" ? value : {};
    return Object.fromEntries(PROGRESS_STEPS.map(step => [step, Boolean(source[step])]));
  }

  function normalizeQuiz(value) {
    const source = value && typeof value === "object" ? value : {};
    const answers = source.answers && typeof source.answers === "object" ? { ...source.answers } : {};
    return { answers, finished: Boolean(source.finished) };
  }

  function loadedSupplements() {
    return [...(window.TAMIL_SUPPLEMENTS_V42 || [])];
  }

  function catalogEntries() {
    return [...(window.TAMIL_SUPPLEMENT_CATALOG_V42?.supplements || [])];
  }

  function availableCodes() {
    const loaded = new Set(loadedSupplements().map(item => item.code));
    return catalogEntries().filter(item => loaded.has(item.code)).map(item => item.code);
  }

  function createState(stored = {}) {
    const codes = availableCodes();
    const requestedCode = codes.includes(stored.currentCode) ? stored.currentCode : (codes[0] || null);
    const requestedView = VIEWS.includes(stored.view) ? stored.view : "read";
    const progress = {};
    const quizzes = {};

    for (const code of codes) {
      progress[code] = normalizeProgress(stored.progress?.[code]);
      quizzes[code] = normalizeQuiz(stored.quizzes?.[code]);
    }

    return {
      schemaVersion: STORAGE_SCHEMA_VERSION,
      currentCode: requestedCode,
      view: requestedView,
      progress,
      quizzes
    };
  }

  function getSupplement(code) {
    return loadedSupplements().find(item => item.code === code) || null;
  }

  function getCatalogEntry(code) {
    return catalogEntries().find(item => item.code === code) || null;
  }

  function getProgress(state, code) {
    if (!state.progress[code]) state.progress[code] = emptyProgress();
    return state.progress[code];
  }

  function getQuiz(state, code) {
    if (!state.quizzes[code]) state.quizzes[code] = normalizeQuiz();
    return state.quizzes[code];
  }

  function selectSupplement(state, code) {
    if (!availableCodes().includes(code)) throw new Error(`unknown supplement code: ${code}`);
    state.currentCode = code;
    state.view = "read";
    return state;
  }

  function markView(state, code, view) {
    if (!VIEWS.includes(view)) throw new Error(`unknown supplement view: ${view}`);
    const progress = getProgress(state, code);
    const step = VIEW_TO_STEP[view];
    if (step === "read" || step === "forms") progress[step] = true;
    state.currentCode = code;
    state.view = view;
    return state;
  }

  function markListening(state, code) {
    getProgress(state, code).listen = true;
    return state;
  }

  function saveQuizAnswer(state, code, questionIndex, optionIndex) {
    const quiz = getQuiz(state, code);
    quiz.answers[String(questionIndex)] = Number(optionIndex);
    getProgress(state, code).practice = true;
    return state;
  }

  function finishQuiz(state, code) {
    const supplement = getSupplement(code);
    if (!supplement) throw new Error(`unknown supplement code: ${code}`);
    const quiz = getQuiz(state, code);
    quiz.finished = true;
    const answered = supplement.quiz.every((_, index) => Object.prototype.hasOwnProperty.call(quiz.answers, String(index)));
    const allCorrect = answered && supplement.quiz.every((question, index) => quiz.answers[String(index)] === question.answer);
    getProgress(state, code).check = allCorrect;
    return allCorrect;
  }

  function completion(state, code) {
    const progress = getProgress(state, code);
    const done = PROGRESS_STEPS.filter(step => progress[step]).length;
    return Object.freeze({ done, total: PROGRESS_STEPS.length, percent: Math.round((done / PROGRESS_STEPS.length) * 100) });
  }

  function overallCompletion(state) {
    const codes = availableCodes();
    const total = codes.length * PROGRESS_STEPS.length;
    const done = codes.reduce((sum, code) => sum + completion(state, code).done, 0);
    return Object.freeze({ done, total, percent: total ? Math.round((done / total) * 100) : 0 });
  }

  function serialize(state) {
    const codes = availableCodes();
    return {
      schemaVersion: STORAGE_SCHEMA_VERSION,
      currentCode: codes.includes(state.currentCode) ? state.currentCode : (codes[0] || null),
      view: VIEWS.includes(state.view) ? state.view : "read",
      progress: Object.fromEntries(codes.map(code => [code, normalizeProgress(state.progress?.[code])])),
      quizzes: Object.fromEntries(codes.map(code => [code, normalizeQuiz(state.quizzes?.[code])]))
    };
  }

  function load(storage = window.localStorage) {
    try {
      return createState(JSON.parse(storage.getItem(STORAGE_KEY) || "{}"));
    } catch (_error) {
      return createState();
    }
  }

  function save(state, storage = window.localStorage) {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(serialize(state)));
      return true;
    } catch (_error) {
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function lessonLinks(numbers, label) {
    return `<nav class="supplement-lesson-links" aria-label="${escapeHtml(label)}">${numbers.map(number => `<button type="button" data-go-lesson="${number}">第${number}課</button>`).join("")}</nav>`;
  }

  function renderBridge(supplement) {
    return `<section class="supplement-bridge" data-supplement-code="${escapeHtml(supplement.code)}">
      <div class="supplement-bridge-block">
        <span>先に学ぶ本課</span>
        ${lessonLinks(supplement.prerequisites, `補講${supplement.code}の前提課`)}
      </div>
      <div class="supplement-bridge-block">
        <span>補講後に戻る</span>
        ${lessonLinks(supplement.returnToLessons, `補講${supplement.code}から戻る課`)}
      </div>
    </section>`;
  }

  function renderHub(state) {
    const cards = availableCodes().map(code => {
      const supplement = getSupplement(code);
      const catalog = getCatalogEntry(code);
      const result = completion(state, code);
      return `<article class="supplement-hub-card" data-supplement-code="${escapeHtml(code)}">
        <span class="supplement-code">補講 ${escapeHtml(code)}</span>
        <h2>${escapeHtml(supplement.title)}</h2>
        <p>${escapeHtml(supplement.entryQuestion)}</p>
        <div class="supplement-prerequisites">前提：${supplement.prerequisites.map(number => `第${number}課`).join("・")}</div>
        <div class="supplement-progress" aria-label="補講${escapeHtml(code)}の進捗 ${result.percent}%"><span style="width:${result.percent}%"></span></div>
        <small>${result.done} / ${result.total}段階・${escapeHtml(catalog?.status || "drafting")}</small>
        <button type="button" data-open-supplement="${escapeHtml(code)}">補講${escapeHtml(code)}を開く</button>
      </article>`;
    }).join("");

    const overall = overallCompletion(state);
    return `<section class="supplement-hub" aria-label="補講一覧">
      <header><span>SUPPLEMENTS</span><h1>本課を広げる補講</h1><p>本課20課の完了率とは別に記録します。</p><strong>${overall.done} / ${overall.total}段階</strong></header>
      <div class="supplement-hub-grid">${cards}</div>
    </section>`;
  }

  window.TAMIL_SUPPLEMENT_UI_V42 = Object.freeze({
    STORAGE_KEY,
    STORAGE_SCHEMA_VERSION,
    VIEWS,
    PROGRESS_STEPS,
    createState,
    getSupplement,
    getCatalogEntry,
    getProgress,
    getQuiz,
    selectSupplement,
    markView,
    markListening,
    saveQuizAnswer,
    finishQuiz,
    completion,
    overallCompletion,
    serialize,
    load,
    save,
    renderBridge,
    renderHub
  });
})();
