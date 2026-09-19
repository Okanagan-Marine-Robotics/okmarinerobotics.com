import { journeyTimeline } from '../data/siteData';

export function renderOurJourneyPage(): string {
  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Milestones & Growth</span>
          <h1 class="section-title">Our Journey</h1>
          <p class="section-subtitle">What started as an idea has grown into an international contender and an inspiring community of innovators.</p>
        </div>

        <div style="max-width: 820px; margin: 0 auto 50px; text-align: center; color: var(--text-body); font-size: 1.15rem; line-height: 1.8;">
          <p>
            So.. where did it all start? What started as an idea has become a movement of innovation and discovery. Together, we continue to explore new depths and redefine what’s possible in the water.
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

        <div class="card" style="margin-top: 50px; text-align: center; max-width: 820px; margin-left: auto; margin-right: auto;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 12px; text-transform: uppercase;">
            Be Part of Our Next Chapter
          </h2>
          <p style="color: var(--text-body); max-width: 650px; margin: 0 auto 24px; font-size: 1.05rem;">
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
