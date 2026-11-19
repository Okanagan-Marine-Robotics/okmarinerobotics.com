# Okanagan Marine Robotics

Website for the student-led engineering design team at UBC Okanagan.

## Local development

Use the Node version in .nvmrc and install dependencies with npm.

~~~sh
npm ci
npm run dev
~~~

Astro serves the site at http://localhost:4321 by default. Run **npm run check** to validate content and types, **npm run build** to produce the static site in dist/, and **npm run preview** to serve the build locally.

## Edit content

Astro Content Collections load and validate the JSON files in src/data/ using the schemas in src/content.config.ts. Edit content there and use the Astro files in src/pages/ and src/components/ for layout changes.

| Content | Location |
| --- | --- |
| Site identity, navigation, footer, donations, and default SEO metadata | src/data/site.json |
| Page copy, media references, and links | src/data/pages/ |
| Homepage stats, projects, FAQs, and newsletters | src/data/pages/index.json |
| Team roster, sponsors, milestones, photos, and outreach entries | src/data/team/, src/data/sponsors/, src/data/milestones/, src/data/photos/, src/data/outreach/ |

For ordered collections, add one JSON file per entry and set its **order** field to control display order. For a team member with no confirmed portrait, omit **img** to display their initials. Put public images and PDFs in public/images/ and public/docs/ and reference them as /images/… and /docs/….

When adding a route, pair the Astro page in src/pages/ with a JSON entry of the same name in src/data/pages/. The sitemap uses the collection IDs and excludes the 404 page.

## Hosting

The static build includes canonical URLs, a sitemap, robots.txt, and a custom 404 page. Vercel serves extensionless paths and revalidates HTML by default. The rules in vercel.json cache fingerprinted Astro assets for one year and revalidate public images and documents after one day.
