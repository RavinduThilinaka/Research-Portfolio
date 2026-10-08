(function () {
  const DOCUMENTS = [
    { 
      icon: '📜', 
      title: 'Project Charter', 
      desc: 'Formal project charter authorising the PureTalk initiative — defining purpose, scope, stakeholders, deliverables, and success criteria.', 
      type: 'Charter', 
      version: 'v1.0', 
      date: '2024', 
      color: '#3B82F6',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Project Charter Drive link here
    },
    { 
      icon: '📋', 
      title: 'Proposal Document', 
      desc: 'Detailed project proposal outlining research objectives, methodology, timelines, resource requirements, and expected outcomes of PureTalk.', 
      type: 'Proposal', 
      version: 'v1.0', 
      date: '2024', 
      color: '#22D3EE',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Proposal Document Drive link here
    },
    { 
      icon: '✅', 
      title: 'Check List Documents', 
      desc: 'Structured checklists tracking project milestones, deliverable reviews, quality gates, and completion status across all phases.', 
      type: 'Checklist', 
      version: 'Collection', 
      date: '2024', 
      color: '#34D399',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Check List Drive link here
    },
    { 
      icon: '🔬', 
      title: 'Research Paper', 
      desc: 'Peer-review ready research paper presenting the PureTalk approach, methodology, experiments, results, and comparison with existing systems.', 
      type: 'Paper', 
      version: 'Draft', 
      date: '2024', 
      color: '#FBBF24',
      image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Research Paper Drive link here
    },
    { 
      icon: '📓', 
      title: 'Log Books', 
      desc: 'Chronological log books capturing weekly progress, meeting notes, decisions, and individual team member contributions throughout the project.', 
      type: 'Logbook', 
      version: 'Collection', 
      date: '2024', 
      color: '#A78BFA',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Log Books Drive link here
    },
    { 
      icon: '📄', 
      title: 'Draft Final Report', 
      desc: 'Comprehensive draft final report summarising the PureTalk system, its components, implementation results, and recommendations for future work.', 
      type: 'Report', 
      version: 'Draft', 
      date: '2024', 
      color: '#F472B6',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80', 
      available: false,
      driveLink: '' // Add Draft Final Report Drive link here
    },
  ];

  const STATS = [
    { label: 'Total Documents', value: '06', color: '#3B82F6', icon: '📚' },
    { label: 'Categories', value: '06', color: '#A78BFA', icon: '🗂️' },
    { label: 'Available Now', value: '00', color: '#34D399', icon: '✅' },
    { label: 'In Progress', value: '06', color: '#FBBF24', icon: '⏳' },
  ];

  const EYE_SVG = '<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>';
  const DL_SVG = '<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>';
  const INFO_SVG = '<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 8h.01M11 12h1v4h1"/></svg>';

  function renderStats() {
    const grid = document.getElementById('docs-stats');
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

  function renderDocs() {
    const grid = document.getElementById('docs-grid');
    if (!grid) return;

    grid.innerHTML = DOCUMENTS.map((doc, i) => `
      <div class="reveal" data-delay="${i * 80}">
        <div class="doc-card" style="--doc-color:${doc.color};" data-doc-index="${i}">
          <div style="position:relative;height:150px;overflow:hidden;">
            <img src="${doc.image}" alt="${doc.title}" loading="lazy" class="doc-card-image" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${doc.color}80, ${doc.color}30 50%, transparent);mix-blend-mode:multiply;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(0,0,0,0.55) 100%);"></div>
            <span style="position:absolute;top:14px;right:14px;padding:5px 12px;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.28);border-radius:100px;font-size:10px;font-weight:700;color:#fff;letter-spacing:1.2px;text-transform:uppercase;">${doc.type}</span>
            <div style="position:absolute;bottom:14px;left:16px;width:46px;height:46px;border-radius:13px;background:rgba(255,255,255,0.15);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.28);display:flex;align-items:center;justify-content:center;font-size:21px;">${doc.icon}</div>
            <div style="position:absolute;bottom:14px;right:14px;padding:5px 10px;background:${doc.available ? 'rgba(16,185,129,0.85)' : 'rgba(251,191,36,0.85)'};backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.25);border-radius:100px;font-size:10px;font-weight:700;color:#fff;display:flex;align-items:center;gap:5px;letter-spacing:0.4px;">
              <span style="width:6px;height:6px;border-radius:50%;background:#fff;"></span>
              ${doc.available ? 'Available' : 'Coming Soon'}
            </div>
          </div>
          <div style="padding:22px 22px 24px;display:flex;flex-direction:column;flex:1;">
            <h3 style="font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:10px;line-height:1.35;">${doc.title}</h3>
            <p style="font-size:13px;color:var(--text-body);line-height:1.7;flex:1;margin:0;">${doc.desc}</p>
            <div class="doc-meta" style="display:flex;gap:8px;margin-top:20px;padding-top:16px;align-items:center;flex-wrap:wrap;">
              <span class="doc-meta-chip"><span style="opacity:0.6;margin-right:4px;">◆</span>${doc.version}</span>
              <span class="doc-meta-chip"><span style="opacity:0.6;margin-right:4px;">📅</span>${doc.date}</span>
            </div>
            <div style="display:flex;gap:8px;margin-top:16px;">
              <button class="doc-btn doc-btn-view" style="--btn-color:${doc.color};" data-view="${i}">${EYE_SVG}View</button>
              <button class="doc-btn doc-btn-download" style="--btn-color:${doc.color};" data-download="${doc.driveLink || ''}" ${doc.driveLink ? '' : 'disabled'}>${DL_SVG}Download</button>
            </div>
            <div class="doc-info-notice" style="--doc-color:${doc.color};">
              ${INFO_SVG}
              <span>Available when completed</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // View button click handler
    grid.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const doc = DOCUMENTS[parseInt(btn.dataset.view)];
        if (doc && doc.driveLink) {
          window.open(doc.driveLink, '_blank', 'noopener,noreferrer');
        } else {
          alert('This document is not available yet. It will be available soon.');
        }
      });
    });

    // Download button click handler
    grid.querySelectorAll('[data-download]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const link = btn.dataset.download;
        if (link) {
          window.open(link, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderDocs();
    document.dispatchEvent(new Event('reveal:refresh'));
  });
})();