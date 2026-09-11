export function renderRoboSub2025Page(): string {
  const teamImg = '/images/f0621d_18d47c691bc94a648ca5dea_bc1f719001.jpg';

  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">International Competition</span>
          <h1 class="section-title text-gradient">RoboSub 2025</h1>
          <p class="section-subtitle">Irvine, California — Competing with Ogopogo against 58 top global universities.</p>
        </div>

        <!-- Hero Stats -->
        <div class="stats-grid" style="margin-bottom: 60px;">
          <div class="stat-card">
            <div class="stat-value">11th</div>
            <div class="stat-label">Internationally out of 58 Teams</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">2nd</div>
            <div class="stat-label">Ranked Team in Canada</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4th</div>
            <div class="stat-label">Place Technical Design Paper</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4th</div>
            <div class="stat-label">Place Team Demonstration Video</div>
          </div>
        </div>

        <!-- Story & Media -->
        <div class="glass-card" style="padding: 40px; margin-bottom: 60px;">
          <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 30px; background: #06111e; border: 1px solid var(--border-color);">
            <img src="${teamImg}" alt="Okanagan Marine Robotics at RoboSub 2025" style="width: 100%; max-height: 520px; object-fit: cover;" />
          </div>
          <h2 style="font-size: 2rem; margin-bottom: 16px;">Doubling Our Footprint in California</h2>
          <p style="color: #CBD5E1; font-size: 1.1rem; line-height: 1.8; margin-bottom: 24px;">
            This year, our team doubled in size as 12 members traveled with <strong>Ogopogo</strong> back to Irvine, California for our second international competition! After days of grueling poolside diagnostics, acoustic calibration, and autonomous obstacle navigation, we significantly surpassed our rookie performance to finish 11th overall in the world.
          </p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="https://www.youtube.com/watch?v=KWicUGW2KH4&t=1s" target="_blank" rel="noopener" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch 4th-Place Team Video
            </a>
            <a href="/docs/RoboSub-2025-Technical-Paper.pdf" target="_blank" class="btn btn-secondary">
              Read Technical Paper (PDF)
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </a>
            <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXxXI-kv_FB-9PbUNexgPf2k1Lm8jAugNN8Tb4Z0YoCMsdRyDcnY_SyaPkbVhoJCy2HjYw2ulb67dE/pubhtml" target="_blank" rel="noopener" class="btn btn-secondary">
              Official Leaderboard Standings
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
