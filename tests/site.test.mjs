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

test('country case studies avoid unverified claims and public disclaimer copy', () => {
  const body = read('src/data/case-studies.ts');
  const count = (body.match(/slug:\s*'/g) || []).length;
  assert.equal(count, 6);
  assert.doesNotMatch(body, /State Grid|China Southern Power Grid|TBEA|successfully delivered|our customer/i);
  assert.doesNotMatch(body, /representative project configuration|not (?:a |the )?(?:claim|customer|contract|completed|named)|does not (?:identify|claim)|planning example/i);

  for (const file of ['src/pages/case-studies/index.astro', 'src/pages/case-studies/[slug].astro']) {
    assert.doesNotMatch(read(file), /representative project configuration|not claims? about|does not identify|how to read these case studies/i, file);
  }
});

test('each country case study uses a unique scene image', () => {
  const body = read('src/data/case-studies.ts');
  const images = [...body.matchAll(/image:\s*'([^']+)'/g)].map((match) => match[1]);
  assert.equal(images.length, 6);
  assert.equal(new Set(images).size, 6);
});

test('case cards link only image and title without generic detail copy', () => {
  const body = read('src/pages/case-studies/index.astro');
  assert.doesNotMatch(body, /learn more|read more/i);
  assert.match(body, /case-card-media/);
  assert.match(body, /<h3><a href=/);
});

test('solutions hub is integrated without generic detail links', () => {
  const page = read('src/pages/solutions/index.astro');
  const layout = read('src/layouts/BaseLayout.astro');
  const data = read('src/data/solutions.ts');
  assert.match(page, /<h1>Transformer Temperature Monitoring Solutions<\/h1>/);
  assert.doesNotMatch(page, /learn more|read more/i);
  assert.match(page, /solution-card-media/);
  assert.match(page, /<h2><a href=/);
  assert.match(layout, /\['Solutions','\/solutions\/'\]/);
  assert.equal((data.match(/slug:\s*'/g) || []).length, 6);
});

test('public copy contains no internal answer or editorial labels', () => {
  const files = fs.readdirSync(path.join(root, 'src'), { recursive: true })
    .filter((file) => /\.(astro|tsx?|mdx?)$/.test(file));
  const banned = /Direct answer\.|Product selection answer\.|Solution selection answer\.|Application planning answer\.|Customization answer\.|Direct technical answer|Direct engineering contact|Procurement note/i;
  for (const file of files) assert.doesNotMatch(read(path.join('src', file)), banned, file);
});

test('buyer journey uses clear datasheet quotation and sales CTAs', () => {
  const home = read('src/pages/index.astro');
  const product = read('src/pages/products/[slug].astro');
  const contact = read('src/pages/contact.astro');
  assert.match(home, /Request a Datasheet and Quote/);
  assert.match(product, /Request Datasheet and Quote/);
  assert.match(contact, /Email Our Sales Team/);
});

test('technical articles use five search-intent renderers', () => {
  const body = read('src/data/blogs.ts');
  for (const name of ['renderGuideArticle', 'renderModelArticle', 'renderComparisonArticle', 'renderSystemArticle', 'renderInstallationArticle']) {
    assert.match(body, new RegExp(`function ${name}\\(`));
  }
  assert.doesNotMatch(body, /const paragraphs=\[/);
});

test('builds /sitemap.xml and advertises it in robots.txt', () => {
  const packageJson=JSON.parse(read('package.json'));
  const robots=read('public/robots.txt');
  assert.match(packageJson.scripts.build,/scripts\/create-sitemap-alias\.mjs/);
  assert.ok(fs.existsSync(path.join(root,'scripts','create-sitemap-alias.mjs')));
  assert.match(read('scripts/create-sitemap-alias.mjs'),/^import /);
  assert.match(robots,/Sitemap: https:\/\/ankaili\.com\/sitemap\.xml/);
});
