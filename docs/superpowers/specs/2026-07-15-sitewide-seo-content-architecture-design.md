# INNO Sitewide SEO and Content Architecture Design

## Objective

Reposition ankaili.com as a focused English B2B manufacturer and supplier website for oil-immersed transformer temperature monitoring systems, devices and controllers. Improve commercial keyword coverage without keyword stuffing or page cannibalization.

## Search Intent Architecture

| Page group | Primary intent | Primary keyword theme |
| --- | --- | --- |
| Homepage | Manufacturer discovery | transformer temperature monitoring system manufacturer |
| Products hub | Portfolio comparison | transformer temperature controllers and monitoring devices |
| OTI category | Category procurement | transformer oil temperature indicator manufacturer, OTI, BWY |
| WTI category | Category procurement | transformer winding temperature indicator manufacturer, WTI, BWR |
| Monitoring category | System procurement | transformer temperature monitoring device, remote monitoring system |
| Product detail | Model procurement | BWR2, BWR-04/06, BWY2, BWY-802/803, BWY-D804AITH |
| Applications | Engineering solution | power/distribution/substation transformer temperature monitoring |
| Blog | Informational and long-tail | selection, wiring, signals, installation, troubleshooting |
| About / OEM / Contact | Supplier qualification and conversion | manufacturer, supplier, OEM, quotation |

## TDK Rules

- Each indexable page gets one unique title between 30 and 60 characters where practical.
- The primary phrase appears near the start of the title.
- Descriptions target 120 to 160 characters, state page value and include a natural action.
- Manufacturer and supplier terms are assigned to commercial pages, not repeated across every informational article.
- Model pages lead with the exact model and product type.

## Heading Rules

- Exactly one visible H1 per page.
- H1 names the page topic and can differ slightly from the title tag.
- Each major section starts with H2.
- Cards, model groups, process steps and question answers use H3 beneath a clear H2.
- No card-level H2 appears without a section-level parent topic.
- Question-based H2 headings introduce self-contained answer passages for GEO citation.

## Homepage Content Order

1. H1 targeting transformer temperature monitoring systems and controllers.
2. Manufacturer positioning and direct product-selection CTA.
3. H2 explaining OTI, WTI and monitoring device portfolio with H3 product groups.
4. H2 featuring BWY and BWR model families with real product images.
5. H2 answering what a transformer temperature monitoring system does.
6. H2 covering power, distribution, substation and retrofit applications.
7. H2 explaining signal and control options.
8. H2 procurement checklist and email CTA.

## Internal Linking

- Homepage links to all three product categories, products hub, applications hub and contact page.
- Category pages link to every model in that category and relevant application/blog pages.
- Product pages link back to category pages, application guidance, model-selection blog and certifications.
- Application pages link to relevant product models.
- Blog articles retain contextual model, application and retrofit links.
- Anchor text describes the target topic and avoids generic wording.

## GEO and Structured Data

- Retain server-rendered Astro HTML, AI crawler access and llms.txt.
- Add concise direct-answer blocks near the start of commercial and application pages.
- Keep Product, CollectionPage, Service, BlogPosting, Organization and BreadcrumbList schema.
- Do not add commercial FAQPage schema.
- Use visible updated dates for blog content and specific model tables for quotable passages.

## Claims Boundary

- Do not invent production capacity, factory age, export countries, response times, certifications or performance guarantees.
- Use manufacturer and supplier positioning as the commercial role of the site, while technical values remain subject to the current model documents.
- Keep certification applicability qualified by certificate scope and selected model.

## Validation

- Build all pages and validate internal links and assets.
- Assert unique title, meta description and H1 per indexable HTML page.
- Assert title and description length ranges, with explicit exceptions for privacy, sitemap and 404 pages.
- Assert exactly one H1 and no skipped H1-to-H3 hierarchy on core commercial pages.
- Check target keyword presence by page group and scan for forbidden source-attribution wording.
