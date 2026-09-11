import { journeyTimeline } from '../data/siteData';

export function renderOurJourneyPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Milestones & Growth</span>
          <h1 class="section-title text-gradient">Our Journey</h1>
          <p class="section-subtitle">What started as an idea has grown into an international contender and an inspiring community of innovators.</p>
        </div>

        <div style="max-width: 860px; margin: 0 auto 60px; text-align: center; color: #E2E8F0; font-size: 1.15rem; line-height: 1.8;">
          <p>
            So.. where did it all start? Okanagan Marine Robotics was founded by a passionate handful of students wanting to solve one of engineering's hardest challenges: autonomous subsea robotics. Today, we represent the University of British Columbia on the global stage.
          </p>
        </div>

        <div class="timeline">
          ${journeyTimeline.map(item => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-year">${item.year}</div>
              <h3 class="timeline-title">${item.title}</h3>
              <p class="timeline-desc">${item.desc}</p>
            </div>
          `).join('')}
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 40px; margin-top: 60px; text-align: center;">
          <h2 style="font-size: 1.8rem; margin-bottom: 16px;">Be Part of Our Next Chapter</h2>
          <p style="color: var(--text-muted); max-width: 650px; margin: 0 auto 28px;">
            Whether you want to build autonomous perception algorithms, fabricate carbon composite hulls, or sponsor the next generation of engineers, we would love to have you.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="/our-team" class="btn btn-primary" data-nav>Meet Our Members</a>
            <a href="/sponsors" class="btn btn-secondary" data-nav>Sponsor Our Journey</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
