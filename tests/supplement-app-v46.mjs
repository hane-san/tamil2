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
<main id="main"></main><nav class="bottom-nav"></nav>
<section id="supplementRoot" hidden></section>
<nav id="supplementBottomNav" hidden>
<button data-supp-view="read">読む</button><button data-supp-view="examples">聞く</button><button data-supp-view="forms">形</button><button data-supp-view="practice">練習</button>
</nav>
<section id="supplementAudioDock" hidden aria-hidden="true"><strong id="suppAudioTamil"></strong><small id="suppAudioJapanese"></small>
<button id="suppAudioPrev"></button><button id="suppAudioPlay"></button><button id="suppAudioNext"></button><button id="suppAudioStop"></button><button id="suppAudioSpeed"></button><button id="suppAudioRepeat"></button><button id="suppAudioClose"></button></section>
<div id="toast"></div></body></html>`;
const dom = new JSDOM(html, { url: "https://example.test/#supp=hub", runScripts: "outside-only", pretendToBeVisual: true });
const { window } = dom;
window.scrollTo = () => {};
window.CSS = { escape: value => String(value) };
window.localStorage.setItem("tamil-verb-engine-v2", JSON.stringify({ schemaVersion: 3, chapterIndex: 4, progress: { lesson05: { check: true } } }));
const coreBefore = window.localStorage.getItem("tamil-verb-engine-v2");

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
  "supplements-v42.js", "supplementA-v42.js", "supplementB-v42.js", "supplementC-v43.js", "supplementD-v43.js", "supplementE-v44.js", "supplementF-v44.js", "supplementG-v45.js", "supplementH-v45.js", "supplementH-clarity-v45.js", "supplement-ui-v42.js", "supplement-app-v46.js"
];
for (const file of runtimeFiles) vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });

const failures = [];
let assertions = 0;
function assert(condition, message) { assertions += 1; if (!condition) failures.push(message); }

const app = window.TAMIL_SUPPLEMENT_APP_V46;
assert(Boolean(app), "supplement preview runtime must load");
assert(app.isActive(), "supplement hub route must activate supplement mode");
assert(!window.document.getElementById("supplementRoot").hidden, "supplement root must be visible");
assert(window.document.getElementById("main").hidden, "core main must be hidden in supplement mode");
assert(window.document.getElementById("supplementRoot").textContent.includes("補講 A") && window.document.getElementById("supplementRoot").textContent.includes("補講 H"), "hub must list A–H");
assert(!window.document.getElementById("supplementRoot").textContent.includes("第21課"), "supplements must not be renamed lessons 21+");

app.openSupplement("H", "examples");
window.dispatchEvent(new window.HashChangeEvent("hashchange"));
assert(window.location.hash.includes("supp=H"), "H route must be reflected in hash");
assert(window.document.querySelectorAll("[data-supp-play-id]").length === 12, "H examples view must render 12 playable cards");
assert(window.document.body.textContent.includes("LT-WR・読解"), "formal passive must display an LT-WR reading badge");

const firstCard = window.document.querySelector("[data-supp-play-id]");
firstCard.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));
assert(spoken.length === 1, `one card click must trigger one utterance; got ${spoken.length}`);
assert(spoken[0].lang === "ta-IN", "supplement utterance must request ta-IN");
assert(/^[\u0B80-\u0BFF\s.,?!…;:()'’]+$/u.test(spoken[0].text), "supplement utterance must contain Tamil layer only");
assert(window.localStorage.getItem("tamil-verb-engine-v2") === coreBefore, "supplement listening must not alter core progress storage");
assert(Boolean(window.localStorage.getItem("tamil-supplements-v42")), "supplement progress must use its own storage key");

firstCard.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
assert(spoken.length === 2, "keyboard activation must trigger exactly one additional utterance");

const continuous = window.document.querySelector("[data-supp-continuous]");
continuous.click();
assert(spoken.length === 3, "continuous play button must start with one utterance");
spoken.at(-1).onend?.();
await new Promise(resolve => setTimeout(resolve, 320));
assert(spoken.length === 4, "continuous playback must advance after the inter-sentence gap");

const originalUtterance = window.SpeechSynthesisUtterance;
delete window.SpeechSynthesisUtterance;
firstCard.click();
assert(window.document.getElementById("toast").textContent.includes("対応していません"), "missing TTS API must show a concise notice");
window.SpeechSynthesisUtterance = originalUtterance;

app.openSupplement("H", "read");
window.dispatchEvent(new window.HashChangeEvent("hashchange"));
const lessonLink = window.document.querySelector('[data-go-lesson="3"]');
lessonLink.click();
window.dispatchEvent(new window.HashChangeEvent("hashchange"));
assert(window.location.hash.includes("ch=3"), "bridge must return to an existing core lesson");
assert(!app.isActive(), "core lesson route must leave supplement mode");
assert(!window.document.getElementById("main").hidden, "core main must be restored");

const css = fs.readFileSync(path.join(root, "styles-supplements-v46.css"), "utf8");
assert(css.includes("@media(max-width:520px)"), "supplement CSS must include iPhone portrait breakpoint");
assert(css.includes("font-size:12px"), "small supplement kana must remain at least 12px");
assert(css.includes("min-height:48px"), "supplement tap targets must be comfortably sized");
assert(css.includes("env(safe-area-inset-bottom)"), "supplement bottom navigation must respect iPhone safe area");

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(indexHtml.includes('src="supplement-preview-loader-v46.js"'), "index must load the isolated supplement preview loader");
for (const file of ["supplements-v42.js", "supplementA-v42.js", "supplementH-v45.js", "supplement-ui-v42.js", "supplement-app-v46.js"]) {
  assert(!indexHtml.includes(`src="${file}"`), `index must not couple directly to ${file}`);
}
const loader = fs.readFileSync(path.join(root, "supplement-preview-loader-v46.js"), "utf8");
for (const file of ["supplements-v42.js", "supplementA-v42.js", "supplementH-v45.js", "supplement-ui-v42.js", "supplement-app-v46.js"]) {
  assert(loader.includes(`"${file}"`), `preview loader must include ${file}`);
}
assert(indexHtml.includes('id="supplementHubButton"'), "drawer must expose the supplement preview launcher");
assert(indexHtml.includes('id="supplementAudioDock"'), "supplement preview must have an isolated audio dock");

if (failures.length) {
  console.error("Supplement preview integration failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement preview integration passed: ${assertions} assertions`);
  console.log("- A–H hub, hash routing, core/supplement progress isolation and lesson bridges verified");
  console.log("- whole-card keyboard/audio, continuous playback, Tamil-only TTS and unavailable-TTS notice verified");
  console.log("- isolated loader, iPhone portrait breakpoint, safe-area navigation and 12px kana floor verified");
}