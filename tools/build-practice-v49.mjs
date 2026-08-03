// Builds practice-v49.js from tools/practice-spec-v49.mjs.
//
// Every sentence in the practice pack is written as a sequence of Tamil word
// forms. The builder resolves each word form's structured roman, pronunciation
// roman and katakana from one of two places:
//
//   1. the audited corpus (PART 0 + lessons 1-20) — the default, and
//   2. the DERIVED table in the spec, for forms produced by applying a rule the
//      lesson itself teaches to an audited base word.
//
// Any word that is in neither place stops the build. That keeps the pack from
// silently introducing readings nobody has checked.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { DERIVED, LESSON_PACKS, SCENE_ORDER } from "./practice-spec-v49.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const runtimeFiles = [
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
  "clarity-v41.js",
  "curriculum-v41.js"
];

const context = { window: {} };
vm.createContext(context);
for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const { transliterateTamil } = context.window.TAMIL_V30;
const book = context.window.TAMIL_BOOK;
const reference = context.window.TAMIL_REFERENCE;

const TRAILING = /[.?!。？！]+$/u;
const stripTrailing = value => String(value).replace(TRAILING, "").trim();

function buildLexicon() {
  const items = [
    ...(reference.examples ?? []),
    ...book.chapters.flatMap(chapter => [
      ...chapter.examples,
      ...(chapter.formConfig.patterns ?? []),
      ...(chapter.formConfig.vocabulary ?? [])
    ])
  ];
  const lexicon = new Map();
  for (const item of items) {
    const tamil = stripTrailing(item.targetTamil).split(/\s+/u);
    const structured = stripTrailing(item.structuredRoman).split(/\s+/u);
    const pronunciation = stripTrailing(item.pronunciationRoman).split(/\s+/u);
    const katakana = stripTrailing(item.katakana).split(/\s+/u);
    if (new Set([tamil.length, structured.length, pronunciation.length, katakana.length]).size !== 1) continue;
    tamil.forEach((word, index) => {
      if (lexicon.has(word)) return;
      lexicon.set(word, {
        structured: structured[index],
        pronunciation: pronunciation[index],
        katakana: katakana[index],
        origin: "audited"
      });
    });
  }
  for (const [word, entry] of Object.entries(DERIVED)) {
    if (lexicon.has(word)) continue;
    lexicon.set(word, { ...entry, origin: "derived" });
  }
  return lexicon;
}

const lexicon = buildLexicon();
const problems = [];
const usedDerived = new Set();

// A sentence is written as "word word word" plus an optional terminator, e.g.
// "கடைல தண்ணி இருக்கு." The terminator rides along on the last word.
function resolveSentence(sentence, where) {
  const raw = String(sentence).trim();
  const terminator = raw.match(TRAILING)?.[0] ?? "";
  const words = stripTrailing(raw).split(/\s+/u);
  const layers = { tamil: [], structured: [], pronunciation: [], katakana: [] };
  for (const word of words) {
    const entry = lexicon.get(word);
    if (!entry) {
      problems.push(`${where}: unknown word form ${word}`);
      return null;
    }
    if (entry.origin === "derived") usedDerived.add(word);
    layers.tamil.push(word);
    layers.structured.push(entry.structured);
    layers.pronunciation.push(entry.pronunciation);
    layers.katakana.push(entry.katakana);
  }
  const kanaTerminator = terminator === "?" ? "？" : terminator === "." ? "。" : terminator;
  return {
    targetTamil: layers.tamil.join(" ") + terminator,
    structuredRoman: layers.structured.join(" ") + terminator,
    pronunciationRoman: layers.pronunciation.join(" ") + terminator,
    katakana: layers.katakana.join(" ") + kanaTerminator
  };
}

// The runtime normalizer is the same one the twenty lessons use, so a resolved
// sentence that would fail validation fails here instead.
function checkAgainstRuntime(resolved, where) {
  const expected = transliterateTamil(resolved.targetTamil);
  const flattened = resolved.structuredRoman.replace(/-/gu, "");
  if (flattened !== expected) {
    problems.push(`${where}: structured roman ${flattened} does not match strict roman ${expected}`);
  }
}

const scenePhrases = [];
const drills = [];

for (const [number, pack] of Object.entries(LESSON_PACKS)) {
  const lessonNumber = Number(number);
  pack.phrases.forEach((phrase, index) => {
    const where = `lesson ${lessonNumber} phrase ${index + 1}`;
    const resolved = resolveSentence(phrase.ta, where);
    if (!resolved) return;
    checkAgainstRuntime(resolved, where);
    if (!SCENE_ORDER.includes(phrase.scene)) problems.push(`${where}: unknown scene ${phrase.scene}`);
    scenePhrases.push({
      lesson: lessonNumber,
      id: `sp${lessonNumber}-${String(index + 1).padStart(2, "0")}`,
      scene: phrase.scene,
      ...resolved,
      meaningJa: phrase.ja,
      literalJapanese: phrase.literal,
      note: phrase.tip
    });
  });

  pack.drills.forEach((drill, index) => {
    const where = `lesson ${lessonNumber} drill ${index + 1}`;
    const options = drill.options.map((option, optionIndex) => {
      const resolved = resolveSentence(option.ta, `${where} option ${optionIndex + 1}`);
      if (!resolved) return null;
      checkAgainstRuntime(resolved, `${where} option ${optionIndex + 1}`);
      return { ...resolved, ja: option.ja, tag: option.tag };
    });
    if (options.some(option => !option)) return;
    if (options[drill.answer] === undefined) problems.push(`${where}: answer index out of range`);
    drills.push({
      lesson: lessonNumber,
      id: `dr${lessonNumber}-${String(index + 1).padStart(2, "0")}`,
      type: drill.type,
      scene: drill.scene,
      prompt: drill.q,
      options,
      answer: drill.answer,
      feedback: drill.feedback,
      hint: drill.hint
    });
  });
}

if (problems.length) {
  console.error(`practice pack build failed: ${problems.length} problem(s)`);
  problems.forEach(problem => console.error(`- ${problem}`));
  process.exit(1);
}

const unusedDerived = Object.keys(DERIVED).filter(word => !usedDerived.has(word));
const shadowedDerived = Object.keys(DERIVED).filter(word => lexicon.get(word)?.origin === "audited");

const byLesson = new Map();
for (const phrase of scenePhrases) {
  if (!byLesson.has(phrase.lesson)) byLesson.set(phrase.lesson, { phrases: [], drills: [] });
  byLesson.get(phrase.lesson).phrases.push(phrase);
}
for (const drill of drills) {
  if (!byLesson.has(drill.lesson)) byLesson.set(drill.lesson, { phrases: [], drills: [] });
  byLesson.get(drill.lesson).drills.push(drill);
}

const json = value => JSON.stringify(value);

function renderPhrase(phrase) {
  return `      P({ id: ${json(phrase.id)}, scene: ${json(phrase.scene)}, targetTamil: ${json(phrase.targetTamil)}, structuredRoman: ${json(phrase.structuredRoman)}, pronunciationRoman: ${json(phrase.pronunciationRoman)}, katakana: ${json(phrase.katakana)}, meaningJa: ${json(phrase.meaningJa)}, literalJapanese: ${json(phrase.literalJapanese)}, note: ${json(phrase.note)} })`;
}

function renderOption(option) {
  return `        { targetTamil: ${json(option.targetTamil)}, structuredRoman: ${json(option.structuredRoman)}, pronunciationRoman: ${json(option.pronunciationRoman)}, katakana: ${json(option.katakana)}, ja: ${json(option.ja)}, tag: ${json(option.tag)} }`;
}

function renderDrill(drill) {
  return `      D({
        id: ${json(drill.id)},
        type: ${json(drill.type)},
        scene: ${json(drill.scene)},
        prompt: ${json(drill.prompt)},
        options: [
${drill.options.map(renderOption).join(",\n")}
        ],
        answer: ${drill.answer},
        feedback: ${json(drill.feedback)},
        hint: ${json(drill.hint)}
      })`;
}

const blocks = [...byLesson.entries()].sort((left, right) => left[0] - right[0]).map(([lessonNumber, pack]) => `  attach(${lessonNumber}, {
    phrases: [
${pack.phrases.map(renderPhrase).join(",\n")}
    ],
    drills: [
${pack.drills.map(renderDrill).join(",\n")}
    ]
  });`).join("\n\n");

const output = `(() => {
  "use strict";

  // GENERATED FILE — edit tools/practice-spec-v49.mjs and run
  // \`npm run build:practice\`. Every sentence below is assembled from word forms
  // that are either already audited in PART 0 + lessons 1-20, or derived from an
  // audited base word by a rule the lesson itself teaches. See
  // PRACTICE_PACK_AUDIT.md for the derivation list and review status.

  const { entry: E, confidence: C } = window.TAMIL_V30;
  const lessons = window.TAMIL_LESSONS_V30 || [];
  const SOURCE_REFS = Object.freeze([
    "TAMIL-INTEGRATED-v2.0-rc.1",
    "TN-SST-PRACTICE-PACK-v4.9: 監査済み語形の再結合"
  ]);

  // Naturalness sits at C: each word form is audited, but the combinations are
  // new and still wait on native review.
  // The core normalizer keeps only the fields it knows about, so the scene label
  // is put back on the frozen entry afterwards.
  const P = input => Object.freeze({
    ...E({
      ...input,
      kind: "scene-phrase",
      group: input.scene,
      audioGroup: \`practice-\${input.id.split("-")[0]}\`,
      sourceRefs: SOURCE_REFS,
      confidence: C("B", "B", "C", "C")
    }),
    scene: input.scene
  });

  const D = input => Object.freeze({
    ...input,
    options: Object.freeze(input.options.map(option => Object.freeze({ ...option })))
  });

  function attach(number, pack) {
    const index = lessons.findIndex(lesson => lesson.number === number);
    if (index < 0) throw new Error(\`practice-v49: lesson \${number} not found\`);
    lessons[index] = Object.freeze({
      ...lessons[index],
      scenePhrases: Object.freeze(pack.phrases),
      drills: Object.freeze(pack.drills)
    });
  }

${blocks}

  window.TAMIL_PRACTICE_V49 = Object.freeze({
    version: "4.9-preview",
    reviewStatus: "machine-checked",
    scenes: Object.freeze(${json(SCENE_ORDER)}),
    phraseCount: ${scenePhrases.length},
    drillCount: ${drills.length}
  });
})();
`;

fs.writeFileSync(path.join(root, "practice-v49.js"), output);

console.log(`practice pack built: ${scenePhrases.length} scene phrases, ${drills.length} drills`);
console.log(`derived word forms declared: ${Object.keys(DERIVED).length}, used: ${usedDerived.size}`);
if (unusedDerived.length) console.log(`unused derived forms: ${unusedDerived.join(", ")}`);
if (shadowedDerived.length) console.log(`derived forms already audited (drop them from the spec): ${shadowedDerived.join(", ")}`);
