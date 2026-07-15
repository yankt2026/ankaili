# Country-Based Transformer Case Studies Design

## Objective

Add a credible English case-study system to ankaili.com and strengthen the applications hub without inventing customer names, cities, contracts, installed quantities, measured results or project ownership.

## Approved Content Positioning

- Every case is labelled **Representative Project Configuration**.
- Case names use only a country and application type, for example “Turkey Transformer Temperature Controller Retrofit”.
- Copy describes a technically plausible configuration and selection workflow, not a claim that INNO completed a named project.
- No company, utility, EPC, city, voltage level, quantity, delivery date or performance outcome is stated unless independently supplied and verified by the user.
- Existing AI-generated transformer and substation scenes may be reused. No generated temperature controller, product rendering or person appears in case imagery.

## Information Architecture

- Add `/case-studies/` as an index page.
- Add six clean static detail URLs generated from `src/data/case-studies.ts`:
  - Turkey transformer temperature controller retrofit
  - Russia cold-climate winding temperature monitoring
  - Vietnam distribution transformer temperature monitoring
  - Spain renewable-energy substation temperature monitoring
  - South Africa industrial transformer thermal protection
  - Indonesia hydropower transformer oil temperature monitoring
- Add “Case Studies” to primary navigation and footer Resources.
- Add an “Industries and Project Environments” module to `/applications/` linking to existing application pages and relevant representative configurations.

## Case Detail Structure

Each detail page contains one H1 and the following H2 sequence:

1. Project Context
2. Monitoring Requirement
3. Representative OTI and WTI Configuration
4. Signal, Cooling and Protection Interfaces
5. Installation and Commissioning Checklist
6. Related Transformer Temperature Products
7. Request a Project Configuration Review

The page includes a visible disclaimer near the first screen explaining that it is a representative configuration, not a named customer claim.

## Interaction and Visual Design

- Case cards use a 16:10 image crop, country label and descriptive H3 title.
- Only the image and title are links to the detail page.
- No “Learn more”, “Read more” or duplicate text link is shown.
- Cards retain existing hover elevation and add a subtle image zoom with a blue overlay shift.
- Existing industrial blue typography, spacing and responsive breakpoints remain unchanged.

## SEO and GEO

- Index Title: `Transformer Temperature Monitoring Case Studies | INNO`.
- Index H1: `Transformer Temperature Monitoring Case Studies`.
- Detail TDK targets country + application intent while clearly using “representative configuration” in description or introductory copy.
- Index uses CollectionPage JSON-LD; detail pages use Article JSON-LD with INNO as author and publisher.
- All pages use clean URLs, self-referencing canonicals, descriptive image alt text and contextual internal links.

## Testing and Acceptance

- Sitemap includes the index and six details.
- Exactly one H1, unique Title and unique meta description on every page.
- All cards have linked images and linked titles, and contain no “Learn more”.
- No customer-name or completed-project claim appears in the case data.
- `npm run check` passes before commit and deployment.

