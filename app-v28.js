(() => {
  "use strict";

  const book = window.TAMIL_BOOK;
  const reference = window.TAMIL_REFERENCE;
  const lesson = document.getElementById("lesson");
  const chapterNav = document.getElementById("chapterNav");
  const chapterDrawer = document.getElementById("chapterDrawer");
  const settingsPanel = document.getElementById("settingsPanel");
  const drawerScrim = document.getElementById("drawerScrim");
  const bottomNav = document.querySelector(".bottom-nav");
  const printBook = document.getElementById("printBook");
  const chapterSearch = document.getElementById("chapterSearch");
  const incompleteFilterButton = document.getElementById("incompleteFilterButton");
  const resumeChapterButton = document.getElementById("resumeChapterButton");
  const partFilter = document.getElementById("partFilter");

  const STORAGE_KEY = "tamil-verb-engine-v2";
  const STEP_TO_VIEW = ["read", "examples", "forms", "practice", "practice"];
  const VIEW_LABELS = { read: "読む", examples: "例文", forms: "形", practice: "練習" };

  const stored = loadStored();
  const hashState = parseHash();
  const state = {
    chapterIndex: hashState.chapter ?? stored.chapterIndex ?? 0,
    referenceOpen: hashState.reference ?? false,
    view: hashState.view ?? stored.view ?? "read",
    progress: stored.progress ?? {},
    quizzes: stored.quizzes ?? {},
    settings: {
      kana: stored.settings?.kana ?? true,
      literal: stored.settings?.literal ?? true,
      morph: stored.settings?.morph ?? true
    },
    navFilter: {
      query: "",
      incompleteOnly: false,
      part: "ALL"
    },
    audio: {
      queue: [],
      index: -1,
      rate: 1,
      repeats: 1,
      completedRepeats: 0,
      continuous: false,
      speaking: false,
      utterance: null,
      raw: false
    },
    printScope: null
  };

  state.chapterIndex = clamp(state.chapterIndex, 0, book.chapters.length - 1);
  if (!Object.keys(VIEW_LABELS).includes(state.view)) state.view = "read";

  init();

  function init() {
    bindShellEvents();
    applySettings();
    updateBookLabels();
    renderNav();
    render();
    loadVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", loadVoices);
    if (!document.documentElement.dataset.standalone && "serviceWorker" in navigator && /^https?:$/.test(window.location.protocol)) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  function updateBookLabels() {
    const count = book.chapters.length;
    const progressLabel = document.getElementById("progressLabel");
    if (progressLabel) progressLabel.textContent = state.referenceOpen ? `PART 0 / 全${count}章` : `第${book.chapters[state.chapterIndex].number}章 / ${count}章`;
    const drawerTitle = document.querySelector(".drawer-head h2");
    if (drawerTitle) drawerTitle.textContent = `${book.meta.edition}・全${count}章`;
    const printBookButton = document.getElementById("printBookButton");
    if (printBookButton) printBookButton.textContent = `PART 0＋全${count}章を印刷`;
  }

  function bindShellEvents() {
    document.getElementById("menuButton").addEventListener("click", () => openPanel("drawer"));
    document.getElementById("drawerClose").addEventListener("click", closePanels);
    document.getElementById("settingsButton").addEventListener("click", () => openPanel("settings"));
    document.getElementById("settingsClose").addEventListener("click", closePanels);
    drawerScrim.addEventListener("click", closePanels);

    document.getElementById("toggleKana").addEventListener("change", event => updateSetting("kana", event.target.checked));
    document.getElementById("toggleLiteral").addEventListener("change", event => updateSetting("literal", event.target.checked));
    document.getElementById("toggleMorph").addEventListener("change", event => updateSetting("morph", event.target.checked));
    document.getElementById("printChapterButton").addEventListener("click", () => preparePrint("chapter"));
    document.getElementById("printBookButton").addEventListener("click", () => preparePrint("book"));
    document.getElementById("resetProgressButton").addEventListener("click", resetProgress);

    chapterSearch.addEventListener("input", event => {
      state.navFilter.query = event.target.value;
      renderNav();
    });
    incompleteFilterButton.addEventListener("click", () => {
      state.navFilter.incompleteOnly = !state.navFilter.incompleteOnly;
      renderNav();
    });
    resumeChapterButton.addEventListener("click", () => {
      const nextIndex = book.chapters.findIndex(chapter => !getChapterProgress(chapter.id).check);
      if (nextIndex < 0) {
        showToast(`全${book.chapters.length}章、完了しています`);
        return;
      }
      navigateChapter(nextIndex);
      closePanels();
    });
    partFilter.addEventListener("click", event => {
      const button = event.target.closest("button[data-part-filter]");
      if (!button) return;
      state.navFilter.part = button.dataset.partFilter;
      renderNav();
    });

    bottomNav.addEventListener("click", event => {
      const button = event.target.closest("button[data-view]");
      if (!button) return;
      navigateView(button.dataset.view);
    });

    chapterNav.addEventListener("click", event => {
      const referenceButton = event.target.closest("[data-open-reference]");
      if (referenceButton) {
        navigateReference();
        closePanels();
        return;
      }
      const button = event.target.closest("button[data-chapter]");
      if (!button) return;
      navigateChapter(Number(button.dataset.chapter));
      closePanels();
    });

    lesson.addEventListener("click", handleLessonClick);
    lesson.addEventListener("keydown", handleLessonKeydown);
    bindAudioEvents();

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closePanels();
        closeAudioDock();
      }
    });

    window.addEventListener("hashchange", () => {
      const next = parseHash();
      if (next.chapter != null) state.chapterIndex = clamp(next.chapter, 0, book.chapters.length - 1);
      state.referenceOpen = next.reference;
      if (next.view && VIEW_LABELS[next.view]) state.view = next.view;
      renderNav();
      render();
    });

    window.addEventListener("afterprint", cleanupPrint);
  }

  function handleLessonClick(event) {
    const referenceButton = event.target.closest("[data-open-reference]");
    if (referenceButton) {
      navigateReference();
      return;
    }

    const viewButton = event.target.closest("[data-go-view]");
    if (viewButton) {
      const view = viewButton.dataset.goView;
      navigateView(view);
      if (viewButton.dataset.listen === "true") {
        setTimeout(() => document.querySelector(".continuous-bar")?.scrollIntoView({ block: "start", behavior: "smooth" }), 80);
      }
      return;
    }

    const chapterButton = event.target.closest("[data-go-chapter]");
    if (chapterButton) {
      navigateChapter(Number(chapterButton.dataset.goChapter));
      return;
    }

    const playButton = event.target.closest("[data-play-id]");
    if (playButton) {
      const id = playButton.dataset.playId;
      const queue = currentChapter().examples.map(example => example.id);
      playExampleById(id, queue, false);
      return;
    }

    const wordButton = event.target.closest("[data-tts]");
    if (wordButton) {
      speakRawTamil(wordButton.dataset.tts, wordButton.dataset.label || "語形");
      if (wordButton.matches("[data-letter-key]")) wordButton.classList.add("playing");
      return;
    }

    const continuousButton = event.target.closest("[data-continuous]");
    if (continuousButton) {
      const queue = currentChapter().examples.map(example => example.id);
      const startId = queue[0];
      playExampleById(startId, queue, true);
      return;
    }

    const option = event.target.closest("[data-quiz-option]");
    if (option) {
      answerQuiz(Number(option.dataset.question), Number(option.dataset.quizOption));
      return;
    }

    const finish = event.target.closest("[data-finish-quiz]");
    if (finish) finishQuiz();
  }

  function handleLessonKeydown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("article[data-play-id]");
    if (!card || event.target !== card) return;
    event.preventDefault();
    const id = card.dataset.playId;
    const queue = currentChapter().examples.map(example => example.id);
    playExampleById(id, queue, false);
  }

  function render() {
    stopAudio(false);
    const chapter = currentChapter();
    markStepForView(chapter.id, state.view);
    lesson.innerHTML = [
      renderHero(chapter),
      renderStepStrip(chapter),
      `<section class="view view-${escapeHtml(state.view)}">${renderView(chapter, state.view)}</section>`,
      renderChapterFooter(chapter)
    ].join("");

    document.title = `${chapter.number === 0 ? "PART 0" : `第${chapter.number}章`} ${chapter.navTitle}｜${book.meta.title}`;
    document.getElementById("progressLabel").textContent = chapter.number === 0 ? `PART 0 / 全${book.chapters.length}章` : `第${chapter.number}章 / ${book.chapters.length}章`;
    document.getElementById("progressFill").style.width = chapter.number === 0 ? "0%" : `${(chapter.number / book.chapters.length) * 100}%`;

    updateBottomNavLabels(chapter);

    bottomNav.querySelectorAll("button[data-view]").forEach(button => {
      button.classList.toggle("active", button.dataset.view === state.view);
      button.setAttribute("aria-current", button.dataset.view === state.view ? "page" : "false");
    });

    renderNav();
    saveStored();
  }

  function renderView(chapter, view) {
    if (view === "read") return renderRead(chapter);
    if (view === "examples") return renderExamples(chapter);
    if (view === "forms") return renderForms(chapter);
    return renderPractice(chapter);
  }

  function formStepLabel(chapter) {
    if (chapter.formConfig.mode === "vocabulary") return "語彙";
    if (chapter.formConfig.mode === "grammar") return "文法";
    if (chapter.formConfig.mode === "alphabet") return "文字";
    return "形";
  }

  function updateBottomNavLabels(chapter) {
    const labels = chapter.number === 0
      ? { read: "格", examples: "例", forms: "文字", practice: "確認" }
      : { read: "読む", examples: "例文", forms: formStepLabel(chapter), practice: "練習" };
    const order = { read: "01", examples: "02", forms: "03", practice: "04" };
    bottomNav.querySelectorAll("button[data-view]").forEach(button => {
      button.innerHTML = `<span>${order[button.dataset.view]}</span>${labels[button.dataset.view]}`;
    });
  }

  function renderHero(chapter) {
    const part = chapterPart(chapter);
    return `
      <header class="chapter-hero">
        <span class="chapter-number">${chapter.number === 0 ? "PART 0 · QUICK REFERENCE" : `${part.code} · CHAPTER ${pad(chapter.number)}`}</span>
        <h1>${chapter.title}<span class="tamil-title" lang="ta">${chapter.tamilTitle}</span></h1>
        <p class="chapter-deck">${chapter.deck}</p>
        <div class="chapter-target">${chapter.targets.map(target => `<span>${target}</span>`).join("")}</div>
      </header>`;
  }

  function renderStepStrip(chapter) {
    const labels = chapter.number === 0 ? ["格", "聞く", "文字", "確認", "完了"] : ["読む", "聞く", formStepLabel(chapter), "練習", "確認"];
    const names = ["read", "listen", "forms", "practice", "check"];
    const progress = getChapterProgress(chapter.id);
    return `<div class="step-strip" aria-label="章の学習手順">
      ${labels.map((label, index) => `
        <button type="button" class="step-button ${progress[names[index]] ? "done" : ""}" data-go-view="${STEP_TO_VIEW[index]}" data-step="${pad(index + 1)}" ${names[index] === "listen" ? "data-listen=\"true\"" : ""} aria-label="${label}へ移動">${label}</button>`).join("")}
    </div>`;
  }

  function renderRead(chapter) {
    return `
      ${renderSectionHeading("START HERE", "まず、この一文を分解する")}
      ${renderExample(chapter.heroExample, true, `hero-${chapter.number}`)}
      <div class="prose">
        ${chapter.readSections.map(section => renderReadingSection(section)).join("")}
      </div>`;
  }

  function renderReadingSection(section) {
    return `
      <section class="reading-section">
        ${renderSectionHeading(section.kicker, section.heading)}
        ${section.paragraphs.map(paragraph => `<p>${enrichTamil(paragraph)}</p>`).join("")}
        ${section.caseMap ? renderCaseQuickMap(section.caseMap) : ""}
        ${section.objectMap ? renderObjectDecisionMap(section.objectMap) : ""}
        ${section.formula ? renderFormula(section.formula) : ""}
        ${section.note ? renderNote(section.note) : ""}
      </section>`;
  }

  function renderCaseQuickMap(map) {
    return `<div class="case-map-wrap"><table class="case-map">
      <thead><tr><th>役割</th><th>書く形</th><th>口語音</th><th>例</th><th>選ぶ問い</th></tr></thead>
      <tbody>${map.rows.map(row => `<tr>
        <th>${escapeHtml(row.role)}</th>
        <td class="morph-code">${escapeHtml(row.written)}</td>
        <td><span class="spoken-code">${escapeHtml(row.spoken)}</span><br><span class="kana-line">${escapeHtml(row.kana)}</span></td>
        <td><span class="case-example-ta" lang="ta">${escapeHtml(row.exampleTa)}</span><span class="case-example-roman">${escapeHtml(row.exampleRoman)}</span></td>
        <td>${escapeHtml(row.cue)}</td>
      </tr>`).join("")}</tbody>
    </table></div>`;
  }

  function renderObjectDecisionMap(map) {
    return `<div class="object-decision-grid">
      ${map.rows.map(row => `<article class="object-decision-card">
        <span class="object-signal">${escapeHtml(row.signal)}</span>
        <strong>${escapeHtml(row.form)}</strong>
        <span class="object-example-ta" lang="ta">${escapeHtml(row.exampleTa)}</span>
        <span class="object-example-roman">${escapeHtml(row.exampleRoman)}</span>
        <span class="object-meaning">${escapeHtml(row.meaning)}</span>
        <small>${escapeHtml(row.rule)}</small>
      </article>`).join("")}
    </div>`;
  }

  function renderFormula(formula) {
    return `<div class="formula-card">
      <span class="formula-label">${formula.label}</span>
      <div class="formula">${formula.slots.map((slot, index) => `<span class="slot ${index === formula.slots.length - 1 ? "person" : index === 1 ? "tense" : ""}">${slot}</span>${index < formula.slots.length - 1 ? "<b>＋</b>" : ""}`).join("")}</div>
      <p class="formula-note">${enrichTamil(formula.note)}</p>
    </div>`;
  }

  function renderNote(note) {
    return `<aside class="note-card ${note.tone || ""}"><strong>${note.title}</strong>${enrichTamil(note.body)}</aside>`;
  }

  function renderExamples(chapter) {
    const featured = chapter.examples.filter(example => example.featured);
    const bank = chapter.examples.filter(example => !example.featured);
    return `
      <div class="continuous-bar">
        <span>タミル語だけを、上から連続再生</span>
        <button type="button" data-continuous="true">▶ 全例文を聞く</button>
      </div>
      ${renderSectionHeading("CORE SENTENCES", "まず3文を、形ごと覚える")}
      ${featured.map(example => renderExample(example, true, example.id)).join("")}
      <div class="example-bank-head">
        <div><span class="eyebrow">READING BANK</span><h2>差し替え例文</h2></div>
        <p>${chapter.examples.length}文・個別再生</p>
      </div>
      <div class="example-bank">${bank.map(example => renderExample(example, false, example.id)).join("")}</div>`;
  }

  function renderExample(example, featured, id) {
    const resolvedId = example.id || id;
    const playableId = findExample(resolvedId) ? resolvedId : null;
    const dialogueClass = example.ta.includes("—") ? " dialogue" : "";
    return `
      <article class="${featured ? "example-feature" : "example-row"}${dialogueClass}${playableId ? " is-playable" : ""}" data-example-id="${escapeHtml(resolvedId || "")}" ${playableId ? `data-play-id="${escapeHtml(playableId)}" role="button" tabindex="0" aria-label="${escapeAttr(example.ta)}を再生"` : ""}>
        ${playableId ? `<span class="play-button" aria-hidden="true">▶</span>` : ""}
        <div class="tamil-line" lang="ta">${example.ta}</div>
        <div class="reading-line spoken-reading"><span class="reading-tag">口語</span><span class="roman-line plain">${example.spokenRoman || example.roman}</span></div>
        <div class="reading-line structure-reading"><span class="reading-tag">構造</span><span class="roman-line morph">${example.morph || example.roman}</span></div>
        <div class="reading-line kana-reading"><span class="reading-tag">カナ</span><span class="kana-line">${example.spokenKana || example.kana}</span></div>
        <div class="meaning-line">${example.ja}</div>
        ${example.literal ? `<div class="literal-line">${example.literal}</div>` : ""}
      </article>`;
  }

  function renderForms(chapter) {
    const config = chapter.formConfig;
    if (config.mode === "vocabulary") return renderVocabularyAtlas(chapter, config);
    if (config.mode === "grammar") return renderGrammarAtlas(chapter, config);
    if (config.mode === "alphabet") return renderAlphabetAtlas(config);
    const cards = book.coreVerbs.map(verb => renderFormCard(verb, config));
    return `
      ${renderSectionHeading("FORM ATLAS", config.title)}
      <p class="prose">${enrichTamil(config.intro)}</p>
      <div class="form-grid">${cards.join("")}</div>
      ${config.modalRows ? renderModalRows(config.modalRows, config) : ""}
      ${renderClassSummary(chapter.number)}`;
  }

  function renderAlphabetAtlas(config) {
    const compose = (consonant, vowel) => `${consonant.base}${vowel.sign}`;
    return `
      ${renderSectionHeading("LETTER SOUND TABLE", config.title)}
      <p class="prose">${enrichTamil(config.intro)}</p>
      <aside class="note-card blue alphabet-note">
        <strong>表は横に動かせます</strong>
        左端の子音を固定したまま、母音列を横へスクロールできます。文字をタップすると、その一文字だけをタミル語音声へ渡します。
      </aside>
      <div class="alphabet-scroll" role="region" aria-label="タミル文字表。横にスクロールできます" tabindex="0">
        <table class="alphabet-table">
          <thead><tr>
            <th class="alphabet-corner">子音＼母音</th>
            ${config.vowels.map(vowel => `<th>
              <button class="letter-key vowel-key" type="button" data-letter-key="true" data-tts="${escapeAttr(vowel.ta)}" data-label="${escapeAttr(`${vowel.ta} · ${vowel.roman} · ${vowel.kana}`)}" aria-label="${escapeAttr(vowel.ta)}、母音 ${vowel.roman} を再生">
                <span lang="ta">${vowel.ta}</span><small>${vowel.roman}</small>
              </button>
            </th>`).join("")}
          </tr></thead>
          <tbody>${config.consonants.map(consonant => `<tr>
            <th>
              <button class="letter-key consonant-key" type="button" data-letter-key="true" data-tts="${escapeAttr(consonant.pure)}" data-label="${escapeAttr(`${consonant.pure} · ${consonant.roman}（子音）`)}" aria-label="${escapeAttr(consonant.pure)}、子音 ${consonant.roman} を再生">
                <span lang="ta">${consonant.pure}</span><small>${consonant.roman}</small>
              </button>
            </th>
            ${config.vowels.map(vowel => {
              const character = compose(consonant, vowel);
              const roman = `${consonant.roman}${vowel.roman}`;
              return `<td><button class="letter-key syllable-key" type="button" data-letter-key="true" data-tts="${escapeAttr(character)}" data-label="${escapeAttr(`${character} · ${roman}`)}" aria-label="${escapeAttr(character)}、${roman} を再生"><span lang="ta">${character}</span><small>${roman}</small></button></td>`;
            }).join("")}
          </tr>`).join("")}</tbody>
        </table>
      </div>
      <section class="letter-extras">
        <div>
          <span class="eyebrow">SPECIAL SIGN</span>
          <button class="special-letter-key" type="button" data-letter-key="true" data-tts="${escapeAttr(config.aytham.ta)}" data-label="${escapeAttr(`${config.aytham.ta} · ${config.aytham.roman}`)}">
            <strong lang="ta">${config.aytham.ta}</strong><span>${config.aytham.roman}<small>${config.aytham.kana}</small></span>
          </button>
        </div>
        <div>
          <span class="eyebrow">BORROWED SOUNDS</span>
          <div class="borrowed-letter-grid">${config.borrowed.map(item => `<button type="button" data-letter-key="true" data-tts="${escapeAttr(item.ta)}" data-label="${escapeAttr(`${item.ta} · ${item.roman}`)}"><strong lang="ta">${item.ta}</strong><span>${item.roman}</span><small>${item.note}</small></button>`).join("")}</div>
        </div>
      </section>`;
  }

  function renderGrammarAtlas(chapter, config) {
    const patterns = config.patterns || [];
    const groups = [...new Set(patterns.map(item => item.group || "この章の型"))];
    return `
      ${renderSectionHeading("GRAMMAR ATLAS", config.title)}
      <p class="prose">${enrichTamil(config.intro)}</p>
      ${config.soundMap ? renderSoundMap(config.soundMap) : ""}
      <div class="grammar-stats"><strong>${patterns.length}型</strong><span>機能・タミル語・構造・用法を一枚で照合します</span></div>
      ${groups.map(group => `
        <section class="grammar-section">
          <h3>${escapeHtml(group)}</h3>
          <div class="grammar-grid">${patterns.filter(item => (item.group || "この章の型") === group).map(renderGrammarCard).join("")}</div>
        </section>`).join("")}
      ${config.checkpoint ? renderNote({ tone: "blue", title: "この章の文法チェックポイント", body: config.checkpoint }) : ""}`;
  }

  function renderSoundMap(map) {
    return `<section class="sound-map" aria-label="${escapeAttr(map.title)}">
      <div class="sound-map-head">
        <span class="eyebrow">WRITING → SPEECH</span>
        <h3>${map.title}</h3>
        <p>${enrichTamil(map.intro)}</p>
      </div>
      <div class="sound-map-scroll">
        <table>
          <thead><tr><th>機能</th><th>書記形</th><th>口語ローマ字</th><th>カナ</th><th>選ぶ手掛かり</th></tr></thead>
          <tbody>${map.rows.map(row => `<tr>
            <th>${row.role}</th>
            <td lang="ta">${row.written}</td>
            <td class="sound-map-roman">${row.spoken}</td>
            <td class="kana-line">${row.kana}</td>
            <td>${row.cue}</td>
          </tr>`).join("")}</tbody>
        </table>
      </div>
      <p class="sound-map-note">${enrichTamil(map.note)}</p>
    </section>`;
  }

  function renderGrammarCard(item) {
    return `<article class="grammar-card">
      <button class="word-audio" type="button" data-tts="${escapeAttr(item.ttsText || item.ta)}" data-label="${escapeAttr(item.ja)}" aria-label="${escapeAttr(item.ta)}を再生">▶</button>
      <span class="grammar-kind">${escapeHtml(item.kind || "型")}</span>
      <strong lang="ta">${item.ta}</strong>
      <span class="grammar-roman spoken-code"><small>口語</small>${item.spokenRoman || item.roman}</span>
      <span class="grammar-structure morph-code"><small>構造</small>${item.roman}</span>
      <span class="kana-line"><small>カナ</small>${item.spokenKana || item.kana}</span>
      <span class="grammar-ja">${item.ja}</span>
      ${item.note ? `<small>${enrichTamil(item.note)}</small>` : ""}
    </article>`;
  }

  function renderVocabularyAtlas(chapter, config) {
    const vocabulary = config.vocabulary || [];
    const groups = [...new Set(vocabulary.map(item => item.group || "この章の語彙"))];
    return `
      ${renderSectionHeading("TRAVEL LEXICON", config.title)}
      <p class="prose">${enrichTamil(config.intro)}</p>
      <div class="vocab-stats"><strong>${vocabulary.length}項目</strong><span>文ではなく語だけでも個別再生できます</span></div>
      ${groups.map(group => `
        <section class="vocab-section">
          <h3>${escapeHtml(group)}</h3>
          <div class="vocab-grid">${vocabulary.filter(item => (item.group || "この章の語彙") === group).map(renderVocabularyCard).join("")}</div>
        </section>`).join("")}
      ${config.mission ? renderNote({ tone: "blue", title: "この章の旅行ミッション", body: config.mission }) : ""}`;
  }

  function renderVocabularyCard(item) {
    return `<article class="vocab-card">
      <button class="word-audio" type="button" data-tts="${escapeAttr(item.ttsText || item.ta)}" data-label="${escapeAttr(item.ja)}" aria-label="${escapeAttr(item.ta)}を再生">▶</button>
      <span class="vocab-kind">${escapeHtml(item.kind || "語")}</span>
      <strong lang="ta">${item.ta}</strong>
      <span class="vocab-roman">${item.spokenRoman || item.roman}</span>
      <span class="kana-line">${item.spokenKana || item.kana}</span>
      <span class="vocab-ja">${item.ja}</span>
      ${item.note ? `<small>${enrichTamil(item.note)}</small>` : ""}
    </article>`;
  }

  function renderFormCard(verb, config) {
    const rows = config.keys.map(key => {
      const form = verb[key];
      return `<tr>
        <th>${config.labels[key]}</th>
        <td>
          <button class="word-audio" type="button" data-tts="${escapeAttr(form.ttsText || form.ta)}" data-label="${escapeAttr(verb.meaning + "・" + config.labels[key])}" aria-label="${escapeAttr(form.ta)}を再生">▶</button>
          <span class="ta-form" lang="ta">${form.ta}</span>
          <span class="ro-form">${form.spokenRoman || form.roman}</span>
          <span class="form-structure morph-code">${form.roman}</span>
          <span class="kana-line">${form.spokenKana || form.kana}</span>
        </td>
      </tr>`;
    }).join("");
    return `<article class="form-card ${config.keys.length >= 3 ? "wide" : ""}">
      <header class="form-card-head"><strong lang="ta">${verb.lemma.ta}</strong><span>${verb.meaning}<br>${verb.classLabel}</span></header>
      <table class="form-table"><tbody>${rows}</tbody></table>
    </article>`;
  }

  function renderModalRows(rows, config = {}) {
    return `
      ${renderSectionHeading(config.extensionKicker || "MODAL EXTENSIONS", config.extensionTitle || "不定詞の後ろを差し替える")}
      <div class="compare-table-wrap"><table class="compare-table">
        <thead><tr><th>機能</th><th>タミル語</th><th>構造</th><th>日本語</th><th>音声</th></tr></thead>
        <tbody>${rows.map(row => `<tr>
          <td>${row.label}</td><td lang="ta">${row.ta}</td><td><span class="spoken-code">${row.spokenRoman || row.roman}</span><br><span class="morph-code">${row.roman}</span><br><span class="kana-line">${row.spokenKana || row.kana}</span></td><td>${row.ja}</td>
          <td><button class="word-audio" type="button" data-tts="${escapeAttr(row.ttsText || row.ta)}" data-label="${escapeAttr(row.label)}" aria-label="${escapeAttr(row.ta)}を再生">▶</button></td>
        </tr>`).join("")}</tbody>
      </table></div>`;
  }

  function renderClassSummary(chapterNumber) {
    const summaries = {
      1: ["弱変化", "pō-r-ēn / sāppiḍ-r-ēn / vāṅku-r-ēn", "現在の子音は一つ"],
      2: ["過去語幹", "vand- / sāppiṭṭ- / vāṅkin- / pātt- / paḍicc-", "動詞ごとに登録"],
      3: ["未来の強弱", "pō-v-ēn ↔ paḍi-pp-ēn", "弱 -v-／強 -pp-"],
      4: ["不定詞の強弱", "sāppiḍa ↔ paḍikka", "弱 -a／強 -kka＋特別型"],
      5: ["人称の切替", "pō-r-ēn ↔ pō-r-īṅka", "時制語幹を保ち、最後だけ替える"],
      6: ["疑問の接続", "pō-r-īṅka(ḷ) + -ā?", "母音の前で -ḷ が戻る"],
      7: ["答え位置の置換", "ceṉṉaikku → eṅge", "疑問詞ありなら通常 -ā なし"],
      8: ["対話の蝶番", "-īṅka(ḷ)-ā? → -ēn", "時制を保って人称を返す"],
      9: ["性の一致", "-āṉ ↔ -ā", "時制語幹を保ち、男性／女性を文末で分ける"],
      10: ["敬称の一致", "-āru ↔ -āṅka", "男性敬称と女性敬称は左右対称ではない"],
      11: ["人物複数", "V-TAM-āṅka", "女性敬称との同形は文脈で解く"],
      12: ["中性の別レーン", "varradu / vandadu / varum", "未来 -um と pōccu / irukku を独立確認"],
      13: ["アスペクトの視点", "V-kkiṭṭu iru / V-iru / V-(v)iḍu", "途中・現在関連・完遂を分ける"],
      14: ["有限語尾は最後", "V₁-AVP + V₂-AVP + V₃-TAM-PNG", "順接と目的を形で区別"],
      15: ["相手か一般規則か", "V-(u)ṅka / V-ādīṅka / V-a-k-kūḍādu", "依頼・相手への禁止・一般禁止"],
      16: ["会話の参加範囲", "nī …-ē / nāma・nāṅka …-ōm", "包括・除外は主語で示す"],
      17: ["文を内容として包む", "S + -nnu + sollu / niṉai / kēḷu", "時制と問いを保って埋め込む"],
      18: ["節から名詞内部へ", "past-ā / past-ālum / AJP + N", "条件・譲歩・理由・連体を結ぶ"]
    };
    const row = summaries[chapterNumber];
    if (!row) return "";
    return `<aside class="note-card blue"><strong>${row[0]}</strong><span class="morph-code">${row[1]}</span><br>${row[2]}</aside>`;
  }

  function renderPractice(chapter, printMode = false) {
    const quiz = getQuizState(chapter.id);
    const answered = Object.keys(quiz.answers).length;
    const score = calculateScore(chapter, quiz);
    return `
      <div class="quiz-intro">
        <div class="quiz-score-ring">${printMode ? "解答" : quiz.finished ? `${score}/${chapter.quiz.length}` : `${answered}/${chapter.quiz.length}`}</div>
        <div><h2>1問1診断</h2><p>誤答はすべて既出の実在形。どの特徴を取り違えたかを一つずつ確認します。</p></div>
      </div>
      ${chapter.quiz.map((question, index) => renderQuizQuestion(chapter, question, index, quiz, printMode)).join("")}
      ${printMode ? "" : `<button class="quiz-finish" type="button" data-finish-quiz ${answered < chapter.quiz.length ? "disabled" : ""}>採点して章を完了</button>`}`;
  }

  function renderQuizQuestion(chapter, question, index, quiz, printMode) {
    const selected = quiz.answers[index];
    const locked = selected != null || printMode;
    const effectiveSelected = printMode ? question.answer : selected;
    const selectedTag = selected != null && selected !== question.answer ? question.tags[selected] : null;
    return `<article class="quiz-card">
      <span class="quiz-number">QUESTION ${pad(index + 1)}</span>
      <h3>${question.q}</h3>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => {
          const isSelected = optionIndex === effectiveSelected;
          const status = isSelected ? (optionIndex === question.answer ? "correct" : "wrong") : "";
          return `<button class="quiz-option ${isSelected ? `selected ${status}` : ""}" type="button" data-question="${index}" data-quiz-option="${optionIndex}" ${locked ? "disabled" : ""}>${option}</button>`;
        }).join("")}
      </div>
      ${locked ? `<div class="quiz-feedback"><strong>${effectiveSelected === question.answer ? "✓ 正解" : `診断：${selectedTag || "再確認"}`}</strong>${question.feedback}</div>` : ""}
    </article>`;
  }

  function renderSectionHeading(kicker, heading) {
    return `<div class="section-intro"><span class="eyebrow">${kicker}</span><h2>${heading}</h2></div>`;
  }

  function enrichTamil(html) {
    return window.TAMIL_TRANSCRIPTION?.enrichHtml?.(html) ?? html;
  }

  function renderChapterFooter(chapter) {
    if (chapter.number === 0) {
      return `<nav class="chapter-footer-nav" aria-label="前後の章">
        <button type="button" disabled>← 前の章</button>
        <button type="button" data-go-chapter="0">第1章へ →</button>
      </nav>`;
    }
    if (chapter.number === 1) {
      return `<nav class="chapter-footer-nav" aria-label="前後の章">
        <button type="button" data-open-reference="true">← PART 0</button>
        <button type="button" data-go-chapter="1">次の章 →</button>
      </nav>`;
    }
    const previous = chapter.number - 2;
    const next = chapter.number;
    return `<nav class="chapter-footer-nav" aria-label="前後の章">
      <button type="button" data-go-chapter="${previous}" ${previous < 0 ? "disabled" : ""}>← 前の章</button>
      <button type="button" data-go-chapter="${next}" ${next >= book.chapters.length ? "disabled" : ""}>次の章 →</button>
    </nav>`;
  }

  function renderNav() {
    let previousPart = "";
    const query = state.navFilter.query.trim().toLocaleLowerCase();
    const visibleChapters = book.chapters.map((chapter, index) => ({ chapter, index })).filter(({ chapter }) => {
      const progress = getChapterProgress(chapter.id);
      const part = chapterPart(chapter);
      if (state.navFilter.incompleteOnly && progress.check) return false;
      if (state.navFilter.part !== "ALL" && part.code !== state.navFilter.part) return false;
      if (!query) return true;
      const vocabulary = chapter.formConfig?.vocabulary || [];
      const patterns = chapter.formConfig?.patterns || [];
      const searchable = [
        chapter.number, pad(chapter.number), chapter.navTitle, chapter.title, chapter.tamilTitle, chapter.deck, ...chapter.targets,
        ...vocabulary.flatMap(item => [item.ta, item.roman, item.spokenRoman, item.kana, item.spokenKana, item.ja, item.group, item.note]),
        ...patterns.flatMap(item => [item.ta, item.roman, item.spokenRoman, item.kana, item.spokenKana, item.ja, item.group, item.kind, item.note])
      ].join(" ").toLocaleLowerCase();
      return searchable.includes(query);
    });

    const referenceSearchable = reference ? [
      reference.navTitle, reference.title, reference.tamilTitle, reference.deck, ...reference.targets,
      ...(reference.readSections ?? []).flatMap(section => [section.heading, ...(section.paragraphs ?? [])]),
      ...(reference.examples ?? []).flatMap(item => [item.ta, item.roman, item.morph, item.kana, item.ja])
    ].join(" ").toLocaleLowerCase() : "";
    const referenceVisible = Boolean(reference)
      && (!query || referenceSearchable.includes(query));
    const referenceProgress = reference ? getChapterProgress(reference.id) : null;
    const referenceSteps = referenceProgress ? ["read", "listen", "forms", "practice", "check"].filter(step => referenceProgress[step]).length : 0;
    const referenceMarkup = referenceVisible ? `
      <div class="nav-part-label"><span>PART 0</span>文字と名詞格</div>
      <button class="chapter-nav-button reference-nav-button ${state.referenceOpen ? "active" : ""}" type="button" data-open-reference="true" aria-current="${state.referenceOpen ? "page" : "false"}" aria-label="PART 0 ${escapeAttr(reference.navTitle)}">
        <span class="nav-num">00</span>
        <span class="nav-copy"><strong>${reference.navTitle}</strong><small>-ai / -e / Ø · 文字音声表</small><span class="nav-mini-track" aria-hidden="true"><span style="width:${referenceSteps * 20}%"></span></span></span>
        <span class="nav-status"><small>早見</small><span class="nav-check">↗</span></span>
      </button>` : "";

    chapterNav.innerHTML = referenceMarkup + visibleChapters.map(({ chapter, index }) => {
      const progress = getChapterProgress(chapter.id);
      const complete = progress.check;
      const completedSteps = ["read", "listen", "forms", "practice", "check"].filter(step => progress[step]).length;
      const part = chapterPart(chapter);
      const partHeading = part.code !== previousPart ? `<div class="nav-part-label"><span>${part.code}</span>${part.title}</div>` : "";
      previousPart = part.code;
      const active = !state.referenceOpen && index === state.chapterIndex;
      return `${partHeading}<button class="chapter-nav-button ${active ? "active" : ""} ${complete ? "complete" : ""}" type="button" data-chapter="${index}" aria-current="${active ? "page" : "false"}" aria-label="第${chapter.number}章 ${escapeAttr(chapter.navTitle)}、${complete ? "完了" : `${completedSteps}/5ステップ`}">
        <span class="nav-num">${pad(chapter.number)}</span>
        <span class="nav-copy"><strong>${chapter.navTitle}</strong><small>${chapter.targets.slice(0, 2).join(" · ")}</small><span class="nav-mini-track" aria-hidden="true"><span style="width:${completedSteps * 20}%"></span></span></span>
        <span class="nav-status"><small>${completedSteps}/5</small><span class="nav-check">${complete ? "✓" : "○"}</span></span>
      </button>`;
    }).join("");
    const empty = document.getElementById("chapterNavEmpty");
    empty.hidden = visibleChapters.length > 0 || referenceVisible;
    updateDrawerControls();
  }

  function updateDrawerControls() {
    const steps = ["read", "listen", "forms", "practice", "check"];
    const completedChapters = book.chapters.filter(chapter => getChapterProgress(chapter.id).check).length;
    const completedSteps = book.chapters.reduce((total, chapter) => {
      const progress = getChapterProgress(chapter.id);
      return total + steps.filter(step => progress[step]).length;
    }, 0);
    const totalSteps = book.chapters.length * steps.length;
    document.getElementById("drawerProgressText").textContent = `${completedChapters} / ${book.chapters.length}章 完了`;
    document.getElementById("drawerProgressDetail").textContent = `学習ステップ ${completedSteps} / ${totalSteps}`;
    document.getElementById("drawerProgressFill").style.width = `${(completedChapters / book.chapters.length) * 100}%`;

    const nextIndex = book.chapters.findIndex(chapter => !getChapterProgress(chapter.id).check);
    resumeChapterButton.disabled = nextIndex < 0;
    resumeChapterButton.textContent = nextIndex < 0 ? "✓ 全章完了" : completedSteps === 0 ? "▶ 第1章から始める" : `▶ 第${book.chapters[nextIndex].number}章へ`;

    incompleteFilterButton.classList.toggle("active", state.navFilter.incompleteOnly);
    incompleteFilterButton.setAttribute("aria-pressed", String(state.navFilter.incompleteOnly));
    partFilter.querySelectorAll("button[data-part-filter]").forEach(button => {
      const active = button.dataset.partFilter === state.navFilter.part;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function navigateView(view) {
    if (!VIEW_LABELS[view]) return;
    state.view = view;
    updateHash();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigateChapter(index) {
    if (!Number.isFinite(index) || index < 0 || index >= book.chapters.length) return;
    state.chapterIndex = index;
    state.referenceOpen = false;
    state.view = "read";
    updateHash();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function navigateReference() {
    if (!reference) return;
    state.referenceOpen = true;
    state.view = "read";
    updateHash();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function answerQuiz(questionIndex, optionIndex) {
    const chapter = currentChapter();
    const quiz = getQuizState(chapter.id);
    if (quiz.answers[questionIndex] != null) return;
    quiz.answers[questionIndex] = optionIndex;
    getChapterProgress(chapter.id).practice = true;
    render();
    requestAnimationFrame(() => document.querySelector(`[data-question="${questionIndex}"]`)?.closest(".quiz-card")?.scrollIntoView({ block: "center", behavior: "smooth" }));
  }

  function finishQuiz() {
    const chapter = currentChapter();
    const quiz = getQuizState(chapter.id);
    if (Object.keys(quiz.answers).length < chapter.quiz.length) return;
    quiz.finished = true;
    getChapterProgress(chapter.id).check = true;
    saveStored();
    render();
    const score = calculateScore(chapter, quiz);
    showToast(`${chapter.number === 0 ? "PART 0" : `第${chapter.number}章`} 完了：${score}/${chapter.quiz.length}`);
  }

  function calculateScore(chapter, quiz) {
    return chapter.quiz.reduce((total, question, index) => total + (quiz.answers[index] === question.answer ? 1 : 0), 0);
  }

  function markStepForView(chapterId, view) {
    const progress = getChapterProgress(chapterId);
    if (view === "read") progress.read = true;
    if (view === "forms") progress.forms = true;
  }

  function getChapterProgress(chapterId) {
    if (!state.progress[chapterId]) state.progress[chapterId] = { read: false, listen: false, forms: false, practice: false, check: false };
    return state.progress[chapterId];
  }

  function getQuizState(chapterId) {
    if (!state.quizzes[chapterId]) state.quizzes[chapterId] = { answers: {}, finished: false };
    return state.quizzes[chapterId];
  }

  function openPanel(type) {
    closePanels();
    const panel = type === "drawer" ? chapterDrawer : settingsPanel;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    drawerScrim.hidden = false;
    document.getElementById(type === "drawer" ? "menuButton" : "settingsButton").setAttribute("aria-expanded", "true");
    setTimeout(() => (type === "drawer" ? chapterSearch : panel.querySelector("button"))?.focus(), 30);
  }

  function closePanels() {
    chapterDrawer.classList.remove("open");
    settingsPanel.classList.remove("open");
    chapterDrawer.setAttribute("aria-hidden", "true");
    settingsPanel.setAttribute("aria-hidden", "true");
    drawerScrim.hidden = true;
    document.getElementById("menuButton").setAttribute("aria-expanded", "false");
    document.getElementById("settingsButton").setAttribute("aria-expanded", "false");
  }

  function updateSetting(key, value) {
    state.settings[key] = value;
    applySettings();
    saveStored();
  }

  function applySettings() {
    document.body.classList.toggle("hide-kana", !state.settings.kana);
    document.body.classList.toggle("hide-literal", !state.settings.literal);
    document.body.classList.toggle("hide-morph", !state.settings.morph);
    document.getElementById("toggleKana").checked = state.settings.kana;
    document.getElementById("toggleLiteral").checked = state.settings.literal;
    document.getElementById("toggleMorph").checked = state.settings.morph;
  }

  function resetProgress() {
    const confirmed = window.confirm(`${book.chapters.length}章分の学習記録と採点結果をリセットしますか？教材データは消えません。`);
    if (!confirmed) return;
    state.progress = {};
    state.quizzes = {};
    saveStored();
    closePanels();
    render();
    showToast("学習記録をリセットしました");
  }

  function preparePrint(scope) {
    closePanels();
    stopAudio(false);
    state.printScope = scope;
    const chapters = scope === "book" ? [reference, ...book.chapters].filter(Boolean) : [currentChapter()];
    printBook.innerHTML = chapters.map(chapter => `
      <article class="print-chapter">
        ${renderHero(chapter)}
        <section class="view">${renderRead(chapter).replace(renderExample(chapter.heroExample, true, `hero-${chapter.number}`), "")}</section>
        <section class="view">${renderExamples(chapter)}</section>
        <section class="view">${renderForms(chapter)}</section>
        <section class="view">${renderPractice(chapter, true)}</section>
      </article>`).join("");
    document.body.classList.add("print-all");
    printBook.setAttribute("aria-hidden", "false");
    setTimeout(() => window.print(), 80);
  }

  function cleanupPrint() {
    document.body.classList.remove("print-all");
    printBook.innerHTML = "";
    printBook.setAttribute("aria-hidden", "true");
    state.printScope = null;
  }

  function bindAudioEvents() {
    document.getElementById("audioPrev").addEventListener("click", () => moveAudio(-1));
    document.getElementById("audioNext").addEventListener("click", () => moveAudio(1));
    document.getElementById("audioStop").addEventListener("click", () => stopAudio(true));
    document.getElementById("audioClose").addEventListener("click", closeAudioDock);
    document.getElementById("audioPlay").addEventListener("click", toggleAudio);
    document.getElementById("audioSpeed").addEventListener("click", toggleSpeed);
    document.getElementById("audioRepeat").addEventListener("click", toggleRepeat);
  }

  function loadVoices() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    state.audio.voice = voices.find(voice => /^ta-IN$/i.test(voice.lang)) || voices.find(voice => /^ta([_-]|$)/i.test(voice.lang)) || null;
  }

  function playExampleById(id, queue, continuous) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      showToast("このブラウザは音声読み上げに対応していません");
      return;
    }
    const item = findExample(id);
    if (!item) return;
    state.audio.queue = queue;
    state.audio.index = Math.max(0, queue.indexOf(id));
    state.audio.continuous = continuous;
    state.audio.raw = false;
    state.audio.completedRepeats = 0;
    getChapterProgress(currentChapter().id).listen = true;
    saveStored();
    renderNav();
    speakExample(item);
  }

  function speakExample(example, preserveRepeat = false) {
    stopAudio(false, true, preserveRepeat);
    openAudioDock(example.ta, example.ja);
    highlightExample(example.id);
    const utterance = new SpeechSynthesisUtterance(example.ttsText || example.ta);
    utterance.lang = "ta-IN";
    utterance.rate = state.audio.rate;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (state.audio.voice) utterance.voice = state.audio.voice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onerror = event => {
      setSpeaking(false);
      if (event.error !== "canceled" && event.error !== "interrupted") showToast("タミル語音声を再生できませんでした。端末の音声設定を確認してください");
    };
    utterance.onend = () => handleUtteranceEnd(example);
    state.audio.utterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function speakRawTamil(tamil, label) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      showToast("このブラウザは音声読み上げに対応していません");
      return;
    }
    stopAudio(false, true);
    state.audio.raw = true;
    state.audio.continuous = false;
    state.audio.queue = [];
    openAudioDock(tamil, label);
    const utterance = new SpeechSynthesisUtterance(tamil);
    utterance.lang = "ta-IN";
    utterance.rate = state.audio.rate;
    if (state.audio.voice) utterance.voice = state.audio.voice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    state.audio.utterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function handleUtteranceEnd(example) {
    state.audio.completedRepeats += 1;
    if (state.audio.completedRepeats < state.audio.repeats) {
      setTimeout(() => speakExample(example, true), 180);
      return;
    }
    state.audio.completedRepeats = 0;
    setSpeaking(false);
    if (state.audio.continuous && state.audio.index < state.audio.queue.length - 1) {
      state.audio.index += 1;
      const next = findExample(state.audio.queue[state.audio.index]);
      if (next) setTimeout(() => speakExample(next), 260);
    }
  }

  function toggleAudio() {
    if (state.audio.speaking) {
      stopAudio(true, true);
      return;
    }
    if (state.audio.raw) {
      const tamil = document.getElementById("audioTamil").textContent;
      const label = document.getElementById("audioJapanese").textContent;
      speakRawTamil(tamil, label);
      return;
    }
    const id = state.audio.queue[state.audio.index];
    const item = findExample(id);
    if (item) speakExample(item);
  }

  function moveAudio(direction) {
    if (!state.audio.queue.length) return;
    const nextIndex = clamp(state.audio.index + direction, 0, state.audio.queue.length - 1);
    if (nextIndex === state.audio.index) return;
    state.audio.index = nextIndex;
    state.audio.completedRepeats = 0;
    const item = findExample(state.audio.queue[nextIndex]);
    if (item) speakExample(item);
  }

  function toggleSpeed() {
    state.audio.rate = state.audio.rate === 1 ? 0.72 : 1;
    document.getElementById("audioSpeed").textContent = state.audio.rate === 1 ? "1.0×" : "ゆっくり";
    if (state.audio.speaking) toggleAudioRestart();
  }

  function toggleRepeat() {
    state.audio.repeats = state.audio.repeats === 1 ? 2 : 1;
    state.audio.completedRepeats = 0;
    document.getElementById("audioRepeat").textContent = `×${state.audio.repeats}`;
  }

  function toggleAudioRestart() {
    if (state.audio.raw) {
      const tamil = document.getElementById("audioTamil").textContent;
      const label = document.getElementById("audioJapanese").textContent;
      speakRawTamil(tamil, label);
    } else {
      const item = findExample(state.audio.queue[state.audio.index]);
      if (item) speakExample(item);
    }
  }

  function stopAudio(updateButton = true, preserveQueue = false, preserveRepeat = false) {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    state.audio.utterance = null;
    state.audio.speaking = false;
    if (!preserveRepeat) state.audio.completedRepeats = 0;
    if (!preserveQueue) state.audio.continuous = false;
    document.querySelectorAll(".playing").forEach(element => element.classList.remove("playing"));
    if (updateButton) setSpeaking(false);
  }

  function closeAudioDock() {
    stopAudio(true);
    const dock = document.getElementById("audioDock");
    dock.classList.remove("open");
    dock.setAttribute("aria-hidden", "true");
  }

  function openAudioDock(tamil, japanese) {
    const dock = document.getElementById("audioDock");
    document.getElementById("audioTamil").textContent = tamil;
    document.getElementById("audioJapanese").textContent = japanese;
    document.getElementById("audioSpeed").textContent = state.audio.rate === 1 ? "1.0×" : "ゆっくり";
    document.getElementById("audioRepeat").textContent = `×${state.audio.repeats}`;
    dock.classList.add("open");
    dock.setAttribute("aria-hidden", "false");
  }

  function setSpeaking(speaking) {
    state.audio.speaking = speaking;
    document.getElementById("audioPlay").textContent = speaking ? "Ⅱ" : "▶";
    document.getElementById("audioPlay").setAttribute("aria-label", speaking ? "停止" : "再生");
  }

  function highlightExample(id) {
    document.querySelectorAll(".playing").forEach(element => element.classList.remove("playing"));
    const safeId = window.CSS?.escape ? window.CSS.escape(id) : String(id).replace(/"/g, "\\\"");
    const element = document.querySelector(`[data-example-id="${safeId}"]`);
    if (element) element.classList.add("playing");
  }

  function findExample(id) {
    const referenceExample = reference?.examples?.find(example => example.id === id);
    if (referenceExample) return referenceExample;
    for (const chapter of book.chapters) {
      const found = chapter.examples.find(example => example.id === id);
      if (found) return found;
    }
    return null;
  }

  function currentChapter() {
    return state.referenceOpen && reference ? reference : book.chapters[state.chapterIndex];
  }

  function chapterPart(chapter) {
    if (chapter.number === 0) return { code: "PART 0", title: "文字と名詞格" };
    if (chapter.number <= 4) return { code: "PART I", title: "私の動詞エンジン" };
    if (chapter.number <= 8) return { code: "PART II", title: "あなたと話す" };
    if (chapter.number <= 12) return { code: "PART III", title: "人と世界を語る" };
    if (chapter.number <= 16) return { code: "PART IV", title: "動作を伸ばす" };
    if (chapter.number <= 18) return { code: "PART V", title: "文を伸ばす" };
    if (chapter.number <= 28) return { code: "PART VI", title: "旅行科" };
    return { code: "PART VII", title: "文法補完科" };
  }

  function updateHash() {
    const hash = state.referenceOpen
      ? `#part=0&view=${state.view}`
      : `#ch=${book.chapters[state.chapterIndex].number}&view=${state.view}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
  }

  function parseHash() {
    const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const referenceOpen = params.get("part") === "0";
    const chapterRaw = Number(params.get("ch"));
    const chapterIndex = Number.isFinite(chapterRaw) && chapterRaw > 0
      ? book.chapters.findIndex(chapter => chapter.number === chapterRaw)
      : -1;
    const chapter = chapterIndex >= 0 ? chapterIndex : null;
    const view = params.get("view");
    return { chapter, reference: referenceOpen, view: VIEW_LABELS[view] ? view : null };
  }

  function loadStored() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (_error) {
      return {};
    }
  }

  function saveStored() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        chapterIndex: state.chapterIndex,
        view: state.view,
        progress: state.progress,
        quizzes: state.quizzes,
        settings: state.settings
      }));
    } catch (_error) {
      // The app remains fully usable when storage is blocked.
    }
  }

  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, Number(value) || 0));
  }

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[character]);
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/'/g, "&#39;");
  }
})();
