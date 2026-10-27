const showcaseProjects = [
  {
    category: 'Fantasy MMORPG',
    title: 'Fantasy MMORPG Game',
    description: 'Immersive fantasy MMORPG concept built around exploration, combat progression, and world-building.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/90affb237898543.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    link: 'https://www.behance.net/gallery/237898543/Fantasy-MMORPG-Game'
  },
  {
    category: 'Blockchain MMORPG',
    title: 'Blockchain MMORPG GAME',
    description: 'Web3-focused MMORPG experience combining player progression, digital ownership, and large-scale world design.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9db2ea237897133.Y3JvcCw5NzksNzY2LDE5Myww.png',
    link: 'https://www.behance.net/gallery/237897133/Blockchain-MMORPG-GAME'
  },
  {
    category: 'Horror Game',
    title: 'Horror Game',
    description: 'Atmospheric horror gameplay concept emphasizing tension, pacing, and immersive environmental storytelling.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/245838227832447.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    link: 'https://www.behance.net/gallery/227832447/Horror-Game'
  },
  {
    category: 'MMORPG',
    title: 'MMORPG Game',
    description: 'An MMORPG design exploration focused on progression structure, gameplay systems, and player engagement.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2ee678225989929.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225989929/MMORPG-Game'
  },
  {
    category: 'Web3 Game',
    title: 'Web3 game',
    description: 'A blockchain-driven game concept built around digital economies, progression, and player-driven systems.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2541dc225989389.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225989389/web3-game'
  },
  {
    category: 'DeFi / P2E',
    title: 'Farm-themed DeFi game with P2E mechanics',
    description: 'A farm-based play-to-earn game concept blending resource management, progression, and blockchain economy loops.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3e6a31225988977.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225988977/Farm-themed-DeFi-game-with-P2E-mechanics'
  },
  {
    category: 'Platformer',
    title: '2D pixel art platformer game in Godot',
    description: 'A 2D pixel-art platformer concept emphasizing movement feel, level flow, and satisfying progression.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/761d28225869661.Y3JvcCw5MjAsNzIwLDE4Miww.jpg',
    link: 'https://www.behance.net/gallery/225869661/2d-pixel-art-platformer-game-in-Godot'
  },
  {
    category: 'Pixel Game',
    title: '2D Pixel Game',
    description: 'A stylized 2D game concept centered on quick gameplay loops and nostalgic visual presentation.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e465eb225868793.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225868793/2D-Pixel-Game'
  },
  {
    category: 'Tower Defense',
    title: 'Tower defence shooting Game',
    description: 'A hybrid tower-defense and shooting concept built around strategic placement and combat flow.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/49dba0225684993.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225684993/Tower-defence-shooting-Game'
  },
  {
    category: 'Simulation Game',
    title: 'Roblox simulation Game',
    description: 'A Roblox simulation project focused on progression systems, automation, and player retention design.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/febaa5225172285.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225172285/Roblox-simulation-Game'
  },
  {
    category: 'FPS Game',
    title: 'Roblox fps game',
    description: 'A FPS concept for Roblox built around aim feel, map flow, and player engagement in fast rounds.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0c1dea225170319.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    link: 'https://www.behance.net/gallery/225170319/Roblox-fps-game'
  },
  {
    category: 'Combat Prototype',
    title: '2D pixelated platform fighter Game',
    description: 'A fast-paced platform fighter concept designed around combo timing, movement reads, and responsive controls.',
    image: 'project-covers/project-placeholder.svg',
    link: 'https://www.behance.net/gallery/225169073/2D-pixelated-platform-fighter-Game'
  },
  {
    category: '2D Game',
    title: '2D Game',
    description: 'A broad 2D game concept exploring core loop design, progression, and approachable action gameplay.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2ee678225989929.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/225166905/2D-Game'
  },
  {
    category: '3D Game',
    title: '3D Game development',
    description: 'A 3D game development concept focusing on world design, player feedback, and technical polish.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/245838227832447.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    link: 'https://www.behance.net/gallery/224914625/3D-Game-development'
  },
  {
    category: 'Game Environment',
    title: 'Game environment',
    description: 'Environmental design exploration for immersive spaces, traversal patterns, and atmospheric storytelling.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9db2ea237897133.Y3JvcCw5NzksNzY2LDE5Myww.png',
    link: 'https://www.behance.net/gallery/224913161/Game-environment'
  },
  {
    category: 'Environment',
    title: 'Environment',
    description: 'A focused environment concept exploring mood, pacing, and visual hierarchy in playable spaces.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3e6a31225988977.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/224910933/Environment'
  },
  {
    category: 'MMO Environment',
    title: 'MMO Game environment',
    description: 'Large-scale environment design concept built around social spaces, traversal, and world readability.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/761d28225869661.Y3JvcCw5MjAsNzIwLDE4Miww.jpg',
    link: 'https://www.behance.net/gallery/224908821/MMO-Game-environment'
  },
  {
    category: 'Unreal Engine',
    title: 'Unreal Engine 5.4 Environment',
    description: 'An Unreal Engine environment concept highlighting cinematic lighting, composition, and gameplay flow.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e465eb225868793.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/224906553/Game-environment'
  },
  {
    category: 'Unreal Engine',
    title: 'Unreal Engine 5 Game Environment',
    description: 'A polished UE5 environment showcase built around immersive terrain, lighting, and player direction.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/49dba0225684993.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/224903109/Unreal-Engine-5-Game-Environment'
  },
  {
    category: 'VFX',
    title: 'Game vfx',
    description: 'Visual effects concept work focused on impact moments, spells, and feedback that reinforce gameplay feel.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/febaa5225172285.Y3JvcCw5MjAsNzIwLDE4MCww.jpg',
    link: 'https://www.behance.net/gallery/224899465/Game-vfx'
  },
  {
    category: 'Game VFX',
    title: 'Unreal Engine 5 Game',
    description: 'A complete gameplay pitch concept emphasizing mechanics, progression, and visual presentation.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0c1dea225170319.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    link: 'https://www.behance.net/gallery/224899105/Game-vfx'
  }
];

const archiveGrid = document.getElementById('showcase-grid');
const fallbackProjectImage = 'project-covers/project-placeholder.svg';

function buildArchive() {
  if (!archiveGrid) return;

  const fragment = document.createDocumentFragment();
  showcaseProjects.forEach((project) => {
    const link = document.createElement('a');
    link.className = 'showcase-card-link';
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${project.title}, opens on Behance in a new tab`);

    const card = document.createElement('article');
    card.className = 'showcase-card';
    const imageWrap = document.createElement('div');
    imageWrap.className = 'showcase-thumb';
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      image.src = fallbackProjectImage;
    }, { once: true });
    imageWrap.append(image);

    const body = document.createElement('div');
    body.className = 'showcase-body';
    const category = document.createElement('span');
    category.className = 'showcase-label';
    category.textContent = project.category;
    const title = document.createElement('h3');
    title.textContent = project.title;
    const description = document.createElement('p');
    description.textContent = project.description;
    body.append(category, title, description);
    card.append(imageWrap, body);
    link.append(card);
    fragment.append(link);
  });
  archiveGrid.replaceChildren(fragment);
}

buildArchive();

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    projectCards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const projectModal = document.getElementById('project-modal');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalCategory = document.getElementById('project-modal-category');
const projectModalImage = document.getElementById('project-modal-image');
const projectModalDescription = document.getElementById('project-modal-description');
const archiveModal = document.getElementById('past-work-modal');
let activeModal = null;
let lastFocusedElement = null;

function openModal(modal, trigger) {
  if (!modal) return;
  lastFocusedElement = trigger;
  activeModal = modal;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close')?.focus();
}

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove('active');
  activeModal.setAttribute('aria-hidden', 'true');
  activeModal = null;
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus();
}

document.querySelectorAll('.project-open').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const image = card?.querySelector('.project-image img');
    const title = card?.querySelector('.project-title');
    const summary = card?.querySelector('.project-summary');
    if (!card || !image || !title || !summary || !projectModal) return;

    projectModalTitle.textContent = title.childNodes[0].textContent.trim();
    projectModalCategory.textContent = card.dataset.category.replace('-', ' ');
    projectModalImage.src = image.src;
    projectModalImage.alt = image.alt;
    projectModalDescription.textContent = summary.textContent.trim();
    openModal(projectModal, button);
  });
});

document.querySelector('.project-inquiry')?.addEventListener('click', closeModal);

document.querySelector('.view-more-btn')?.addEventListener('click', (event) => {
  openModal(archiveModal, event.currentTarget);
});

document.querySelectorAll('.modal-close').forEach((button) => {
  button.addEventListener('click', closeModal);
});

document.querySelectorAll('.modal-overlay').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
});

document.addEventListener('keydown', (event) => {
  if (!activeModal) return;
  if (event.key === 'Escape') {
    closeModal();
    return;
  }
  if (event.key !== 'Tab') return;

  const focusable = [...activeModal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => element.getClientRects().length > 0);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');
const contactPackage = document.getElementById('contact-package');

document.querySelectorAll('.pricing-button[data-package]').forEach((button) => {
  button.addEventListener('click', () => {
    if (contactPackage instanceof HTMLSelectElement) {
      contactPackage.value = button.dataset.package || '';
    }
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const packageName = String(formData.get('package') || '').trim();
  const message = String(formData.get('message') || '').trim();
  const requirements = String(formData.get('requirements') || '').trim();
  const subject = `Project inquiry - ${packageName} package`;
  const body = `Name: ${name}\nEmail: ${email}\nSelected package: ${packageName}\n\nProject details:\n${message}\n\nAdditional requirements:\n${requirements || 'None provided'}`;
  const mailto = `mailto:ojdevelop75@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (contactStatus) {
    contactStatus.dataset.state = 'success';
    contactStatus.textContent = 'Your email app should open with your inquiry ready. Review it and press Send to submit; no payment is taken here.';
  }
  window.location.href = mailto;
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
  document.querySelectorAll('video[autoplay]').forEach((video) => video.pause());
}
