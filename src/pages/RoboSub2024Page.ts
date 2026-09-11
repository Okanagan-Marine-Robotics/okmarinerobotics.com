export function renderRoboSub2024Page(): string {
  const teamImg = '/images/f0621d_7d1cf09c5504420f85a4b78_8872e33b3c.jpg';

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Inaugural Debut</span>
          <h1 class="section-title text-gradient">RoboSub 2024</h1>
          <p class="section-subtitle">Our rookie campaign in Irvine, California with our first-ever submarine: Cascade.</p>
        </div>

        <!-- Hero Stats -->
        <div class="stats-grid" style="margin-bottom: 60px;">
          <div class="stat-card">
            <div class="stat-value">15th</div>
            <div class="stat-label">Internationally out of 50+ Teams</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">3rd</div>
            <div class="stat-label">Ranked Team in Canada</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">Semifinals</div>
            <div class="stat-label">Advanced on Rookie Debut</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">23 Hours</div>
            <div class="stat-label">Road Trip Drive to California</div>
          </div>
        </div>

        <!-- Story & Media -->
        <div class="glass-card" style="padding: 40px; margin-bottom: 60px;">
          <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 30px; background: #06111e; border: 1px solid var(--border-color);">
            <img src="${teamImg}" alt="Okanagan Marine Robotics at RoboSub 2024" style="width: 100%; max-height: 520px; object-fit: cover;" />
          </div>
          <h2 style="font-size: 2rem; margin-bottom: 16px;">From Kelowna to California</h2>
          <p style="color: #CBD5E1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 24px;">
            After months of intense planning, late-night soldering, and 3D printing in campus makerspaces, we attended our first ever competition in August 2024. Six of our founding members made the 23-hour road trip down to Irvine to showcase our very first submarine, <strong>Cascade</strong>.
          </p>
          <p style="color: #CBD5E1; font-size: 1.05rem; line-height: 1.8; margin-bottom: 28px;">
            Cascade successfully passed in-water buoyancy inspections and autonomous gate transit, advancing to the global semifinals against experienced veteran teams from across North America, Europe, and Asia.
          </p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="/docs/RoboSub-2024-Technical-Paper.pdf" target="_blank" class="btn btn-primary">
              Read 2024 Technical Paper (PDF)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </a>
            <a href="/robosub-2025" class="btn btn-secondary" data-nav>
              See Our 2025 Follow-Up
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
