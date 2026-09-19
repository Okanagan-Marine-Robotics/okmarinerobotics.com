import { outreachData } from '../data/siteData';

export function renderOutreachPage(): string {
  const defaultItem = outreachData[0];

  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        
        <!-- Outreach Tabs matching live site -->
        <div class="outreach-tabs" id="outreachTabs">
          ${outreachData.map((item, idx) => `
            <button class="outreach-tab-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              ${item.title}
            </button>
          `).join('')}
        </div>

        <!-- Active Tab Content Area -->
        <div id="outreachActiveContent" style="max-width: 1000px; margin: 0 auto;">
          <h1 class="outreach-display-title" id="outreachTitle">${defaultItem.title}</h1>
          
          <div class="outreach-photos-frame">
            <div class="outreach-photo-box">
              <img id="outreachImg1" src="${defaultItem.img1}" alt="${defaultItem.title}" />
            </div>
            <div class="outreach-photo-box">
              <img id="outreachImg2" src="${defaultItem.img2}" alt="${defaultItem.title}" />
            </div>
          </div>

          <div class="card" style="margin-top: 24px; padding: 32px; text-align: center;">
            <span class="badge" id="outreachSubtitle" style="margin-bottom: 12px; align-self: center;">
              ${defaultItem.subtitle}
            </span>
            <p id="outreachDesc" style="color: var(--text-body); font-size: 1.15rem; line-height: 1.8; max-width: 800px; margin: 0 auto 24px;">
              ${defaultItem.desc}
            </p>
            <div>
              <a href="/contact-us" class="btn btn-primary" data-nav>
                Host a STEM Workshop
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
