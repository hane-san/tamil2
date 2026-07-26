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
  "lesson08-v33.js",
  "lesson14-v37.js",
  "supplements-v42.js",
  "supplementA-v42.js"
];
for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const catalog = context.window.TAMIL_SUPPLEMENT_CATALOG_V42;
const supplementA = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "A");
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

const expectedNewIds = ["sa-03", "sa-04", "sa-05", "sa-06", "sa-07", "sa-08", "sa-09", "sa-10"];
assert(supplementA.examples.slice(2).map(item => item.id).join(",") === expectedNewIds.join(","), "supplement A new example order mismatch");
assert(new Set(supplementA.examples.map(item => item.id)).size === supplementA.examples.length, "supplement A example ids must be unique");
assert(new Set(supplementA.formConfig.patterns.map(item => item.id)).size === supplementA.formConfig.patterns.length, "supplement A pattern ids must be unique");

const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
for (const item of [...supplementA.examples.slice(2), ...supplementA.formConfig.patterns]) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes("PREDICATE-ENGINE-v1.1")), `${item.id}: predicate engine source missing`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: spoken Tamil grammar source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid public-candidate confidence.${axis}`);
  }
}

for (const section of supplementA.readSections) {
  assert(Boolean(section.takeaway), `supplement A ${section.heading}: takeaway missing`);
  assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `supplement A ${section.heading}: paragraphs missing`);
  assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `supplement A ${section.heading}: structured roman guide missing`);
}
const miniReading = supplementA.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReading?.ids.join(",") === "sa-05,sa-08,sa-10", "supplement A short reading ids mismatch");
assert(miniReading.ids.every(id => supplementA.examples.some(example => example.id === id)), "supplement A short reading id does not resolve");

const expectedFocus = ["形態分解", "機能選択", "実用場面", "混同防止", "総合復習"];
supplementA.quiz.forEach((question, index) => {
  assert(question.focus === expectedFocus[index], `supplement A quiz ${index + 1}: focus mismatch`);
  assert(question.options.length === 4, `supplement A quiz ${index + 1}: expected four options`);
  assert(new Set(question.options).size === 4, `supplement A quiz ${index + 1}: duplicate option`);
  assert(question.tags.length === 4, `supplement A quiz ${index + 1}: diagnostic tags mismatch`);
  assert(question.answer === 0, `supplement A quiz ${index + 1}: canonical answer must remain index 0 before display shuffling`);
  assert(Boolean(question.rule), `supplement A quiz ${index + 1}: carry-home rule missing`);
});

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(!indexHtml.includes('src="supplements-v42.js"'), "draft supplement catalog must not load in public index");
assert(!indexHtml.includes('src="supplementA-v42.js"'), "draft supplement A must not load in public index");

if (failures.length) {
  console.error("Supplement validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`v4.2 supplement validation passed: ${assertions} assertions`);
  console.log("- A–H catalogued without changing lesson numbering");
  console.log("- supplement A: 10 examples, 10 form rows, 6 reading sections, 5 diagnostic questions");
  console.log("- lessons 8 and 14 reused by reference; draft files remain outside the public index");
}
