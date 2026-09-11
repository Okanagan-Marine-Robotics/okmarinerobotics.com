import { sponsorsData } from '../data/siteData';

export function renderSponsorsPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Our Backers</span>
          <h1 class="section-title text-gradient">Our Sponsors</h1>
          <p class="section-subtitle">We are immensely grateful to the organizations, companies, and grants powering our subsea robotics innovation.</p>
        </div>

        <!-- Platinum -->
        <h2 class="sponsor-tier-title" style="color: #E2E8F0;">
          <span style="display:inline-block; width: 14px; height: 14px; background: #E2E8F0; border-radius: 50%; box-shadow: 0 0 10px #E2E8F0;"></span>
          Platinum Sponsors
        </h2>
        <div class="sponsors-grid" style="margin-bottom: 50px;">
          ${sponsorsData.platinum.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Gold -->
        <h2 class="sponsor-tier-title" style="color: #FFD700;">
          <span style="display:inline-block; width: 14px; height: 14px; background: #FFD700; border-radius: 50%; box-shadow: 0 0 10px #FFD700;"></span>
          Gold Sponsors
        </h2>
        <div class="sponsors-grid" style="margin-bottom: 50px;">
          ${sponsorsData.gold.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Silver -->
        <h2 class="sponsor-tier-title" style="color: #CBD5E1;">
          <span style="display:inline-block; width: 14px; height: 14px; background: #CBD5E1; border-radius: 50%;"></span>
          Silver Sponsors
        </h2>
        <div class="sponsors-grid" style="margin-bottom: 50px;">
          ${sponsorsData.silver.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Bronze -->
        <h2 class="sponsor-tier-title" style="color: #CD7F32;">
          <span style="display:inline-block; width: 14px; height: 14px; background: #CD7F32; border-radius: 50%;"></span>
          Bronze Sponsors
        </h2>
        <div class="sponsors-grid" style="margin-bottom: 50px;">
          ${sponsorsData.bronze.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- Software -->
        <h2 class="sponsor-tier-title" style="color: var(--accent-cyan);">
          <span style="display:inline-block; width: 14px; height: 14px; background: var(--accent-cyan); border-radius: 50%; box-shadow: 0 0 10px var(--accent-cyan);"></span>
          Software Sponsor
        </h2>
        <div class="sponsors-grid">
          ${sponsorsData.software.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 70px; background: var(--bg-card); border-radius: var(--radius-lg); padding: 40px; border: 1px solid var(--border-color);">
          <h2 style="font-size: 1.8rem; margin-bottom: 14px;">Interested in Partnering With Us?</h2>
          <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto 28px;">
            Join world-class subsea engineering brands and support university robotics education while accessing top technical talent.
          </p>
          <a href="/sponsorships" class="btn btn-primary" data-nav>
            View Sponsorship Tier Deck
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
