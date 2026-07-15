# Solutions and Country Case Image Design

## Objective

Remove all public-facing disclaimer language from country case pages, eliminate repeated case imagery, and add a dedicated Solutions information architecture without inventing customers, contracts, quantities, or outcomes.

## Content model

- Case pages use neutral engineering language. They describe country context, monitoring requirements, a suitable configuration, interfaces, and commissioning checks.
- No page displays labels or paragraphs such as "Representative Project Configuration", "not a customer", "not a completed project", or similar disclaimers.
- The six case records use six unique image paths. Images show transformer, substation, renewable, hydropower, industrial, or cold-climate environments. They contain no temperature-controller product and no customer logo.
- Applications remains the environment-led navigation area.
- Solutions is a new problem-led navigation area with six solution families: OTI, WTI, oil temperature monitoring, cooling/alarm/trip control, remote monitoring, and retrofit replacement.

## Interaction and layout

- Add `Solutions` to the desktop/mobile navigation and footer.
- Create `/solutions/` with linked image and linked title cards. Do not add generic "Learn more" links.
- Solution cards reuse unique scene imagery and link to the most relevant existing application or product category page.
- Keep the current INNO industrial blue visual system, square card geometry, restrained hover feedback, responsive layouts, and reduced-motion behavior.

## SEO and validation

- Add a distinct title, meta description, H1, H2 sections, CollectionPage schema, HTML sitemap link, XML sitemap route, and llms.txt entry.
- Tests must fail until public disclaimer text is removed, all six country image paths are unique, and the Solutions page plus navigation exist.

