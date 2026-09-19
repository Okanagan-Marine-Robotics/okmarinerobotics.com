import { sponsorsData } from '../data/siteData';

export function renderSponsorsPage(): string {
  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Our Backers</span>
          <h1 class="section-title">Our Sponsors</h1>
          <p class="section-subtitle">We are immensely grateful to the organizations, companies, and grants powering our subsea robotics innovation.</p>
        </div>

        <!-- Platinum -->
        <h2 class="sponsor-tier-title">Platinum Sponsors</h2>
        <div class="sponsors-grid" style="margin-bottom: 40px;">
          ${sponsorsData.platinum.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Gold -->
        <h2 class="sponsor-tier-title">Gold Sponsors</h2>
        <div class="sponsors-grid" style="margin-bottom: 40px;">
          ${sponsorsData.gold.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Silver -->
        <h2 class="sponsor-tier-title">Silver Sponsors</h2>
        <div class="sponsors-grid" style="margin-bottom: 40px;">
          ${sponsorsData.silver.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Bronze -->
        <h2 class="sponsor-tier-title">Bronze Sponsors</h2>
        <div class="sponsors-grid" style="margin-bottom: 40px;">
          ${sponsorsData.bronze.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Software -->
        <h2 class="sponsor-tier-title">Software Sponsor</h2>
        <div class="sponsors-grid" style="margin-bottom: 50px;">
          ${sponsorsData.software.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <div class="card" style="text-align: center; max-width: 820px; margin: 0 auto; padding: 40px;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 12px; text-transform: uppercase;">
            Interested in Partnering With Us?
          </h2>
          <p style="color: var(--text-body); max-width: 600px; margin: 0 auto 24px; font-size: 1.05rem;">
            Join world-class subsea engineering brands and support university robotics education while accessing top technical talent.
          </p>
          <div>
            <a href="/sponsorships" class="btn btn-primary" data-nav>
              View Sponsorship Tier Deck
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
