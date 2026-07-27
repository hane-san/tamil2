import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

for (const file of ["tamil-core-v30.js", "lesson12-v36.js", "supplementF-v44.js", "supplementG-v45.js", "supplementH-v45.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const supplements = context.window.TAMIL_SUPPLEMENTS_V42 || [];
const byCode = code => supplements.find(item => item.code === code);
const supplement = byCode("H");
const supplementF = byCode("F");
const supplementG = byCode("G");
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(Boolean(supplement), "supplement H data must load");
assert(supplement?.id === "supplement-h-v45", "supplement H id mismatch");
assert(supplement?.release === "v4.5", "supplement H release mismatch");
assert(supplement?.public === false, "supplement H must remain private");
assert(supplement?.status === "drafting", "supplement H must be drafting");
assert(supplement?.prerequisites.join(",") === "3,12,17", "supplement H prerequisites mismatch");
assert(supplement?.returnToLessons.join(",") === "3,12,17", "supplement H return links mismatch");
assert(supplement?.examples.length === 12, `supplement H has ${supplement?.examples.length} examples; expected 12`);
assert(supplement?.formConfig.patterns.length === 8, `supplement H has ${supplement?.formConfig.patterns.length} form rows; expected 8`);
assert(supplement?.readSections.length === 6, `supplement H has ${supplement?.readSections.length} reading sections; expected 6`);
assert(supplement?.quiz.length === 5, `supplement H has ${supplement?.quiz.length} quiz questions; expected 5`);
assert(supplement?.criticalPoints.length === 3, "supplement H must have three critical points");
assert(new Set(supplement?.examples.map(item => item.id)).size === 12, "supplement H example ids must be unique");
assert(new Set(supplement?.formConfig.patterns.map(item => item.id)).size === 8, "supplement H pattern ids must be unique");

assert(supplement.examples[8] === supplementF.examples.find(item => item.id === "sf-11"), "sf-11 must be reused by reference");
assert(supplement.examples[9] === supplementG.examples.find(item => item.id === "sg-10"), "sg-10 must be reused by reference");
const expectedNewIds = ["sh-01", "sh-02", "sh-03", "sh-04", "sh-05", "sh-06", "sh-07", "sh-08", "sh-11", "sh-12"];
assert(supplement.examples.filter(item => item.id.startsWith("sh-")).map(item => item.id).join(",") === expectedNewIds.join(","), "supplement H new example order mismatch");

const literaryIds = new Set(["sh-11", "sh-12", "sh-form-passive-reading"]);
const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
for (const item of [...supplement.examples.filter(item => item.id.startsWith("sh-")), ...supplement.formConfig.patterns]) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  const expectedRegister = literaryIds.has(item.id) ? "LT-WR" : "SST";
  assert(item.primaryRegister === expectedRegister, `${item.id}: primaryRegister must be ${expectedRegister}`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-ASPECT-1999")), `${item.id}: self-benefactive aspect source missing`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: spoken Tamil grammar source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  if (literaryIds.has(item.id)) assert(item.styleTags.includes("reading-only"), `${item.id}: literary passive must be reading-only`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid confidence.${axis}`);
  }
}

const byId = id => supplement.examples.find(item => item.id === id);
assert(byId("sh-01")?.targetTamil.includes("எழுதிக்கோங்க"), "self-benefactive writing example missing");
assert(byId("sh-02")?.targetTamil.includes("எழுதுங்க"), "plain command contrast missing");
assert(byId("sh-03")?.targetTamil.includes("வாங்கிக்கோங்க"), "self-benefactive acquisition example missing");
assert(byId("sh-04")?.targetTamil.includes("பாத்துக்கோங்க"), "lexicalised care example missing");
assert(byId("sh-06")?.targetTamil.includes("ஒருத்தருக்கு ஒருத்தர்"), "dative reciprocal example missing");
assert(byId("sh-07")?.targetTamil.includes("ஒருத்தரை ஒருத்தர்"), "accusative reciprocal example missing");
assert(byId("sh-08")?.targetTamil.startsWith("யாரோ"), "unknown-agent example missing");
assert(byId("sh-11")?.targetTamil.includes("திறக்கப்பட்டது"), "passive reading example missing");
assert(byId("sh-12")?.targetTamil.includes("எழுதப்பட்டது"), "second passive reading example missing");

const allExplanation = [
  ...supplement.criticalPoints,
  ...supplement.readSections.flatMap(section => [section.takeaway, ...section.paragraphs, section.note?.body || ""]),
  ...supplement.examples.filter(item => item.id.startsWith("sh-")).map(item => item.grammarNote || "")
].join(" ");
assert(allExplanation.includes("எழுதுங்க") && allExplanation.includes("எழுதிக்கோங்க"), "plain/self-benefactive contrast missing");
assert(allExplanation.includes("再帰代名詞") && allExplanation.includes("தான்"), "reflexive overgeneralisation warning missing");
assert(allExplanation.includes("ஒருத்தருக்கு ஒருத்தர்") && allExplanation.includes("ஒருத்தரை ஒருத்தர்"), "reciprocal case contrast missing");
assert(allExplanation.includes("யாரோ") && allExplanation.includes("திறந்துடுச்சு") && allExplanation.includes("திறக்கப்பட்டது"), "agent visibility contrast missing");
assert(allExplanation.includes("日常会話") && allExplanation.includes("読解"), "passive register warning missing");

for (const section of supplement.readSections) {
  assert(Boolean(section.takeaway), `${section.heading}: takeaway missing`);
  assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `${section.heading}: paragraphs missing`);
  assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `${section.heading}: structured roman guide missing`);
}

const miniReading = supplement.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReading?.ids.join(",") === "sh-08,sf-11,sh-11", "supplement H short reading ids mismatch");
assert(miniReading?.ids.every(id => supplement.examples.some(example => example.id === id)), "supplement H short reading id does not resolve");

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
assert(!indexHtml.includes('src="supplementH-v45.js"'), "draft supplement H must remain outside the public index");

if (failures.length) {
  console.error("Supplement H validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement H validation passed: ${assertions} assertions`);
  console.log("- 12 examples, 8 contrast rows, 6 reading sections and 5 diagnostic questions");
  console.log("- self-benefactive, reciprocal case, agent visibility and passive reading remain distinct");
  console.log("- strict romanisation, Tamil-only TTS, cross-supplement reuse and private draft status verified");
}