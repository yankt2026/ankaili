# Sitewide SEO Content Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild TDK, heading hierarchy, module titles and internal keyword placement across ankaili.com for transformer temperature monitoring, OTI, WTI, BWY and BWR commercial search intent.

**Architecture:** Keep all published URLs and map one primary intent to each page group. Central data records continue to control dynamic product, application and blog metadata, while page templates enforce semantic H1-H3 hierarchy and reusable GEO answer blocks.

**Tech Stack:** Astro 5 static output, TypeScript data records, CSS, Node test runner, JSON-LD, Cloudflare Pages.

## Global Constraints

- Exactly one visible H1 per indexable page.
- Title tags target 30-60 characters where practical; descriptions target 120-160 characters.
- Do not invent manufacturing capacity, factory age, country coverage, response times, certifications or performance guarantees.
- Do not create new near-duplicate keyword landing pages.
- Do not add forms or commercial FAQPage schema.
- Keep all existing URLs and only use real product images for product representation.

---

### Task 1: Add SEO regression tests

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `scripts/check-dist.mjs`

**Interfaces:**
- Consumes: generated HTML in `dist/`
- Produces: assertions for unique title, description and H1, heading count, length ranges and keyword mapping

- [ ] Add tests that parse every generated HTML page and assert one title, one meta description and one H1.
- [ ] Add duplicate-title and duplicate-description detection for indexable business and content pages.
- [ ] Add commercial-page keyword assertions for homepage, product hub and three category pages.
- [ ] Run `npm test` before implementation and confirm the new assertions expose current metadata gaps.

### Task 2: Rewrite core commercial pages

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/products/index.astro`
- Modify: `src/components/ProductCategory.astro`
- Modify: `src/pages/products/transformer-oil-temperature-indicators.astro`
- Modify: `src/pages/products/transformer-winding-temperature-indicators.astro`
- Modify: `src/pages/products/transformer-temperature-monitoring-devices.astro`

**Interfaces:**
- Consumes: `products` and `applications` data arrays
- Produces: unique commercial TDK and H1-H3 hierarchy for system, controller, OTI, WTI and monitoring-device intent

- [ ] Change the homepage title to lead with `Transformer Temperature Monitoring System Manufacturer` and use an H1 that includes systems and controllers.
- [ ] Reorder homepage sections into portfolio, BWY/BWR models, direct definition, applications, interfaces and procurement CTA.
- [ ] Change product-card headings from H2 to H3 beneath a descriptive H2.
- [ ] Rewrite product hub TDK and headings for transformer temperature controllers and monitoring devices.
- [ ] Rewrite OTI, WTI and monitoring category props with unique manufacturer/category intent.
- [ ] Add descriptive internal links to product categories, applications, certification and contact pages.

### Task 3: Optimize product detail pages and metadata

**Files:**
- Modify: `src/data/products.ts`
- Modify: `src/pages/products/[slug].astro`

**Interfaces:**
- Consumes: six `Product` records
- Produces: model-specific TDK, H1 and reusable section hierarchy

- [ ] Rewrite all six product titles to lead with the exact BWY/BWR model and product type.
- [ ] Rewrite descriptions to include use, output/control function and a natural datasheet/quotation action.
- [ ] Rename template H2 sections to include each model and the transformer measurement function.
- [ ] Replace source-oriented specification wording with current-document confirmation wording.
- [ ] Add category, application, selection-guide and certification links with descriptive anchors.

### Task 4: Optimize application and supplier pages

**Files:**
- Modify: `src/data/applications.ts`
- Modify: `src/pages/applications/index.astro`
- Modify: `src/pages/applications/[slug].astro`
- Modify: `src/pages/about.astro`
- Modify: `src/pages/oem-customization.astro`
- Modify: `src/pages/quality-control.astro`
- Modify: `src/pages/contact.astro`
- Modify: `src/pages/certifications.astro`

**Interfaces:**
- Consumes: five application records and related products
- Produces: solution intent, supplier qualification intent and conversion content

- [ ] Rewrite application hub TDK/H1 for oil-immersed transformer temperature monitoring solutions.
- [ ] Update each application SEO title and description while preserving its unique engineering intent.
- [ ] Add a question-based H2 before each direct answer and use H3 for project risks and product cards.
- [ ] Position About for transformer temperature controller manufacturer and supplier qualification.
- [ ] Position OEM for custom OTI/WTI/BWY/BWR configuration.
- [ ] Position Contact for supplier quotation and technical document requests.

### Task 5: Optimize blog metadata and GEO passages

**Files:**
- Modify: `src/data/blogs.ts`
- Modify: `src/pages/blog/index.astro`
- Modify: `src/pages/blog/[slug].astro`

**Interfaces:**
- Consumes: twenty `Blog` records and `articleHtml()`
- Produces: informational keyword cluster with model, comparison, system and installation intent

- [ ] Keep each blog focused on one long-tail query and separate model guides from product transaction pages.
- [ ] Remove automatic title suffix duplication and keep every rendered title inside the target length when practical.
- [ ] Change repeated generic H2 wording to query-aware headings that incorporate each article topic naturally.
- [ ] Add a visible updated date and retain BlogPosting schema without FAQPage schema.
- [ ] Keep contextual links to one model page, one application page and the retrofit or contact path.

### Task 6: Update GEO guidance and SEO cache

**Files:**
- Modify: `public/llms.txt`
- Modify: `.seo-cache/site-meta.json`
- Modify: `.seo-cache/plan.json`

**Interfaces:**
- Consumes: final page and keyword map
- Produces: current machine-readable site description and durable SEO plan cache

- [ ] Update llms.txt with the commercial entity, product categories, model families and distinction between top-oil, simulated winding and direct winding measurement.
- [ ] Replace stale `TBD` domain values with `ankaili.com` and record the final keyword architecture.
- [ ] Record research limitations: no Search Console or paid keyword-volume data was available.

### Task 7: Verify, publish and inspect

**Files:**
- Test: `tests/site.test.mjs`
- Test: `scripts/check-dist.mjs`

**Interfaces:**
- Consumes: complete Astro source and generated `dist/`
- Produces: verified GitHub commit and Cloudflare Pages deployment

- [ ] Run `npm run check` and require zero test, type, build, link and word-count failures.
- [ ] Generate a TDK/H1 report and inspect duplicates, lengths and heading hierarchy.
- [ ] Run `git diff --check`, commit the SEO architecture, and push `main`.
- [ ] Deploy `dist` to Cloudflare Pages project `ankaili`.
- [ ] Verify HTTP 200 for homepage, product hub, OTI, WTI, monitoring device and contact pages.
