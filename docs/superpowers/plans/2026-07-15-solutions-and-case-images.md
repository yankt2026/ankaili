# Solutions and Country Case Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove case disclaimers, assign six unique scene images, and publish a dedicated Solutions section.

**Architecture:** Keep case content in `src/data/case-studies.ts`, add new project-bound scene assets under `public/images/scenes/cases/`, and implement a static Astro Solutions hub that links into existing product and application detail architecture. Extend the existing global layout, sitemap and GEO discovery files.

**Tech Stack:** Astro, TypeScript data modules, CSS, Node test runner, Cloudflare Pages.

## Global Constraints

- Do not invent customer, contract, site, quantity, delivery, or measured-result claims.
- Do not show disclaimer-style notes on public case pages.
- Each of the six country cases must use a unique image path.
- Generated images must not include temperature-controller products, logos, labels, or text.
- Card navigation uses linked image and linked title only, with no generic detail copy.

---

### Task 1: Regression requirements

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] Add assertions that public case sources contain no disclaimer labels or disclaimer phrases.
- [ ] Add an assertion that the six case image paths are unique.
- [ ] Add assertions for `/solutions/`, navigation and absence of generic detail links.
- [ ] Run `npm test` and confirm the new assertions fail for the missing behavior.

### Task 2: Case copy and imagery

**Files:**
- Create: `public/images/scenes/cases/*.png`
- Modify: `src/data/case-studies.ts`
- Modify: `src/pages/case-studies/index.astro`
- Modify: `src/pages/case-studies/[slug].astro`

- [ ] Generate six product-free scene images, one for each country environment.
- [ ] Replace repeated image paths with the six unique assets.
- [ ] Rewrite disclaiming case sentences as neutral project-context copy.
- [ ] Remove disclosure blocks from the index and detail template.
- [ ] Run `npm test` and confirm the disclaimer and image tests pass.

### Task 3: Solutions information architecture

**Files:**
- Create: `src/data/solutions.ts`
- Create: `src/pages/solutions/index.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/pages/sitemap.astro`
- Modify: `public/llms.txt`
- Modify: `src/styles/case-studies.css`

- [ ] Define six solution records with one problem, one technical approach, one unique destination and one scene image.
- [ ] Build the SEO and schema-enabled Solutions hub with linked images and titles.
- [ ] Add Solutions to global navigation, footer, HTML sitemap and llms.txt.
- [ ] Run the regression suite and confirm all tests pass.

### Task 4: Verification and release

**Files:**
- Verify: all modified project files and generated `dist/`

- [ ] Run `npm run check` and require 0 test failures, 0 Astro diagnostics and a successful link check.
- [ ] Review desktop and mobile screenshots for case and Solutions pages.
- [ ] Commit, push `main`, deploy Cloudflare Pages and verify public 200 responses.

