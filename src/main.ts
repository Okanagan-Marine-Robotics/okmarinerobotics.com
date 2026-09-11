import './style.css';
import { renderHeader } from './components/Header';
import { renderFooter } from './components/Footer';
import { renderHomePage } from './pages/HomePage';
import { renderOurTeamPage } from './pages/OurTeamPage';
import { renderOurJourneyPage } from './pages/OurJourneyPage';
import { renderGalleryPage } from './pages/GalleryPage';
import { renderAuvPage } from './pages/AuvPage';
import { renderAuvElectricalPage } from './pages/AuvElectricalPage';
import { renderAuvMechanicalPage } from './pages/AuvMechanicalPage';
import { renderAuvSoftwarePage } from './pages/AuvSoftwarePage';
import { renderHydrofoilPage } from './pages/HydrofoilPage';
import { renderOutreachPage } from './pages/OutreachPage';
import { renderRoboSub2025Page } from './pages/RoboSub2025Page';
import { renderRoboSub2024Page } from './pages/RoboSub2024Page';
import { renderSponsorsPage } from './pages/SponsorsPage';
import { renderSponsorshipsPage } from './pages/SponsorshipsPage';
import { renderContactPage } from './pages/ContactPage';

const routes: Record<string, () => string> = {
  '/': renderHomePage,
  '/our-team': renderOurTeamPage,
  '/our-journey': renderOurJourneyPage,
  '/gallery': renderGalleryPage,
  '/auv': renderAuvPage,
  '/auv-electrical': renderAuvElectricalPage,
  '/auv-mechanical': renderAuvMechanicalPage,
  '/auv-software': renderAuvSoftwarePage,
  '/hydrofoil': renderHydrofoilPage,
  '/outreach': renderOutreachPage,
  '/robosub-2025': renderRoboSub2025Page,
  '/robosub-2024': renderRoboSub2024Page,
  '/sponsors': renderSponsorsPage,
  '/sponsorships': renderSponsorshipsPage,
  '/contact-us': renderContactPage,
};

function getNormalizedPath(): string {
  let p = window.location.pathname.toLowerCase().replace(/\/$/, '');
  if (p === '') p = '/';
  return p;
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const path = getNormalizedPath();
  const pageRenderer = routes[path] || routes['/'];

  app.innerHTML = `
    ${renderHeader(path)}
    <main id="main-content" style="flex: 1;">
      ${pageRenderer()}
    </main>
    ${renderFooter()}
  `;

  // Update page title
  const pageTitles: Record<string, string> = {
    '/': 'Home | Okanagan Marine Robotics',
    '/our-team': 'Our Team | Okanagan Marine Robotics',
    '/our-journey': 'Our Journey | Okanagan Marine Robotics',
    '/gallery': 'Gallery | Okanagan Marine Robotics',
    '/auv': 'The AUV Ogopogo | Okanagan Marine Robotics',
    '/auv-electrical': 'AUV Electrical | Okanagan Marine Robotics',
    '/auv-mechanical': 'AUV Mechanical | Okanagan Marine Robotics',
    '/auv-software': 'AUV Software Architecture | Okanagan Marine Robotics',
    '/hydrofoil': 'Hydrofoil Project | Okanagan Marine Robotics',
    '/outreach': 'Community Outreach | Okanagan Marine Robotics',
    '/robosub-2025': 'RoboSub 2025 | Okanagan Marine Robotics',
    '/robosub-2024': 'RoboSub 2024 | Okanagan Marine Robotics',
    '/sponsors': 'Our Sponsors | Okanagan Marine Robotics',
    '/sponsorships': 'Sponsorship Opportunities | Okanagan Marine Robotics',
    '/contact-us': 'Contact Us | Okanagan Marine Robotics',
  };
  document.title = pageTitles[path] || 'Okanagan Marine Robotics';

  // Attach interactive events
  attachEventListeners();
}

function navigate(url: string) {
  window.history.pushState({}, '', url);
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
}

function attachEventListeners() {
  // Navigation links
  document.querySelectorAll('a[data-nav], a[href^="/"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('/docs') && !href.startsWith('/images')) {
        e.preventDefault();
        navigate(href);
      }
    });
  });

  // Mobile menu
  const toggle = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) {
        const isOpen = item.classList.contains('open');
        // close others
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      }
    });
  });
}

// Lightbox modal helpers
(window as any).openLightbox = (src: string) => {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg') as HTMLImageElement;
  if (modal && img) {
    img.src = src;
    modal.classList.add('active');
  }
};

(window as any).closeLightbox = () => {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
  }
};

// Contact form simulation
(window as any).handleContactSubmit = (e: Event) => {
  e.preventDefault();
  const feedback = document.getElementById('formFeedback');
  if (feedback) {
    feedback.style.display = 'block';
    feedback.style.background = 'rgba(0, 210, 255, 0.15)';
    feedback.style.border = '1px solid var(--accent-cyan)';
    feedback.style.color = '#fff';
    feedback.innerHTML = '<strong>Thank you!</strong> Your message has been sent to okmarinerobotics@gmail.com. We will be in touch soon.';
    (document.getElementById('contactForm') as HTMLFormElement)?.reset();
  }
};

window.addEventListener('popstate', () => {
  renderApp();
});

// Initial boot
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
renderApp();
