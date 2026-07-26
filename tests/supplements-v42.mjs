import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "supplements-v42.js"), "utf8"), context, { filename: "supplements-v42.js" });

const catalog = context.window.TAMIL_SUPPLEMENT_CATALOG_V42;
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

if (failures.length) {
  console.error("Supplement catalog validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`v4.2 supplement catalog validation passed: ${assertions} assertions`);
  console.log("- A–H catalogued without changing lesson numbering");
  console.log("- A/B marked drafting; C–H remain planned");
  console.log("- prerequisites, return links, provenance, and excluded scope validated");
}
