import { sponsorsData, siteConfig } from '../data/siteData';

export function renderSponsorshipsPage(): string {
  const tiers = [
    { name: "Platinum Tier", amount: "$5,000+", perks: ["Prominent logo on AUV hull & hydrofoil wings", "Featured logo on team uniforms & banners", "Direct recruitment access to our 80+ engineering members", "Dedicated sponsor spotlight on social media & newsletter", "Invitation to private live pool demonstrations"] },
    { name: "Gold Tier", amount: "$2,500+", perks: ["Medium logo on vehicle chassis & competition banners", "Logo on team apparel & website footer", "Direct distribution of job/internship openings", "Feature in term engineering progress reports"] },
    { name: "Silver Tier", amount: "$1,000+", perks: ["Logo on website sponsors page & social media recognition", "Logo featured on competition presentation slide decks", "Term newsletter acknowledgement"] },
    { name: "Bronze & In-Kind", amount: "$500+ / Hardware", perks: ["Logo on website", "Social media shoutout upon hardware delivery", "Certificate of appreciation from student design team"] }
  ];

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Partner With Us</span>
          <h1 class="section-title text-gradient">Sponsorship Opportunities</h1>
          <p class="section-subtitle">Invest in future subsea technology leaders and put your brand on the global stage at RoboSub.</p>
        </div>

        <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 50px; flex-wrap: wrap;">
          <a href="/docs/Sponsorship-Package.pdf" target="_blank" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Download Sponsorship Package (PDF)
          </a>
          <a href="${siteConfig.donations.corporate}" target="_blank" rel="noopener" class="btn btn-secondary">
            Donate Directly Through UBC
          </a>
        </div>

        <!-- Tiers Grid -->
        <div class="card-grid" style="margin-bottom: 70px;">
          ${tiers.map(t => `
            <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="badge" style="margin-bottom: 12px;">${t.name}</span>
                <div style="font-size: 2.2rem; font-weight: 900; color: var(--accent-cyan); font-family: var(--font-heading); margin-bottom: 18px;">
                  ${t.amount}
                </div>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 30px;">
                  ${t.perks.map(p => `
                    <li style="display: flex; align-items: flex-start; gap: 10px; color: #CBD5E1; font-size: 0.95rem;">
                      <span style="color: var(--accent-cyan); font-weight: bold;">✓</span>
                      <span>${p}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <a href="/contact-us" class="btn btn-secondary" style="width: 100%;" data-nav>
                Inquire for ${t.name}
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Sponsor Spotlights -->
        <h2 style="font-size: 2rem; margin-bottom: 24px; text-align: center;">Featured Partner Spotlights</h2>
        <div style="display: flex; flex-direction: column; gap: 24px; margin-bottom: 60px;">
          ${[...sponsorsData.platinum, ...sponsorsData.gold].map(s => `
            <div class="glass-card" style="display: grid; grid-template-columns: 220px 1fr; gap: 30px; align-items: center; padding: 24px;">
              <div class="sponsor-card" style="min-height: 120px;">
                <img src="${s.logo}" alt="${s.name}" loading="lazy" />
              </div>
              <div>
                <div style="color: var(--accent-cyan); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">${s.tier}</div>
                <h3 style="font-size: 1.5rem; margin: 4px 0 10px;">${s.name}</h3>
                <p style="color: var(--text-muted); line-height: 1.7;">${s.desc || 'Valued industry partner supporting student marine engineering and innovation.'}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
