import { galleryData } from '../data/siteData.ts';

export function renderGalleryPage(): string {
  return `
    <section class="section" style="padding-top: 50px; background: var(--bg-page);">
      <div class="container">
        <div class="section-header">
          <span class="badge">Visual Archive</span>
          <h1 class="section-title">Photo Gallery</h1>
          <p class="section-subtitle">Moments from RoboSub competitions, pool testing sessions, manufacturing, and team events.</p>
        </div>

        <div class="gallery-grid">
          ${galleryData.map(photo => `
            <a class="gallery-item" href="${photo.src}">
              <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <dialog class="lightbox-modal" id="lightboxModal" aria-label="Gallery photo">
      <form method="dialog"><button class="lightbox-close" aria-label="Close photo">&times;</button></form>
      <img alt="" class="lightbox-img" />
    </dialog>
  `;
}
