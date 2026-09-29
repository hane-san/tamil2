// Export the word forms that the app already shows, with the one reading
// each form is locked to, as TSV.
//
// Source: PART 0 + lessons 1–20 (examples, form patterns, vocabulary) and the
// v4.9 practice pack phrases. These are the items that
// tests/reading-consistency-v49.mjs keeps at one pronunciation + katakana per
// Tamil surface form. Supplements A–H are preview data and are not included.
//
// Usage (from the repository root):
//   node .claude/skills/tamil-textbook-app/scripts/export-audited-forms.mjs > audited-forms.tsv
//
// Columns:
//   form  structured  pronunciation  katakana  occurrences  sources  example_ids
// "structured" can hold more than one analysis joined by " / " (genuine
// homographs such as போற). "sources" is lesson, practice or both.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../../..");
const context = { window: {} };
vm.createContext(context);

const runtimeFiles = [
  "tamil-core-v30.js",
  "reference-v30.js",
  "lesson01-v30.js", "lesson02-v30.js", "lesson03-v31.js", "lesson04-v31.js",
  "lesson05-v32.js", "lesson06-v32.js", "lesson07-v33.js", "lesson08-v33.js",
  "lesson09-v35.js", "lesson10-v35.js", "lesson11-v36.js", "lesson12-v36.js",
  "lesson13-v37.js", "lesson14-v37.js", "lesson15-v38.js", "lesson16-v38.js",
  "lesson17-v39.js", "lesson18-v39.js", "lesson19-v40.js", "lesson20-v40.js",
  "reading-v31.js", "pedagogy-v34.js", "clarity-v41.js", "practice-v49.js",
  "curriculum-v41.js"
];

for (const file of runtimeFiles) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const book = context.window.TAMIL_BOOK;
const reference = context.window.TAMIL_REFERENCE;

const lessonItems = [
  ...(reference.examples ?? []),
  ...book.chapters.flatMap(chapter => [
    ...chapter.examples,
    ...(chapter.formConfig.patterns ?? []),
    ...(chapter.formConfig.vocabulary ?? [])
  ])
];
const practiceItems = book.chapters.flatMap(chapter => chapter.scenePhrases ?? []);

const strip = value => String(value ?? "").replace(/[.?!。？！]+$/u, "").trim();
const forms = new Map();

function collect(items, source) {
  for (const item of items) {
    const tamil = strip(item.targetTamil).split(/\s+/u);
    const structured = strip(item.structuredRoman).split(/\s+/u);
    const pronunciation = strip(item.pronunciationRoman).split(/\s+/u);
    const katakana = strip(item.katakana).split(/\s+/u);
    if (new Set([tamil.length, structured.length, pronunciation.length, katakana.length]).size !== 1) continue;
    tamil.forEach((form, index) => {
      if (!forms.has(form)) {
        forms.set(form, { structured: new Set(), readings: new Set(), count: 0, sources: new Set(), ids: [] });
      }
      const entry = forms.get(form);
      entry.structured.add(structured[index]);
      entry.readings.add(`${pronunciation[index]}\t${katakana[index]}`);
      entry.count += 1;
      entry.sources.add(source);
      if (entry.ids.length < 3 && !entry.ids.includes(item.id)) entry.ids.push(item.id);
    });
  }
}

collect(lessonItems, "lesson");
collect(practiceItems, "practice");

const rows = [["form", "structured", "pronunciation", "katakana", "occurrences", "sources", "example_ids"].join("\t")];
let conflicts = 0;
for (const [form, entry] of [...forms.entries()].sort(([a], [b]) => a.localeCompare(b, "ta"))) {
  if (entry.readings.size !== 1) conflicts += 1;
  const [pronunciation, katakana] = [...entry.readings][0].split("\t");
  rows.push([
    form,
    [...entry.structured].join(" / "),
    pronunciation,
    katakana,
    entry.count,
    entry.sources.size === 2 ? "both" : [...entry.sources][0],
    entry.ids.join(",")
  ].join("\t"));
}

if (conflicts > 0) {
  console.error(`warning: ${conflicts} form(s) carry more than one reading; run npm run test:reading`);
}
process.stdout.write(rows.join("\n") + "\n");
console.error(`exported ${forms.size} forms from ${lessonItems.length} lesson items and ${practiceItems.length} practice phrases`);
