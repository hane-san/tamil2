import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

const runtimeFiles = [
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
  "supplementH-clarity-v45.js"
];
for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const catalog = context.window.TAMIL_SUPPLEMENT_CATALOG_V42;
const loaded = context.window.TAMIL_SUPPLEMENTS_V42 || [];
const byCode = code => loaded.find(item => item.code === code);
const supplementA = byCode("A");
const supplementB = byCode("B");
const supplementC = byCode("C");
const supplementD = byCode("D");
const supplementE = byCode("E");
const supplementF = byCode("F");
const supplementG = byCode("G");
const supplementH = byCode("H");
const lessonExamples = new Map(
  (context.window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
);
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(catalog?.version === "4.5.0-dev", "supplement catalog version must be 4.5.0-dev");
assert(catalog?.public === false, "incomplete supplements must not be public");
assert(catalog?.numberingPolicy === "supplement-codes-not-lessons-21-to-28", "supplements must remain outside lesson numbering");
assert(catalog?.legacyTravelPolicy === "scene-review-packs-after-supplements", "legacy travel chapters must remain scene review material");
assert(catalog?.progressPolicy === "keep-core-and-supplement-progress-separate", "core and supplement progress must remain separate");

const supplements = catalog?.supplements || [];
assert(supplements.length === 8, `supplement count is ${supplements.length}; expected 8`);
assert(supplements.map(item => item.code).join("") === "ABCDEFGH", "supplement codes must be A–H in order");
assert(supplements.filter(item => item.release === "v4.2").map(item => item.code).join("") === "AB", "v4.2 must contain A and B");
assert(supplements.filter(item => item.release === "v4.3").map(item => item.code).join("") === "CD", "v4.3 must contain C and D");
assert(supplements.filter(item => item.release === "v4.4").map(item => item.code).join("") === "EF", "v4.4 must contain E and F");
assert(supplements.filter(item => item.release === "v4.5").map(item => item.code).join("") === "GH", "v4.5 must contain G and H");

for (const supplement of supplements) {
  assert(/^[A-H]$/.test(supplement.code), `${supplement.code}: invalid supplement code`);
  assert(Boolean(supplement.title), `${supplement.code}: title missing`);
  assert(Boolean(supplement.entryQuestion), `${supplement.code}: entry question missing`);
  assert(Array.isArray(supplement.prerequisites) && supplement.prerequisites.length > 0, `${supplement.code}: prerequisites missing`);
  assert(Array.isArray(supplement.returnToLessons) && supplement.returnToLessons.length > 0, `${supplement.code}: return links missing`);
  assert(supplement.prerequisites.every(number => Number.isInteger(number) && number >= 1 && number <= 20), `${supplement.code}: prerequisite outside lessons 1–20`);
  assert(supplement.returnToLessons.every(number => supplement.prerequisites.includes(number)), `${supplement.code}: return link must be a prerequisite`);
  assert(Array.isArray(supplement.legacyRefs) && supplement.legacyRefs.length > 0, `${supplement.code}: legacy provenance missing`);
  assert(Array.isArray(supplement.sourceLessons) && supplement.sourceLessons.length > 0, `${supplement.code}: current source lessons missing`);
  assert(Array.isArray(supplement.excludedScope) && supplement.excludedScope.length > 0, `${supplement.code}: excluded scope missing`);
  assert(["drafting", "planned"].includes(supplement.status), `${supplement.code}: invalid status ${supplement.status}`);
}
assert(supplements.filter(item => item.status === "drafting").map(item => item.code).join("") === "ABCDEFGH", "A–H should be drafting");

const expected = {
  A: { id: "supplement-a-v42", prereq: "8,14", examples: 10, patterns: 10, reused: [[0, "l8-08"], [1, "l8-09"]], newIds: ["sa-03", "sa-04", "sa-05", "sa-06", "sa-07", "sa-08", "sa-09", "sa-10"], source: "PREDICATE-ENGINE-v1.1", mini: "sa-05,sa-08,sa-10" },
  B: { id: "supplement-b-v42", prereq: "2,15", examples: 12, patterns: 6, reused: [[1, "l2-09"], [6, "l2-11"], [7, "l15-11"], [11, "l15-12"]], newIds: ["sb-01", "sb-03", "sb-04", "sb-05", "sb-06", "sb-09", "sb-10", "sb-11"], source: "TAMIL-INTEGRATED-v2.0-rc.1", mini: "sb-04,sb-05,sb-10" },
  C: { id: "supplement-c-v43", prereq: "1,16", examples: 12, patterns: 8, reused: [[0, "l1-09"], [1, "l16-01"], [11, "l16-08"]], newIds: ["sc-03", "sc-04", "sc-05", "sc-06", "sc-07", "sc-08", "sc-09", "sc-10", "sc-11"], source: "CORE-CURRICULUM-v1.1", mini: "sc-05,sc-07,sc-08" },
  D: { id: "supplement-d-v43", prereq: "16", examples: 12, patterns: 8, reused: [[0, "l16-03"], [1, "l16-10"]], newIds: ["sd-03", "sd-04", "sd-05", "sd-06", "sd-07", "sd-08", "sd-09", "sd-10", "sd-11", "sd-12"], source: "PENN-PLC-TAMIL", mini: "sd-03,sd-10,l16-10" },
  E: { id: "supplement-e-v44", prereq: "2,16,18", examples: 12, patterns: 8, reused: [], newIds: ["se-01", "se-02", "se-03", "se-04", "se-05", "se-06", "se-07", "se-08", "se-09", "se-10", "se-11", "se-12"], source: "LANGUAGE-IN-INDIA", mini: "se-06,se-08,se-12" },
  F: { id: "supplement-f-v44", prereq: "11,12,18", examples: 12, patterns: 8, reused: [[0, "l12-04"], [3, "l12-07"]], newIds: ["sf-02", "sf-03", "sf-05", "sf-06", "sf-07", "sf-08", "sf-09", "sf-10", "sf-11", "sf-12"], source: "SCHIFFMAN-ASPECT-1999", mini: "sf-05,sf-08,sf-12" },
  G: { id: "supplement-g-v45", prereq: "7,11,12", examples: 12, patterns: 8, reused: [], newIds: ["sg-01", "sg-02", "sg-03", "sg-04", "sg-05", "sg-06", "sg-07", "sg-08", "sg-09", "sg-10", "sg-11", "sg-12"], source: "LANGUAGE-IN-INDIA", mini: "sg-11,sg-01,sg-02" },
  H: { id: "supplement-h-v45", prereq: "3,12,17", examples: 12, patterns: 8, reused: [], newIds: ["sh-01", "sh-02", "sh-03", "sh-04", "sh-05", "sh-06", "sh-07", "sh-08", "sh-11", "sh-12"], source: "SCHIFFMAN-ASPECT-1999", mini: "sh-08,sf-11,sh-11" }
};

const literaryIds = new Set(["sh-11", "sh-12", "sh-form-passive-reading"]);
const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
function validateEntry(item, label, requiredSource) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  const expectedRegister = literaryIds.has(item.id) ? "LT-WR" : "SST";
  assert(item.primaryRegister === expectedRegister, `${item.id}: primaryRegister must be ${expectedRegister}`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes(requiredSource)), `${item.id}: required source ${requiredSource} missing`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: spoken Tamil grammar source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid ${label} confidence.${axis}`);
  }
}

for (const code of ["A", "B", "C", "D", "E", "F", "G", "H"]) {
  const supplement = byCode(code);
  const spec = expected[code];
  assert(Boolean(supplement), `supplement ${code} data must load`);
  assert(supplement.id === spec.id, `supplement ${code} id mismatch`);
  assert(supplement.prerequisites.join(",") === spec.prereq, `supplement ${code} prerequisites mismatch`);
  assert(supplement.returnToLessons.join(",") === spec.prereq, `supplement ${code} return links mismatch`);
  assert(supplement.examples.length === spec.examples, `supplement ${code} example count mismatch`);
  assert(supplement.formConfig.patterns.length === spec.patterns, `supplement ${code} pattern count mismatch`);
  assert(supplement.readSections.length === 6, `supplement ${code} must have six reading sections`);
  assert(supplement.quiz.length === 5, `supplement ${code} must have five quiz questions`);
  assert(supplement.criticalPoints.length === 3, `supplement ${code} must have three critical points`);
  assert(new Set(supplement.examples.map(item => item.id)).size === supplement.examples.length, `supplement ${code} example ids must be unique`);
  assert(new Set(supplement.formConfig.patterns.map(item => item.id)).size === supplement.formConfig.patterns.length, `supplement ${code} pattern ids must be unique`);
  for (const [index, lessonId] of spec.reused) {
    assert(supplement.examples[index] === lessonExamples.get(lessonId), `${lessonId} must be reused by reference in supplement ${code}`);
  }
  const actualNewIds = supplement.examples.filter(item => item.id.startsWith(`s${code.toLowerCase()}-`)).map(item => item.id);
  assert(actualNewIds.join(",") === spec.newIds.join(","), `supplement ${code} new example order mismatch`);
  const newEntries = supplement.examples.filter(item => item.id.startsWith(`s${code.toLowerCase()}-`));
  for (const item of [...newEntries, ...supplement.formConfig.patterns]) validateEntry(item, `supplement ${code}`, spec.source);
  for (const section of supplement.readSections) {
    assert(Boolean(section.takeaway), `supplement ${code} ${section.heading}: takeaway missing`);
    assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `supplement ${code} ${section.heading}: paragraphs missing`);
    assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `supplement ${code} ${section.heading}: structured roman guide missing`);
  }
  const mini = supplement.readSections.find(section => section.miniReading)?.miniReading;
  assert(mini?.ids.join(",") === spec.mini, `supplement ${code} short reading ids mismatch`);
  assert(mini.ids.every(id => supplement.examples.some(example => example.id === id)), `supplement ${code} short reading id does not resolve`);
}

const expectedFocus = ["形態分解", "機能選択", "実用場面", "混同防止", "総合復習"];
for (const supplement of [supplementA, supplementB, supplementC, supplementD, supplementE, supplementF, supplementG, supplementH]) {
  supplement.quiz.forEach((question, index) => {
    assert(question.focus === expectedFocus[index], `supplement ${supplement.code} quiz ${index + 1}: focus mismatch`);
    assert(question.options.length === 4, `supplement ${supplement.code} quiz ${index + 1}: expected four options`);
    assert(new Set(question.options).size === 4, `supplement ${supplement.code} quiz ${index + 1}: duplicate option`);
    assert(question.tags.length === 4, `supplement ${supplement.code} quiz ${index + 1}: diagnostic tags mismatch`);
    assert(question.answer === 0, `supplement ${supplement.code} quiz ${index + 1}: canonical answer must remain index 0`);
    assert(Boolean(question.rule), `supplement ${supplement.code} quiz ${index + 1}: carry-home rule missing`);
  });
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const file of ["supplements-v42.js", "supplementA-v42.js", "supplementB-v42.js", "supplementC-v43.js", "supplementD-v43.js", "supplementE-v44.js", "supplementF-v44.js", "supplementG-v45.js", "supplementH-v45.js", "supplementH-clarity-v45.js"]) {
  assert(!indexHtml.includes(`src="${file}"`), `draft ${file} must not load in public index`);
}

if (failures.length) {
  console.error("Supplement validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement validation passed: ${assertions} assertions`);
  console.log("- A–H catalogued without changing lesson numbering");
  console.log("- supplements A–H: explicit examples, form rows, six reading sections and five diagnostic questions");
  console.log("- validated core and supplement examples remain reused by reference; draft files remain outside the public index");
}