import { siteConfig, homeData, sponsorsData } from '../data/siteData';

export function renderHomePage(): string {
  const allSponsors = [
    ...sponsorsData.platinum,
    ...sponsorsData.gold,
    ...sponsorsData.silver,
    ...sponsorsData.bronze
  ];

  return `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('${siteConfig.heroImage}');"></div>
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content">
          <div class="badge" style="margin-bottom: 14px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-cyan);"></span>
            ${homeData.hero.badge}
          </div>
          <h1 class="hero-title text-gradient">${homeData.hero.title}</h1>
          <p class="hero-lead">${homeData.hero.lead}</p>
          <div class="hero-actions">
            <a href="${homeData.hero.ctaPrimary.path}" class="btn btn-primary" data-nav>
              ${homeData.hero.ctaPrimary.label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="${homeData.hero.ctaSecondary.path}" class="btn btn-secondary" data-nav>
              ${homeData.hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          ${homeData.stats.map(s => `
            <div class="stat-card">
              <div class="stat-value">${s.value}</div>
              <div class="stat-label">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Innovation at Depth</span>
          <h2 class="section-title">Why Okanagan Marine Robotics?</h2>
          <p class="section-subtitle">The fastest growing engineering design team at UBC Okanagan, pushing the boundaries of autonomous subsea technology.</p>
        </div>
        <div class="card-grid">
          ${homeData.whyUs.map((w, idx) => `
            <div class="glass-card">
              <div style="font-family: var(--font-mono); font-size: 1.2rem; color: var(--accent-cyan); font-weight: 700; margin-bottom: 12px;">
                0${idx + 1}.
              </div>
              <h3 style="font-size: 1.4rem; margin-bottom: 12px;">${w.title}</h3>
              <p style="color: var(--text-muted);">${w.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section" style="background: rgba(11, 30, 52, 0.4); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Flagship Systems</span>
          <h2 class="section-title">Current Projects</h2>
          <p class="section-subtitle">Our interdisciplinary subteams engineer competitive subsea autonomous robotics and hydrodynamic craft from the ground up.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 32px;">
          ${homeData.projects.map(p => `
            <div class="project-card">
              <div class="project-img-wrap">
                <img src="${p.image}" alt="${p.title}" loading="lazy" />
              </div>
              <div class="project-body">
                <div>
                  <h3 class="project-title">${p.title}</h3>
                  <div class="project-subtitle">${p.subtitle}</div>
                  <p class="project-desc">${p.desc}</p>
                </div>
                <div>
                  <a href="${p.link}" class="btn btn-primary" style="width: 100%;" data-nav>
                    Explore System
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Sponsors Preview -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Industry Partners</span>
          <h2 class="section-title">Our Generous Sponsors</h2>
          <p class="section-subtitle">Our team's success is made possible by the incredible support of industry leaders and institutional grants.</p>
        </div>
        <div class="sponsors-grid">
          ${allSponsors.map(s => `
            <div class="sponsor-card">
              <img src="${s.logo}" alt="${s.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>
        <div style="text-align: center; margin-top: 40px;">
          <a href="/sponsorships" class="btn btn-secondary" data-nav>
            Become a Sponsor & View Tier Deck
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Support Us / Donations -->
    <section class="section" style="background: linear-gradient(135deg, rgba(0, 153, 255, 0.1), rgba(0, 210, 255, 0.04)); border-top: 1px solid var(--border-glow); border-bottom: 1px solid var(--border-glow);">
      <div class="container" style="text-align: center; max-width: 860px;">
        <span class="badge" style="margin-bottom: 16px;">Tax-Deductible Contributions</span>
        <h2 class="section-title">Support Our Mission</h2>
        <p style="color: #CBD5E1; font-size: 1.15rem; margin-bottom: 30px; line-height: 1.7;">
          Interested in supporting our engineering students? Any and all contributions make a huge difference in purchasing sensors, batteries, thrusters, and sending our travel team to California! Alternatively, donate through UBC Giving with our team code: <strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${siteConfig.donations.code}</strong>.
        </p>
        <div style="display: flex; justify-content: center; gap: 18px; flex-wrap: wrap;">
          <a href="${siteConfig.donations.individual}" target="_blank" rel="noopener" class="btn btn-primary">
            Donate as an Individual
          </a>
          <a href="${siteConfig.donations.corporate}" target="_blank" rel="noopener" class="btn btn-secondary">
            Corporate Sponsorship
          </a>
          <a href="mailto:${siteConfig.email}" class="btn btn-secondary">
            Email Team Leadership
          </a>
        </div>
      </div>
    </section>

    <!-- Newsletters -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Publications & Reports</span>
          <h2 class="section-title">Team Newsletters & Competition Summaries</h2>
          <p class="section-subtitle">Catch up on our design reviews, competition recaps, and term progress reports.</p>
        </div>
        <div class="card-grid">
          ${homeData.newsletters.map(n => `
            <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; gap: 10px; color: var(--accent-cyan); margin-bottom: 12px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  <span style="font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">PDF Document</span>
                </div>
                <h3 style="font-size: 1.3rem; margin-bottom: 16px;">${n.title}</h3>
              </div>
              <a href="${n.file}" target="_blank" class="btn btn-secondary" style="width: 100%;">
                Read Report (PDF)
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="section" style="background: rgba(11, 30, 52, 0.3); border-top: 1px solid var(--border-color);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Got Questions?</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">Everything you need to know about joining Okanagan Marine Robotics.</p>
        </div>
        <div class="faq-list">
          ${homeData.faqs.map((f, i) => `
            <div class="faq-item ${i === 0 ? 'open' : ''}">
              <button class="faq-question" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <span>${f.q}</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                ${f.a}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
