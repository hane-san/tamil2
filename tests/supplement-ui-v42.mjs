import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

for (const file of [
  "tamil-core-v30.js",
  "lesson01-v30.js",
  "lesson02-v30.js",
  "lesson08-v33.js",
  "lesson14-v37.js",
  "lesson15-v38.js",
  "lesson16-v38.js",
  "supplements-v42.js",
  "supplementA-v42.js",
  "supplementB-v42.js",
  "supplementC-v43.js",
  "supplement-ui-v42.js"
]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const ui = context.window.TAMIL_SUPPLEMENT_UI_V42;
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(Boolean(ui), "supplement UI module must load");
assert(ui.STORAGE_KEY === "tamil-supplements-v42", "supplement storage key mismatch");
assert(ui.STORAGE_KEY !== "tamil-verb-engine-v2", "supplement storage key must not reuse the core app key");
assert(ui.STORAGE_SCHEMA_VERSION === 1, "supplement storage schema version mismatch");

const coreState = {
  schemaVersion: 3,
  chapterIndex: 7,
  progress: { "lesson08-v33": { check: true } },
  quizzes: { "lesson08-v33": { finished: true } }
};
const coreSnapshot = JSON.stringify(coreState);

const state = ui.createState();
assert(state.currentCode === "A", "first loaded supplement must be A");
assert(Object.keys(state.progress).join(",") === "A,B,C", "loaded supplement A, B and C progress should be created");
assert(ui.overallCompletion(state).percent === 0, "new supplement progress must start at zero");
assert(JSON.stringify(coreState) === coreSnapshot, "creating supplement state must not alter core progress");

ui.markView(state, "A", "read");
assert(ui.getProgress(state, "A").read === true, "reading supplement A must mark only A.read");
assert(ui.getProgress(state, "B").read === false, "reading supplement A must not mark B.read");
assert(ui.getProgress(state, "C").read === false, "reading supplement A must not mark C.read");
ui.markListening(state, "A");
ui.markView(state, "A", "forms");
assert(ui.completion(state, "A").done === 3, "A should have read, listen and forms complete");
assert(ui.completion(state, "B").done === 0, "B must remain untouched");
assert(ui.completion(state, "C").done === 0, "C must remain untouched");

const supplementA = ui.getSupplement("A");
supplementA.quiz.forEach((question, index) => ui.saveQuizAnswer(state, "A", index, question.answer));
assert(ui.finishQuiz(state, "A") === true, "all correct A answers must finish the supplement check");
assert(ui.getProgress(state, "A").practice === true, "answering A quiz must mark practice");
assert(ui.getProgress(state, "A").check === true, "all correct A answers must mark check");
assert(ui.completion(state, "A").percent === 100, "A must be complete after all five steps");
assert(ui.overallCompletion(state).percent === 33, "A complete and B/C untouched must be 33 percent overall");
assert(JSON.stringify(coreState) === coreSnapshot, "supplement quiz work must not alter core progress");

ui.selectSupplement(state, "B");
assert(state.currentCode === "B" && state.view === "read", "selecting B must open B at read view");
ui.markView(state, "B", "forms");
assert(ui.getProgress(state, "B").forms === true, "B forms view must mark only B.forms");
assert(ui.getProgress(state, "A").check === true, "working on B must preserve A completion");
assert(ui.getProgress(state, "C").forms === false, "working on B must not mark C forms");

ui.selectSupplement(state, "C");
assert(state.currentCode === "C" && state.view === "read", "selecting C must open C at read view");
ui.markView(state, "C", "read");
assert(ui.getProgress(state, "C").read === true, "C read view must mark only C.read");
assert(ui.getProgress(state, "B").forms === true, "working on C must preserve B forms progress");

const savedValues = new Map();
const storage = {
  getItem(key) { return savedValues.get(key) ?? null; },
  setItem(key, value) { savedValues.set(key, value); }
};
assert(ui.save(state, storage) === true, "supplement state must save to an available storage adapter");
assert(savedValues.has("tamil-supplements-v42"), "supplement data must use its own storage key");
assert(!savedValues.has("tamil-verb-engine-v2"), "supplement save must never write the core key");
const restored = ui.load(storage);
assert(restored.currentCode === "C", "restored supplement selection mismatch");
assert(restored.progress.A.check === true, "restored A completion missing");
assert(restored.progress.B.forms === true, "restored B forms progress missing");
assert(restored.progress.C.read === true, "restored C read progress missing");

const hub = ui.renderHub(restored);
assert(hub.includes("補講 A") && hub.includes("補講 B") && hub.includes("補講 C"), "hub must list A, B and C");
assert(hub.includes("第8課・第14課"), "hub must show supplement A prerequisites");
assert(hub.includes("第2課・第15課"), "hub must show supplement B prerequisites");
assert(hub.includes("第1課・第16課"), "hub must show supplement C prerequisites");
assert(!hub.includes("第21課") && !hub.includes("第22課") && !hub.includes("第23課"), "hub must not rename supplements as lessons 21–23");
assert(hub.includes("本課20課の完了率とは別に記録します"), "hub must explain separate progress");

const bridgeA = ui.renderBridge(supplementA);
assert(bridgeA.includes('data-go-lesson="8"'), "supplement A bridge must link lesson 8");
assert(bridgeA.includes('data-go-lesson="14"'), "supplement A bridge must link lesson 14");
assert(bridgeA.includes("先に学ぶ本課") && bridgeA.includes("補講後に戻る"), "bridge must show both directions");
const bridgeB = ui.renderBridge(ui.getSupplement("B"));
assert(bridgeB.includes('data-go-lesson="2"'), "supplement B bridge must link lesson 2");
assert(bridgeB.includes('data-go-lesson="15"'), "supplement B bridge must link lesson 15");
const bridgeC = ui.renderBridge(ui.getSupplement("C"));
assert(bridgeC.includes('data-go-lesson="1"'), "supplement C bridge must link lesson 1");
assert(bridgeC.includes('data-go-lesson="16"'), "supplement C bridge must link lesson 16");

const serialized = ui.serialize(restored);
assert(serialized.schemaVersion === 1, "serialized supplement schema mismatch");
assert(Object.keys(serialized.progress).join(",") === "A,B,C", "serialized progress must contain A, B and C");
assert(!Object.prototype.hasOwnProperty.call(serialized, "chapterIndex"), "supplement state must not contain the core chapter index");

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(!indexHtml.includes('src="supplement-ui-v42.js"'), "draft supplement UI must remain outside the public index");

if (failures.length) {
  console.error("Supplement UI validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement UI validation passed: ${assertions} assertions`);
  console.log("- supplement progress uses an isolated storage key");
  console.log("- A/B/C progress and quizzes remain separate from the twenty core lessons");
  console.log("- prerequisite and return links resolve to existing lesson numbers");
  console.log("- draft UI remains outside the public index");
}
