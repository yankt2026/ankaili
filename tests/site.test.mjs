import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('canonical domain and email are configured', () => {
  const config = read('src/config/site.ts');
  assert.match(config, /https:\/\/ankaili\.com/);
  assert.match(config, /fjinnonet@gmail\.com/);
});

test('site source contains no form elements', () => {
  if (!fs.existsSync(path.join(root, 'src'))) return;
  const files = fs.readdirSync(path.join(root, 'src'), { recursive: true })
    .filter((file) => /\.(astro|tsx?|mdx?)$/.test(file));
  for (const file of files) {
    const body = read(path.join('src', file));
    assert.doesNotMatch(body, /<\s*(form|input|textarea|select)\b/i, file);
  }
});

test('approved blog inventory contains twenty records', () => {
  const body = read('src/data/blogs.ts');
  const count = (body.match(/slug:\s*'/g) || []).length;
  assert.equal(count, 20);
});

test('approved product inventory contains six records', () => {
  const body = read('src/data/products.ts');
  const count = (body.match(/slug:\s*'/g) || []).length;
  assert.equal(count, 6);
});
