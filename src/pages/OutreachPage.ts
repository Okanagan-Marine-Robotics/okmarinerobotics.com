import { outreachData } from '../data/siteData';

export function renderOutreachPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Community & STEM</span>
          <h1 class="section-title text-gradient">Community Outreach</h1>
          <p class="section-subtitle">Inspiring the next generation of engineers, coders, and scientists across the Okanagan Valley.</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 70px;">
          ${outreachData.map((item, idx) => `
            <div class="glass-card" style="padding: 36px;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 36px; align-items: center;">
                <div style="order: ${idx % 2 === 0 ? 1 : 2};">
                  <span class="badge" style="margin-bottom: 12px;">${item.subtitle}</span>
                  <h2 style="font-size: 2rem; margin-bottom: 16px;">${item.title}</h2>
                  <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.8; margin-bottom: 24px;">
                    ${item.desc}
                  </p>
                  <a href="/contact-us" class="btn btn-secondary" data-nav>
                    Host a STEM Workshop
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
                <div style="order: ${idx % 2 === 0 ? 2 : 1}; display: grid; grid-template-columns: 1.2fr 1fr; gap: 14px;">
                  <div style="border-radius: var(--radius-sm); overflow: hidden; height: 260px; background: #06111e; border: 1px solid var(--border-color);">
                    <img src="${item.img1}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                  </div>
                  <div style="border-radius: var(--radius-sm); overflow: hidden; height: 260px; background: #06111e; border: 1px solid var(--border-color);">
                    <img src="${item.img2}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
