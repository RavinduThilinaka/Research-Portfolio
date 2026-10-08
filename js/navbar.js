(function () {
  const NAV_LINKS = [
    { href: 'index.html',         label: 'Home',          icon: 'home' },
    { href: 'domain.html',        label: 'Domain',        icon: 'domain' },
    { href: 'milestones.html',    label: 'Milestones',    icon: 'milestones' },
    { href: 'components.html',    label: 'Components',    icon: 'components' },
    { href: 'documents.html',     label: 'Documents',     icon: 'documents' },
    { href: 'presentations.html', label: 'Presentations', icon: 'presentations' },
    { href: 'about.html',         label: 'About Us',      icon: 'about' },
    { href: 'contact.html',       label: 'Contact Us',    icon: 'contact' },
  ];

  const ICONS = {
    home: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>',
    domain: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 010 18a14 14 0 010-18z"/></svg>',
    milestones: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"/><path d="M5 4h11l-2 3 2 3H5"/></svg>',
    components: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    documents: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>',
    presentations: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4"/><path d="M8 20h8"/></svg>',
    about: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0114 0"/></svg>',
    contact: '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  };

  function currentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path === '' ? 'index.html' : path;
  }

  function renderNavbar() {
    const current = currentPage();

    const desktopLinks = NAV_LINKS.map(l => {
      const active = l.href === current;
      return `<a href="${l.href}" class="nav-link${active ? ' nav-link-active' : ''}">
        ${ICONS[l.icon]}${l.label}
      </a>`;
    }).join('');

    const mobileLinks = NAV_LINKS.map(l => {
      const active = l.href === current;
      return `<a href="${l.href}" class="mobile-nav-link${active ? ' active' : ''}">
        <span class="mobile-nav-icon">${ICONS[l.icon]}</span>${l.label}
      </a>`;
    }).join('');

    return `
      <header id="navbar" class="navbar-root">
        <div class="navbar-inner">
          <a href="index.html" class="navbar-logo">
            <div class="navbar-logo-mark">P</div>
            <span class="navbar-logo-text">Portfolio</span>
          </a>
          <nav class="navbar-desktop-nav">${desktopLinks}</nav>
          <div class="navbar-actions">
            <button class="theme-toggle-btn" aria-label="Toggle theme" id="theme-toggle-btn">
              <span class="theme-icon-dark">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path stroke-linecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>
              </span>
              <span class="theme-icon-light" style="display:none;">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              </span>
            </button>
            <button class="hamburger-btn" aria-label="Toggle navigation menu" id="hamburger-btn">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div class="mobile-menu" id="mobile-menu">
          <div class="mobile-menu-inner">${mobileLinks}</div>
        </div>
      </header>
    `;
  }

  function mount() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;
    placeholder.innerHTML = renderNavbar();

    const header = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const darkIcon = themeBtn.querySelector('.theme-icon-dark');
    const lightIcon = themeBtn.querySelector('.theme-icon-light');

    const onScroll = () => {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });

    function updateIcons() {
      const theme = window.PureTalkTheme.get();
      darkIcon.style.display = theme === 'dark' ? 'inline-flex' : 'none';
      lightIcon.style.display = theme === 'light' ? 'inline-flex' : 'none';
    }
    updateIcons();

    themeBtn.addEventListener('click', () => {
      window.PureTalkTheme.toggle();
      updateIcons();
    });

    window.addEventListener('themechange', updateIcons);
  }

  document.addEventListener('DOMContentLoaded', mount);
})();