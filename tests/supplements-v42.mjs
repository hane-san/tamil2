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
  "lesson02-v30.js",
  "lesson08-v33.js",
  "lesson14-v37.js",
  "lesson15-v38.js",
  "supplements-v42.js",
  "supplementA-v42.js",
  "supplementB-v42.js"
];
for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const catalog = context.window.TAMIL_SUPPLEMENT_CATALOG_V42;
const supplementA = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "A");
const supplementB = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "B");
const lessonExamples = new Map(
  (context.window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
);
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(catalog?.version === "4.2.0-dev", "supplement catalog version must be 4.2.0-dev");
assert(catalog?.public === false, "incomplete supplements must not be public");
assert(catalog?.numberingPolicy === "supplement-codes-not-lessons-21-to-28", "supplements must remain outside lesson numbering");
assert(catalog?.legacyTravelPolicy === "scene-review-packs-after-supplements", "legacy travel chapters must remain scene review material");
assert(catalog?.progressPolicy === "keep-core-and-supplement-progress-separate", "core and supplement progress must remain separate");

const supplements = catalog?.supplements || [];
assert(supplements.length === 8, `supplement count is ${supplements.length}; expected 8`);
assert(supplements.map(item => item.code).join("") === "ABCDEFGH", "supplement codes must be A–H in order");
assert(supplements.filter(item => item.release === "v4.2").map(item => item.code).join("") === "AB", "v4.2 must contain supplements A and B");
assert(supplements.filter(item => item.release === "v4.3").map(item => item.code).join("") === "CD", "v4.3 must contain supplements C and D");
assert(supplements.filter(item => item.release === "v4.4").map(item => item.code).join("") === "EF", "v4.4 must contain supplements E and F");
assert(supplements.filter(item => item.release === "v4.5").map(item => item.code).join("") === "GH", "v4.5 must contain supplements G and H");

for (const supplement of supplements) {
  assert(/^[A-H]$/.test(supplement.code), `${supplement.code}: invalid supplement code`);
  assert(Boolean(supplement.title), `${supplement.code}: title missing`);
  assert(Boolean(supplement.entryQuestion), `${supplement.code}: entry question missing`);
  assert(Array.isArray(supplement.prerequisites) && supplement.prerequisites.length > 0, `${supplement.code}: prerequisites missing`);
  assert(Array.isArray(supplement.returnToLessons) && supplement.returnToLessons.length > 0, `${supplement.code}: return links missing`);
  assert(supplement.prerequisites.every(number => Number.isInteger(number) && number >= 1 && number <= 20), `${supplement.code}: prerequisite outside lessons 1–20`);
  assert(supplement.returnToLessons.every(number => supplement.prerequisites.includes(number)), `${supplement.code}: return link must resolve to a prerequisite lesson`);
  assert(Array.isArray(supplement.legacyRefs) && supplement.legacyRefs.length > 0, `${supplement.code}: legacy provenance missing`);
  assert(Array.isArray(supplement.sourceLessons) && supplement.sourceLessons.length > 0, `${supplement.code}: current source lessons missing`);
  assert(Array.isArray(supplement.excludedScope) && supplement.excludedScope.length > 0, `${supplement.code}: excluded scope missing`);
  assert(["drafting", "planned"].includes(supplement.status), `${supplement.code}: invalid status ${supplement.status}`);
}
assert(supplements.filter(item => item.status === "drafting").map(item => item.code).join("") === "AB", "only A and B should be drafting in v4.2");

assert(Boolean(supplementA), "supplement A data must load");
assert(supplementA.id === "supplement-a-v42", "supplement A id mismatch");
assert(supplementA.prerequisites.join(",") === "8,14", "supplement A prerequisites must be lessons 8 and 14");
assert(supplementA.returnToLessons.join(",") === "8,14", "supplement A return links must be lessons 8 and 14");
assert(supplementA.examples.length === 10, `supplement A has ${supplementA.examples.length} examples; expected 10`);
assert(supplementA.formConfig.patterns.length === 10, `supplement A has ${supplementA.formConfig.patterns.length} patterns; expected 10`);
assert(supplementA.readSections.length === 6, `supplement A has ${supplementA.readSections.length} reading sections; expected 6`);
assert(supplementA.quiz.length === 5, `supplement A has ${supplementA.quiz.length} quiz questions; expected 5`);
assert(supplementA.criticalPoints.length === 3, "supplement A must have three critical points");
assert(supplementA.examples[0] === lessonExamples.get("l8-08"), "l8-08 must be reused by reference, not copied");
assert(supplementA.examples[1] === lessonExamples.get("l8-09"), "l8-09 must be reused by reference, not copied");

const expectedNewAIds = ["sa-03", "sa-04", "sa-05", "sa-06", "sa-07", "sa-08", "sa-09", "sa-10"];
assert(supplementA.examples.slice(2).map(item => item.id).join(",") === expectedNewAIds.join(","), "supplement A new example order mismatch");

assert(Boolean(supplementB), "supplement B data must load");
assert(supplementB.id === "supplement-b-v42", "supplement B id mismatch");
assert(supplementB.prerequisites.join(",") === "2,15", "supplement B prerequisites must be lessons 2 and 15");
assert(supplementB.returnToLessons.join(",") === "2,15", "supplement B return links must be lessons 2 and 15");
assert(supplementB.examples.length === 12, `supplement B has ${supplementB.examples.length} examples; expected 12`);
assert(supplementB.formConfig.patterns.length === 6, `supplement B has ${supplementB.formConfig.patterns.length} patterns; expected 6`);
assert(supplementB.readSections.length === 6, `supplement B has ${supplementB.readSections.length} reading sections; expected 6`);
assert(supplementB.quiz.length === 5, `supplement B has ${supplementB.quiz.length} quiz questions; expected 5`);
assert(supplementB.criticalPoints.length === 3, "supplement B must have three critical points");
assert(supplementB.examples[1] === lessonExamples.get("l2-09"), "l2-09 must be reused by reference, not copied");
assert(supplementB.examples[6] === lessonExamples.get("l2-11"), "l2-11 must be reused by reference, not copied");
assert(supplementB.examples[7] === lessonExamples.get("l15-11"), "l15-11 must be reused by reference, not copied");
assert(supplementB.examples[11] === lessonExamples.get("l15-12"), "l15-12 must be reused by reference, not copied");

const expectedNewBIds = ["sb-01", "sb-03", "sb-04", "sb-05", "sb-06", "sb-09", "sb-10", "sb-11"];
assert(supplementB.examples.filter(item => item.id.startsWith("sb-")).map(item => item.id).join(",") === expectedNewBIds.join(","), "supplement B new example order mismatch");

for (const supplement of [supplementA, supplementB]) {
  assert(new Set(supplement.examples.map(item => item.id)).size === supplement.examples.length, `supplement ${supplement.code} example ids must be unique`);
  assert(new Set(supplement.formConfig.patterns.map(item => item.id)).size === supplement.formConfig.patterns.length, `supplement ${supplement.code} pattern ids must be unique`);
}

const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
function validateEntry(item, label, requiredSource) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes(requiredSource)), `${item.id}: required source ${requiredSource} missing`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: spoken Tamil grammar source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid ${label} confidence.${axis}`);
  }
}

for (const item of [...supplementA.examples.slice(2), ...supplementA.formConfig.patterns]) {
  validateEntry(item, "supplement A", "PREDICATE-ENGINE-v1.1");
}
for (const item of [...supplementB.examples.filter(item => item.id.startsWith("sb-")), ...supplementB.formConfig.patterns]) {
  validateEntry(item, "supplement B", "TAMIL-INTEGRATED-v2.0-rc.1");
}

for (const supplement of [supplementA, supplementB]) {
  for (const section of supplement.readSections) {
    assert(Boolean(section.takeaway), `supplement ${supplement.code} ${section.heading}: takeaway missing`);
    assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `supplement ${supplement.code} ${section.heading}: paragraphs missing`);
    assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `supplement ${supplement.code} ${section.heading}: structured roman guide missing`);
  }
}

const miniReadingA = supplementA.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReadingA?.ids.join(",") === "sa-05,sa-08,sa-10", "supplement A short reading ids mismatch");
assert(miniReadingA.ids.every(id => supplementA.examples.some(example => example.id === id)), "supplement A short reading id does not resolve");
const miniReadingB = supplementB.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReadingB?.ids.join(",") === "sb-04,sb-05,sb-10", "supplement B short reading ids mismatch");
assert(miniReadingB.ids.every(id => supplementB.examples.some(example => example.id === id)), "supplement B short reading id does not resolve");

const expectedFocus = ["形態分解", "機能選択", "実用場面", "混同防止", "総合復習"];
for (const supplement of [supplementA, supplementB]) {
  supplement.quiz.forEach((question, index) => {
    assert(question.focus === expectedFocus[index], `supplement ${supplement.code} quiz ${index + 1}: focus mismatch`);
    assert(question.options.length === 4, `supplement ${supplement.code} quiz ${index + 1}: expected four options`);
    assert(new Set(question.options).size === 4, `supplement ${supplement.code} quiz ${index + 1}: duplicate option`);
    assert(question.tags.length === 4, `supplement ${supplement.code} quiz ${index + 1}: diagnostic tags mismatch`);
    assert(question.answer === 0, `supplement ${supplement.code} quiz ${index + 1}: canonical answer must remain index 0 before display shuffling`);
    assert(Boolean(question.rule), `supplement ${supplement.code} quiz ${index + 1}: carry-home rule missing`);
  });
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(!indexHtml.includes('src="supplements-v42.js"'), "draft supplement catalog must not load in public index");
assert(!indexHtml.includes('src="supplementA-v42.js"'), "draft supplement A must not load in public index");
assert(!indexHtml.includes('src="supplementB-v42.js"'), "draft supplement B must not load in public index");

if (failures.length) {
  console.error("Supplement validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`v4.2 supplement validation passed: ${assertions} assertions`);
  console.log("- A–H catalogued without changing lesson numbering");
  console.log("- supplement A: 10 examples, 10 form rows, 6 reading sections, 5 diagnostic questions");
  console.log("- supplement B: 12 examples, 6 series rows, 6 reading sections, 5 diagnostic questions");
  console.log("- lessons 2, 8, 14, and 15 reused by reference; draft files remain outside the public index");
}
