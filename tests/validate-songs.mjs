import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const failures = [];
let assertions = 0;
const ASSET_VERSION = "20261009-16";

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
assert(rootIndex.includes("20261009-16"), "root index must cache-bust the song-first entry");

const manifest = JSON.parse(read("manifest-v41.webmanifest"));
assert(manifest.start_url === "./songs/?v=20261009-16", `manifest start_url must be ./songs/?v=20261009-16; got ${manifest.start_url}`);
assert(manifest.scope === "./", `manifest scope must remain ./; got ${manifest.scope}`);

const library = read("songs/index.html");
assert(library.includes(`song-tamil-20261008.css?v=${ASSET_VERSION}`), "song library must load the Tamil theme stylesheet");

const lessons = [
  {
    shell: "songs/01-vaazhndhu-paaru.html",
    href: `01-vaazhndhu-paaru.html?v=${ASSET_VERSION}`,
    parts: ["01-title.html", "01-a.html", "01-b.html", "01-c.html", "01-d.html", "01-summary.html"]
  },
  {
    shell: "songs/02-marandhu-poche.html",
    href: `02-marandhu-poche.html?v=${ASSET_VERSION}`,
    parts: ["02-title.html", "02-a.html", "02-b.html", "02-c.html", "02-d.html", "02-summary.html"]
  },
  {
    shell: "songs/03-innum-ethana-kaalam.html",
    href: `03-innum-ethana-kaalam.html?v=${ASSET_VERSION}`,
    parts: ["03-title.html", "03-a.html", "03-b.html", "03-c.html", "03-d.html", "03-summary.html"]
  },
  {
    shell: "songs/04-eppadi-iruntha-naanga.html",
    href: `04-eppadi-iruntha-naanga.html?v=${ASSET_VERSION}`,
    parts: ["04-title.html", "04-a.html", "04-b.html", "04-c.html", "04-d.html", "04-summary.html"]
  },
  {
    shell: "songs/05-morattu-muttal.html",
    href: `05-morattu-muttal.html?v=${ASSET_VERSION}`,
    parts: ["05-title.html", "05-a.html", "05-b.html", "05-c.html", "05-d.html", "05-summary.html"]
  },
  {
    shell: "songs/06-aiyo-kadhaley.html",
    href: `06-aiyo-kadhaley.html?v=${ASSET_VERSION}`,
    parts: ["06-title.html", "06-a.html", "06-b.html", "06-c.html", "06-d.html", "06-summary.html"]
  },
  {
    shell: "songs/07-edhukku-dhan-indha-kaadhal.html",
    href: `07-edhukku-dhan-indha-kaadhal.html?v=${ASSET_VERSION}`,
    parts: ["07-title.html", "07-a.html", "07-b.html", "07-c.html", "07-d.html", "07-summary.html"]
  },
  {
    shell: "songs/08-power.html",
    href: `08-power.html?v=${ASSET_VERSION}`,
    parts: ["08-title.html", "08-a.html", "08-b.html", "08-c.html", "08-d.html", "08-summary.html"]
  },
  {
    shell: "songs/09-varalaama.html",
    href: `09-varalaama.html?v=${ASSET_VERSION}`,
    parts: ["09-title.html", "09-a.html", "09-b.html", "09-c.html", "09-d.html", "09-summary.html"]
  }
, {shell:"songs/10-sarvam-thaalamayam.html",href:`10-sarvam-thaalamayam.html?v=${ASSET_VERSION}`,parts:["10-title.html","10-a.html","10-b.html","10-c.html","10-d.html","10-summary.html"]}
];

for (const lesson of lessons) {
  assert(exists(lesson.shell), `${lesson.shell} is missing`);
  assert(library.includes(`href="${lesson.href}"`), `song library does not link ${lesson.href}`);
  const shell = read(lesson.shell);
  assert(shell.includes(`song-tamil-20261008.css?v=${ASSET_VERSION}`), `${lesson.shell} does not load the current Tamil theme stylesheet`);
  assert(shell.includes(`song.js?v=${ASSET_VERSION}`), `${lesson.shell} does not load the current song.js build`);
  assert(shell.includes("no-cache, no-store, must-revalidate"), `${lesson.shell} must discourage stale shell caching`);
  for (const part of lesson.parts) {
    const relative = `songs/${part}`;
    assert(exists(relative), `${relative} is missing`);
    assert(shell.includes(part), `${lesson.shell} does not reference ${part}`);
    const html = read(relative);
    assert(html.trim().length > 40, `${relative} is unexpectedly empty`);
  }
}

// Tamil and its inline romanisation must never touch in source.
// We accept either a real half-width space or &nbsp;; the normalizer upgrades
// adjacent pairs to &nbsp; so iOS/GitHub webviews keep a visible separator.
const songHtmlFiles = fs.readdirSync(path.join(root, "songs"))
  .filter(name => name.endsWith(".html"))
  .map(name => `songs/${name}`)
  .sort();

for (const file of songHtmlFiles) {
  const html = read(file);
  assert(!/<\/t><r>/u.test(html), `${file}: Tamil and romanisation touch with no separator`);
}

const songJs = read("songs/song.js");
assert(songJs.includes("ensureTamilRomanSpaces"), "song.js must keep the runtime Tamil/roman spacing safeguard");
assert(songJs.includes("\\u00A0"), "song.js must preserve a non-collapsing visual Tamil/roman separator at runtime");
assert(songJs.includes("cache:'no-store'"), "song.js must bypass stale caches for lesson fragments");
assert(songJs.includes("ta-IN"), "song.js must request Tamil TTS locale ta-IN");

const normalizer = read("tools/normalize-song-spacing.mjs");
assert(normalizer.includes("&nbsp;"), "song spacing normalizer must store a non-collapsing separator");

if (failures.length) {
  console.error(`song shell validation failed: ${failures.length} issue(s), ${assertions} assertions`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}

console.log(`song shell validation passed: ${assertions} assertions`);
