import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const failures = [];
let assertions = 0;

function assert(condition, message) {
  assertions += 1;
  if (!condition) failures.push(message);
}

function read(relative) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

function exists(relative) {
  return fs.existsSync(path.join(root, relative));
}

const rootIndex = read("index.html");
assert(rootIndex.includes("songs/"), "root index must send the user to songs/");
assert(rootIndex.includes("location.replace('songs/')") || rootIndex.includes('location.replace("songs/")'), "root index must redirect to songs/ in normal browsing");

const manifest = JSON.parse(read("manifest-v41.webmanifest"));
assert(manifest.start_url === "./songs/", `manifest start_url must be ./songs/; got ${manifest.start_url}`);
assert(manifest.scope === "./", `manifest scope must remain ./; got ${manifest.scope}`);

const library = read("songs/index.html");
const lessons = [
  {
    shell: "songs/01-vaazhndhu-paaru.html",
    href: "01-vaazhndhu-paaru.html",
    parts: ["01-title.html", "01-a.html", "01-b.html", "01-c.html", "01-d.html", "01-summary.html"]
  },
  {
    shell: "songs/02-marandhu-poche.html",
    href: "02-marandhu-poche.html",
    parts: ["02-title.html", "02-a.html", "02-b.html", "02-c.html", "02-d.html", "02-summary.html"]
  },
  {
    shell: "songs/03-innum-ethana-kaalam.html",
    href: "03-innum-ethana-kaalam.html",
    parts: ["03-title.html", "03-a.html", "03-b.html", "03-c.html", "03-d.html", "03-summary.html"]
  }
];

for (const lesson of lessons) {
  assert(exists(lesson.shell), `${lesson.shell} is missing`);
  assert(library.includes(`href="${lesson.href}"`), `song library does not link ${lesson.href}`);
  const shell = read(lesson.shell);
  assert(shell.includes('song.css'), `${lesson.shell} does not load song.css`);
  assert(shell.includes('song.js'), `${lesson.shell} does not load song.js`);
  for (const part of lesson.parts) {
    const relative = `songs/${part}`;
    assert(exists(relative), `${relative} is missing`);
    assert(shell.includes(`'${part}'`) || shell.includes(`"${part}"`), `${lesson.shell} does not reference ${part}`);
    const html = read(relative);
    assert(html.trim().length > 40, `${relative} is unexpectedly empty`);
  }
}

// New song material must preserve a visible Tamil → romanisation gap in source HTML,
// not depend only on CSS. Runtime JS also repairs older material defensively.
for (const file of [
  "songs/03-title.html",
  "songs/03-a.html",
  "songs/03-b.html",
  "songs/03-c.html",
  "songs/03-d.html",
  "songs/03-summary.html"
]) {
  const html = read(file);
  assert(!/<\/t><r>/u.test(html), `${file}: Tamil and romanisation touch without a half-width space`);
}

const songJs = read("songs/song.js");
assert(songJs.includes("ensureTamilRomanSpaces"), "song.js must keep the runtime Tamil/roman spacing safeguard");
assert(songJs.includes("ta-IN"), "song.js must request Tamil TTS locale ta-IN");

if (failures.length) {
  console.error(`song shell validation failed: ${failures.length} issue(s), ${assertions} assertions`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`song shell validation passed: ${assertions} assertions`);
