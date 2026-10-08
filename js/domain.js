(function () {
  const RESEARCH_AREAS = [
    { icon: '🤖', title: 'Artificial Intelligence', desc: 'Machine learning models for automated content analysis and decision-making.' },
    { icon: '💬', title: 'Natural Language Processing', desc: 'Text understanding, sentiment analysis, and multilingual content processing.' },
    { icon: '🌐', title: 'Social Media Analysis', desc: 'Study of online communication patterns and community dynamics.' },
    { icon: '🛡️', title: 'Content Moderation', desc: 'Automated and semi-automated systems for platform safety management.' },
    { icon: '☣️', title: 'Toxicity Detection', desc: 'Classification of harmful, abusive, or offensive online content.' },
    { icon: '📈', title: 'Behavioural Analysis', desc: 'Modelling user behaviour patterns over time using historical data.' },
    { icon: '💡', title: 'Explainable AI (XAI)', desc: 'Techniques that make AI decisions transparent and interpretable to humans.' },
    { icon: '🔒', title: 'Online Safety', desc: 'Frameworks for protecting users from harm in digital communication spaces.' },
  ];

  const PROBLEMS = [
    { icon: '📩', title: 'Message-Level Moderation', desc: 'Existing systems often evaluate messages in isolation without considering the broader context of a conversation or a user\'s communication history.', severity: 'high' },
    { icon: '📏', title: 'Uniform Toxicity Thresholds', desc: 'Most platforms apply the same toxicity thresholds to all users regardless of their offence history or risk profile, leading to inconsistent enforcement.', severity: 'high' },
    { icon: '🧩', title: 'Lack of Behavioural Context', desc: 'Conventional systems do not account for user behaviour patterns, repeat offenders, or contextual escalation over time.', severity: 'medium' },
    { icon: '🌍', title: 'Limited Multilingual Support', desc: 'Many moderation models are trained primarily on English data, reducing effectiveness on multilingual or code-mixed communication.', severity: 'medium' },
    { icon: '❓', title: 'Unexplained Decisions', desc: 'Users and moderators receive little to no explanation of why content was flagged or what enforcement action was applied.', severity: 'high' },
    { icon: '👤', title: 'No Personalisation', desc: 'Enforcement actions are generic and do not adapt based on individual user profiles, leading to either under-enforcement or over-enforcement.', severity: 'medium' },
  ];

  const GAP_EXISTING = [
    'Message-level only', 'No user history', 'Fixed thresholds',
    'No explanations', 'Generic enforcement', 'English-centric',
  ];
  const GAP_PURETALK = [
    'Contextual analysis', 'User profile & history', 'Adaptive thresholds',
    'Explainable decisions', 'Personalised enforcement', 'Multilingual support',
  ];

  const SOLUTIONS = [
    { step: '01', title: 'Toxicity Detection', desc: 'Advanced NLP models identify harmful content across multiple languages and communication styles.', color: '#3B82F6' },
    { step: '02', title: 'Image Detection', desc: 'Computer vision systems analyse visual content to detect harmful, explicit, or policy-violating imagery.', color: '#22D3EE' },
    { step: '03', title: 'Adaptive Enforcement', desc: 'Enforcement actions are dynamically calibrated based on toxicity level and user risk classification.', color: '#A78BFA' },
    { step: '04', title: 'Emotional Shielding', desc: 'Adaptive emotional protection shields users from psychologically harmful content in real time.', color: '#34D399' },
  ];

  function renderAreas() {
    const grid = document.getElementById('domain-grid');
    if (!grid) return;
    grid.innerHTML = RESEARCH_AREAS.map((a, i) => `
      <div class="reveal" data-delay="${i * 80}">
        <div class="domain-card">
          <div class="domain-card-icon">${a.icon}</div>
          <h3>${a.title}</h3>
          <p>${a.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderProblems() {
    const grid = document.getElementById('problems-grid');
    if (!grid) return;
    grid.innerHTML = PROBLEMS.map((p, i) => `
      <div class="reveal" data-delay="${i * 80}">
        <div class="problem-card problem-${p.severity}">
          <div class="problem-icon">${p.icon}</div>
          <div class="problem-title-row">
            <h3>${p.title}</h3>
            <span class="severity-badge severity-${p.severity}">${p.severity}</span>
          </div>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderGap() {
    const wrap = document.getElementById('gap-comparison');
    if (!wrap) return;

    const renderSide = (items, isExisting) => items.map((item, idx) => `
      <div class="gap-row" style="${idx < items.length - 1 ? '' : 'border-bottom:none;'}">
        <span style="color:${isExisting ? '#F87171' : '#34D399'};font-size:16px;font-weight:700;">${isExisting ? '✗' : '✓'}</span>
        <span style="font-size:14px;color:${isExisting ? 'var(--text-tag)' : 'var(--text-primary)'};${isExisting ? '' : 'font-weight:500;'}">${item}</span>
      </div>
    `).join('');

    wrap.innerHTML = `
      <div>
        <h3 class="gap-title gap-title-existing">
          <span style="width:8px;height:8px;border-radius:50%;background:#F87171;display:inline-block;box-shadow:0 0 12px rgba(248,113,113,0.6);"></span>
          Existing Systems
        </h3>
        ${renderSide(GAP_EXISTING, true)}
      </div>
      <div style="text-align:center;"><div class="gap-vs">VS</div></div>
      <div>
        <h3 class="gap-title gap-title-puretalk">
          <span style="width:8px;height:8px;border-radius:50%;background:#22D3EE;display:inline-block;box-shadow:0 0 12px rgba(34,211,238,0.6);"></span>
          PureTalk Approach
        </h3>
        ${renderSide(GAP_PURETALK, false)}
      </div>
    `;
  }

  function renderSolutions() {
    const grid = document.getElementById('solution-grid');
    if (!grid) return;
    grid.innerHTML = SOLUTIONS.map((c, i) => `
      <div class="reveal" data-delay="${i * 100}">
        <div class="solution-card" style="--comp-color:${c.color};background:linear-gradient(145deg, ${c.color}22, ${c.color}08);border:1px solid ${c.color}55;">
          <div class="solution-step" style="color:${c.color};">${c.step}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderAreas();
    renderProblems();
    renderGap();
    renderSolutions();
    document.dispatchEvent(new Event('reveal:refresh'));
  });
})();