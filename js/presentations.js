(function () {
  const PRESENTATIONS = [
    { id: 'proposal', number: '01', title: 'Proposal Presentation', desc: 'Initial project presentation covering the research problem, proposed approach, objectives, methodology, and expected outcomes of the PureTalk project.', type: 'Proposal', date: '2024', slides: '24 Slides', color: '#2563EB', icon: '📋', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80', available: false },
    { id: 'progress', number: '02', title: 'Progress Presentation', desc: 'Mid-project progress presentation showcasing completed milestones, preliminary results, current system status, and upcoming development phases.', type: 'Progress', date: '2024', slides: '32 Slides', color: '#00D6FF', icon: '📊', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&h=600&fit=crop&q=80', available: false },
    { id: 'research', number: '03', title: 'Research Presentation', desc: 'Focused research presentation covering literature findings, research gap analysis, methodology, and the theoretical foundation of the PureTalk approach.', type: 'Research', date: '2024', slides: '28 Slides', color: '#7C3AED', icon: '🔬', image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1000&h=600&fit=crop&q=80', available: false },
    { id: 'final', number: '04', title: 'Final Presentation', desc: 'Comprehensive final project presentation demonstrating the complete PureTalk platform, evaluation results, team contributions, and research conclusions.', type: 'Final', date: '2024', slides: '40 Slides', color: '#10B981', icon: '🎓', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&h=600&fit=crop&q=80', available: false },
  ];

  const STATS = [
    { label: 'Total Presentations', value: '04', color: '#2563EB', icon: '🎤' },
    { label: 'Total Slides', value: '124', color: '#7C3AED', icon: '📑' },
    { label: 'Delivered', value: '00', color: '#10B981', icon: '✅' },
    { label: 'Upcoming', value: '04', color: '#00D6FF', icon: '⏳' },
  ];

  const EYE_SVG = '<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
  const DL_SVG = '<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>';

  function renderStats() {
    const grid = document.getElementById('pres-stats');
    if (!grid) return;
    grid.innerHTML = STATS.map(s => `
      <div class="stat-card">
        <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg, transparent, ${s.color}, transparent);opacity:0.6;"></div>
        <div class="stat-card-icon" style="background:${s.color}18;border-color:${s.color}40;">${s.icon}</div>
        <div style="min-width:0;">
          <div style="font-size:22px;font-weight:800;color:${s.color};line-height:1;letter-spacing:-0.02em;">${s.value}</div>
          <div style="font-size:12px;color:var(--text-secondary);margin-top:6px;font-weight:500;">${s.label}</div>
        </div>
      </div>
    `).join('');
  }

  function renderCards() {
    const grid = document.getElementById('pres-grid');
    if (!grid) return;

    grid.innerHTML = PRESENTATIONS.map((p, i) => `
      <div class="reveal" data-delay="${i * 100}">
        <div class="pres-card" style="--pres-color:${p.color};" data-pres-id="${p.id}">
          <div style="position:relative;aspect-ratio:16/9;overflow:hidden;">
            <img src="${p.image}" alt="${p.title}" loading="lazy" class="pres-card-image" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${p.color}90, ${p.color}40 50%, transparent);mix-blend-mode:multiply;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 35%, rgba(0,0,0,0.75) 100%);"></div>
            <span style="position:absolute;top:14px;right:14px;padding:5px 12px;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.28);border-radius:100px;font-size:10px;font-weight:700;color:#fff;letter-spacing:1.2px;text-transform:uppercase;">${p.type}</span>
            <div style="position:absolute;top:14px;left:14px;padding:5px 12px;background:rgba(0,0,0,0.35);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.2);border-radius:100px;font-size:11px;font-weight:800;color:#fff;letter-spacing:1px;">
              ${p.number}<span style="opacity:0.5;">/${PRESENTATIONS.length.toString().padStart(2, '0')}</span>
            </div>
            <div style="position:absolute;bottom:16px;left:16px;right:16px;display:flex;align-items:center;gap:12px;">
              <div style="width:48px;height:48px;border-radius:13px;background:rgba(255,255,255,0.18);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.28);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${p.icon}</div>
              <div style="min-width:0;">
                <div style="font-size:16px;font-weight:700;color:#fff;line-height:1.3;text-shadow:0 2px 8px rgba(0,0,0,0.4);">${p.title}</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.75);margin-top:2px;font-weight:500;">Research Presentation</div>
              </div>
            </div>
            ${!p.available ? `<div style="position:absolute;bottom:16px;right:16px;padding:5px 11px;background:rgba(251,191,36,0.85);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.25);border-radius:100px;font-size:10px;font-weight:700;color:#fff;display:flex;align-items:center;gap:5px;">
              <span style="width:6px;height:6px;border-radius:50%;background:#fff;"></span>Coming Soon
            </div>` : ''}
          </div>
          <div style="padding:22px 22px 24px;flex:1;display:flex;flex-direction:column;">
            <p style="font-size:13px;color:var(--text-body);line-height:1.7;flex:1;margin:0;">${p.desc}</p>
            <div class="pres-meta" style="display:flex;gap:8px;margin-top:20px;padding-top:16px;align-items:center;flex-wrap:wrap;">
              <span class="pres-meta-chip"><span style="opacity:0.6;margin-right:4px;">📅</span>${p.date}</span>
              <span class="pres-meta-chip"><span style="opacity:0.6;margin-right:4px;">📑</span>${p.slides}</span>
            </div>
            <div style="display:flex;gap:8px;margin-top:16px;">
              <button class="pres-btn pres-btn-view" style="--btn-color:${p.color};" data-view="${p.id}">${EYE_SVG}${p.available ? 'View' : 'Preview'}</button>
              <button class="pres-btn pres-btn-download" style="--btn-color:${p.color};" ${p.available ? '' : 'disabled'}>${DL_SVG}Download</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = PRESENTATIONS.find(x => x.id === btn.dataset.view);
        if (p) openModal(p);
      });
    });

    grid.querySelectorAll('.pres-card').forEach(card => {
      card.addEventListener('click', () => {
        const p = PRESENTATIONS.find(x => x.id === card.dataset.presId);
        if (p) openModal(p);
      });
    });
  }

  function openModal(pres) {
    const root = document.getElementById('pres-modal-root');
    if (!root) return;

    root.innerHTML = `
      <div class="modal-backdrop" id="pres-backdrop">
        <div class="component-modal-content" style="max-width:640px;max-height:85vh;">
          <div style="position:relative;height:180px;flex-shrink:0;overflow:hidden;">
            <img src="${pres.image}" alt="${pres.title}" style="width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${pres.color}80, ${pres.color}30 50%, transparent);mix-blend-mode:multiply;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%);"></div>
            <button id="pres-close" style="position:absolute;top:16px;right:16px;width:40px;height:40px;border-radius:50%;background:#1E293B;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div style="position:absolute;bottom:18px;left:22px;right:22px;display:flex;align-items:center;gap:12px;">
              <div style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.18);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${pres.icon}</div>
              <div>
                <h2 style="font-size:clamp(1rem, 2.2vw, 1.35rem);font-weight:700;color:#fff;line-height:1.25;text-shadow:0 2px 12px rgba(0,0,0,0.5);margin:0;">${pres.title}</h2>
                <div style="font-size:11px;color:rgba(255,255,255,0.8);margin-top:4px;font-weight:500;">${pres.type} · ${pres.date} · ${pres.slides}</div>
              </div>
            </div>
          </div>

          <div style="padding:26px 28px;overflow-y:auto;flex:1;min-height:0;">
            <p style="font-size:14px;color:var(--text-body);line-height:1.75;margin-bottom:20px;">${pres.desc}</p>
            ${!pres.available ? `
              <div style="padding:20px;background:color-mix(in srgb, ${pres.color} 10%, transparent);border:1px solid color-mix(in srgb, ${pres.color} 30%, transparent);border-radius:14px;text-align:center;">
                <div style="font-size:32px;margin-bottom:8px;">⏳</div>
                <div style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:6px;">Coming Soon</div>
                <p style="font-size:12.5px;color:var(--text-secondary);line-height:1.6;margin:0;">This presentation is still being finalised and will be available here once it's delivered.</p>
              </div>
            ` : ''}
          </div>

          <div style="flex-shrink:0;padding:14px 22px;border-top:1px solid var(--border-subtle);background:var(--bg-tertiary);display:flex;justify-content:flex-end;gap:10px;">
            <button id="pres-close-footer" style="padding:8px 18px;background:#334155;border:none;border-radius:10px;color:#E2E8F0;font-size:13px;font-weight:600;cursor:pointer;">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    const backdrop = document.getElementById('pres-backdrop');
    function close() {
      root.innerHTML = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.getElementById('pres-close').addEventListener('click', close);
    document.getElementById('pres-close-footer').addEventListener('click', close);
    window.addEventListener('keydown', onKey);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderCards();
    document.dispatchEvent(new Event('reveal:refresh'));
  });
})();