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
  assert(document.getElementById("progressLabel").textContent.includes("第1課 / 2課"), "progress label must show 2-lesson scope");
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

  const continuous = document.querySelector("[data-continuous='true']");
  const beforeContinuous = dom.window.__spokenUtterances.length;
  continuous.dispatchEvent(new Event("click", { bubbles: true }));
  assert(dom.window.__spokenUtterances.length === beforeContinuous + 1, "continuous play must start one utterance");

  document.getElementById("menuButton").dispatchEvent(new Event("click", { bubbles: true }));
  const publicLessonButtons = document.querySelectorAll("#chapterNav button[data-chapter]");
  assert(publicLessonButtons.length === 2, "drawer must expose only two public lessons");
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
    console.log("- PART 0 + 2 lessons and 216-character table render");
  }

  dom.window.close();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
  dom.window.close();
});
