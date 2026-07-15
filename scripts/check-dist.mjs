import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve('dist');
assert.ok(fs.existsSync(root),'dist directory is missing');
const files=fs.readdirSync(root,{recursive:true}).filter(file=>file.endsWith('.html'));
assert.ok(files.length>=45,`expected at least 45 HTML pages, found ${files.length}`);
const decode=(value)=>value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const seoRows=[];

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
  const titleMatches=[...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)];
  const descriptionMatches=[...html.matchAll(/<meta name="description" content="([^"]*)"/gi)];
  const h1Matches=[...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi)];
  assert.equal(titleMatches.length,1,`${file} must contain exactly one title`);
  assert.equal(descriptionMatches.length,1,`${file} must contain exactly one meta description`);
  assert.equal(h1Matches.length,1,`${file} must contain exactly one H1`);
  const title=decode(titleMatches[0][1].replace(/<[^>]+>/g,'').trim());
  const description=decode(descriptionMatches[0][1].trim());
  const h1=decode(h1Matches[0][1].replace(/<[^>]+>/g,'').trim());
  seoRows.push({file,title,description,h1});
  for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
    const target=resolvePublic(href);
    if(target) assert.ok(fs.existsSync(target),`${file} has broken link ${href}`);
  }
  for(const [,src] of html.matchAll(/(?:src|content)="(\/[^"?#]+\.(?:png|webp|jpg|jpeg|svg))"/gi)){
    assert.ok(fs.existsSync(path.join(root,src.slice(1))),`${file} has missing asset ${src}`);
  }
}

const indexable=seoRows.filter(row=>!['404.html','privacy-policy/index.html','sitemap/index.html'].includes(row.file.replaceAll('\\','/')));
const duplicateValues=(rows,key)=>[...new Set(rows.map(row=>row[key]).filter((value,index,all)=>all.indexOf(value)!==index))];
assert.deepEqual(duplicateValues(indexable,'title'),[],`duplicate titles found`);
assert.deepEqual(duplicateValues(indexable,'description'),[],`duplicate descriptions found`);
for(const row of indexable){
  assert.ok(row.title.length>=30 && row.title.length<=65,`${row.file} title length ${row.title.length} is outside 30-65`);
  assert.ok(row.description.length>=120 && row.description.length<=170,`${row.file} description length ${row.description.length} is outside 120-170`);
}

const byFile=new Map(seoRows.map(row=>[row.file.replaceAll('\\','/'),row]));
const keywordChecks=[
  ['index.html',/transformer temperature monitoring system/i,/transformer temperature monitoring/i],
  ['products/index.html',/transformer temperature controller/i,/transformer temperature controllers?/i],
  ['products/transformer-oil-temperature-indicators/index.html',/transformer oil temperature indicator/i,/oil temperature indicators? \(OTI\)/i],
  ['products/transformer-winding-temperature-indicators/index.html',/transformer winding temperature indicator/i,/winding temperature indicators? \(WTI\)/i],
  ['products/transformer-temperature-monitoring-devices/index.html',/transformer temperature monitoring device/i,/transformer temperature monitoring devices?/i]
];
for(const [file,titlePattern,h1Pattern] of keywordChecks){
  const row=byFile.get(file); assert.ok(row,`${file} missing from SEO report`);
  assert.match(row.title,titlePattern,`${file} title misses mapped keyword`);
  assert.match(row.h1,h1Pattern,`${file} H1 misses mapped keyword`);
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
