# Ankaili INNO Transformer Temperature Website Design

## Objective

Build and publish a complete English B2B inquiry website at `https://ankaili.com` for INNO oil-immersed transformer temperature indicators, winding temperature indicators, controllers, and oil temperature monitoring devices. The only contact mechanism is a direct email link to `fjinnonet@gmail.com`; the site contains no form.

## Audience and conversion

The site serves transformer OEM engineers, utility and substation teams, EPC contractors, panel builders, distributors, maintenance buyers, and retrofit projects worldwide. Every commercial page offers a pre-addressed email CTA for specifications, model selection, drawings, pricing, or replacement guidance.

## Architecture

The site is a static Astro project deployed to Cloudflare Pages from a new GitHub repository. Product, application, and blog records are stored as typed data/content collections and rendered through reusable templates. All important content is present in generated HTML so search and AI crawlers do not depend on client-side JavaScript.

## Brand and visual system

- Brand: INNO only; no legal company name is displayed.
- Logo: copy the existing original logo from `E:/AI/fos/logo.png` without alteration.
- Palette: deep navy, electrical blue, cool steel, white, and a restrained safety amber accent.
- Typography: a technical sans-serif system stack with compact uppercase labels and readable editorial body copy.
- Visual language: transformer yards, instrument close-ups, capillary sensing, control panels, oil-immersed transformer cooling, and monitoring workflows.
- Motion: subtle CSS-only hover and reveal effects, disabled for reduced-motion users.

## Site map

### Commercial pages

- `/` — oil-immersed transformer temperature monitoring manufacturer overview
- `/products/`
- `/products/transformer-oil-temperature-indicators/`
- `/products/transformer-winding-temperature-indicators/`
- `/products/transformer-temperature-monitoring-devices/`
- `/products/bwr2-transformer-winding-temperature-indicator/`
- `/products/bwy2-transformer-oil-temperature-indicator/`
- `/products/bwr-04-06-winding-temperature-controller/`
- `/products/bwy-802-803-oil-temperature-controller/`
- `/products/bwy-d804aith-digital-oil-temperature-controller/`
- `/products/oil-temperature-level-pressure-monitoring-device/`

### Application pages

- `/applications/`
- `/applications/power-transformer-temperature-monitoring/`
- `/applications/distribution-transformer-temperature-monitoring/`
- `/applications/transformer-cooling-control-alarm-trip/`
- `/applications/substation-remote-temperature-monitoring/`
- `/applications/transformer-temperature-controller-retrofit/`

### Trust and conversion pages

- `/oem-customization/`
- `/quality-control/`
- `/about/`
- `/contact/`
- `/privacy-policy/`
- `/sitemap/`
- `/404/`

### Blog hub and 20 articles

1. `/blog/transformer-oil-temperature-indicator-guide/`
2. `/blog/transformer-winding-temperature-indicator-guide/`
3. `/blog/oti-vs-wti-transformer/`
4. `/blog/bwr2-winding-temperature-indicator-selection/`
5. `/blog/bwy2-oil-temperature-indicator-selection/`
6. `/blog/bwr-04-vs-bwr-06-winding-temperature-controller/`
7. `/blog/bwy-802-bwy-803-oil-temperature-controller/`
8. `/blog/bwy-d804aith-digital-oil-temperature-controller/`
9. `/blog/transformer-oil-temperature-monitoring-system/`
10. `/blog/oil-immersed-transformer-winding-temperature-monitoring/`
11. `/blog/transformer-top-oil-temperature-monitoring/`
12. `/blog/transformer-temperature-controller-wiring/`
13. `/blog/transformer-temperature-alarm-trip-cooling-contacts/`
14. `/blog/pt100-vs-4-20ma-transformer-temperature/`
15. `/blog/rs485-transformer-temperature-monitoring/`
16. `/blog/transformer-thermometer-pocket-installation/`
17. `/blog/transformer-temperature-controller-capillary-installation/`
18. `/blog/m27x2-transformer-temperature-sensor-thread/`
19. `/blog/transformer-temperature-indicator-troubleshooting/`
20. `/blog/replace-transformer-oil-winding-temperature-indicator/`

## Content standards

- Homepage: at least 500 useful English words.
- Product/category/application pages: 400–900 words depending on page type, with unique intent and internal links.
- Each blog: at least 1,500 unique English words, written for engineers and buyers rather than keyword repetition.
- Product specifications use the collected source data and include a visible verification note because configurations vary by model.
- No invented certifications, clients, shipment claims, pricing, lead time, warranty, testimonials, or test results.
- Distinguish OTI top-oil measurement from WTI simulated winding temperature and from direct embedded winding hotspot measurement.

## SEO and GEO

- Canonical base: `https://ankaili.com`.
- Unique title of 30–60 characters and unique meta description of 120–160 characters for every indexable page.
- Organization, WebSite, Product, Article, CollectionPage, ContactPage, and BreadcrumbList JSON-LD as appropriate.
- No FAQPage schema on this commercial site; visible Q&A sections may be used without FAQ structured data.
- Static HTML, semantic heading order, breadcrumbs, contextual internal links, XML sitemap, HTML sitemap, robots.txt, Open Graph metadata, and image dimensions.
- `llms.txt` summarizes primary entities, products, technical distinctions, and preferred pages.
- Key articles begin with a direct 40–60 word answer and include self-contained 134–167 word answer blocks, question headings, comparison tables, source notes, publication date, and updated date.
- Allow GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, and PerplexityBot. Block no search crawler required for discovery.

## Images

- Real product photographs and drawings come from the already downloaded, product-specific source folders.
- The INNO logo is copied from `fos`.
- Every one of the 20 blogs receives two distinct Image 2 assets: one 16:9 featured image and one supporting in-article image, for 40 generated assets total.
- Generated images contain no labels, numbers, logos, watermarks, or technical measurements that could be mistaken for verified engineering drawings.
- Generated assets are saved inside the project, converted/optimized where supported, and receive descriptive alt text.

## Email conversion

- Primary CTA: `mailto:fjinnonet@gmail.com` with a page-specific subject.
- Product CTA subjects include the model name.
- Contact page provides an email checklist: model/reference, transformer type, range, contacts, output, power supply, capillary, thread, quantity, country, and requested date.
- No input, textarea, submit button, third-party form service, or user-data storage.

## Testing and quality gates

- Automated tests verify page count, the 20 blog records, unique slugs/titles/descriptions, title/meta lengths, absence of forms, presence of email CTA, canonical domain, structured-data types, image existence, alt text, sitemap/robots/llms files, and required internal links.
- Astro production build must pass.
- Crawl the generated `dist` directory to detect broken internal links and missing assets.
- Inspect representative desktop and mobile pages and verify reduced-motion behavior.

## Deployment

- Initialize a new Git repository in `E:/AI/ffos` and create a new GitHub repository named `ankaili` unless that name is unavailable, in which case use `ankaili-transformer-temperature`.
- Push the verified main branch.
- Deploy the static `dist` output to a Cloudflare Pages project named `ankaili`.
- Add `ankaili.com` and `www.ankaili.com` as custom domains when account permissions and DNS state allow. Prefer `ankaili.com` as canonical and redirect `www` to the apex domain.

## Failure handling

- If an image generation fails, retry once with a simplified prompt and preserve the planned filename.
- If source specifications conflict, publish only the model-specific values with a configuration-variation note.
- If GitHub or Cloudflare authentication is unavailable, complete and verify the local site, then stop only at the exact authorization step with the required action.
- If a custom domain is already attached elsewhere or DNS validation cannot complete, deploy the Pages preview URL and report the remaining domain action precisely.
