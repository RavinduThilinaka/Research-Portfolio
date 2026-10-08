(function () {
  const NAV_LINKS = [
    { href: 'index.html',         label: 'Home' },
    { href: 'domain.html',        label: 'Domain' },
    { href: 'milestones.html',    label: 'Milestones' },
    { href: 'components.html',    label: 'Components' },
    { href: 'documents.html',     label: 'Documents' },
    { href: 'presentations.html', label: 'Presentations' },
    { href: 'about.html',         label: 'About Us' },
    { href: 'contact.html',       label: 'Contact Us' },
  ];

  function render() {
    const links = NAV_LINKS.map(l => `<a href="${l.href}" class="footer-link">${l.label}</a>`).join('');
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-grid">
            <div>
              <div class="footer-brand-row">
                <div class="footer-brand-mark">PT</div>
                <span class="footer-brand-name">PureTalk</span>
              </div>
              <p class="footer-tagline">Intelligent. Adaptive. Explainable.</p>
              <p class="footer-desc">A university research project building safer, smarter, and more explainable online communication.</p>
            </div>
            <div>
              <h4 class="footer-heading">Navigation</h4>
              <div class="footer-nav-grid">${links}</div>
            </div>
            <div>
              <h4 class="footer-heading">Research</h4>
              <div class="footer-research-list">
                <div><span class="footer-research-label">Research Area</span><span class="footer-research-value">AI &amp; NLP</span></div>
                <div><span class="footer-research-label">Focus</span><span class="footer-research-value">Online Safety</span></div>
                <div><span class="footer-research-label">Type</span><span class="footer-research-value">University Project</span></div>
                <div><span class="footer-research-label">Status</span><span class="footer-research-value">In Progress</span></div>
              </div>
            </div>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-bottom">
            <p>© 2026 PureTalk Research Team. All rights reserved.</p>
            <p>University Research Project · Department of Computing</p>
          </div>
        </div>
      </footer>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.outerHTML = render();
  });
})();