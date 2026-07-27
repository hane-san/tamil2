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
  "lesson12-v36.js",
  "lesson14-v37.js",
  "lesson15-v38.js",
  "lesson16-v38.js",
  "supplements-v42.js",
  "supplementA-v42.js",
  "supplementB-v42.js",
  "supplementC-v43.js",
  "supplementD-v43.js",
  "supplementE-v44.js",
  "supplementF-v44.js",
  "supplementG-v45.js",
  "supplementH-v45.js",
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
assert(Object.keys(state.progress).join(",") === "A,B,C,D,E,F,G,H", "loaded supplement A–H progress should be created");
assert(ui.overallCompletion(state).percent === 0, "new supplement progress must start at zero");
assert(JSON.stringify(coreState) === coreSnapshot, "creating supplement state must not alter core progress");

ui.markView(state, "A", "read");
assert(ui.getProgress(state, "A").read === true, "reading supplement A must mark only A.read");
for (const code of ["B", "C", "D", "E", "F", "G", "H"]) assert(ui.getProgress(state, code).read === false, `reading A must not mark ${code}.read`);
ui.markListening(state, "A");
ui.markView(state, "A", "forms");
assert(ui.completion(state, "A").done === 3, "A should have read, listen and forms complete");
for (const code of ["B", "C", "D", "E", "F", "G", "H"]) assert(ui.completion(state, code).done === 0, `${code} must remain untouched`);

const supplementA = ui.getSupplement("A");
supplementA.quiz.forEach((question, index) => ui.saveQuizAnswer(state, "A", index, question.answer));
assert(ui.finishQuiz(state, "A") === true, "all correct A answers must finish the supplement check");
assert(ui.getProgress(state, "A").practice === true, "answering A quiz must mark practice");
assert(ui.getProgress(state, "A").check === true, "all correct A answers must mark check");
assert(ui.completion(state, "A").percent === 100, "A must be complete after all five steps");
assert(ui.overallCompletion(state).percent === 13, "A complete and B–H untouched must round to 13 percent overall");
assert(JSON.stringify(coreState) === coreSnapshot, "supplement quiz work must not alter core progress");

ui.selectSupplement(state, "B");
ui.markView(state, "B", "forms");
assert(state.currentCode === "B" && ui.getProgress(state, "B").forms === true, "B forms progress missing");
assert(["C", "D", "E", "F", "G", "H"].every(code => ui.getProgress(state, code).forms === false), "working on B must not mark C–H forms");

for (const code of ["C", "D", "E", "F", "G", "H"]) {
  ui.selectSupplement(state, code);
  ui.markView(state, code, "read");
  assert(state.currentCode === code && ui.getProgress(state, code).read === true, `${code} read progress missing`);
}
assert(ui.getProgress(state, "A").check === true, "working through later supplements must preserve A completion");
assert(ui.getProgress(state, "B").forms === true, "working through later supplements must preserve B forms progress");

const savedValues = new Map();
const storage = {
  getItem(key) { return savedValues.get(key) ?? null; },
  setItem(key, value) { savedValues.set(key, value); }
};
assert(ui.save(state, storage) === true, "supplement state must save to an available storage adapter");
assert(savedValues.has("tamil-supplements-v42"), "supplement data must use its own storage key");
assert(!savedValues.has("tamil-verb-engine-v2"), "supplement save must never write the core key");
const restored = ui.load(storage);
assert(restored.currentCode === "H", "restored supplement selection mismatch");
assert(restored.progress.A.check === true, "restored A completion missing");
assert(restored.progress.B.forms === true, "restored B forms progress missing");
for (const code of ["C", "D", "E", "F", "G", "H"]) assert(restored.progress[code].read === true, `restored ${code} read progress missing`);

const hub = ui.renderHub(restored);
for (const code of ["A", "B", "C", "D", "E", "F", "G", "H"]) assert(hub.includes(`補講 ${code}`), `hub must list supplement ${code}`);
assert(hub.includes("第8課・第14課"), "hub must show supplement A prerequisites");
assert(hub.includes("第2課・第15課"), "hub must show supplement B prerequisites");
assert(hub.includes("第1課・第16課"), "hub must show supplement C prerequisites");
assert(hub.includes("前提：第16課"), "hub must show supplement D prerequisite");
assert(hub.includes("第2課・第16課・第18課"), "hub must show supplement E prerequisites");
assert(hub.includes("第11課・第12課・第18課"), "hub must show supplement F prerequisites");
assert(hub.includes("第7課・第11課・第12課"), "hub must show supplement G prerequisites");
assert(hub.includes("第3課・第12課・第17課"), "hub must show supplement H prerequisites");
for (const number of [21, 22, 23, 24, 25, 26, 27, 28]) assert(!hub.includes(`第${number}課`), `hub must not rename a supplement as lesson ${number}`);
assert(hub.includes("本課20課の完了率とは別に記録します"), "hub must explain separate progress");

const expectedLinks = {
  A: [8, 14],
  B: [2, 15],
  C: [1, 16],
  D: [16],
  E: [2, 16, 18],
  F: [11, 12, 18],
  G: [7, 11, 12],
  H: [3, 12, 17]
};
for (const [code, lessons] of Object.entries(expectedLinks)) {
  const bridge = ui.renderBridge(ui.getSupplement(code));
  for (const lesson of lessons) assert(bridge.includes(`data-go-lesson="${lesson}"`), `supplement ${code} bridge must link lesson ${lesson}`);
  assert(bridge.includes("先に学ぶ本課") && bridge.includes("補講後に戻る"), `supplement ${code} bridge must show both directions`);
}

const serialized = ui.serialize(restored);
assert(serialized.schemaVersion === 1, "serialized supplement schema mismatch");
assert(Object.keys(serialized.progress).join(",") === "A,B,C,D,E,F,G,H", "serialized progress must contain A–H");
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
  console.log("- A/B/C/D/E/F/G/H progress and quizzes remain separate from the twenty core lessons");
  console.log("- prerequisite and return links resolve to existing lesson numbers");
  console.log("- draft UI remains outside the public index");
}