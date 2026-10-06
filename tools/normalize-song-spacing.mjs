import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const songsDir = path.join(root, 'songs');

const files = fs.readdirSync(songsDir)
  .filter(name => name.endsWith('.html'))
  .sort();

let changed = 0;
for (const name of files) {
  const file = path.join(songsDir, name);
  const before = fs.readFileSync(file, 'utf8');
  let after = before;

  // Source-level rule: Tamil tag immediately followed by its romanisation tag
  // must contain an actual ASCII half-width space, not only CSS spacing.
  after = after.replace(/<\/t><r>/gu, '</t> <r>');

  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed += 1;
    console.log(`normalized ${path.relative(root, file)}`);
  }
}

console.log(`song spacing normalization complete: ${changed} file(s) changed`);
