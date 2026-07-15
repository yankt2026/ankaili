import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve('dist');
assert.ok(fs.existsSync(root),'dist directory is missing');
const files=fs.readdirSync(root,{recursive:true}).filter(file=>file.endsWith('.html'));
assert.ok(files.length>=45,`expected at least 45 HTML pages, found ${files.length}`);

const resolvePublic=(href)=>{
  const clean=href.split('#')[0].split('?')[0];
  if(!clean || clean.startsWith('mailto:') || clean.startsWith('http')) return null;
  if(clean==='/') return path.join(root,'index.html');
  const target=clean.startsWith('/') ? clean.slice(1) : clean;
  if(path.extname(target)) return path.join(root,target);
  return path.join(root,target,'index.html');
};

for(const file of files){
  const full=path.join(root,file);
  const html=fs.readFileSync(full,'utf8');
  assert.doesNotMatch(html,/<\s*(form|input|textarea|select)\b/i,`${file} contains a form control`);
  assert.match(html,/https:\/\/ankaili\.com\//,`${file} lacks canonical domain`);
  assert.doesNotMatch(html,/FAQPage/,`${file} contains unsupported FAQ schema`);
  for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
    const target=resolvePublic(href);
    if(target) assert.ok(fs.existsSync(target),`${file} has broken link ${href}`);
  }
  for(const [,src] of html.matchAll(/(?:src|content)="(\/[^"?#]+\.(?:png|webp|jpg|jpeg|svg))"/gi)){
    assert.ok(fs.existsSync(path.join(root,src.slice(1))),`${file} has missing asset ${src}`);
  }
}

const blogFiles=files.filter(file=>file.startsWith(`blog${path.sep}`) && file!==path.join('blog','index.html'));
assert.equal(blogFiles.length,20,'expected 20 generated blog articles');
for(const file of blogFiles){
  const html=fs.readFileSync(path.join(root,file),'utf8');
  const text=html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/gi,' ');
  const words=(text.match(/[A-Za-z0-9][A-Za-z0-9-]*/g)||[]).length;
  assert.ok(words>=1500,`${file} has only ${words} visible words`);
}

console.log(`Validated ${files.length} pages, ${blogFiles.length} long-form articles and all internal links.`);
