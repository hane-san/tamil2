const fs = require("node:fs");
const path = require("node:path");
const { JSDOM, ResourceLoader, VirtualConsole } = require("jsdom");

const root = path.resolve(__dirname, "..");
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

class LocalResourceLoader extends ResourceLoader {
  fetch(url) {
    const parsed = new URL(url);
    if (parsed.hostname !== "tamil2.local") return null;
    const relative = decodeURIComponent(parsed.pathname).replace(/^\/+/, "") || "index.html";
    const resolved = path.resolve(root, relative);
    if (!resolved.startsWith(root + path.sep) || !fs.existsSync(resolved)) return null;
    return Promise.resolve(fs.readFileSync(resolved));
  }
}

const consoleErrors = [];
const virtualConsole = new VirtualConsole();
virtualConsole.on("jsdomError", error => consoleErrors.push(error.message));
virtualConsole.on("error", message => consoleErrors.push(String(message)));

const dom = new JSDOM(fs.readFileSync(path.join(root, "index.html"), "utf8"), {
  url: "https://tamil2.local/index.html",
  runScripts: "dangerously",
  resources: new LocalResourceLoader(),
  pretendToBeVisual: true,
  virtualConsole,
  beforeParse(window) {
    window.localStorage.setItem("tamil-verb-engine-v2", JSON.stringify({
      schemaVersion: 2,
      chapterIndex: 0,
      view: "read",
      progress: { "legacy-chapter": { read: true } },
      quizzes: {},
      settings: { kana: false, literal: true, morph: true }
    }));

    const utterances = [];
    window.__spokenUtterances = utterances;
    window.speechSynthesis = {
      cancel() {},
      speak(utterance) {
        utterances.push(utterance);
        utterance.onstart?.();
      },
      getVoices() {
        return [];
      },
      addEventListener() {}
    };
    window.SpeechSynthesisUtterance = class {
      constructor(text) {
        this.text = text;
      }
    };
    window.scrollTo = () => {};
    window.confirm = () => true;
    window.requestAnimationFrame = callback => setTimeout(callback, 0);
    window.CSS = window.CSS || {};
    window.CSS.escape = value => String(value).replace(/"/g, "\\\"");
    window.HTMLElement.prototype.scrollIntoView = () => {};
  }
});

async function main() {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("DOM load timed out")), 10000);
    dom.window.addEventListener("load", () => {
      clearTimeout(timer);
      resolve();
    }, { once: true });
  });

  const { document, Event, KeyboardEvent } = dom.window;

  assert(document.title.includes("第1課"), "initial title must identify lesson 1");
  assert(document.getElementById("progressLabel").textContent.includes("第1課 / 20課"), "progress label must show 20-lesson scope");
  assert(!document.body.classList.contains("hide-kana"), "v3 migration must restore kana visibility");
  assert(document.getElementById("toggleKana").checked, "kana toggle must be checked after migration");

  const stored = JSON.parse(dom.window.localStorage.getItem("tamil-verb-engine-v2"));
  assert(stored.schemaVersion === 3, "storage schema must migrate to version 3");
  assert(stored.settings.kana === true, "migrated settings must persist kana=true");
  assert(stored.progress["legacy-chapter"].read === true, "legacy progress data must remain stored");

  const hero = document.querySelector("article[data-play-id='l1-03']");
  assert(Boolean(hero), "lesson 1 hero example must render");
  assert(hero.querySelector(".tamil-line").textContent === "வீட்டுல தண்ணி இருக்கு.", "hero targetTamil mismatch");
  assert(hero.querySelector(".structure-reading").textContent.includes("vīṭṭ-ula"), "structuredRoman must render");
  assert(hero.querySelector(".kana-reading").textContent.includes("ヴィーットゥラ"), "katakana must render");
  assert(hero.querySelector(".spoken-reading").textContent.includes("vīṭṭula"), "pronunciationRoman must render");

  assert(document.querySelectorAll(".critical-points li").length === 3, "lesson 1 must show three critical points");
  assert(document.querySelectorAll(".reading-takeaway").length >= 6, "lesson 1 must show a takeaway for every explanation block");
  assert(document.querySelectorAll(".step-strip .step-button").length === 4, "practice and check must render as one four-step learning path");
  assert(![...document.querySelectorAll(".step-strip .step-button")].some(button => button.textContent.trim() === "確認"), "duplicate check step must not render");
  assert(document.querySelector(".roman-guide").textContent.includes("構造ローマ字"), "beginner roman guide must render");
  assert(document.querySelector(".view-read .roman-inline").textContent.includes("("), "parenthetical structured roman must render in explanations");
  assert(document.querySelector(".beginner-anchor").textContent.includes("迷ったらここへ戻る"), "beginner anchor must render");
  assert(document.querySelector(".beginner-glossary").textContent.includes("文法用語を日常語で確認"), "beginner glossary must render");
  assert(document.querySelectorAll(".reading-sentence-stack").length >= 1, "long explanations must split into mobile sentence blocks");
  assert(document.querySelector("button[data-view='examples']").textContent.includes("聞く"), "second learning tab must be labelled listen");

  const beforeCardClick = dom.window.__spokenUtterances.length;
  hero.querySelector(".tamil-line").dispatchEvent(new Event("click", { bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforeCardClick + 1, "card body click must speak exactly once");
  assert(dom.window.__spokenUtterances.at(-1).text === "வீட்டுல தண்ணி இருக்கு.", "card must speak Tamil ttsText only");
  assert(document.getElementById("toast").textContent.includes("タミル語音声"), "missing Tamil voice must notify once");

  const beforePlayGlyph = dom.window.__spokenUtterances.length;
  hero.querySelector(".play-button").dispatchEvent(new Event("click", { bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforePlayGlyph + 1, "play glyph click must not double play");

  const beforeKeyboard = dom.window.__spokenUtterances.length;
  hero.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforeKeyboard + 1, "Enter on example card must speak once");

  const examplesTab = document.querySelector("button[data-view='examples']");
  examplesTab.dispatchEvent(new Event("click", { bubbles: true }));
  const exampleCards = document.querySelectorAll(".view-examples .example-feature, .view-examples .example-row");
  assert(exampleCards.length === 10, `lesson 1 must render 10 examples; got ${exampleCards.length}`);
  const smallKana = document.querySelector(".view-examples .example-row .kana-line");
  assert(dom.window.getComputedStyle(smallKana).fontSize === "12px", "small example kana must compute to 12px");

  document.querySelector("button[data-view='practice']").dispatchEvent(new Event("click", { bubbles: true }));
  assert(document.querySelectorAll(".quiz-card").length === 5, "lesson 1 must render five critical review questions");
  assert(document.querySelectorAll(".quiz-focus").length === 5, "each quiz must show its diagnostic focus");
  const firstQuizOption = document.querySelector(".quiz-card .quiz-option");
  firstQuizOption.dispatchEvent(new Event("click", { bubbles: true }));
  assert(document.querySelector(".quiz-feedback .quiz-rule").textContent.includes("持ち帰る一行"), "quiz feedback must show a carry-home rule");
  document.querySelector("button[data-view='examples']").dispatchEvent(new Event("click", { bubbles: true }));

  const continuous = document.querySelector("[data-continuous='true']");
  const beforeContinuous = dom.window.__spokenUtterances.length;
  continuous.dispatchEvent(new Event("click", { bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforeContinuous + 1, "continuous play must start one utterance");

  document.getElementById("menuButton").dispatchEvent(new Event("click", { bubbles: true }));
  const publicLessonButtons = document.querySelectorAll("#chapterNav button[data-chapter]");
  assert(publicLessonButtons.length === 20, "drawer must expose exactly twenty public lessons");

  const shortReadingCue = { 3: "இது ரவியோட கார்", 4: "வீட்டுல இருக்கேன்", 5: "இந்த கோவில் பற்றி", 6: "என்கிட்ட டிக்கெட் இருக்கு", 7: "நான் படம் பாக்கறேன்", 8: "நான் நேத்து படம் பாத்தேன்", 9: "நான் நேத்து படம் பாக்கல", 10: "நான் சாப்பிட போறேன்", 11: "கடைக்கு போய் தண்ணி வாங்கினேன்", 12: "நான் டிக்கெட் வாங்கி வெச்சேன்", 13: "எனக்கு சென்னைக்கு போக ஆசை இருக்கு", 14: "நீங்க சென்னைக்கு போறீங்க", 15: "கொஞ்சம் சொல்லுங்க", 16: "இந்த ஹோட்டல் அந்த ஹோட்டலைவிட மலிவா இருக்கு", 17: "நான் நேத்து பாத்த படம் நல்லா இருந்தது", 18: "தமிழ் படிக்கறது சுவாரஸ்யம்", 19: "அவர் நாளைக்கு வர்றேன்னு சொன்னார்", 20: "நேரம் இருந்தா படம் பாக்கலாம்" };
  for (const lessonNumber of [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) {
    document.querySelector(`#chapterNav button[data-chapter="${lessonNumber - 1}"]`).dispatchEvent(new Event("click", { bubbles: true }));
    assert(document.title.includes(`第${lessonNumber}課`), `lesson ${lessonNumber} navigation must work`);
    assert(document.querySelector(".view-read .reading-section:last-child").textContent.includes(shortReadingCue[lessonNumber]), `lesson ${lessonNumber} must render its short reading`);
    document.querySelector("button[data-view='examples']").dispatchEvent(new Event("click", { bubbles: true }));
    const expectedExampleCount = lessonNumber === 6 ? 11 : lessonNumber === 8 ? 12 : lessonNumber === 13 ? 11 : lessonNumber === 14 ? 12 : lessonNumber === 15 ? 12 : lessonNumber === 16 ? 12 : lessonNumber === 17 ? 12 : lessonNumber === 18 ? 12 : lessonNumber === 19 ? 12 : lessonNumber === 20 ? 12 : 10;
    assert(document.querySelectorAll(".view-examples .example-feature, .view-examples .example-row").length === expectedExampleCount, `lesson ${lessonNumber} must render ${expectedExampleCount} examples`);
    document.getElementById("menuButton").dispatchEvent(new Event("click", { bubbles: true }));
  }
  const answerPositionCounts = [0, 0, 0, 0];
  for (let lessonNumber = 1; lessonNumber <= 20; lessonNumber += 1) {
    document.querySelector(`#chapterNav button[data-chapter="${lessonNumber - 1}"]`).dispatchEvent(new Event("click", { bubbles: true }));
    document.querySelector("button[data-view='practice']").dispatchEvent(new Event("click", { bubbles: true }));
    const chapter = dom.window.TAMIL_BOOK.chapters[lessonNumber - 1];
    const cards = [...document.querySelectorAll(".quiz-card")];
    assert(cards.length === 5, `lesson ${lessonNumber} must expose five shuffled questions`);
    cards.forEach((card, questionIndex) => {
      const buttons = [...card.querySelectorAll(".quiz-option")];
      const correctCanonical = chapter.quiz[questionIndex].answer;
      const visualPosition = buttons.findIndex(button => Number(button.dataset.quizOption) === correctCanonical);
      assert(visualPosition >= 0, `lesson ${lessonNumber} quiz ${questionIndex + 1}: correct canonical option missing`);
      answerPositionCounts[visualPosition] += 1;
    });
  }
  assert(answerPositionCounts.join(",") === "25,25,25,25", `correct answer positions must be balanced; got ${answerPositionCounts.join(",")}`);

  document.querySelector(`#chapterNav button[data-chapter="6"]`).dispatchEvent(new Event("click", { bubbles: true }));
  assert(document.querySelectorAll(".contrast-card").length === 3, "lesson 7 must show a three-way tense contrast board");

  document.querySelector("#chapterNav [data-open-reference]").dispatchEvent(new Event("click", { bubbles: true }));
  assert(document.title.includes("PART 0"), "PART 0 navigation must work");

  document.querySelector("button[data-view='forms']").dispatchEvent(new Event("click", { bubbles: true }));
  assert(document.querySelectorAll(".syllable-key").length === 216, "alphabet table must contain 18×12 syllables");
  assert(document.querySelectorAll(".vowel-key").length === 12, "alphabet table must contain 12 vowel headers");
  assert(document.querySelectorAll(".consonant-key").length === 18, "alphabet table must contain 18 consonant headers");

  const letter = document.querySelector(".syllable-key");
  const letterTamil = letter.getAttribute("data-tts");
  const beforeLetter = dom.window.__spokenUtterances.length;
  letter.dispatchEvent(new Event("click", { bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforeLetter + 1, "letter click must speak exactly once");
  assert(dom.window.__spokenUtterances.at(-1).text === letterTamil, "letter TTS must contain only the selected Tamil character");

  assert(consoleErrors.length === 0, `browser console errors: ${consoleErrors.join(" | ")}`);

  if (failures.length) {
    console.error(`DOM validation failed: ${failures.length} issue(s), ${assertions} assertions`);
    failures.forEach(failure => console.error(`- ${failure}`));
    process.exitCode = 1;
  } else {
    console.log(`DOM validation passed: ${assertions} assertions`);
    console.log("- legacy kana setting migrated without deleting progress");
    console.log("- card, glyph, keyboard, continuous, and letter audio are single-fire");
    console.log("- PART 0 + 20 lessons, four-step practice UI, beginner explanations, critical quizzes, short readings, and 216-character table render");
  }

  dom.window.close();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
  dom.window.close();
});
