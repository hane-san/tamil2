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

  // Keep Tamil → romanisation visibly separated even in iOS/GitHub webviews.
  // A normal ASCII space can be visually swallowed/collapsed in some cached
  // fragments, so adjacent <t> + <r> pairs are stored with a non-breaking
  // regular-width space in the HTML source itself.
  after = after.replace(/<\/t>(?:[\t\n\r ]|&nbsp;|\u00A0)*<r>/gu, '</t>&nbsp;<r>');

  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed += 1;
    console.log(`normalized ${path.relative(root, file)}`);
  }
}

console.log(`song spacing normalization complete: ${changed} file(s) changed`);
