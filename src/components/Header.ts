import { siteConfig, navItems } from '../data/siteData.ts';

export function renderHeader(currentPath: string): string {
  const navHtml = navItems.map(item => {
    if (item.children) {
      const active = item.children.some(child => child.path === currentPath);
      return `
        <li>
          <details class="nav-group">
            <summary class="nav-link ${active ? 'active' : ''}">
              ${item.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
            </summary>
            <ul class="nav-dropdown">
              ${item.children.map(child => `
                <li><a href="${child.path}" class="dropdown-link"${child.path === currentPath ? ' aria-current="page"' : ''}>${child.label}</a></li>
              `).join('')}
            </ul>
          </details>
        </li>
      `;
    }
    const classes = item.isCta ? 'btn nav-cta' : 'nav-link';
    return `<li><a href="${item.path}" class="${classes}"${item.path === currentPath ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="brand-logo">
          <img src="${siteConfig.logo}" alt="" width="42" height="42" />
          <div>
            <div class="brand-name">${siteConfig.name}</div>
            <div class="brand-sub">UBC Okanagan</div>
          </div>
        </a>
        <button class="mobile-toggle" id="mobileMenuBtn" type="button" aria-controls="navMenu" aria-expanded="false" aria-label="Navigation menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <nav id="navMenu" class="site-nav" aria-label="Main navigation">
          <ul class="nav-menu">${navHtml}</ul>
        </nav>
      </div>
    </header>
  `;
}
