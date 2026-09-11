import { teamData } from '../data/siteData';

export function renderOurTeamPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Team Roster</span>
          <h1 class="section-title text-gradient">Meet The Team</h1>
          <p class="section-subtitle">The dedicated student engineers, computer scientists, managers, and innovators behind Okanagan Marine Robotics.</p>
        </div>

        <!-- Executives -->
        <div style="margin-bottom: 70px;">
          <h2 style="font-size: 1.8rem; margin-bottom: 28px; border-left: 4px solid var(--accent-cyan); padding-left: 14px;">
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
        <div style="margin-bottom: 70px;">
          <h2 style="font-size: 1.8rem; margin-bottom: 28px; border-left: 4px solid var(--accent-cyan); padding-left: 14px;">
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
        <div style="margin-bottom: 70px;">
          <h2 style="font-size: 1.8rem; margin-bottom: 28px; border-left: 4px solid var(--accent-cyan); padding-left: 14px;">
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
          <div style="font-size: 1.8rem; margin-bottom: 8px;">🕊️</div>
          <h3>${teamData.memorial.title}</h3>
          <p style="color: var(--accent-cyan); font-weight: 600; font-size: 1.05rem; margin-bottom: 4px;">
            ${teamData.memorial.program} — ${teamData.memorial.role}
          </p>
          <p style="color: #CBD5E1; max-width: 720px; margin: 16px auto 0; font-style: italic; line-height: 1.8;">
            ${teamData.memorial.description}
          </p>
        </div>
      </div>
    </section>
  `;
}
