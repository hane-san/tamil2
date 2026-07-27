import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

for (const file of ["tamil-core-v30.js", "lesson12-v36.js", "supplementF-v44.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const supplement = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "F");
const lessonExamples = new Map(
  (context.window.TAMIL_LESSONS_V30 || []).flatMap(lesson => lesson.examples || []).map(example => [example.id, example])
);
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(Boolean(supplement), "supplement F data must load");
assert(supplement?.id === "supplement-f-v44", "supplement F id mismatch");
assert(supplement?.release === "v4.4", "supplement F release mismatch");
assert(supplement?.public === false, "supplement F must remain private");
assert(supplement?.status === "drafting", "supplement F must be drafting");
assert(supplement?.prerequisites.join(",") === "11,12,18", "supplement F prerequisites mismatch");
assert(supplement?.returnToLessons.join(",") === "11,12,18", "supplement F return links mismatch");
assert(supplement?.examples.length === 12, `supplement F has ${supplement?.examples.length} examples; expected 12`);
assert(supplement?.formConfig.patterns.length === 8, `supplement F has ${supplement?.formConfig.patterns.length} form rows; expected 8`);
assert(supplement?.readSections.length === 6, `supplement F has ${supplement?.readSections.length} reading sections; expected 6`);
assert(supplement?.quiz.length === 5, `supplement F has ${supplement?.quiz.length} quiz questions; expected 5`);
assert(supplement?.criticalPoints.length === 3, "supplement F must have three critical points");
assert(new Set(supplement?.examples.map(item => item.id)).size === 12, "supplement F example ids must be unique");
assert(new Set(supplement?.formConfig.patterns.map(item => item.id)).size === 8, "supplement F pattern ids must be unique");

assert(supplement.examples[0] === lessonExamples.get("l12-04"), "l12-04 must be reused by reference");
assert(supplement.examples[3] === lessonExamples.get("l12-07"), "l12-07 must be reused by reference");
const expectedNewIds = ["sf-02", "sf-03", "sf-05", "sf-06", "sf-07", "sf-08", "sf-09", "sf-10", "sf-11", "sf-12"];
assert(supplement.examples.filter(item => item.id.startsWith("sf-")).map(item => item.id).join(",") === expectedNewIds.join(","), "supplement F new example order mismatch");

const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
for (const item of [...supplement.examples.filter(item => item.id.startsWith("sf-")), ...supplement.formConfig.patterns]) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-ASPECT-1999")), `${item.id}: aspect source missing`);
  assert(item.sourceRefs.some(ref => ref.includes("PREDICATE-ENGINE-v1.1")), `${item.id}: predicate-engine source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid confidence.${axis}`);
  }
}

const byId = id => supplement.examples.find(item => item.id === id);
assert(byId("sf-02")?.targetTamil.includes("பாத்திருக்கேன்"), "experience/current-relevance example missing");
assert(byId("sf-05")?.targetTamil.includes("வெச்சிருக்கேன்"), "prepared-result example missing");
assert(byId("sf-06")?.targetTamil.includes("திறந்திருக்கு"), "result-state example missing");
assert(byId("sf-08")?.targetTamil.includes("ஆயிடுச்சு"), "change-of-state āyiṭuccu example missing");
assert(byId("sf-09")?.targetTamil.includes("போயிடுச்சு"), "disappearance pōyiṭuccu example missing");
assert(byId("sf-10")?.targetTamil.includes("மாறிடுச்சு"), "completed-change example missing");

const allExplanation = [
  ...supplement.criticalPoints,
  ...supplement.readSections.flatMap(section => [section.takeaway, ...section.paragraphs])
].join(" ");
assert(allExplanation.includes("பாத்துட்டேன்") && allExplanation.includes("பாத்திருக்கேன்"), "simple completion and experience contrast missing");
assert(allExplanation.includes("வெச்சேன்") && allExplanation.includes("வெச்சிருக்கேன்"), "past preparation and prepared-result contrast missing");
assert(allExplanation.includes("திறந்திருக்கு") && allExplanation.includes("திறந்துடுச்சு"), "result state and change contrast missing");
assert(allExplanation.includes("受け身") && allExplanation.includes("後悔"), "āyiṭuccu/pōyiṭuccu overgeneralisation warning missing");

for (const section of supplement.readSections) {
  assert(Boolean(section.takeaway), `${section.heading}: takeaway missing`);
  assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `${section.heading}: paragraphs missing`);
  assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `${section.heading}: structured roman guide missing`);
}

const miniReading = supplement.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReading?.ids.join(",") === "sf-05,sf-08,sf-12", "supplement F short reading ids mismatch");
assert(miniReading?.ids.every(id => supplement.examples.some(example => example.id === id)), "supplement F short reading id does not resolve");

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
assert(!indexHtml.includes('src="supplementF-v44.js"'), "draft supplement F must remain outside the public index");

if (failures.length) {
  console.error("Supplement F validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement F validation passed: ${assertions} assertions`);
  console.log("- 12 examples, 8 contrast rows, 6 reading sections and 5 diagnostic questions");
  console.log("- completion, experience/current relevance, preparation, result state and change remain distinct");
  console.log("- strict romanisation, Tamil-only TTS, lesson reuse and private draft status verified");
}