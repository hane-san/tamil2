// v4.9 practice pack: scene phrases and extra drills.
//
// Two things are checked here. First, the new material has to clear the same
// data bar as the published twenty lessons — strict transliteration, NFC,
// Tamil-only TTS text, declared confidence. Second, and just as important, the
// pack must not move the published lessons: loading it may add fields, never
// change an example, a quiz option or an answer key.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const baseFiles = [
  "tamil-core-v30.js",
  "reference-v30.js",
  "lesson01-v30.js",
  "lesson02-v30.js",
  "lesson03-v31.js",
  "lesson04-v31.js",
  "lesson05-v32.js",
  "lesson06-v32.js",
  "lesson07-v33.js",
  "lesson08-v33.js",
  "lesson09-v35.js",
  "lesson10-v35.js",
  "lesson11-v36.js",
  "lesson12-v36.js",
  "lesson13-v37.js",
  "lesson14-v37.js",
  "lesson15-v38.js",
  "lesson16-v38.js",
  "lesson17-v39.js",
  "lesson18-v39.js",
  "lesson19-v40.js",
  "lesson20-v40.js",
  "reading-v31.js",
  "pedagogy-v34.js",
  "clarity-v41.js"
];

function load(files) {
  const context = { window: {} };
  vm.createContext(context);
  for (const file of files) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }
  return context.window;
}

const withoutPack = load([...baseFiles, "curriculum-v41.js"]);
const withPack = load([...baseFiles, "practice-v49.js", "curriculum-v41.js"]);

const book = withPack.TAMIL_BOOK;
const meta = withPack.TAMIL_PRACTICE_V49;
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

// ------------------------------------------------------------- pack structure

assert(Boolean(meta), "practice-v49 must publish TAMIL_PRACTICE_V49");
assert(meta?.reviewStatus === "machine-checked", "practice pack must declare itself machine-checked, not reviewed");
assert(Array.isArray(meta?.scenes) && meta.scenes.length >= 6, "practice pack must declare its scene list");

const scenes = new Set(meta?.scenes ?? []);
const ids = new Set();
const publishedIds = new Set(book.chapters.flatMap(chapter => chapter.examples.map(example => example.id)));

let totalPhrases = 0;
let totalDrills = 0;

const { transliterateTamil, stripMorphBoundaries } = withPack.TAMIL_V30;
const tamilOnly = /^[஀-௿\s.,?!…;:()'’]+$/u;
const confidenceAxes = ["form", "morphology", "pronunciation", "registerNaturalness"];

for (const chapter of book.chapters) {
  const phrases = chapter.scenePhrases ?? [];
  const drills = chapter.drills ?? [];
  assert(phrases.length === 6, `${chapter.id}: expected 6 scene phrases, found ${phrases.length}`);
  assert(drills.length === 5, `${chapter.id}: expected 5 extra drills, found ${drills.length}`);
  totalPhrases += phrases.length;
  totalDrills += drills.length;

  for (const phrase of phrases) {
    assert(!ids.has(phrase.id), `${phrase.id}: duplicate practice id`);
    assert(!publishedIds.has(phrase.id), `${phrase.id}: collides with a published lesson example id`);
    ids.add(phrase.id);

    assert(scenes.has(phrase.scene), `${phrase.id}: scene ${phrase.scene} is not in the declared list`);
    assert(Boolean(phrase.meaningJa), `${phrase.id}: meaningJa missing`);
    assert(Boolean(phrase.literalJapanese), `${phrase.id}: literalJapanese missing`);
    assert(Boolean(phrase.note), `${phrase.id}: usage tip missing`);
    assert(phrase.kind === "scene-phrase", `${phrase.id}: kind must be scene-phrase`);

    assert(phrase.targetTamil === phrase.targetTamil.normalize("NFC"), `${phrase.id}: targetTamil is not NFC`);
    assert(phrase.katakana === phrase.katakana.normalize("NFC"), `${phrase.id}: katakana is not NFC`);
    assert(phrase.ttsText === phrase.targetTamil, `${phrase.id}: ttsText must equal targetTamil`);
    assert(tamilOnly.test(phrase.ttsText), `${phrase.id}: ttsText contains a non-Tamil layer`);

    const strict = transliterateTamil(phrase.targetTamil);
    assert(phrase.orthographicRoman === strict, `${phrase.id}: strict roman ${phrase.orthographicRoman}; expected ${strict}`);
    assert(
      stripMorphBoundaries(phrase.structuredRoman) === phrase.orthographicRoman,
      `${phrase.id}: structuredRoman does not preserve the surface orthographic string`
    );

    assert(phrase.primaryRegister === "SST", `${phrase.id}: primaryRegister must be SST`);
    assert(phrase.regionalProfile === "TN-GENERAL", `${phrase.id}: regionalProfile must be TN-GENERAL`);
    assert(phrase.review?.nativeReviewed === false, `${phrase.id}: new material must stay flagged as awaiting native review`);
    // Recombination is new even when every word form is audited, so the
    // naturalness axis must not claim more confidence than that.
    assert(phrase.confidence?.registerNaturalness === "C", `${phrase.id}: registerNaturalness must be C for recombined material`);
    for (const axis of confidenceAxes) {
      assert(["A", "B", "C"].includes(phrase.confidence?.[axis]), `${phrase.id}: invalid confidence.${axis}`);
    }
  }

  drills.forEach((drill, index) => {
    const where = `${chapter.id} drill ${index + 1}`;
    assert(!ids.has(drill.id), `${drill.id}: duplicate practice id`);
    ids.add(drill.id);
    assert(Boolean(drill.type), `${where}: type missing`);
    assert(scenes.has(drill.scene), `${where}: scene ${drill.scene} is not in the declared list`);
    assert(Boolean(drill.prompt), `${where}: prompt missing`);
    assert(Boolean(drill.feedback), `${where}: feedback missing`);
    assert(Boolean(drill.hint), `${where}: hint missing`);
    assert(drill.options.length === 4, `${where}: expected four options`);
    assert(Number.isInteger(drill.answer) && drill.answer >= 0 && drill.answer < drill.options.length, `${where}: answer index out of range`);
    assert(new Set(drill.options.map(option => option.targetTamil)).size === drill.options.length, `${where}: duplicate option sentence`);

    drill.options.forEach((option, optionIndex) => {
      const optionWhere = `${where} option ${optionIndex + 1}`;
      assert(Boolean(option.ja), `${optionWhere}: Japanese gloss missing`);
      assert(Boolean(option.tag), `${optionWhere}: diagnostic tag missing`);
      assert(tamilOnly.test(option.targetTamil), `${optionWhere}: option is not Tamil-only`);
      const strict = transliterateTamil(option.targetTamil);
      assert(
        stripMorphBoundaries(option.structuredRoman) === strict,
        `${optionWhere}: structuredRoman does not match the strict roman ${strict}`
      );
    });

    // Distractors are real sentences, so the answer must be marked as correct
    // and no other option may claim to be.
    assert(drill.options[drill.answer].tag === "正解", `${where}: the answer option must carry the 正解 tag`);
    assert(drill.options.filter(option => option.tag === "正解").length === 1, `${where}: exactly one option may be tagged 正解`);
  });
}

assert(totalPhrases === meta?.phraseCount, `declared phraseCount ${meta?.phraseCount} does not match ${totalPhrases}`);
assert(totalDrills === meta?.drillCount, `declared drillCount ${meta?.drillCount} does not match ${totalDrills}`);

// --------------------------------------------------- published lessons unmoved

const before = withoutPack.TAMIL_BOOK.chapters;
const after = book.chapters;
assert(before.length === after.length, "the pack must not change the chapter count");

before.forEach((baseChapter, index) => {
  const packed = after[index];
  assert(baseChapter.id === packed.id, `chapter ${index + 1}: id changed`);
  assert(
    JSON.stringify(baseChapter.examples) === JSON.stringify(packed.examples),
    `${baseChapter.id}: the pack changed the published examples`
  );
  assert(
    JSON.stringify(baseChapter.quiz) === JSON.stringify(packed.quiz),
    `${baseChapter.id}: the pack changed the published quiz`
  );
  assert(
    JSON.stringify(baseChapter.readSections) === JSON.stringify(packed.readSections),
    `${baseChapter.id}: the pack changed the published explanations`
  );
  assert(baseChapter.examples.length >= 8 && baseChapter.examples.length <= 12, `${baseChapter.id}: examples must stay 8–12`);
  assert(packed.quiz.length === 5, `${baseChapter.id}: the published quiz must stay at five questions`);
});

// ------------------------------------------------------------------- shipping

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const file of ["practice-v49.js", "practice-ui-v49.js"]) {
  assert(indexHtml.includes(`src="${file}"`), `index.html does not load ${file}`);
}
assert(indexHtml.includes('href="styles-practice-v49.css"'), "index.html does not load styles-practice-v49.css");
assert(
  indexHtml.indexOf('src="practice-v49.js"') < indexHtml.indexOf('src="curriculum-v41.js"'),
  "practice-v49.js must load before curriculum-v41.js freezes the chapter list"
);
assert(
  indexHtml.indexOf('src="app-v28.js"') < indexHtml.indexOf('src="practice-ui-v49.js"'),
  "practice-ui-v49.js must load after the lesson app it extends"
);

const serviceWorker = fs.readFileSync(path.join(root, "sw.js"), "utf8");
for (const file of ["practice-v49.js", "practice-ui-v49.js", "styles-practice-v49.css"]) {
  assert(serviceWorker.includes(`"./${file}"`), `sw.js does not cache ${file}`);
}

const app = fs.readFileSync(path.join(root, "app-v28.js"), "utf8");
assert(app.includes("window.TAMIL_APP_V28"), "app-v28.js must expose the redraw hook the practice UI uses");
assert(app.includes("resetChapterQuiz"), "app-v28.js must expose a per-lesson quiz reset");

const ui = fs.readFileSync(path.join(root, "practice-ui-v49.js"), "utf8");
assert(ui.includes("data-tts"), "scene cards must play through the audited Tamil-only TTS path");
assert(ui.includes("tamil-practice-drills-v49"), "drill progress must use its own storage key");
assert(!ui.includes("tamil-verb-engine-v2"), "the practice layer must not write the published lesson storage key");

// Regression guard: both bottom navs declare `display`, which beats the
// browser's `[hidden]` rule, so the supplement nav (z-index 60) used to paint
// over the lesson nav (z-index 25) and swallow every tap on it.
const supplementStyles = fs.readFileSync(path.join(root, "styles-supplements-v46.css"), "utf8");
if (/\.supplement-bottom-nav\s*\{[^}]*display\s*:/u.test(supplementStyles)) {
  const practiceCss = fs.readFileSync(path.join(root, "styles-practice-v49.css"), "utf8");
  assert(
    /\.supplement-bottom-nav\[hidden\][^{]*\{[^}]*display\s*:\s*none\s*!important/u.test(practiceCss),
    "a stylesheet gives .supplement-bottom-nav a display value, so [hidden] must be forced back to none"
  );
  assert(
    indexHtml.indexOf('href="styles-supplements-v46.css"') < indexHtml.indexOf('href="styles-practice-v49.css"'),
    "styles-practice-v49.css must load after styles-supplements-v46.css to win the cascade"
  );
}

const styles = fs.readFileSync(path.join(root, "styles-practice-v49.css"), "utf8");
assert(/data-text-size="large"/u.test(styles), "text size control needs its large-size rules");
assert(/\.scene-grid\.self-test/u.test(styles), "self-test mode needs its hiding rules");
assert(
  !/body\[data-text-size="small"\][^{]*\.kana-line/u.test(styles),
  "the small text setting must not shrink kana below the 12px floor"
);

if (failures.length) {
  console.error(`practice pack validation failed: ${failures.length} issue(s), ${assertions} assertions`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`practice pack validation passed: ${assertions} assertions`);
  console.log(`- ${totalPhrases} scene phrases across ${book.chapters.length} lessons`);
  console.log(`- ${totalDrills} extra drills, each with one tagged answer and three real distractors`);
  console.log("- published examples, quizzes and explanations unchanged");
}
