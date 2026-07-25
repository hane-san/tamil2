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
  "reference-v30.js",
  "lesson01-v30.js",
  "lesson02-v30.js",
  "lesson03-v31.js",
  "lesson04-v31.js",
  "reading-v31.js",
  "curriculum-v31.js"
];

for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { transliterateTamil, stripMorphBoundaries } = context.window.TAMIL_V30;
const reference = context.window.TAMIL_REFERENCE;
const book = context.window.TAMIL_BOOK;
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

const golden = [
  ["அ", "a"], ["ஆ", "ā"], ["இ", "i"], ["ஈ", "ī"],
  ["உ", "u"], ["ஊ", "ū"], ["எ", "e"], ["ஏ", "ē"],
  ["ஐ", "ai"], ["ஒ", "o"], ["ஓ", "ō"], ["ஔ", "au"],

  ["க்", "k"], ["ங்", "ṅ"], ["ச்", "c"], ["ஞ்", "ñ"],
  ["ட்", "ṭ"], ["ண்", "ṇ"], ["த்", "t"], ["ந்", "n"],
  ["ப்", "p"], ["ம்", "m"], ["ய்", "y"], ["ர்", "r"],
  ["ல்", "l"], ["வ்", "v"], ["ழ்", "ḻ"], ["ள்", "ḷ"],
  ["ற்", "ṟ"], ["ன்", "ṉ"],

  ["க", "ka"], ["கா", "kā"], ["கி", "ki"], ["கீ", "kī"],
  ["கு", "ku"], ["கூ", "kū"], ["கெ", "ke"], ["கே", "kē"],
  ["கை", "kai"], ["கொ", "ko"], ["கோ", "kō"], ["கௌ", "kau"],

  ["ஜ்", "j"], ["ஶ்", "ś"], ["ஷ்", "ṣ"], ["ஸ்", "s"],
  ["ஹ்", "h"], ["க்ஷ", "kṣa"], ["க்ஷ்", "kṣ"],
  ["ஸ்ரீ", "srī"], ["ஶ்ரீ", "śrī"], ["ஃ", "ḵ"], ["ஃப", "ḵpa"],

  ["தமிழ்", "tamiḻ"],
  ["சாப்பிடு", "cāppiṭu"],
  ["புத்தகம்", "puttakam"],
  ["அது", "atu"],
  ["வீடு", "vīṭu"],
  ["வீட்டுக்கு", "vīṭṭukku"],
  ["மரத்துல", "marattula"],
  ["எனக்கு", "eṉakku"],
  ["என்னை", "eṉṉai"],
  ["சென்னை", "ceṉṉai"],
  ["அது என்ன?", "atu eṉṉa?"],
  ["௧௨", "12"],
  ["கொ", "ko"]
];

for (const [tamil, expected] of golden) {
  const actual = transliterateTamil(tamil);
  assert(actual === expected, `golden: ${tamil} → ${actual}; expected ${expected}`);
}

assert(golden.length >= 50, `golden count is ${golden.length}; expected at least 50`);
assert(book.chapters.length === 4, `public chapter count is ${book.chapters.length}; expected 4`);
assert(book.chapters.map(chapter => chapter.number).join(",") === "1,2,3,4", "public chapters must be lessons 1–4 in order");
assert(reference.examples.length >= 8 && reference.examples.length <= 12, "PART 0 must have 8–12 examples");

for (const chapter of book.chapters) {
  assert(chapter.examples.length >= 8 && chapter.examples.length <= 12, `${chapter.id}: examples must be 8–12`);
  assert(chapter.quiz.length >= 3 && chapter.quiz.length <= 5, `${chapter.id}: quiz must be 3–5 questions`);
  chapter.quiz.forEach((question, index) => {
    assert(question.options.length === 4, `${chapter.id} quiz ${index + 1}: expected four options`);
    assert(new Set(question.options).size === question.options.length, `${chapter.id} quiz ${index + 1}: duplicate option`);
    assert(question.tags.length === question.options.length, `${chapter.id} quiz ${index + 1}: diagnostic tags mismatch`);
  });
  const miniReadings = chapter.readSections.filter(section => section.miniReading);
  assert(miniReadings.length === 1, `${chapter.id}: expected one short reading section`);
  for (const section of miniReadings) {
    assert(section.miniReading.ids.length >= 2 && section.miniReading.ids.length <= 5, `${chapter.id}: short reading must contain 2–5 sentences`);
    for (const id of section.miniReading.ids) {
      assert(chapter.examples.some(example => example.id === id), `${chapter.id}: short reading id ${id} does not resolve`);
    }
  }
}

const entries = [
  ...reference.examples,
  ...book.chapters.flatMap(chapter => [
    ...chapter.examples,
    ...(chapter.formConfig.patterns ?? []),
    ...(chapter.formConfig.vocabulary ?? [])
  ])
];

const ids = new Set();
const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];
const validConfidence = new Set(["A", "B", "C", "D"]);
const tamilTtsPattern = /^[\u0B80-\u0BFF\s.,?!…;:()'’]+$/u;

for (const item of entries) {
  assert(!ids.has(item.id), `${item.id}: duplicate id`);
  ids.add(item.id);

  const required = [
    "targetTamil",
    "orthographicRoman",
    "structuredRoman",
    "pronunciationRoman",
    "katakana",
    "meaningJa",
    "ttsText",
    "audioGroup"
  ];
  for (const field of required) {
    assert(Boolean(item[field]), `${item.id}: missing ${field}`);
  }

  assert(item.targetTamil === item.targetTamil.normalize("NFC"), `${item.id}: targetTamil is not NFC`);
  assert(item.ttsText === item.ttsText.normalize("NFC"), `${item.id}: ttsText is not NFC`);
  assert(item.pronunciationRoman === item.pronunciationRoman.normalize("NFC"), `${item.id}: pronunciationRoman is not NFC`);
  assert(item.katakana === item.katakana.normalize("NFC"), `${item.id}: katakana is not NFC`);
  assert(Array.isArray(item.pronunciationVariants), `${item.id}: pronunciationVariants must be an array`);
  assert(Array.isArray(item.kanaVariants), `${item.id}: kanaVariants must be an array`);
  assert(
    item.pronunciationVariants.length === item.kanaVariants.length,
    `${item.id}: pronunciation/kana variant counts differ`
  );
  item.pronunciationVariants.forEach((variant, index) => {
    assert(Boolean(variant), `${item.id}: empty pronunciation variant ${index + 1}`);
    assert(variant === variant.normalize("NFC"), `${item.id}: pronunciation variant ${index + 1} is not NFC`);
    assert(Boolean(item.kanaVariants[index]), `${item.id}: missing kana variant ${index + 1}`);
    assert(
      item.kanaVariants[index] === item.kanaVariants[index].normalize("NFC"),
      `${item.id}: kana variant ${index + 1} is not NFC`
    );
  });
  assert(item.ttsText === item.targetTamil, `${item.id}: ttsText must equal the validated natural Tamil target in current scope`);
  assert(tamilTtsPattern.test(item.ttsText), `${item.id}: ttsText contains a non-Tamil layer`);

  const computedRoman = transliterateTamil(item.targetTamil);
  assert(item.orthographicRoman === computedRoman, `${item.id}: strict roman ${item.orthographicRoman}; expected ${computedRoman}`);
  assert(
    stripMorphBoundaries(item.structuredRoman) === item.orthographicRoman,
    `${item.id}: structuredRoman does not preserve the surface orthographic string`
  );

  assert(item.primaryRegister === "SST", `${item.id}: primaryRegister must be SST`);
  assert(item.regionalProfile === "TN-GENERAL", `${item.id}: regionalProfile must be TN-GENERAL`);
  assert(Array.isArray(item.styleTags) && item.styleTags.length > 0, `${item.id}: styleTags missing`);
  assert(Array.isArray(item.sourceRefs) && item.sourceRefs.length > 0, `${item.id}: sourceRefs missing`);
  assert(Array.isArray(item.morphemes), `${item.id}: morphemes must be an array`);
  assert(item.review && typeof item.review.nativeReviewed === "boolean", `${item.id}: review status missing`);

  for (const axis of confidenceAxes) {
    assert(validConfidence.has(item.confidence?.[axis]), `${item.id}: invalid confidence.${axis}`);
    assert(item.confidence?.[axis] !== "D", `${item.id}: confidence.${axis}=D cannot be public`);
  }

  assert(item.ta === item.targetTamil, `${item.id}: legacy ta projection must come from targetTamil`);
  assert(item.roman === item.structuredRoman, `${item.id}: legacy roman projection must come from structuredRoman`);
  assert(item.spokenRoman === item.pronunciationRoman, `${item.id}: spokenRoman projection must come from pronunciationRoman`);
  assert(item.kana === item.katakana, `${item.id}: legacy kana projection must come from katakana`);
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const activeFile of runtimeFiles) {
  assert(indexHtml.includes(`src="${activeFile}"`), `index.html does not load ${activeFile}`);
}
for (const legacyFile of ["curriculum-v28.js", "travel-v28.js", "grammar-v28.js", "reference-v28.js", "transcription-v28.js"]) {
  assert(!indexHtml.includes(`src="${legacyFile}"`), `index.html still loads legacy authority ${legacyFile}`);
}

const styles = fs.readFileSync(path.join(root, "styles-v28.css"), "utf8");
assert(/\.example-row \.kana-line\s*\{\s*font-size:\s*12px;/u.test(styles), "small example kana must be at least 12px");

const app = fs.readFileSync(path.join(root, "app-v28.js"), "utf8");
assert(app.includes("needsV30SettingsMigration ? true"), "legacy hidden-kana setting migration is missing");
assert(app.includes("voiceNoticeShown"), "missing Tamil voice notification guard is missing");
assert(app.includes("isTamilTtsText"), "runtime TTS layer guard is missing");

if (failures.length) {
  console.error(`v3.1 validation failed: ${failures.length} issue(s), ${assertions} assertions`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`v3.1 validation passed: ${assertions} assertions`);
  console.log(`- ${golden.length} golden transliteration cases`);
  console.log(`- ${entries.length} public data entries linted`);
  console.log("- PART 0 + lessons 1–4 only");
}
