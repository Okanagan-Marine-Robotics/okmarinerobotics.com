import { galleryData } from '../data/siteData';

export function renderGalleryPage(): string {
  return `
    <section class="section" style="padding-top: 60px;">
      <div class="container">
        <div class="section-header">
          <span class="badge">Visual Archive</span>
          <h1 class="section-title text-gradient">Photo Gallery</h1>
          <p class="section-subtitle">Moments from RoboSub competitions, pool testing sessions, manufacturing, and team events.</p>
        </div>

        <div class="gallery-grid">
          ${galleryData.map(photo => `
            <div class="gallery-item" onclick="window.openLightbox('${photo.src}')" role="button" tabindex="0" aria-label="View photo">
              <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="lightbox-modal" id="lightboxModal" onclick="window.closeLightbox()">
      <button class="lightbox-close" onclick="window.closeLightbox()" aria-label="Close Lightbox">&times;</button>
      <img src="" alt="Enlarged view" class="lightbox-img" id="lightboxImg" onclick="event.stopPropagation()" />
    </div>
  `;
}
