import { teamData, type TeamMember } from '../data/siteData.ts';

function renderTeamGroup(title: string, members: TeamMember[]): string {
  return `
    <section class="team-group">
      <h2 class="subsection-title">${title}</h2>
      <div class="team-grid">
        ${members.map(member => {
          const initials = member.name.split(/\s+/).map(word => word[0]).join('');
          return `
            <article class="member-card">
              <div class="member-img-wrap">
                ${member.img
                  ? `<img src="${member.img}" alt="" loading="lazy" />`
                  : `<div class="member-placeholder" aria-hidden="true">${initials}</div>`}
              </div>
              <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                ${member.program ? `<p class="member-program">${member.program}</p>` : ''}
              </div>
            </article>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

export function renderOurTeamPage(): string {
  const memorial = teamData.memorial;
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Team roster</span>
          <h1 class="section-title">Meet the team</h1>
          <p class="section-subtitle">The dedicated student engineers, computer scientists, managers, and innovators behind Okanagan Marine Robotics.</p>
        </div>

        ${renderTeamGroup('Executive team', teamData.executives)}
        ${renderTeamGroup('Management & operations', teamData.management)}
        ${renderTeamGroup('Subteam leads & specialists', teamData.subteamLeads)}

        <article class="memorial-card">
          <div class="memorial-img-wrap">
            <img src="${memorial.img}" alt="${memorial.name}" loading="lazy" />
          </div>
          <div>
            <h2>${memorial.title}</h2>
            <p class="memorial-role">${memorial.program} — ${memorial.role}</p>
            <p class="memorial-description">${memorial.description}</p>
          </div>
        </article>
      </div>
    </section>
  `;
}
