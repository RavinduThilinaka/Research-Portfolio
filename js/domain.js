(function () {
  const MILESTONES = [
    { phase: 'Phase 01', title: 'Project Proposal', desc: 'Initial proposal defining the research scope, objectives, methodology, and expected contributions of the PureTalk project.', status: 'Completed', date: '[Project Date]', doc: 'Project Proposal Document', color: '#34D399' },
    { phase: 'Phase 02', title: 'Literature Review', desc: 'Comprehensive review of existing research in toxicity detection, content moderation, behavioural analysis, and explainable AI.', status: 'Completed', date: '[Project Date]', doc: 'Literature Review Report', color: '#34D399' },
    { phase: 'Phase 03', title: 'Requirement Analysis', desc: 'Identification and documentation of functional and non-functional system requirements for all PureTalk components.', status: 'Completed', date: '[Project Date]', doc: 'Requirements Specification', color: '#34D399' },
    { phase: 'Phase 04', title: 'System Design', desc: 'Architecture design, component diagrams, data flow models, and interface design for the integrated PureTalk platform.', status: 'Completed', date: '[Project Date]', doc: 'System Design Document', color: '#34D399' },
    { phase: 'Phase 05', title: 'Component Development', desc: 'Individual development of each research component by designated team members: toxicity detection, behaviour analysis, adaptive enforcement, and XAI.', status: 'In Progress', date: '[Project Date]', doc: null, color: '#3B82F6' },
    { phase: 'Phase 06', title: 'Integration', desc: 'Integration of all individual components into a unified PureTalk platform with shared API interfaces and data pipelines.', status: 'In Progress', date: '[Project Date]', doc: null, color: '#3B82F6' },
    { phase: 'Phase 07', title: 'Testing', desc: 'Unit testing, integration testing, and system testing of all components to ensure correctness, performance, and reliability.', status: 'Pending', date: '[Project Date]', doc: null, color: '#94A3B8' },
    { phase: 'Phase 08', title: 'Evaluation', desc: 'Performance evaluation using accuracy, precision, recall, F1-score, and comparison against baseline systems.', status: 'Pending', date: '[Project Date]', doc: null, color: '#94A3B8' },
    { phase: 'Phase 09', title: 'Documentation', desc: 'Final technical documentation including the dissertation, research paper, poster, and supplementary materials.', status: 'Pending', date: '[Project Date]', doc: null, color: '#94A3B8' },
    { phase: 'Phase 10', title: 'Final Presentation', desc: 'Final presentation of the PureTalk research project to academic supervisors, examiners, and stakeholders.', status: 'Pending', date: '[Project Date]', doc: null, color: '#94A3B8' },
  ];

  const STATUS_COLORS = {
    'Completed': { bg: 'rgba(52,211,153,0.18)', text: '#34D399', border: 'rgba(52,211,153,0.45)' },
    'In Progress': { bg: 'rgba(59,130,246,0.18)', text: '#60A5FA', border: 'rgba(59,130,246,0.45)' },
    'Pending': { bg: 'rgba(148,163,184,0.15)', text: '#CBD5E1', border: 'rgba(148,163,184,0.35)' },
  };

  function renderProgress() {
    const wrap = document.getElementById('progress-indicators');
    if (!wrap) return;
    wrap.innerHTML = Object.entries(STATUS_COLORS).map(([status, colors]) => {
      const count = MILESTONES.filter(m => m.status === status).length;
      return `
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:10px;height:10px;border-radius:50%;background:${colors.text};box-shadow:0 0 12px ${colors.text}60;"></div>
          <span style="font-size:13px;color:var(--text-tag);font-weight:600;">
            ${status} <span style="color:${colors.text};font-weight:700;">(${count})</span>
          </span>
        </div>
      `;
    }).join('');
  }

  function renderTimeline() {
    const wrap = document.getElementById('timeline-list');
    if (!wrap) return;

    wrap.innerHTML = MILESTONES.map((m, i) => {
      const isLeft = i % 2 === 0;
      const sc = STATUS_COLORS[m.status];
      const isPending = m.status === 'Pending';

      const badgeBg = isPending ? 'rgba(148,163,184,0.18)' : sc.bg;
      const badgeText = isPending ? '#64748B' : sc.text;
      const badgeBorder = isPending ? 'rgba(100,116,139,0.35)' : sc.border;

      const card = `
        <div class="timeline-card" style="border-color:${m.color}40;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
            <span style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${m.color};">${m.phase}</span>
            <span style="padding:4px 12px;border-radius:100px;font-size:11px;font-weight:700;background:${badgeBg};color:${badgeText};border:1px solid ${badgeBorder};letter-spacing:0.3px;">${m.status}</span>
          </div>
          <h3 style="font-size:16px;font-weight:700;color:var(--text-primary);margin-bottom:10px;line-height:1.35;">${m.title}</h3>
          <p style="font-size:13px;color:var(--text-body);line-height:1.7;margin-bottom:14px;">${m.desc}</p>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
            <span class="date-chip">📅 ${m.date}</span>
            ${m.doc ? `<span class="doc-chip">📄 ${m.doc}</span>` : ''}
          </div>
        </div>
      `;

      return `
        <div class="reveal" data-delay="${i * 60}">
          <div class="timeline-row">
            <div class="timeline-col-left" style="text-align:right;padding-right:32px;">
              ${isLeft ? card : ''}
            </div>
            <div class="timeline-col-center" style="display:flex;justify-content:center;">
              <div class="timeline-dot-big" style="background:${m.color}25;border:2px solid ${m.color};color:${m.color};--dot-color:${m.color}40;box-shadow:0 0 0 6px var(--bg-primary), 0 0 20px ${m.color}40;">
                ${String(i + 1).padStart(2, '0')}
              </div>
            </div>
            <div class="timeline-col-right" style="padding-left:32px;">
              ${!isLeft ? card : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProgress();
    renderTimeline();
    document.dispatchEvent(new Event('reveal:refresh'));
  });
})();