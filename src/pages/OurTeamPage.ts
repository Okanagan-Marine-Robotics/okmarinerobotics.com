import { teamData } from '../data/siteData';

export function renderOurTeamPage(): string {
  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Team Roster</span>
          <h1 class="section-title">Meet The Team</h1>
          <p class="section-subtitle">The dedicated student engineers, computer scientists, managers, and innovators behind Okanagan Marine Robotics.</p>
        </div>

        <!-- Executives -->
        <div style="margin-bottom: 60px;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 24px; border-left: 5px solid var(--ocean-blue); padding-left: 14px; text-transform: uppercase;">
            Executive Team
          </h2>
          <div class="team-grid">
            ${teamData.executives.map(m => `
              <div class="member-card">
                <div class="member-img-wrap">
                  <img src="${m.img}" alt="${m.name}" loading="lazy" />
                </div>
                <div class="member-info">
                  <div class="member-name">${m.name}</div>
                  <div class="member-role">${m.role}</div>
                  <div class="member-program">${m.program}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Management & Operations -->
        <div style="margin-bottom: 60px;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 24px; border-left: 5px solid var(--ocean-blue); padding-left: 14px; text-transform: uppercase;">
            Management & Operations
          </h2>
          <div class="team-grid">
            ${teamData.management.map(m => `
              <div class="member-card">
                <div class="member-img-wrap">
                  <img src="${m.img}" alt="${m.name}" loading="lazy" />
                </div>
                <div class="member-info">
                  <div class="member-name">${m.name}</div>
                  <div class="member-role">${m.role}</div>
                  <div class="member-program">${m.program}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Engineering Leads & Core Subteams -->
        <div style="margin-bottom: 60px;">
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--navy-deep); margin-bottom: 24px; border-left: 5px solid var(--ocean-blue); padding-left: 14px; text-transform: uppercase;">
            Subteam Leads & Specialists
          </h2>
          <div class="team-grid">
            ${teamData.subteamLeads.map(m => `
              <div class="member-card">
                <div class="member-img-wrap">
                  <img src="${m.img}" alt="${m.name}" loading="lazy" />
                </div>
                <div class="member-info">
                  <div class="member-name">${m.name}</div>
                  <div class="member-role">${m.role}</div>
                  <div class="member-program">${m.program}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Memorial Tribute -->
        <div class="memorial-card">
          <div style="font-size: 2rem; margin-bottom: 8px;">🕊️</div>
          <h3>${teamData.memorial.title}</h3>
          <p style="color: var(--ocean-blue); font-weight: 700; font-size: 1.05rem; margin-bottom: 6px;">
            ${teamData.memorial.program} — ${teamData.memorial.role}
          </p>
          <p style="color: var(--text-body); max-width: 720px; margin: 16px auto 0; font-style: italic; line-height: 1.8;">
            ${teamData.memorial.description}
          </p>
        </div>
      </div>
    </section>
  `;
}
