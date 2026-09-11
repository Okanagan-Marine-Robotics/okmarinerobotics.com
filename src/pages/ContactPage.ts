import { siteConfig } from '../data/siteData';

export function renderContactPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Get in Touch</span>
          <h1 class="section-title text-gradient">Contact Us</h1>
          <p class="section-subtitle">Have questions about joining, sponsorships, or our subsea robotics projects? Let's chat!</p>
        </div>

        <div class="contact-grid">
          <!-- Form -->
          <div class="glass-card" style="padding: 40px;">
            <h2 style="font-size: 1.8rem; margin-bottom: 20px;">Send a Message</h2>
            <form id="contactForm" onsubmit="window.handleContactSubmit(event)">
              <div class="form-group">
                <label class="form-label" for="contactName">Full Name *</label>
                <input class="form-control" type="text" id="contactName" required placeholder="Jane Doe" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contactEmail">Email Address *</label>
                <input class="form-control" type="email" id="contactEmail" required placeholder="jane@example.com" />
              </div>
              <div class="form-group">
                <label class="form-label" for="contactSubject">Inquiry Topic</label>
                <select class="form-control" id="contactSubject">
                  <option value="General">General Inquiry</option>
                  <option value="Sponsorship">Sponsorship & Partnership</option>
                  <option value="Recruitment">Student Recruitment</option>
                  <option value="Outreach">STEM Outreach / Workshop</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="contactMessage">Message *</label>
                <textarea class="form-control" id="contactMessage" required placeholder="Tell us how we can collaborate..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              <div id="formFeedback" style="margin-top: 16px; display: none; padding: 12px; border-radius: var(--radius-sm); font-size: 0.95rem;"></div>
            </form>
          </div>

          <!-- Contact Details -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div class="glass-card">
              <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(0, 210, 255, 0.1); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Direct Email</div>
                  <a href="mailto:${siteConfig.email}" style="font-size: 1.15rem; font-weight: 600; color: #fff;">
                    ${siteConfig.email}
                  </a>
                </div>
              </div>
              <p style="color: var(--text-muted); font-size: 0.95rem;">
                Our executive team monitors this inbox daily for business, media, and recruitment inquiries.
              </p>
            </div>

            <div class="glass-card">
              <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(0, 210, 255, 0.1); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Campus Location</div>
                  <div style="font-size: 1.15rem; font-weight: 600; color: #fff;">
                    School of Engineering
                  </div>
                </div>
              </div>
              <p style="color: #CBD5E1; font-size: 0.95rem; line-height: 1.6;">
                ${siteConfig.institution}<br/>
                ${siteConfig.address}
              </p>
            </div>

            <div class="glass-card">
              <h3 style="font-size: 1.25rem; margin-bottom: 14px;">Connect on Social Media</h3>
              <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 20px;">
                Follow our testing logs, competition travel videos, and prototype builds in real-time.
              </p>
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
          </div>
        </div>
      </div>
    </section>
  `;
}
