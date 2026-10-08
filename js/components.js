(function () {
  const COMPONENTS = [
    { id: 'toxicity', number: '01', title: 'Toxicity Detection & Classification', shortTitle: 'Toxicity Detection',
      icon: '🔍', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
      image: 'images/images5.jpg',
      description: 'An NLP-based automated toxicity detection system that classifies user-generated content across multiple toxic categories with high accuracy.',
      functionality: ['Multi-label toxic content classification', 'Multilingual text processing and tokenisation', 'Fine-tuned transformer models (BERT-based)', 'Real-time message scoring API'],
      technologies: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'BERT'],
      member: 'Tharindi W A K',
      contribution: 'Designed and implemented the core NLP pipeline for automated toxicity classification using transformer-based models.',
      github: null },
    { id: 'image-detection', number: '02', title: 'Image Detection & Visual Content Analysis', shortTitle: 'Image Detection',
      icon: '🖼️', color: '#22D3EE', gradient: 'linear-gradient(135deg, #22D3EE, #3B82F6)',
      image: 'images/images4.jpg',
      description: 'A computer vision system that analyses visual content to detect harmful, explicit, or policy-violating imagery using deep learning models.',
      functionality: ['NSFW and explicit content detection', 'Object and scene recognition for policy violations', 'Multi-label image classification', 'Real-time image moderation API'],
      technologies: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'FastAPI'],
      member: 'Perera M D S',
      contribution: 'Developed the visual content analysis pipeline for detecting harmful imagery using deep learning models.',
      github: null },
    { id: 'enforcement', number: '03', title: 'Profile-Based Enforcement & Explainable AI', shortTitle: 'Adaptive Enforcement & XAI',
      icon: '⚖️', color: '#A78BFA', gradient: 'linear-gradient(135deg, #A78BFA, #EC4899)',
      image: 'images/images3.jpg',
      description: 'An intelligent enforcement system that dynamically calibrates moderation actions based on both toxicity severity and individual user risk profiles. By analysing historical offence patterns and behavioural trends, the module classifies users into LOW, MEDIUM, HIGH, or SEVERE risk levels using a Random Forest model. Every decision is transparent and explainable through SHAP-based reasoning, while Social Network Analysis identifies toxic clusters and affected users to enable proactive, network-aware moderation.',
      functionality: ['Dynamic toxicity threshold adjustment based on user offence history', 'Random Forest-based risk classification (LOW / MEDIUM / HIGH / SEVERE)', 'SHAP-powered explainable AI for human-readable decision justifications', 'Profile-based adaptive enforcement actions (warn, mute, suspend, ban)', 'Social Network Analysis for toxic cluster detection & affected user identification', 'Behaviour-aware graduated enforcement pipeline', 'Real-time risk scoring and decision transparency'],
      technologies: ['Python', 'Scikit-learn', 'Random Forest', 'SHAP', 'NetworkX', 'Pandas', 'Django', 'SQLite', 'React', 'Next.js'],
      member: 'Manohara H U K R T',
      contribution: 'Designed and implemented the complete Profile-Based Toxic Behaviour Enforcement and Explainable AI module. This includes the adaptive enforcement engine that personalises moderation based on user risk profiles, a Random Forest classifier for multi-tier risk categorisation, SHAP-based explanations that make every decision interpretable, and Social Network Analysis for detecting toxic interaction patterns and clusters. The module transforms basic toxicity detection into a personalised, behaviour-aware, and fully explainable enforcement system.',
      github: null, highlight: true },
    { id: 'emotional-shielding', number: '04', title: 'Adaptive Emotional Shielding', shortTitle: 'Emotional Shielding',
      icon: '🛡️', color: '#34D399', gradient: 'linear-gradient(135deg, #34D399, #06B6D4)',
      image: 'images/images2.jpg',
      description: 'An adaptive emotional protection system that shields users from psychologically harmful content by analysing emotional impact and dynamically filtering or softening toxic interactions in real time. Instead of simply blocking every harmful message, the Adaptive Emotional Shielding Module (AESM) selects a suitable intervention based on the toxicity level and the user\'s behavioural context.',
      functionality: ['Real-time emotional impact analysis', 'Adaptive content filtering based on user sensitivity', 'Sentiment-aware message softening', 'User emotional wellbeing dashboard'],
      strategy: {
        intro: 'This section explains how the system decides what action to take after detecting a toxic message. Instead of simply blocking every harmful message, AESM (Adaptive Emotional Shielding Module) selects a suitable intervention based on the toxicity level and the user\'s behavioural context.',
        interventions: [
          { title: 'Message Filtering', icon: '🚫', description: 'Completely hides highly toxic or harmful messages.', example: 'A very severe abusive message is blocked from being shown.' },
          { title: 'Content Blurring', icon: '🌫️', description: 'Blurs sensitive or offensive words. The user can still see the message, but harmful words are hidden.', example: null },
          { title: 'Warning Notifications', icon: '⚠️', description: 'Shows a warning when a message may contain harmful content.', example: '"This message may contain harmful content."' },
          { title: 'Tone Rewriting', icon: '✍️', description: 'Changes an aggressive message into a more neutral and respectful version. This helps maintain communication without the aggressive tone.', example: null },
          { title: 'Emotional Support Responses', icon: '💚', description: 'Provides supportive messages or guidance to users affected by harmful interactions.', example: null },
        ],
        decisionEngine: {
          title: 'How the decision works',
          formula: 'Toxicity Score + User Behavioral Context → Appropriate Intervention',
          examples: [
            { level: 'Low toxicity', action: 'Warning', color: '#34D399' },
            { level: 'Moderate toxicity', action: 'Blurring or tone rewriting', color: '#FBBF24' },
            { level: 'High toxicity', action: 'Filtering / blocking', color: '#F87171' },
            { level: 'Affected user', action: 'Emotional support', color: '#60A5FA' },
          ]
        }
      },
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'BERT', 'Pandas'],
      member: 'Praveen H G',
      contribution: 'Developed the adaptive emotional shielding system that protects users from psychologically harmful content through real-time emotional analysis and dynamic filtering.',
      github: null },
  ];

  const CROSS_SVG = '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';

  function renderEcosystem() {
    const wrap = document.getElementById('ecosystem-overview');
    if (!wrap) return;
    wrap.innerHTML = COMPONENTS.map((c, i) => `
      <div style="display:flex;align-items:center;gap:6px;">
        <div class="ecosystem-pill" data-open="${c.id}" style="background:${c.color}18;border-color:${c.color}45;color:${c.color};">
          <span style="font-size:15px;">${c.icon}</span>
          <span>${c.shortTitle}</span>
        </div>
        ${i < COMPONENTS.length - 1 ? `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--text-muted)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>` : ''}
      </div>
    `).join('');

    wrap.querySelectorAll('[data-open]').forEach(el => {
      el.addEventListener('click', () => {
        const c = COMPONENTS.find(x => x.id === el.dataset.open);
        if (c) openModal(c);
      });
    });
  }

  function renderCards() {
    const grid = document.getElementById('components-grid');
    if (!grid) return;

    grid.innerHTML = COMPONENTS.map((comp, i) => {
      const highlightBorder = comp.highlight ? `border-color:${comp.color}50;` : '';
      const highlightBg = comp.highlight ? `background:linear-gradient(135deg, ${comp.color}14, transparent 60%);` : '';

      return `
        <div class="reveal" data-delay="${i * 80}">
          <div class="component-card" data-open="${comp.id}" style="${highlightBg}${highlightBorder}">
            ${comp.highlight ? `<div style="position:absolute;left:0;top:15%;bottom:15%;width:4px;background:${comp.gradient};border-radius:0 4px 4px 0;box-shadow:0 0 20px ${comp.color}60;z-index:2;"></div>` : ''}
            <div class="component-card-image">
              <img src="${comp.image}" alt="${comp.title}" />
              <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${comp.color}60, ${comp.color}20 50%, transparent);mix-blend-mode:multiply;"></div>
              <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%);"></div>
              <div style="position:absolute;top:16px;left:20px;padding:6px 14px;background:rgba(255,255,255,0.15);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.25);border-radius:100px;font-size:11px;font-weight:700;letter-spacing:2px;color:#fff;">${comp.number}</div>
              ${comp.highlight ? `<div style="position:absolute;top:16px;right:20px;padding:6px 14px;background:${comp.color}30;backdrop-filter:blur(12px);border:1px solid ${comp.color}60;border-radius:100px;font-size:10px;font-weight:700;color:#fff;letter-spacing:1px;text-transform:uppercase;">⭐ Featured</div>` : ''}
              <div style="position:absolute;bottom:16px;left:20px;width:48px;height:48px;border-radius:14px;background:rgba(255,255,255,0.15);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;font-size:22px;">${comp.icon}</div>
            </div>
            <div class="component-card-body">
              <h3 style="font-size:1.15rem;font-weight:700;color:var(--text-primary);margin-bottom:10px;line-height:1.3;">${comp.title}</h3>
              <p style="font-size:14px;color:var(--text-body);line-height:1.65;margin-bottom:18px;flex:1;">${comp.description.substring(0, 160)}${comp.description.length > 160 ? '...' : ''}</p>
              <div style="display:flex;gap:6px;margin-bottom:18px;flex-wrap:wrap;">
                ${comp.technologies.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                ${comp.technologies.length > 3 ? `<span class="tech-tag tech-tag-more">+${comp.technologies.length - 3}</span>` : ''}
              </div>
              <button class="view-details-btn" style="background:${comp.color}18;border-color:${comp.color}45;color:${comp.color};">
                View Details
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('[data-open]').forEach(el => {
      el.addEventListener('click', () => {
        const c = COMPONENTS.find(x => x.id === el.dataset.open);
        if (c) openModal(c);
      });
    });
  }

  function renderStrategy(strategy, color) {
    if (!strategy) return '';
    const interventions = strategy.interventions.map(item => `
      <div style="padding:14px;background:var(--bg-input);border:1px solid var(--border-input);border-radius:12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:16px;">${item.icon}</span>
          <span style="font-size:13px;font-weight:700;color:var(--text-primary);">${item.title}</span>
        </div>
        <p style="font-size:12px;color:var(--text-body);line-height:1.55;margin:0;">${item.description}</p>
        ${item.example ? `<p style="font-size:11.5px;color:var(--text-secondary);font-style:italic;line-height:1.5;margin-top:8px;margin-bottom:0;padding-left:10px;border-left:2px solid ${color}50;">${item.example}</p>` : ''}
      </div>
    `).join('');

    const examples = strategy.decisionEngine.examples.map(ex => `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--border-input);border-radius:10px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${ex.color};box-shadow:0 0 8px ${ex.color}80;flex-shrink:0;"></span>
          <span style="font-size:13px;font-weight:600;color:var(--text-primary);">${ex.level}</span>
        </div>
        <span style="font-size:12.5px;font-weight:600;color:${ex.color};">→ ${ex.action}</span>
      </div>
    `).join('');

    return `
      <div style="margin-bottom:28px;">
        <p style="font-size:13.5px;color:var(--text-body);line-height:1.7;margin-bottom:20px;">${strategy.intro}</p>
        <h4 style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:14px;display:flex;align-items:center;gap:8px;">
          <span style="width:6px;height:6px;border-radius:50%;background:${color};display:inline-block;box-shadow:0 0 10px ${color};"></span>
          Possible Strategies
        </h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));gap:10px;margin-bottom:24px;">${interventions}</div>
        <h4 style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--text-tag);margin-bottom:14px;">${strategy.decisionEngine.title}</h4>
        <div style="padding:16px 18px;background:linear-gradient(135deg, ${color}12, transparent 70%);border:1px solid ${color}35;border-radius:14px;margin-bottom:18px;">
          <p style="font-size:12.5px;font-weight:700;color:${color};margin:0;text-align:center;letter-spacing:0.3px;">${strategy.decisionEngine.formula}</p>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">${examples}</div>
      </div>
    `;
  }

  function openModal(comp) {
    const root = document.getElementById('component-modal-root');
    if (!root) return;

    root.innerHTML = `
      <div class="modal-backdrop" id="comp-backdrop">
        <div class="component-modal-content">
          <div style="position:relative;height:180px;flex-shrink:0;overflow:hidden;">
            <img src="${comp.image}" alt="${comp.title}" style="width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;inset:0;background:linear-gradient(135deg, ${comp.color}70, ${comp.color}20 50%, transparent);mix-blend-mode:multiply;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.65) 100%);"></div>
            <div style="position:absolute;top:20px;left:24px;padding:6px 14px;background:rgba(255,255,255,0.18);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.3);border-radius:100px;font-size:11px;font-weight:700;letter-spacing:2px;color:#fff;">${comp.number}</div>
            ${comp.highlight ? `<div style="position:absolute;top:20px;right:72px;padding:6px 14px;background:${comp.color}40;backdrop-filter:blur(12px);border:1px solid ${comp.color}70;border-radius:100px;font-size:10px;font-weight:700;color:#fff;letter-spacing:1px;text-transform:uppercase;">⭐ Featured</div>` : ''}
            <button id="comp-close" style="position:absolute;top:18px;right:20px;width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.55);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.25);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;">${CROSS_SVG}</button>
            <div style="position:absolute;bottom:18px;left:24px;right:24px;display:flex;align-items:center;gap:14px;">
              <div style="width:48px;height:48px;border-radius:12px;background:rgba(255,255,255,0.18);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">${comp.icon}</div>
              <h2 style="font-size:clamp(1.05rem, 2.2vw, 1.4rem);font-weight:700;color:#fff;line-height:1.25;text-shadow:0 2px 12px rgba(0,0,0,0.5);margin:0;">${comp.title}</h2>
            </div>
          </div>

          <div class="component-modal-body">
            <p style="font-size:14px;color:var(--text-body);line-height:1.75;margin-bottom:26px;">${comp.description}</p>

            ${renderStrategy(comp.strategy, comp.color)}

            <div class="comp-detail-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
              <div>
                <h4 style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${comp.color};margin-bottom:16px;display:flex;align-items:center;gap:8px;">
                  <span style="width:6px;height:6px;border-radius:50%;background:${comp.color};display:inline-block;box-shadow:0 0 10px ${comp.color};"></span>
                  Key Functionality
                </h4>
                <ul style="list-style:none;padding:0;margin:0;">
                  ${comp.functionality.map(fn => `<li class="functionality-item"><span style="color:${comp.color};margin-top:2px;flex-shrink:0;font-size:12px;font-weight:700;">→</span>${fn}</li>`).join('')}
                </ul>
                <h4 style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--text-tag);margin-top:22px;margin-bottom:14px;">Tech Stack</h4>
                <div style="display:flex;gap:6px;flex-wrap:wrap;">
                  ${comp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
              </div>

              <div>
                <h4 style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--text-tag);margin-bottom:16px;display:flex;align-items:center;gap:8px;">
                  <span style="width:6px;height:6px;border-radius:50%;background:var(--text-tag);display:inline-block;"></span>
                  Team Contribution
                </h4>
                <div class="contribution-card">
                  <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
                    <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg, ${comp.color}30, ${comp.color}15);border:1px solid ${comp.color}45;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">👤</div>
                    <div>
                      <div style="font-size:14px;font-weight:600;color:var(--text-primary);">${comp.member}</div>
                      <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">Component Developer</div>
                    </div>
                  </div>
                  <p style="font-size:13px;color:var(--text-body);line-height:1.7;">${comp.contribution}</p>
                </div>
              </div>
            </div>
          </div>

          <div style="flex-shrink:0;padding:14px 24px;border-top:1px solid var(--border-subtle);background:var(--bg-tertiary);display:flex;justify-content:flex-end;">
            <button id="comp-close-footer" style="padding:8px 18px;background:transparent;border:1px solid var(--border-input);border-radius:10px;color:var(--text-secondary);font-size:13px;font-weight:600;cursor:pointer;">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';

    const backdrop = document.getElementById('comp-backdrop');
    function close() {
      root.innerHTML = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.getElementById('comp-close').addEventListener('click', close);
    document.getElementById('comp-close-footer').addEventListener('click', close);
    window.addEventListener('keydown', onKey);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderEcosystem();
    renderCards();
    document.dispatchEvent(new Event('reveal:refresh'));
  });
})();