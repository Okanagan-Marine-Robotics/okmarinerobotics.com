import { siteConfig, homeData, sponsorsData } from '../data/siteData.ts';

export function renderHomePage(): string {
  const sponsors = [
    ...sponsorsData.platinum,
    ...sponsorsData.gold,
    ...sponsorsData.silver,
    ...sponsorsData.bronze,
  ];
  const stats = [
    ['$59,000', 'Funding acquired'],
    ['11th', 'Overall at RoboSub 2025, out of 58 teams'],
    ['2nd', 'Ranked team in Canada'],
    ['80+', 'Team members'],
  ];

  return `
    <section class="hero">
      <div class="container hero-layout">
        <div class="hero-content">
          <p class="eyebrow">UBC Okanagan Engineering Design Team</p>
          <h1>Okanagan<br />Marine Robotics<span>.</span></h1>
          <p class="hero-lead">We’re a student-led team designing, building, and testing autonomous underwater vehicles and hydrofoils at UBC Okanagan.</p>
          <div class="actions">
            <a href="/auv" class="btn btn-primary">Explore our AUV <span aria-hidden="true">↗</span></a>
            <a href="/our-team" class="btn btn-secondary-dark">Meet the team</a>
          </div>
        </div>
        <figure class="hero-photo">
          <img src="/images/f0621d_34da9addbeef4f358d82a49_a2efd9844f.jpg" width="720" height="558" alt="An Okanagan Marine Robotics vehicle submerged in a test pool" fetchpriority="high" />
          <figcaption>AUV pool testing</figcaption>
        </figure>
        <dl class="hero-specs">
          <div><dt>Vehicle</dt><dd>Ogopogo</dd></div>
          <div><dt>Propulsion</dt><dd>8 thrusters</dd></div>
          <div><dt>Control</dt><dd>6 degrees of freedom</dd></div>
          <div><dt>Autonomy</dt><dd>ROS 2 Humble</dd></div>
        </dl>
      </div>
    </section>

    <section class="stats-section" aria-labelledby="stats-title">
      <div class="container stats-layout">
        <h2 id="stats-title">Our year<br class="stats-break" /> in numbers</h2>
        <dl class="stats-grid">
          ${stats.map(([value, label]) => `
            <div class="stat-card">
              <dt class="stat-label">${label}</dt>
              <dd class="stat-value">${value}</dd>
            </div>
          `).join('')}
        </dl>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Current projects</h2>
        </div>
        <div class="project-grid">
          ${homeData.projects.map(project => `
            <article class="project-card">
              <div class="project-img-wrap">
                <img src="${project.image}" alt="" loading="lazy" />
              </div>
              <div class="project-body">
                <p class="eyebrow">${project.subtitle}</p>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <a href="${project.link}" class="text-link">
                  ${project.link === '/auv' ? 'Explore Ogopogo' : 'Explore the hydrofoil'} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why join OKMR?</h2>
        </div>
        <div class="feature-grid">
          ${homeData.whyUs.map(item => `
            <article class="card feature-card">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </article>
          `).join('')}
        </div>
        <a href="/our-journey" class="text-link section-link">Read our journey <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our sponsors</h2>
          <p class="section-subtitle">Our team's success is made possible by industry partners and institutional grants.</p>
        </div>
        <div class="sponsors-grid">
          ${sponsors.map(sponsor => `
            <div class="sponsor-card">
              <img src="${sponsor.logo}" alt="${sponsor.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>
        <a href="/sponsorships" class="text-link section-link">View sponsorship opportunities <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="section support-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Support our mission</h2>
          <p class="section-subtitle">Tax-deductible contributions help us purchase sensors, batteries, and thrusters, and send our team to competitions. You can also donate through UBC Giving using our team code <strong>${siteConfig.donations.code}</strong>.</p>
        </div>
        <div class="actions">
          <a href="${siteConfig.donations.individual}" target="_blank" rel="noopener" class="btn btn-primary">Donate as an individual</a>
          <a href="${siteConfig.donations.corporate}" target="_blank" rel="noopener" class="btn btn-secondary-dark">Corporate sponsorship</a>
          <a href="mailto:${siteConfig.email}" class="btn btn-secondary-dark">Email team leadership</a>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Team newsletters</h2>
          <p class="section-subtitle">Build milestones, competition recaps, and updates from our subteams.</p>
        </div>
        <div class="card-grid">
          ${homeData.newsletters.map(newsletter => `
            <article class="card newsletter">
              <h3>${newsletter.title}</h3>
              <a href="${newsletter.file}" target="_blank" rel="noopener" class="text-link">Read PDF <span aria-hidden="true">↗</span></a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container faq-layout">
        <div class="section-header">
          <h2 class="section-title">Frequently asked questions</h2>
        </div>
        <div class="faq-list">
          ${homeData.faqs.map(faq => `
            <details class="faq-item" name="team-questions">
              <summary class="faq-question">${faq.q}<span class="faq-icon" aria-hidden="true">+</span></summary>
              <p class="faq-answer">${faq.a}</p>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
