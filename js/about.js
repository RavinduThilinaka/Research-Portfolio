(function () {
  const TEAM = [
    { id: 'member1', name: 'Tharindi W A K', role: 'Toxicity Detection Researcher',
      component: 'Toxicity Detection & Classification',
      contribution: 'Designed and implemented the NLP-based toxicity detection pipeline using transformer models, enabling accurate classification of harmful online content including text-based toxicity detection.',
      technologies: ['Python', 'BERT', 'PyTorch', 'FastAPI', 'Transformers'],
      color: '#3B82F6', initials: 'TM', image: 'images/member1.png',
      github: '#', linkedin: '#' },
    { id: 'member2', name: 'Perera M D S', role: 'Image Detection Researcher',
      component: 'Image Detection & Visual Content Analysis',
      contribution: 'Developed the image detection module that identifies harmful visual content using deep learning and computer vision techniques, ensuring multimedia content moderation across the platform.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'PyTorch'],
      color: '#22D3EE', initials: 'TM', image: 'images/member2.jpeg',
      github: 'https://github.com/senu02', linkedin: 'https://www.linkedin.com/in/senura-perera-21b26b33a' },
    { id: 'member3', name: 'Manohara H U K R T', role: 'Enforcement & XAI Researcher',
      component: 'Profile-Based Enforcement & Explainable AI',
      contribution: 'Designed and implemented the adaptive enforcement engine and the explainable AI module, ensuring every moderation decision is transparent and contextually appropriate.',
      technologies: ['Python', 'SHAP', 'LIME', 'React', 'Next.js'],
      color: '#A78BFA', initials: 'YN', image: 'images/member3.png',
      github: 'https://github.com/RavinduThilinaka', linkedin: 'https://www.linkedin.com/in/ravindu-thilinaka',
      highlight: true },
    { id: 'member4', name: 'Praveen H G', role: 'Adaptive Emotional Shielding Researcher',
      component: 'Adaptive Emotional Shielding',
      contribution: 'Built the adaptive emotional shielding system that dynamically protects users from emotionally harmful interactions based on their profile and real-time sentiment analysis.',
      technologies: ['Python', 'NLP', 'Sentiment Analysis', 'React', 'WebSocket'],
      color: '#34D399', initials: 'TM', image: 'images/member4.jpeg',
      github: '#', linkedin: '#' },
  ];

  const GITHUB_SVG = '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.1 18 6.4 18 6.4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>';
  const LINKEDIN_SVG = '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  const CROSS_SVG = '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>';
  const TOOL_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>';

  function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;

    grid.innerHTML = TEAM.map((m, i) => `
      <div class="reveal" data-delay="${i * 100}">
        <div class="team-card" style="--member-color: ${m.color};" data-member-id="${m.id}">
          <div style="display:flex;gap:16px;align-items:flex-start;">
            <div class="team-avatar">
              ${m.image
                ? `<img src="${m.image}" alt="${m.name}" onerror="this.style.display='none';this.parentNode.innerHTML='<span style=&quot;font-size:20px;font-weight:800;color:white;&quot;>${m.initials}</span>';" />`
                : `<span style="font-size:20px;font-weight:800;color:white;">${m.initials}</span>`}
            </div>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                <div style="min-width:0;">
                  <h3 style="font-size:18px;font-weight:700;color:var(--text-primary);margin-bottom:4px;line-height:1.3;">${m.name}</h3>
                  <p style="font-size:13px;color:${m.color};font-weight:600;">${m.role}</p>
                </div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                  <a href="${m.github}" class="social-icon" aria-label="${m.name} GitHub" data-stop="1" onclick="event.stopPropagation();">${GITHUB_SVG}</a>
                  <a href="${m.linkedin}" class="social-icon" aria-label="${m.name} LinkedIn" data-stop="1" onclick="event.stopPropagation();">${LINKEDIN_SVG}</a>
                </div>
              </div>
            </div>
          </div>

          <div style="padding:12px 14px;background:${m.color}18;border:1px solid ${m.color}45;border-radius:10px;display:flex;align-items:center;gap:8px;">
            <span style="color:${m.color};">${TOOL_SVG}</span>
            <span style="font-size:13px;font-weight:600;color:${m.color};">${m.component}</span>
          </div>

          <p style="font-size:14px;color:var(--text-body);line-height:1.7;">${m.contribution}</p>

          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            ${m.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.team-card').forEach(card => {
      card.addEventListener('click', () => {
        const member = TEAM.find(m => m.id === card.dataset.memberId);
        if (member) openModal(member);
      });
    });

    document.dispatchEvent(new Event('reveal:refresh'));
  }

  function openModal(member) {
    const root = document.getElementById('member-modal-root');

    root.innerHTML = `
      <div class="member-modal-backdrop" id="member-backdrop">
        <div class="member-modal" style="--member-color: ${member.color};">
          <button id="member-close" aria-label="Close" style="position:absolute;top:14px;right:14px;width:38px;height:38px;border-radius:50%;border:none;background:rgba(0,0,0,0.55);color:white;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);z-index:3;">${CROSS_SVG}</button>
          <div style="width:100%;aspect-ratio:1/1;position:relative;background:linear-gradient(135deg,${member.color},${member.color}99);display:flex;align-items:center;justify-content:center;overflow:hidden;">
            ${member.image
              ? `<img src="${member.image}" alt="${member.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;" onerror="this.style.display='none';this.parentNode.innerHTML='<span style=&quot;font-size:96px;font-weight:800;color:white;&quot;>${member.initials}</span>';" />`
              : `<span style="font-size:96px;font-weight:800;color:white;">${member.initials}</span>`}
          </div>
          <div style="padding:24px;">
            <h2 style="font-size:20px;font-weight:800;color:var(--text-primary);margin-bottom:6px;">${member.name}</h2>
            <p style="font-size:13px;color:${member.color};font-weight:600;margin-bottom:16px;">${member.role}</p>
            <div style="padding:12px 14px;background:${member.color}18;border:1px solid ${member.color}45;border-radius:10px;display:flex;align-items:flex-start;gap:8px;margin-bottom:16px;">
              <span style="color:${member.color};flex-shrink:0;margin-top:2px;">${TOOL_SVG}</span>
              <span style="font-size:13px;font-weight:600;color:${member.color};line-height:1.4;">${member.component}</span>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              ${member.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';
    const backdrop = document.getElementById('member-backdrop');
    const modal = backdrop.querySelector('.member-modal');
    const closeBtn = document.getElementById('member-close');

    function close() {
      root.innerHTML = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    modal.addEventListener('click', (e) => e.stopPropagation());
    closeBtn.addEventListener('click', close);
    window.addEventListener('keydown', onKey);
  }

  document.addEventListener('DOMContentLoaded', renderTeam);
})();