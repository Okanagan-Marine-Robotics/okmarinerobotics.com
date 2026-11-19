import { renderHeader } from './components/Header.ts';
import { renderFooter } from './components/Footer.ts';
import { renderHomePage } from './pages/HomePage.ts';
import { renderOurTeamPage } from './pages/OurTeamPage.ts';
import { renderOurJourneyPage } from './pages/OurJourneyPage.ts';
import { renderGalleryPage } from './pages/GalleryPage.ts';
import { renderAuvPage } from './pages/AuvPage.ts';
import { renderAuvElectricalPage } from './pages/AuvElectricalPage.ts';
import { renderAuvMechanicalPage } from './pages/AuvMechanicalPage.ts';
import { renderAuvSoftwarePage } from './pages/AuvSoftwarePage.ts';
import { renderHydrofoilPage } from './pages/HydrofoilPage.ts';
import { renderOutreachPage } from './pages/OutreachPage.ts';
import { renderRoboSub2025Page } from './pages/RoboSub2025Page.ts';
import { renderRoboSub2024Page } from './pages/RoboSub2024Page.ts';
import { renderSponsorsPage } from './pages/SponsorsPage.ts';
import { renderSponsorshipsPage } from './pages/SponsorshipsPage.ts';
import { renderContactPage } from './pages/ContactPage.ts';

export const siteOrigin = 'https://okmarinerobotics.com';

const pages = {
  '/': { title: 'Home', render: renderHomePage },
  '/our-team': { title: 'Our Team', render: renderOurTeamPage },
  '/our-journey': { title: 'Our Journey', render: renderOurJourneyPage },
  '/gallery': { title: 'Gallery', render: renderGalleryPage },
  '/auv': { title: 'The AUV Ogopogo', render: renderAuvPage },
  '/auv-electrical': { title: 'AUV Electrical', render: renderAuvElectricalPage },
  '/auv-mechanical': { title: 'AUV Mechanical', render: renderAuvMechanicalPage },
  '/auv-software': { title: 'AUV Software Architecture', render: renderAuvSoftwarePage },
  '/hydrofoil': { title: 'Hydrofoil Project', render: renderHydrofoilPage },
  '/outreach': { title: 'Community Outreach', render: renderOutreachPage },
  '/robosub-2025': { title: 'RoboSub 2025', render: renderRoboSub2025Page },
  '/robosub-2024': { title: 'RoboSub 2024', render: renderRoboSub2024Page },
  '/sponsors': { title: 'Our Sponsors', render: renderSponsorsPage },
  '/sponsorships': { title: 'Sponsorship Opportunities', render: renderSponsorshipsPage },
  '/contact-us': { title: 'Contact Us', render: renderContactPage },
};

export const pagePaths = Object.keys(pages);

export function renderDocument(template: string, path: string): string {
  const page = Object.hasOwn(pages, path) ? pages[path as keyof typeof pages] : undefined;
  const canonical = page ? new URL(path, siteOrigin).href : '';
  const title = page?.title ?? 'Page Not Found';
  const body = page?.render() ?? `
    <section class="section not-found">
      <div class="container">
        <span class="badge">HTTP 404</span>
        <h1 class="section-title">Page not found</h1>
        <p class="section-subtitle">The page you requested may have moved or been removed.</p>
        <a class="btn btn-primary" href="/">Back to home</a>
      </div>
    </section>
  `;
  const metadata = page
    ? `<link rel="canonical" href="${canonical}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteOrigin}/images/logo.png" />`
    : '<meta name="robots" content="noindex" />';

  return template
    .replace('<!-- page-title -->', () => path === '/' ? 'Okanagan Marine Robotics | UBC Okanagan Engineering Design Team' : `${title} | Okanagan Marine Robotics`)
    .replace('<!-- page-metadata -->', () => metadata)
    .replace('<!-- page-content -->', () => `
      <a class="skip-link" href="#main-content">Skip to content</a>
      ${renderHeader(path)}
      <main id="main-content">
        ${body}
      </main>
      ${renderFooter()}
    `);
}

export function renderSitemap(): string {
  const urls = pagePaths.map(path => `  <url><loc>${new URL(path, siteOrigin).href}</loc></url>`);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
