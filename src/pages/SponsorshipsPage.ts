import { sponsorsData, siteConfig } from '../data/siteData.ts';

export function renderSponsorshipsPage(): string {
  const tiers = [
    { name: "Platinum Tier", amount: "$5,000+", perks: ["Prominent logo on AUV hull & hydrofoil wings", "Featured logo on team uniforms & banners", "Direct recruitment access to our 80+ engineering members", "Dedicated sponsor spotlight on social media & newsletter", "Invitation to private live pool demonstrations"] },
    { name: "Gold Tier", amount: "$2,500+", perks: ["Medium logo on vehicle chassis & competition banners", "Logo on team apparel & website footer", "Direct distribution of job/internship openings", "Feature in term engineering progress reports"] },
    { name: "Silver Tier", amount: "$1,000+", perks: ["Logo on website sponsors page & social media recognition", "Logo featured on competition presentation slide decks", "Term newsletter acknowledgement"] },
    { name: "Bronze & In-Kind", amount: "$500+ / Hardware", perks: ["Logo on website", "Social media shoutout upon hardware delivery", "Certificate of appreciation from student design team"] }
  ];

  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Partner With Us</span>
          <h1 class="section-title">Sponsorship Opportunities</h1>
          <p class="section-subtitle">Invest in future subsea technology leaders and put your brand on the global stage at RoboSub.</p>
        </div>

        <div class="actions sponsorship-actions">
          <a href="/docs/Sponsorship-Package.pdf" target="_blank" rel="noopener" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Download Sponsorship Package (PDF)
          </a>
          <a href="${siteConfig.donations.corporate}" target="_blank" rel="noopener" class="btn btn-secondary">
            Donate Directly Through UBC
          </a>
        </div>

        <!-- Tiers Grid -->
        <div class="card-grid sponsorship-tiers">
          ${tiers.map(t => `
            <div class="card tier-card">
              <div>
                <h2 class="badge">${t.name}</h2>
                <div class="tier-amount">
                  ${t.amount}
                </div>
                <ul class="tier-perks">
                  ${t.perks.map(p => `
                    <li>${p}</li>
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
        <h2 class="subsection-title">
          Featured Partner Spotlights
        </h2>
        <div class="spotlights">
          ${[...sponsorsData.platinum, ...sponsorsData.gold].map(s => `
            <div class="card spotlight-card">
              <div class="sponsor-card">
                <img src="${s.logo}" alt="${s.name}" loading="lazy" />
              </div>
              <div>
                <div class="eyebrow">${s.tier}</div>
                <h3>${s.name}</h3>
                <p style="color: var(--text-body); line-height: 1.6;">${s.desc || 'Valued industry partner supporting student marine engineering and innovation.'}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
