import { siteConfig, navItems } from '../data/siteData';

export function renderHeader(currentPath: string): string {
  const navHtml = navItems.map(item => {
    if (item.children) {
      const isAnyChildActive = item.children.some(c => c.path === currentPath);
      return `
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link ${isAnyChildActive ? 'active' : ''}" onclick="event.preventDefault()">
            ${item.label}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <ul class="nav-dropdown">
            ${item.children.map(child => `
              <li>
                <a href="${child.path}" class="dropdown-link ${child.path === currentPath ? 'active' : ''}" data-nav>
                  ${child.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </li>
      `;
    }

    if (item.isCta) {
      return `
        <li class="nav-item">
          <a href="${item.path}" class="btn btn-primary" style="padding: 8px 18px; font-size: 0.9rem;" data-nav>
            ${item.label}
          </a>
        </li>
      `;
    }

    return `
      <li class="nav-item">
        <a href="${item.path}" class="nav-link ${item.path === currentPath ? 'active' : ''}" data-nav>
          ${item.label}
        </a>
      </li>
    `;
  }).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="brand-logo" data-nav>
          <img src="${siteConfig.logo}" alt="${siteConfig.name} Logo" width="46" height="46" />
          <div>
            <div class="brand-name">OKANAGAN MARINE ROBOTICS</div>
            <div class="brand-sub">UBC Okanagan Design Team</div>
          </div>
        </a>

        <button class="mobile-toggle" id="mobileMenuBtn" aria-label="Toggle Navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>

        <ul class="nav-menu" id="navMenu">
          ${navHtml}
        </ul>
      </div>
    </header>
  `;
}
