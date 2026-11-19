const header = document.querySelector<HTMLElement>('.site-header');
const toggle = document.querySelector<HTMLButtonElement>('#mobileMenuBtn');
const groups = document.querySelectorAll<HTMLDetailsElement>('.nav-group');

if (header && toggle) {
  document.documentElement.classList.add('js');

  function closeGroups(except?: HTMLDetailsElement) {
    for (const group of groups) {
      if (group !== except) group.open = false;
    }
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    if (open) closeGroups();
  });

  for (const group of groups) {
    group.addEventListener('toggle', () => {
      if (group.open) closeGroups(group);
    });
  }

  document.addEventListener('click', event => {
    if (event.target instanceof Node && !header.contains(event.target)) {
      closeGroups();
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  header.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;

    const openGroup = header.querySelector<HTMLDetailsElement>('.nav-group[open]');
    if (openGroup) {
      openGroup.open = false;
      openGroup.querySelector('summary')?.focus();
    } else if (toggle.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

const outreachButtons = document.querySelectorAll<HTMLButtonElement>('.outreach-tab-btn');
const outreachTitle = document.getElementById('outreachTitle');
const outreachImg1 = document.querySelector<HTMLImageElement>('#outreachImg1');
const outreachImg2 = document.querySelector<HTMLImageElement>('#outreachImg2');
const outreachSubtitle = document.getElementById('outreachSubtitle');
const outreachDesc = document.getElementById('outreachDesc');

outreachButtons.forEach(button => {
  button.addEventListener('click', () => {
    const { imageOne, imageTwo, subtitle, description } = button.dataset;
    const title = button.textContent?.trim() ?? '';
    for (const other of outreachButtons) {
      other.classList.toggle('active', other === button);
      other.setAttribute('aria-pressed', String(other === button));
    }
    if (outreachTitle) outreachTitle.textContent = title;
    if (outreachImg1 && imageOne) {
      outreachImg1.src = imageOne;
      outreachImg1.alt = title;
    }
    if (outreachImg2 && imageTwo) {
      outreachImg2.src = imageTwo;
      outreachImg2.alt = title;
    }
    if (outreachSubtitle) outreachSubtitle.textContent = subtitle ?? '';
    if (outreachDesc) outreachDesc.textContent = description ?? '';
  });
});

const gallery = document.querySelector<HTMLElement>('.gallery-grid');
const lightbox = document.querySelector<HTMLDialogElement>('#lightboxModal');

if (gallery && lightbox) {
  const image = lightbox.querySelector<HTMLImageElement>('.lightbox-img');
  if (image) {
    gallery.addEventListener('click', event => {
      if (!(event instanceof MouseEvent) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('.gallery-item');
      if (!link) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img')?.alt ?? '';
      lightbox.showModal();
    });
  }
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
}
