// One Tamil word form must never carry two different readings.
//
// Before v4.9 the corpus showed நான் as both nān and nāṉ, டிக்கெட் as both
// ティッケット and ティッケトゥ, and eighteen more like them. A learner meeting the
// same word twice with two readings has no way to tell which one is the word.
// This test keeps the corpus at one reading per surface form.
//
// The structured roman row is deliberately NOT locked: it carries morphological
// analysis, so genuine homographs (போற = 2sg finite pōṟ-a vs relative participle
// pōṟa) legitimately differ there.

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
  "practice-v49.js",
  "curriculum-v41.js"
];

for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const book = context.window.TAMIL_BOOK;
const reference = context.window.TAMIL_REFERENCE;
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

const items = [
  ...(reference.examples ?? []),
  ...book.chapters.flatMap(chapter => [
    ...chapter.examples,
    ...(chapter.scenePhrases ?? []),
    ...(chapter.formConfig.patterns ?? []),
    ...(chapter.formConfig.vocabulary ?? [])
  ])
];

const stripTrailing = value => String(value).replace(/[.?!。？！]+$/u, "").trim();
const readings = new Map();
let alignedItems = 0;

for (const item of items) {
  const tamil = stripTrailing(item.targetTamil).split(/\s+/u);
  const pronunciation = stripTrailing(item.pronunciationRoman).split(/\s+/u);
  const katakana = stripTrailing(item.katakana).split(/\s+/u);

  assert(
    tamil.length === pronunciation.length && tamil.length === katakana.length,
    `${item.id}: Tamil / pronunciation / katakana word counts differ (${tamil.length} / ${pronunciation.length} / ${katakana.length})`
  );
  if (tamil.length !== pronunciation.length || tamil.length !== katakana.length) continue;
  alignedItems += 1;

  tamil.forEach((word, index) => {
    const reading = `${pronunciation[index]} | ${katakana[index]}`;
    if (!readings.has(word)) readings.set(word, new Map());
    const bucket = readings.get(word);
    if (!bucket.has(reading)) bucket.set(reading, []);
    bucket.get(reading).push(item.id);
  });
}

for (const [word, bucket] of readings) {
  const variants = [...bucket.entries()];
  assert(
    variants.length === 1,
    `${word}: ${variants.length} readings — ${variants.map(([reading, ids]) => `"${reading}" (${ids.slice(0, 3).join(", ")})`).join(" vs ")}`
  );
}

// The pronunciation row shows sounds. ṅ, ṉ and ṟ are letter contrasts that the
// strict and structured rows already carry, so they must not appear here.
for (const item of items) {
  const strays = [...new Set((item.pronunciationRoman.match(/[ṅṉṟ]/gu) ?? []))];
  assert(strays.length === 0, `${item.id}: pronunciation row carries letter-only mark(s) ${strays.join(", ")} — ${item.pronunciationRoman}`);
  for (const variant of item.pronunciationVariants ?? []) {
    const variantStrays = [...new Set((variant.match(/[ṅṉṟ]/gu) ?? []))];
    assert(variantStrays.length === 0, `${item.id}: pronunciation variant carries letter-only mark(s) ${variantStrays.join(", ")} — ${variant}`);
  }
}

if (failures.length) {
  console.error(`reading consistency failed: ${failures.length} issue(s), ${assertions} assertions`);
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`reading consistency passed: ${assertions} assertions`);
  console.log(`- ${alignedItems} entries aligned word by word`);
  console.log(`- ${readings.size} distinct Tamil word forms, one reading each`);
}
