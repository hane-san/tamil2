import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

for (const file of ["tamil-core-v30.js", "supplementE-v44.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const supplement = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "E");
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(Boolean(supplement), "supplement E data must load");
assert(supplement?.id === "supplement-e-v44", "supplement E id mismatch");
assert(supplement?.release === "v4.4", "supplement E release mismatch");
assert(supplement?.public === false, "supplement E must remain private");
assert(supplement?.status === "drafting", "supplement E must be drafting");
assert(supplement?.prerequisites.join(",") === "2,16,18", "supplement E prerequisites mismatch");
assert(supplement?.returnToLessons.join(",") === "2,16,18", "supplement E return links mismatch");
assert(supplement?.examples.length === 12, `supplement E has ${supplement?.examples.length} examples; expected 12`);
assert(supplement?.formConfig.patterns.length === 8, `supplement E has ${supplement?.formConfig.patterns.length} form rows; expected 8`);
assert(supplement?.readSections.length === 6, `supplement E has ${supplement?.readSections.length} reading sections; expected 6`);
assert(supplement?.quiz.length === 5, `supplement E has ${supplement?.quiz.length} quiz questions; expected 5`);
assert(supplement?.criticalPoints.length === 3, "supplement E must have three critical points");
assert(new Set(supplement?.examples.map(item => item.id)).size === 12, "supplement E example ids must be unique");
assert(new Set(supplement?.formConfig.patterns.map(item => item.id)).size === 8, "supplement E pattern ids must be unique");

const expectedIds = Array.from({ length: 12 }, (_, index) => `se-${String(index + 1).padStart(2, "0")}`);
assert(supplement?.examples.map(item => item.id).join(",") === expectedIds.join(","), "supplement E example order mismatch");

const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
for (const item of [...supplement.examples, ...supplement.formConfig.patterns]) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: spoken Tamil grammar source missing`);
  assert(item.sourceRefs.some(ref => ref.includes("LANGUAGE-IN-INDIA")), `${item.id}: indefinite-pronoun source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid confidence.${axis}`);
  }
}

assert(supplement.examples[0].targetTamil === "நானும் வர்றேன்.", "additive -um example missing");
assert(supplement.examples[1].targetTamil === "நான் மட்டும் வர்றேன்.", "maṭṭum limitation example missing");
assert(supplement.examples[2].targetTamil === "நான் தான் வர்றேன்.", "tāṉ focus example missing");
assert(supplement.examples[3].targetTamil === "நானே வர்றேன்.", "-ē emphatic example missing");
assert(supplement.examples[5].targetTamil.startsWith("யாரோ"), "specific unknown yārō example missing");
assert(supplement.examples[7].targetTamil.startsWith("யாராவது"), "non-specific yārāvatu example missing");
assert(supplement.examples[9].targetTamil.includes("யாரும் இல்ல"), "negative-polarity yārum example missing");
assert(supplement.examples[10].targetTamil.includes("எதுவும் வேணாம்"), "negative-polarity etuvum example missing");

const allExplanation = [
  ...supplement.criticalPoints,
  ...supplement.readSections.flatMap(section => [section.takeaway, ...section.paragraphs])
].join(" ");
assert(allExplanation.includes("யாரோ") && allExplanation.includes("யாராவது"), "yārō/yārāvatu contrast missing from explanations");
assert(allExplanation.includes("疑問詞＋-உம்＋否定"), "interrogative + -um + negative rule missing");
assert(allExplanation.includes("完全な同義ではありません"), "tāṉ/-ē non-equivalence warning missing");

for (const section of supplement.readSections) {
  assert(Boolean(section.takeaway), `${section.heading}: takeaway missing`);
  assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `${section.heading}: paragraphs missing`);
  assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `${section.heading}: structured roman guide missing`);
}

const miniReading = supplement.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReading?.ids.join(",") === "se-06,se-08,se-12", "supplement E short reading ids mismatch");
assert(miniReading?.ids.every(id => supplement.examples.some(example => example.id === id)), "supplement E short reading id does not resolve");

const expectedFocus = ["形態分解", "機能選択", "実用場面", "混同防止", "総合復習"];
supplement.quiz.forEach((question, index) => {
  assert(question.focus === expectedFocus[index], `quiz ${index + 1}: focus mismatch`);
  assert(question.options.length === 4, `quiz ${index + 1}: expected four options`);
  assert(new Set(question.options).size === 4, `quiz ${index + 1}: duplicate option`);
  assert(question.tags.length === 4, `quiz ${index + 1}: diagnostic tags mismatch`);
  assert(question.answer === 0, `quiz ${index + 1}: canonical answer must be index 0 before display shuffling`);
  assert(Boolean(question.rule), `quiz ${index + 1}: carry-home rule missing`);
});

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
assert(!indexHtml.includes('src="supplementE-v44.js"'), "draft supplement E must remain outside the public index");

if (failures.length) {
  console.error("Supplement E validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement E validation passed: ${assertions} assertions`);
  console.log("- 12 examples, 8 contrast rows, 6 reading sections and 5 diagnostic questions");
  console.log("- additive, limitation, focus, specific/non-specific indefinites and negative polarity remain distinct");
  console.log("- strict romanisation, Tamil-only TTS and private draft status verified");
}
