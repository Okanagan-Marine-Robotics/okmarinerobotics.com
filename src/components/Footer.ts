import { siteConfig } from '../data/siteData';

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="brand-logo" style="margin-bottom: 12px;">
              <img src="${siteConfig.logo}" alt="${siteConfig.name} Logo" width="42" height="42" />
              <div>
                <div class="brand-name">OKANAGAN MARINE ROBOTICS</div>
                <div class="brand-sub">${siteConfig.institution}</div>
              </div>
            </div>
            <p>${siteConfig.tagline}</p>
            <div class="social-links">
              <a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="${siteConfig.socials.linkedin}" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="${siteConfig.socials.github}" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-heading">Navigation</h4>
            <ul class="footer-links">
              <li><a href="/" data-nav>Home</a></li>
              <li><a href="/our-team" data-nav>Our Team</a></li>
              <li><a href="/our-journey" data-nav>Our Journey</a></li>
              <li><a href="/gallery" data-nav>Gallery</a></li>
              <li><a href="/outreach" data-nav>STEM Outreach</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Robotics & Projects</h4>
            <ul class="footer-links">
              <li><a href="/auv" data-nav>AUV Ogopogo</a></li>
              <li><a href="/auv-electrical" data-nav>AUV Electrical</a></li>
              <li><a href="/auv-mechanical" data-nav>AUV Mechanical</a></li>
              <li><a href="/auv-software" data-nav>AUV Software</a></li>
              <li><a href="/hydrofoil" data-nav>Hydrofoil Project</a></li>
              <li><a href="/robosub-2025" data-nav>RoboSub 2025</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Support & Connect</h4>
            <ul class="footer-links">
              <li><a href="/sponsors" data-nav>Our Sponsors</a></li>
              <li><a href="/sponsorships" data-nav>Sponsorship Packages</a></li>
              <li><a href="${siteConfig.donations.individual}" target="_blank" rel="noopener">Donate (Individual)</a></li>
              <li><a href="${siteConfig.donations.corporate}" target="_blank" rel="noopener">Donate (Corporate)</a></li>
              <li><a href="/contact-us" data-nav>Contact Us</a></li>
              <li><a href="mailto:${siteConfig.email}">${siteConfig.email}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="land-ack">
            ${siteConfig.landAcknowledgment}
          </div>
          <div>
            &copy; ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `;
}
