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

test('public site contains no external product-source attribution', () => {
  const files = fs.readdirSync(path.join(root, 'src'), { recursive: true })
    .filter((file) => /\.(astro|tsx?|mdx?|txt)$/.test(file));
  for (const file of files) {
    const body = read(path.join('src', file));
    assert.doesNotMatch(body, /https?:\/\/(?:www\.)?fjinno\.net/i, file);
    assert.doesNotMatch(body, /(?:source product page|linked INNO source|primary product values are referenced from)/i, file);
  }
});

test('certification gallery contains twenty verified image assets', () => {
  const dir = path.join(root, 'public', 'images', 'certifications');
  const images = fs.readdirSync(dir).filter((file) => /\.(?:jpg|jpeg|png|webp)$/i.test(file));
  assert.equal(images.length, 20);
});

test('representative case studies avoid unverified customer claims', () => {
  const body = read('src/data/case-studies.ts');
  const count = (body.match(/slug:\s*'/g) || []).length;
  assert.equal(count, 6);
  assert.match(body, /Representative Project Configuration/);
  assert.doesNotMatch(body, /State Grid|China Southern Power Grid|TBEA|successfully delivered|our customer/i);
});

test('case cards link only image and title without generic detail copy', () => {
  const body = read('src/pages/case-studies/index.astro');
  assert.doesNotMatch(body, /learn more|read more/i);
  assert.match(body, /case-card-media/);
  assert.match(body, /<h3><a href=/);
});
