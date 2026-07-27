import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const html = `<!doctype html><html><body>
<header><span id="progressLabel"></span><span id="progressFill"></span></header>
<button id="drawerClose"></button><button id="supplementHubButton" hidden></button>
<section id="settingsPanel"><button data-audio-rate="1">通常</button><button data-audio-rate="0.72">ゆっくり</button><button data-audio-repeats="1">1回</button><button data-audio-repeats="2">2回</button></section>
<main id="main"></main><nav class="bottom-nav"></nav>
<section id="supplementRoot" hidden></section>
<nav id="supplementBottomNav" hidden>
<button data-supp-view="read">読む</button><button data-supp-view="examples">聞く</button><button data-supp-view="forms">形</button><button data-supp-view="practice">練習</button>
</nav>
<section id="audioDock" hidden aria-hidden="true"></section>
<section id="supplementAudioDock" hidden aria-hidden="true"></section>
<div id="toast"></div></body></html>`;
const dom = new JSDOM(html, { url: "https://example.test/#ch=1&view=read", runScripts: "outside-only", pretendToBeVisual: true });
const { window } = dom;
window.scrollTo = () => {};
window.CSS = { escape: value => String(value) };
window.localStorage.setItem("tamil-verb-engine-v2", JSON.stringify({ schemaVersion: 3, chapterIndex: 4, progress: { lesson05: { check: true } } }));
const coreBefore = window.localStorage.getItem("tamil-verb-engine-v2");
window.TAMIL_SUPPLEMENT_PREVIEW_READY = Promise.resolve();

let drawerCloseClicks = 0;
window.document.getElementById("drawerClose").addEventListener("click", () => { drawerCloseClicks += 1; });

const spoken = [];
class MockUtterance {
  constructor(text) { this.text = text; this.lang = ""; this.rate = 1; }
}
window.SpeechSynthesisUtterance = MockUtterance;
window.speechSynthesis = {
  getVoices: () => [{ lang: "ta-IN", name: "Tamil" }],
  speak: utterance => { spoken.push(utterance); utterance.onstart?.(); },
  cancel: () => {},
  addEventListener: () => {}
};

const context = dom.getInternalVMContext();
const runtimeFiles = [
  "tamil-core-v30.js", "lesson01-v30.js", "lesson02-v30.js", "lesson08-v33.js", "lesson12-v36.js", "lesson14-v37.js", "lesson15-v38.js", "lesson16-v38.js",
  "supplements-v42.js", "supplementA-v42.js", "supplementB-v42.js", "supplementC-v43.js", "supplementD-v43.js", "supplementE-v44.js", "supplementF-v44.js", "supplementG-v45.js", "supplementH-v45.js", "supplementH-clarity-v45.js", "copy-polish-v47.js", "supplement-ui-v42.js", "audio-shell-v48.js", "supplement-app-v46.js", "ui-controls-v48.js"
];
for (const file of runtimeFiles) vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
await Promise.resolve();
await Promise.resolve();

const failures = [];
let assertions = 0;
function assert(condition, message) { assertions += 1; if (!condition) failures.push(message); }

const app = window.TAMIL_SUPPLEMENT_APP_V46;
assert(Boolean(app), "supplement preview runtime must load");
assert(!app.isActive(), "core route must start outside supplement mode");

window.document.getElementById("supplementHubButton").click();
app.syncFromHash();
assert(drawerCloseClicks === 1, `launcher must close the drawer exactly once; got ${drawerCloseClicks}`);
assert(window.location.hash === "#supp=hub", "launcher must navigate to the supplement hub route");
assert(app.isActive(), "launcher route must activate supplement mode");
assert(!window.document.getElementById("supplementRoot").hidden, "supplement root must be visible");
assert(window.document.getElementById("main").hidden, "core main must be hidden in supplement mode");
assert(window.document.getElementById("supplementRoot").textContent.includes("補講 A") && window.document.getElementById("supplementRoot").textContent.includes("補講 H"), "hub must list A–H");
assert(!window.document.getElementById("supplementRoot").textContent.includes("第21課"), "supplements must not be renamed lessons 21+");

app.openSupplement("H", "examples");
app.syncFromHash();
assert(window.location.hash.includes("supp=H"), "H route must be reflected in hash");
assert(window.document.querySelectorAll("[data-supp-play-id]").length === 12, "H examples view must render 12 playable cards");
assert(window.document.body.textContent.includes("LT-WR・読解"), "formal passive must display an LT-WR reading badge");

let card = window.document.querySelector("[data-supp-play-id]");
card.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
await Promise.resolve();
assert(spoken.length === 1, `one card click must trigger one utterance; got ${spoken.length}`);
assert(spoken[0].lang === "ta-IN", "supplement utterance must request ta-IN");
assert(/^[\u0B80-\u0BFF\s.,?!…;:()'’]+$/u.test(spoken[0].text), "supplement utterance must contain Tamil layer only");
assert(window.document.getElementById("supplementAudioDock").hidden, "card playback must not display a lower audio dock");
assert(window.document.getElementById("supplementAudioDock").getAttribute("aria-hidden") === "true", "hidden player shell must stay out of the accessibility tree");
assert(window.localStorage.getItem("tamil-verb-engine-v2") === coreBefore, "supplement listening must not alter core progress storage");
assert(Boolean(window.localStorage.getItem("tamil-supplements-v42")), "supplement progress must use its own storage key");

card = window.document.querySelector("[data-supp-play-id]");
card.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
assert(spoken.length === 2, "keyboard activation must trigger exactly one additional utterance");

window.document.querySelector('[data-audio-rate="0.72"]').click();
window.document.querySelector('[data-audio-repeats="2"]').click();
const preferences = window.TAMIL_UI_CONTROLS_V48.getAudioPreferences();
const audioState = app.getAudioState();
assert(preferences.rate === 0.72 && audioState.rate === 0.72, "reading settings must control supplement playback speed");
assert(preferences.repeats === 2 && audioState.repeats === 2, "reading settings must control supplement repeat count");
assert(window.document.querySelector('[data-audio-rate="0.72"]').getAttribute("aria-pressed") === "true", "selected audio speed must be exposed in settings");

window.document.querySelector('[data-audio-repeats="1"]').click();
const continuous = window.document.querySelector("[data-supp-continuous]");
continuous.click();
assert(spoken.length === 3, "continuous play button must start with one utterance");
spoken.at(-1).onend?.();
await new Promise(resolve => setTimeout(resolve, 320));
assert(spoken.length === 4, "continuous playback must advance after the inter-sentence gap");

const originalUtterance = window.SpeechSynthesisUtterance;
delete window.SpeechSynthesisUtterance;
card = window.document.querySelector("[data-supp-play-id]");
card.click();
assert(window.document.getElementById("toast").textContent.includes("対応していません"), "missing TTS API must show a concise notice");
window.SpeechSynthesisUtterance = originalUtterance;

app.openSupplement("H", "read");
app.syncFromHash();
const lessonLink = window.document.querySelector('[data-go-lesson="3"]');
lessonLink.click();
app.syncFromHash();
assert(window.location.hash.includes("ch=3"), "bridge must return to an existing core lesson");
assert(!app.isActive(), "core lesson route must leave supplement mode");
assert(!window.document.getElementById("main").hidden, "core main must be restored");

const supplementCss = fs.readFileSync(path.join(root, "styles-supplements-v46.css"), "utf8");
const uiCss = fs.readFileSync(path.join(root, "styles-ui-v48.css"), "utf8");
assert(supplementCss.includes("@media(max-width:520px)"), "supplement CSS must include iPhone portrait breakpoint");
assert(supplementCss.includes("font-size:12px"), "small supplement kana must remain at least 12px");
assert(supplementCss.includes("min-height:48px"), "supplement tap targets must be comfortably sized");
assert(supplementCss.includes("env(safe-area-inset-bottom)"), "supplement bottom navigation must respect iPhone safe area");
assert(uiCss.includes(".audio-dock,.supplement-audio-dock{display:none!important}"), "lower audio docks must be removed from the visible UI");
assert(uiCss.includes(".settings-audio-section"), "audio controls must be styled inside reading settings");

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(indexHtml.includes('src="audio-shell-v48.js"'), "index must create hidden compatibility audio controls before the core app");
assert(indexHtml.includes('src="supplement-preview-loader-v48.js"'), "index must load the versioned supplement preview loader");
assert(indexHtml.includes('src="ui-controls-v48.js"'), "index must load settings and launcher integration");
assert(indexHtml.includes('href="styles-ui-v48.css"'), "index must load the simplified playback styles");
assert(indexHtml.includes('data-audio-rate="0.72"') && indexHtml.includes('data-audio-repeats="2"'), "reading settings must expose speed and repeat controls");
assert(!indexHtml.includes('id="audioPrev"') && !indexHtml.includes('id="suppAudioPrev"'), "visible HTML must not contain the old lower player controls");
assert(indexHtml.includes('id="supplementHubButton"'), "drawer must expose the supplement preview launcher");
assert(indexHtml.includes('id="supplementAudioDock"'), "supplement preview must keep only a hidden compatibility shell");

const loader = fs.readFileSync(path.join(root, "supplement-preview-loader-v48.js"), "utf8");
for (const file of ["supplements-v42.js", "supplementA-v42.js", "supplementH-v45.js", "supplement-ui-v42.js", "supplement-app-v46.js"]) {
  assert(loader.includes(`"${file}"`), `preview loader must include ${file}`);
}
assert(loader.includes("?v=48"), "preview assets must use a versioned URL to avoid stale cache mixing");

if (failures.length) {
  console.error("Supplement preview integration failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement preview integration passed: ${assertions} assertions`);
  console.log("- drawer launcher, A–H hub, hash routing, progress isolation and lesson bridges verified");
  console.log("- card-only playback, settings-based speed/repeat, Tamil-only TTS and continuous playback verified");
  console.log("- hidden compatibility shells, versioned loader, mobile layout and cache boundary verified");
}
