(function () {
  const FEATURES = [
    { num: '01', icon: '🛡️', title: 'Toxicity Detection & Classification',
      desc: 'AI-assisted analysis of user-generated content using advanced NLP models trained on multilingual datasets.',
      accent: '#3B82F6' },
    { num: '02', icon: '🖼️', title: 'Image Detection & Visual Content Analysis',
      desc: 'Computer-vision models detect harmful imagery, symbols and visual hate speech across uploaded media.',
      accent: '#06B6D4' },
    { num: '03', icon: '⚖️', title: 'Profile-Based Enforcement & Explainable AI',
      desc: 'User behaviour and offence history drive adaptive enforcement, with transparent explanations for every decision.',
      accent: '#8B5CF6' },
    { num: '04', icon: '💚', title: 'Adaptive Emotional Shielding',
      desc: 'Real-time emotional state detection shields users from harmful interactions before they escalate.',
      accent: '#10B981' },
  ];

  const PIPELINE = [
    { label: 'Client Input',         icon: '💬', accent: '#3B82F6' },
    { label: 'Toxicity Detection',   icon: '🔍', accent: '#06B6D4' },
    { label: 'Image Detection',      icon: '🖼️', accent: '#8B5CF6' },
    { label: 'Behaviour Analysis',   icon: '📊', accent: '#F59E0B' },
    { label: 'Adaptive Enforcement', icon: '⚖️', accent: '#EC4899' },
    { label: 'Explainable Decision', icon: '✅', accent: '#10B981' },
  ];

  const ARCH_TAGS = [
    'Toxicity Detection',
    'Image Detection',
    'Profile-Based Enforcement',
    'Explainable AI',
    'Emotional Shielding',
  ];

  function isLight() { return document.documentElement.classList.contains('light'); }

  function cardTokens() {
    const light = isLight();
    return {
      cardBg: light ? '#FFFFFF' : 'rgba(255,255,255,0.025)',
      cardBorder: light ? 'rgba(15,23,42,0.08)' : 'rgba(255,255,255,0.07)',
      cardShadow: light ? '0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)' : 'none',
      subtleBorder: light ? 'rgba(15,23,42,0.07)' : 'rgba(255,255,255,0.06)',
    };
  }

  function renderFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;
    const t = cardTokens();
    const light = isLight();

    grid.innerHTML = FEATURES.map((f, i) => `
      <div class="reveal" data-delay="${i * 80}">
        <article class="feature-card" style="background:${t.cardBg};border:1px solid ${t.cardBorder};box-shadow:${t.cardShadow};">
          <span class="feature-accent-line" style="background:linear-gradient(90deg, ${f.accent}, ${f.accent}00);"></span>
          <span class="feature-num" style="color:var(--text-muted);">${f.num}</span>
          <div class="feature-icon" style="background:${light ? f.accent + '10' : f.accent + '14'};border:1px solid ${f.accent}${light ? '30' : '25'};">${f.icon}</div>
          <h3 style="font-size:15.5px;font-weight:700;color:var(--text-primary);letter-spacing:-0.01em;margin-bottom:8px;line-height:1.35;">${f.title}</h3>
          <p style="font-size:13.5px;line-height:1.6;color:var(--text-body);">${f.desc}</p>
        </article>
      </div>
    `).join('');

    document.dispatchEvent(new Event('reveal:refresh'));
  }

  function renderPipeline() {
    const wrap = document.getElementById('pipeline-timeline');
    if (!wrap) return;
    const t = cardTokens();
    const light = isLight();

    wrap.style.background = light ? '#F8FAFC' : 'rgba(255,255,255,0.02)';
    wrap.style.border = `1px solid ${t.subtleBorder}`;
    wrap.style.boxShadow = light ? '0 4px 24px rgba(15,23,42,0.05)' : 'none';

    wrap.innerHTML = PIPELINE.map((step, idx) => {
      const isLast = idx === PIPELINE.length - 1;
      return `
        <div class="timeline-item">
          <div class="timeline-rail" aria-hidden="true">
            <span class="timeline-dot" style="background:${light ? '#FFFFFF' : 'var(--bg-primary)'};border-color:${step.accent};box-shadow: 0 0 0 4px ${step.accent}${light ? '15' : '20'};">
              <span class="timeline-dot-inner" style="background:${step.accent};"></span>
            </span>
            ${!isLast ? `<span class="timeline-line" style="background: linear-gradient(to bottom, ${step.accent}50, ${PIPELINE[idx+1].accent}30);"></span>` : ''}
          </div>
          <div class="timeline-content">
            <div class="timeline-head">
              <span class="timeline-icon" style="background:${step.accent}${light ? '12' : '18'};color:${step.accent};">${step.icon}</span>
              <span class="timeline-label" style="color:var(--text-primary);">${step.label}</span>
              <span class="timeline-index" style="color:var(--text-muted);">0${idx + 1}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderArchTags() {
    const wrap = document.getElementById('arch-tags');
    if (!wrap) return;
    const light = isLight();
    const t = cardTokens();
    wrap.innerHTML = ARCH_TAGS.map(tag => `
      <span class="chip" style="background:${light ? '#F1F5F9' : 'rgba(255,255,255,0.04)'};border:1px solid ${t.subtleBorder};color:${light ? '#334155' : '#CBD5E1'};">${tag}</span>
    `).join('');
  }

  function renderCtaGridPattern() {
    const el = document.getElementById('cta-grid-pattern');
    if (!el) return;
    el.style.backgroundImage = isLight()
      ? 'linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)'
      : 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)';
  }

  function openArchModal() {
    const root = document.getElementById('arch-modal-root');
    if (!root) return;
    const light = isLight();

    root.innerHTML = `
      <div class="modal-backdrop" id="arch-modal-backdrop">
        <div class="arch-modal-content">
          <div class="arch-modal-header">
            <h3 style="font-size:16px;font-weight:700;color:var(--text-primary);">Project Architecture</h3>
            <button type="button" class="arch-modal-close" id="arch-modal-close" style="background:${light ? 'rgba(15,23,42,0.05)' : 'rgba(255,255,255,0.08)'};color:var(--text-primary);">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div class="arch-modal-body">
            <img src="images/Architecture.jpeg" alt="PureTalk Project Architecture" class="arch-modal-image" />
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    const backdrop = document.getElementById('arch-modal-backdrop');
    const closeBtn = document.getElementById('arch-modal-close');

    function close() {
      root.innerHTML = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    closeBtn.addEventListener('click', close);
    window.addEventListener('keydown', onKey);
  }

  function renderAll() {
    renderFeatures();
    renderPipeline();
    renderArchTags();
    renderCtaGridPattern();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    const openBtn = document.getElementById('arch-open-btn');
    if (openBtn) openBtn.addEventListener('click', openArchModal);
    window.addEventListener('themechange', () => {
      renderAll();
      document.dispatchEvent(new Event('reveal:refresh'));
    });
  });
})();