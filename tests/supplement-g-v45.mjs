import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);

for (const file of ["tamil-core-v30.js", "supplements-v42.js", "supplementG-v45.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const supplement = (context.window.TAMIL_SUPPLEMENTS_V42 || []).find(item => item.code === "G");
const catalogEntry = context.window.TAMIL_SUPPLEMENT_CATALOG_V42?.supplements.find(item => item.code === "G");
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

assert(Boolean(supplement), "supplement G data must load");
assert(supplement?.id === "supplement-g-v45", "supplement G id mismatch");
assert(supplement?.release === "v4.5", "supplement G release mismatch");
assert(supplement?.public === false, "supplement G must remain private");
assert(supplement?.status === "drafting", "supplement G must be drafting");
assert(supplement?.prerequisites.join(",") === "7,11,12", "supplement G prerequisites mismatch");
assert(supplement?.returnToLessons.join(",") === "7,11,12", "supplement G return links mismatch");
assert(supplement?.examples.length === 12, `supplement G has ${supplement?.examples.length} examples; expected 12`);
assert(supplement?.formConfig.patterns.length === 8, `supplement G has ${supplement?.formConfig.patterns.length} form rows; expected 8`);
assert(supplement?.readSections.length === 6, `supplement G has ${supplement?.readSections.length} reading sections; expected 6`);
assert(supplement?.quiz.length === 5, `supplement G has ${supplement?.quiz.length} quiz questions; expected 5`);
assert(supplement?.criticalPoints.length === 3, "supplement G must have three critical points");
assert(new Set(supplement?.examples.map(item => item.id)).size === 12, "supplement G example ids must be unique");
assert(new Set(supplement?.formConfig.patterns.map(item => item.id)).size === 8, "supplement G pattern ids must be unique");

const expectedIds = Array.from({ length: 12 }, (_, index) => `sg-${String(index + 1).padStart(2, "0")}`);
assert(supplement?.examples.map(item => item.id).join(",") === expectedIds.join(","), "supplement G example order mismatch");

const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
for (const item of [...supplement.examples, ...supplement.formConfig.patterns]) {
  assert(item.ttsText === item.targetTamil, `${item.id}: TTS must use targetTamil only`);
  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(item.sourceRefs.some(ref => ref.includes("SCHIFFMAN-SPOKEN-TAMIL")), `${item.id}: transitivity source missing`);
  assert(item.sourceRefs.some(ref => ref.includes("LANGUAGE-IN-INDIA")), `${item.id}: causative-auxiliary source missing`);
  assert(item.orthographicRoman === context.window.TAMIL_V30.transliterateTamil(item.targetTamil), `${item.id}: strict roman mismatch`);
  assert(context.window.TAMIL_V30.stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman, `${item.id}: structured roman changes the surface string`);
  for (const axis of confidenceAxes) {
    assert(["A", "B", "C"].includes(item.confidence?.[axis]), `${item.id}: invalid confidence.${axis}`);
  }
}

const byId = id => supplement.examples.find(item => item.id === id);
assert(byId("sg-01")?.targetTamil.includes("படிக்க வைக்கறாங்க"), "analytic causative example missing");
assert(byId("sg-02")?.targetTamil.includes("சிரிக்க வைக்குது"), "nonhuman-causer example missing");
assert(byId("sg-03")?.targetTamil.includes("நின்னது"), "intransitive stop example missing");
assert(byId("sg-04")?.targetTamil.includes("நிறுத்தினாரு"), "transitive stop example missing");
assert(byId("sg-05")?.targetTamil.includes("ஓடுது"), "run example missing");
assert(byId("sg-06")?.targetTamil.includes("ஓட்டுறாரு"), "drive example missing");
assert(byId("sg-07")?.targetTamil.includes("மாறிடுச்சு"), "intransitive change example missing");
assert(byId("sg-08")?.targetTamil.includes("மாத்தினாங்க"), "transitive change example missing");
assert(byId("sg-09")?.targetTamil === "கதவு திறந்தது.", "same-stem intransitive open example missing");
assert(byId("sg-10")?.targetTamil === "நான் கதவைத் திறந்தேன்.", "same-stem transitive open example missing");
assert(byId("sg-11")?.targetTamil.includes("எழுந்தது"), "lexical intransitive wake example missing");
assert(byId("sg-12")?.targetTamil.includes("எழுப்பினாங்க"), "lexical causative wake example missing");

const allExplanation = [
  ...supplement.criticalPoints,
  ...supplement.readSections.flatMap(section => [section.takeaway, ...section.paragraphs, section.note?.body || ""]),
  ...supplement.examples.map(item => item.grammarNote || "")
].join(" ");
assert(allExplanation.includes("使役対象の格") && allExplanation.includes("一律"), "causee-case overgeneralisation warning missing");
assert(allExplanation.includes("万能") || allExplanation.includes("機械適用"), "mechanical derivation warning missing");
assert(allExplanation.includes("同じ語幹") && allExplanation.includes("格と参加者"), "same-stem valency explanation missing");
assert(catalogEntry?.excludedScope.includes("受け身との混同"), "passive-confusion exclusion missing from catalog");

for (const section of supplement.readSections) {
  assert(Boolean(section.takeaway), `${section.heading}: takeaway missing`);
  assert(Array.isArray(section.paragraphs) && section.paragraphs.length > 0, `${section.heading}: paragraphs missing`);
  assert([section.takeaway, ...section.paragraphs].join(" ").includes("roman-inline"), `${section.heading}: structured roman guide missing`);
}

const miniReading = supplement.readSections.find(section => section.miniReading)?.miniReading;
assert(miniReading?.ids.join(",") === "sg-11,sg-01,sg-02", "supplement G short reading ids mismatch");
assert(miniReading?.ids.every(id => supplement.examples.some(example => example.id === id)), "supplement G short reading id does not resolve");

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
assert(!indexHtml.includes('src="supplementG-v45.js"'), "draft supplement G must remain outside the public index");

if (failures.length) {
  console.error("Supplement G validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`supplement G validation passed: ${assertions} assertions`);
  console.log("- 12 examples, 8 contrast rows, 6 reading sections and 5 diagnostic questions");
  console.log("- analytic causative, lexical valency pairs and same-stem valency remain distinct");
  console.log("- strict romanisation, Tamil-only TTS and private draft status verified");
}
