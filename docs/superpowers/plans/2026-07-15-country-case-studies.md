# Country-Based Transformer Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a country-based representative transformer temperature case-study library and add industry entry points without making unverified customer or project claims.

**Architecture:** A typed `caseStudies` data module supplies a static index and dynamic Astro detail template. Existing application records provide the industry-entry links. Shared CSS extends the current card system without adding client-side JavaScript or dependencies.

**Tech Stack:** Astro 5, TypeScript data modules, native CSS, Node test runner, Cloudflare Pages.

## Global Constraints

- Use only country-level case naming.
- Label every case “Representative Project Configuration”.
- Do not claim a customer, completed installation, quantity, measured result or named project.
- Do not generate or depict a temperature controller product or person.
- Only card images and titles link to case details; never render “Learn more”.
- Keep direct email contact and do not add forms.

---

### Task 1: Add Case-Study Regression Tests

**Files:**
- Modify: `tests/site.test.mjs`

**Interfaces:**
- Consumes: source files under `src/data` and `src/pages`
- Produces: regression assertions for six records, disclosure wording and prohibited card copy

- [ ] **Step 1: Add failing tests**

```js
test('representative case studies avoid unverified customer claims', async () => {
  const data = await readFile('src/data/case-studies.ts', 'utf8');
  assert.equal((data.match(/slug:/g) || []).length, 6);
  assert.match(data, /Representative Project Configuration/);
  assert.doesNotMatch(data, /State Grid|customer name|successfully delivered/i);
});

test('case cards link only image and title without learn-more copy', async () => {
  const page = await readFile('src/pages/case-studies/index.astro', 'utf8');
  assert.doesNotMatch(page, /learn more|read more/i);
  assert.match(page, /case-card-media/);
});
```

- [ ] **Step 2: Run `npm test` and confirm the missing files make the new assertions fail.**

### Task 2: Create the Typed Case Content Model

**Files:**
- Create: `src/data/case-studies.ts`

**Interfaces:**
- Produces: `CaseStudy` interface and `caseStudies: CaseStudy[]`

- [ ] **Step 1: Define the exact interface.**

```ts
export interface CaseStudy {
  slug: string;
  country: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  imagePosition: string;
  applicationSlug: string;
  productSlugs: string[];
  context: string[];
  requirement: string[];
  configuration: string[];
  interfaces: string[];
  checklist: string[];
}
```

- [ ] **Step 2: Add six complete country-based records with unique TDK, technical paragraphs and no unsupported performance claims.**
- [ ] **Step 3: Run `npm test` and confirm the content-integrity test passes.**

### Task 3: Build the Case Index and Detail Pages

**Files:**
- Create: `src/pages/case-studies/index.astro`
- Create: `src/pages/case-studies/[slug].astro`

**Interfaces:**
- Consumes: `caseStudies`, `applications`, `products`, `EmailCTA`, `BaseLayout`
- Produces: seven static routes and CollectionPage/Article JSON-LD

- [ ] **Step 1: Build the index with one H1, direct-answer disclosure and a case card grid.**
- [ ] **Step 2: Make only `.case-card-media` and the H3 title anchors clickable.**
- [ ] **Step 3: Build `getStaticPaths()` from `caseStudies` and render the seven approved H2 content sections.**
- [ ] **Step 4: Add related product and application links using existing data records.**

### Task 4: Add Industry Entry Points and Navigation

**Files:**
- Modify: `src/pages/applications/index.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: existing `applications` and new `caseStudies`
- Produces: industry cards, primary Case Studies navigation and footer link

- [ ] **Step 1: Add six “Industries and Project Environments” cards with H3 headings and links to the closest existing application.**
- [ ] **Step 2: Add a compact “Representative Configurations by Country” row linking images and titles to case details.**
- [ ] **Step 3: Add `Case Studies` to primary navigation and footer Resources.**

### Task 5: Add Case-Specific Visual Styling

**Files:**
- Create: `src/styles/case-studies.css`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Produces: `.case-grid`, `.case-card`, `.case-card-media`, `.case-disclosure`, `.case-facts` styles

- [ ] **Step 1: Import `case-studies.css` from BaseLayout.**
- [ ] **Step 2: Implement 16:10 cover crops, image zoom, overlay transition, visible focus styles and responsive one-column layout.**
- [ ] **Step 3: Ensure `prefers-reduced-motion` disables the zoom transition.**

### Task 6: Verify, Commit and Publish

**Files:**
- Modify only if validation identifies a real defect.

- [ ] **Step 1: Run `npm run check`. Expected: tests pass, Astro reports 0 errors/warnings, all pages and links validate.**
- [ ] **Step 2: Run `git diff --check` and inspect `git diff --stat`. Expected: no whitespace errors and only case-study scope changes.**
- [ ] **Step 3: Commit with `feat: add representative transformer case studies`.**
- [ ] **Step 4: Push `main` and deploy `dist` to the `ankaili` Cloudflare Pages project.**
- [ ] **Step 5: Verify `/case-studies/`, one detail URL and `/sitemap-index.xml` return HTTP 200 online.**

