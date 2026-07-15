# Ankaili Transformer Temperature Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build, verify, push, and deploy a complete INNO English B2B oil-immersed transformer temperature website at `ankaili.com`.

**Architecture:** A static Astro site renders typed product, application, and blog data through reusable page templates. Real product media is copied from the collected source set, while 40 Image 2 assets support the 20 long-form articles. Cloudflare Pages publishes the generated `dist` directory from GitHub.

**Tech Stack:** Astro, TypeScript, CSS, Node test runner, `@astrojs/sitemap`, GitHub CLI, Wrangler/Cloudflare Pages.

## Global Constraints

- Canonical origin is exactly `https://ankaili.com`.
- Brand is exactly `INNO`; no legal company name is displayed.
- Contact email is exactly `fjinnonet@gmail.com`; no form elements are allowed.
- There are exactly 20 English blog posts of at least 1,500 words each.
- Every blog has one distinct featured image and one distinct in-article image generated with Image 2.
- Product images and published specifications use the collected FJINNO source material; unsupported commercial and certification claims are prohibited.
- All primary content must be available in static HTML.

---

### Task 1: Repository and Astro foundation

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`
- Create: `src/config/site.ts`, `src/styles/global.css`
- Create: `tests/site.test.mjs`

**Interfaces:**
- Produces `site` configuration with `siteUrl`, `brand`, and `email` consumed by layouts and schemas.

- [ ] Write tests asserting the canonical origin, email, absence of forms, and required content counts.
- [ ] Run `npm test` and confirm it fails because the site files do not exist.
- [ ] Add Astro configuration, scripts (`dev`, `build`, `preview`, `test`), and the shared site config.
- [ ] Install dependencies with `npm install`.
- [ ] Run `npm test` and confirm the foundation checks pass.

### Task 2: Global layout and design system

**Files:**
- Create: `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro`
- Create: `src/components/EmailCTA.astro`, `src/components/Breadcrumbs.astro`, `src/components/SpecTable.astro`
- Copy: `E:/AI/fos/logo.png` to `public/images/logo/inno-logo.png`

**Interfaces:**
- `BaseLayout` accepts `title`, `description`, `path`, `image`, `breadcrumbs`, and `schema`.
- `EmailCTA` accepts `subject`, `label`, and optional `variant`.

- [ ] Add tests for exactly one H1 per generated representative page, canonical URLs, mailto CTAs, and no form tags.
- [ ] Build the semantic header/footer, accessible mobile navigation, metadata, JSON-LD, and global design tokens.
- [ ] Add visible focus states, responsive grids, card hover states, and reduced-motion handling.
- [ ] Run tests and an Astro build.

### Task 3: Product media and product data

**Files:**
- Create: `public/images/products/**`
- Create: `src/data/products.ts`, `src/data/categories.ts`
- Create: `src/pages/products/index.astro`, `src/pages/products/[slug].astro`
- Create: `src/pages/products/transformer-oil-temperature-indicators.astro`
- Create: `src/pages/products/transformer-winding-temperature-indicators.astro`
- Create: `src/pages/products/transformer-temperature-monitoring-devices.astro`

**Interfaces:**
- `products` exports six records containing SEO fields, verified specifications, source note, image gallery, applications, and related content slugs.

- [ ] Copy and rename selected full-size source images; exclude small thumbnails.
- [ ] Encode the six verified product records from `PRODUCT-DATA.md`.
- [ ] Render category comparisons and six detail pages with Product and BreadcrumbList schema.
- [ ] Add page-specific email subjects for model selection and datasheet requests.
- [ ] Test six product pages, image existence, specification presence, and related links.

### Task 4: Commercial, trust, and application pages

**Files:**
- Create: `src/data/applications.ts`
- Create: `src/pages/index.astro`, `src/pages/applications/index.astro`, `src/pages/applications/[slug].astro`
- Create: `src/pages/about.astro`, `src/pages/oem-customization.astro`, `src/pages/quality-control.astro`
- Create: `src/pages/contact.astro`, `src/pages/privacy-policy.astro`, `src/pages/404.astro`

**Interfaces:**
- `applications` exports five records with intent, compatible product slugs, and technical sections.

- [ ] Implement the 500+ word homepage with category and application paths.
- [ ] Implement five 800+ word application pages with unique intent and internal links.
- [ ] Implement trust pages without invented legal, certification, or production claims.
- [ ] Implement contact as email instructions and mailto links only.
- [ ] Test page presence, word thresholds, and no-form constraint.

### Task 5: Blog content system and 20 articles

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/blog/*.mdx` (20 files)
- Create: `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro`
- Create: `src/components/ArticleSources.astro`, `src/components/ArticleTOC.astro`

**Interfaces:**
- Blog frontmatter includes `title`, `description`, `slug`, `published`, `updated`, `primaryKeyword`, `featuredImage`, `inlineImage`, `featuredAlt`, `inlineAlt`, and `relatedProducts`.

- [ ] Create the 20 approved slugs with unique 30–60 character titles and 120–160 character descriptions.
- [ ] Write at least 1,500 unique words for each article, including a direct answer, question headings, comparison/selection table, visible sources, and 5–10 contextual internal links.
- [ ] Render BlogPosting and BreadcrumbList schema without FAQPage schema.
- [ ] Test count, word length, metadata uniqueness/length, dates, sources, and internal links.

### Task 6: Generate and integrate 40 blog images

**Files:**
- Create: `public/images/blog/<slug>-featured.png` (20 files)
- Create: `public/images/blog/<slug>-detail.png` (20 files)
- Create: `docs/image-prompts.md`

**Interfaces:**
- Every blog frontmatter image path resolves to one generated file; all alt strings are 10–125 characters.

- [ ] Generate one 16:9 technical editorial featured asset for each article using the built-in Image 2 workflow.
- [ ] Generate one different supporting asset for each article, avoiding text, logos, numbers, and unverified technical dimensions.
- [ ] Copy every selected output into `public/images/blog/` under its final filename and record the prompt.
- [ ] Inspect a representative set and validate all 40 files are non-empty and referenced exactly once as planned.
- [ ] Run image and build tests.

### Task 7: Technical SEO and GEO layer

**Files:**
- Create: `public/robots.txt`, `public/llms.txt`, `public/favicon.svg`
- Create: `src/pages/sitemap.astro`
- Modify: all page templates and content metadata
- Create: `.seo-cache/geo.json`

**Interfaces:**
- `BaseLayout` emits canonical/Open Graph metadata and page schemas; Astro sitemap integration emits XML.

- [ ] Add allowed AI crawler directives and canonical sitemap location.
- [ ] Add an `llms.txt` map with product definitions and preferred citation pages.
- [ ] Add Organization/WebSite, CollectionPage, Product, BlogPosting, ContactPage, and BreadcrumbList schemas where applicable.
- [ ] Add GEO answer blocks, visible dates, source sections, and comparison tables.
- [ ] Test crawler files, schema types, sitemap coverage, and absence of FAQPage schema.

### Task 8: Full-site validation and visual QA

**Files:**
- Create: `scripts/check-dist.mjs`
- Modify: `tests/site.test.mjs`, `package.json`

**Interfaces:**
- `npm run check` runs tests, build, and generated-output link/asset validation.

- [ ] Implement a generated-HTML crawler that reports broken internal links, missing assets, duplicate titles/descriptions, form elements, and wrong canonical origins.
- [ ] Run `npm run check` and fix every failure.
- [ ] Start preview and inspect homepage, one category, one product, one application, blog index, and one article at desktop and mobile sizes.
- [ ] Re-run `npm run check` after visual fixes and preserve the clean output.

### Task 9: GitHub publication

**Files:**
- Modify: `.gitignore`, `README.md`

**Interfaces:**
- GitHub repository `ankaili` tracks the complete verified source and Cloudflare build settings.

- [ ] Verify `gh --version` and `gh auth status`.
- [ ] Review `git status -sb`, `git diff --check`, and the complete intended scope.
- [ ] Commit the verified website with a concise message.
- [ ] Create the public GitHub repository `ankaili`, set the remote, and push the verified `main` branch.
- [ ] Confirm the remote repository and latest commit.

### Task 10: Cloudflare Pages deployment and domain

**Files:**
- Create or modify: `wrangler.jsonc` only if required by the selected Pages workflow
- Create: `DEPLOYMENT.md`

**Interfaces:**
- Cloudflare Pages project `ankaili` serves the Astro `dist` directory.

- [ ] Verify Wrangler version and authenticated account.
- [ ] Create or reuse the Pages project `ankaili` with production branch `main`.
- [ ] Deploy the freshly built `dist` directory and capture the production Pages URL.
- [ ] Attach `ankaili.com` and `www.ankaili.com` when available, keeping apex canonical and redirecting `www`.
- [ ] Verify the live homepage, robots.txt, llms.txt, XML sitemap, one product, and one blog URL over HTTPS.
