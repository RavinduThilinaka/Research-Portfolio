"use client";

import ScrollReveal from "@/components/ScrollReveal";

const researchAreas = [
  { icon: "🤖", title: "Artificial Intelligence", desc: "Machine learning models for automated content analysis and decision-making." },
  { icon: "💬", title: "Natural Language Processing", desc: "Text understanding, sentiment analysis, and multilingual content processing." },
  { icon: "🌐", title: "Social Media Analysis", desc: "Study of online communication patterns and community dynamics." },
  { icon: "🛡️", title: "Content Moderation", desc: "Automated and semi-automated systems for platform safety management." },
  { icon: "☣️", title: "Toxicity Detection", desc: "Classification of harmful, abusive, or offensive online content." },
  { icon: "📈", title: "Behavioural Analysis", desc: "Modelling user behaviour patterns over time using historical data." },
  { icon: "💡", title: "Explainable AI (XAI)", desc: "Techniques that make AI decisions transparent and interpretable to humans." },
  { icon: "🔒", title: "Online Safety", desc: "Frameworks for protecting users from harm in digital communication spaces." },
];

const problems = [
  {
    icon: "📩",
    title: "Message-Level Moderation",
    desc: "Existing systems often evaluate messages in isolation without considering the broader context of a conversation or a user's communication history.",
    severity: "high",
  },
  {
    icon: "📏",
    title: "Uniform Toxicity Thresholds",
    desc: "Most platforms apply the same toxicity thresholds to all users regardless of their offence history or risk profile, leading to inconsistent enforcement.",
    severity: "high",
  },
  {
    icon: "🧩",
    title: "Lack of Behavioural Context",
    desc: "Conventional systems do not account for user behaviour patterns, repeat offenders, or contextual escalation over time.",
    severity: "medium",
  },
  {
    icon: "🌍",
    title: "Limited Multilingual Support",
    desc: "Many moderation models are trained primarily on English data, reducing effectiveness on multilingual or code-mixed communication.",
    severity: "medium",
  },
  {
    icon: "❓",
    title: "Unexplained Decisions",
    desc: "Users and moderators receive little to no explanation of why content was flagged or what enforcement action was applied.",
    severity: "high",
  },
  {
    icon: "👤",
    title: "No Personalisation",
    desc: "Enforcement actions are generic and do not adapt based on individual user profiles, leading to either under-enforcement or over-enforcement.",
    severity: "medium",
  },
];

const solutionComponents = [
  {
    step: "01",
    title: "Toxicity Detection",
    desc: "Advanced NLP models identify harmful content across multiple languages and communication styles.",
    color: "#3B82F6",
  },
  {
    step: "02",
    title: "Image Detection",
    desc: "Computer vision systems analyse visual content to detect harmful, explicit, or policy-violating imagery.",
    color: "#22D3EE",
  },
  {
    step: "03",
    title: "Adaptive Enforcement",
    desc: "Enforcement actions are dynamically calibrated based on toxicity level and user risk classification.",
    color: "#A78BFA",
  },
  {
    step: "04",
    title: "Emotional Shielding",
    desc: "Adaptive emotional protection shields users from psychologically harmful content in real time.",
    color: "#34D399",
  },
];

export default function DomainPage() {
  return (
    <div
      className="domain-page"
      style={{
        paddingTop: "80px",
        background: "var(--bg-page-gradient)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease",
      }}
    >
      {/* Ambient glow effects */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "35%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      {/* ─────────────────────────────────────────────
         HERO — split layout: text left, image card right
      ───────────────────────────────────────────── */}
      <section
        className="hero-section domain-hero"
        style={{
          position: "relative",
          padding: "80px 0 100px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* ── LEFT: Text content ── */}
            <ScrollReveal>
              <div className="hero-text">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 16px",
                    background: "rgba(59,130,246,0.15)",
                    border: "1px solid rgba(59,130,246,0.35)",
                    borderRadius: "100px",
                    marginBottom: "24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#60A5FA",
                    }}
                  >
                    Research Domain
                  </span>
                </div>

                <h1
                  className="section-title"
                  style={{
                    fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                    marginBottom: "22px",
                    lineHeight: "1.12",
                    letterSpacing: "-0.025em",
                    color: "var(--text-primary)",
                  }}
                >
                  The Problem PureTalk{" "}
                  <span className="text-gradient">Sets Out to Solve</span>
                </h1>

                <p
                  style={{
                    maxWidth: "580px",
                    lineHeight: "1.75",
                    fontSize: "17px",
                    color: "var(--text-body)",
                    marginBottom: "36px",
                  }}
                >
                  Modern online platforms struggle with content moderation that is contextual, fair,
                  and explainable. PureTalk addresses these gaps through an integrated research
                  approach combining AI, NLP, and behavioural science.
                </p>

                {/* Stat chips */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { label: "Research Areas", value: "8" },
                    { label: "Problems", value: "6" },
                    { label: "Components", value: "4" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="stat-chip"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "10px",
                        padding: "12px 20px",
                        background: "var(--bg-card-subtle)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "12px",
                        transition: "background 0.35s ease, border-color 0.35s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: "800",
                          background: "linear-gradient(135deg, #00D6FF, #60A5FA)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* ── RIGHT: Image card ── */}
            <ScrollReveal delay={150}>
              <div className="hero-image-wrap">
                <div className="hero-image-glow" />

                <div className="hero-image-card">
                  <img
                    className="hero-image"
                    src="/images/images1.png"
                    alt="PureTalk research domain illustration"
                  />

                  <div className="hero-image-overlay" />

                  <div className="hero-float-chip hero-float-chip-tl">
                    <span style={{ fontSize: "14px" }}>🧠</span>
                    <span>AI & NLP</span>
                  </div>

                  <div className="hero-float-chip hero-float-chip-br">
                    <span style={{ fontSize: "14px" }}>🛡️</span>
                    <span>Safe Communication</span>
                  </div>
                </div>

                <div className="hero-mini-card">
                  <div className="hero-mini-dot" />
                  <div>
                    <div className="hero-mini-title">Integrated System</div>
                    <div className="hero-mini-sub">4 components · 1 platform</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         Research Areas
      ───────────────────────────────────────────── */}
      <section style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Academic Foundation</p>
            <h2 className="section-title" style={{ color: "var(--text-primary)" }}>
              Research <span className="text-gradient">Domain Areas</span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                marginBottom: "56px",
                color: "var(--text-body)",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              PureTalk sits at the intersection of several cutting-edge research disciplines.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
            className="domain-grid"
          >
            {researchAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 80}>
                <div
                  className="domain-card"
                  style={{
                    padding: "24px 20px",
                    height: "100%",
                    borderRadius: "16px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "var(--bg-input)",
                      border: "1px solid var(--border-input)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      marginBottom: "14px",
                    }}
                  >
                    {area.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    {area.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: "1.65" }}>
                    {area.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         Problem
      ───────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--bg-section-alt)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          position: "relative",
          zIndex: 1,
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Problem Statement</p>
            <h2 className="section-title" style={{ color: "var(--text-primary)" }}>
              Limitations of{" "}
              <span className="problem-highlight">Conventional Systems</span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                marginBottom: "56px",
                color: "var(--text-body)",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Current content moderation platforms share fundamental shortcomings that PureTalk
              specifically targets.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="problems-grid"
          >
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 80}>
                <div
                  className={`problem-card problem-${p.severity}`}
                  style={{
                    padding: "28px 24px",
                    borderRadius: "16px",
                    height: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "14px" }}>{p.icon}</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        lineHeight: "1.35",
                      }}
                    >
                      {p.title}
                    </h3>
                    <span className={`severity-badge severity-${p.severity}`}>
                      {p.severity}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.7" }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         Research Gap
      ───────────────────────────────────────────── */}
      <section style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Research Gap</p>
            <h2 className="section-title" style={{ color: "var(--text-primary)" }}>
              What is <span className="text-gradient">Missing</span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                marginBottom: "56px",
                color: "var(--text-body)",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              Existing research addresses parts of the problem, but no integrated solution
              combines all necessary components into a cohesive, explainable system.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="gap-comparison">
              {/* Existing */}
              <div>
                <h3 className="gap-title gap-title-existing">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#F87171",
                      display: "inline-block",
                      boxShadow: "0 0 12px rgba(248,113,113,0.6)",
                    }}
                  />
                  Existing Systems
                </h3>
                {[
                  "Message-level only",
                  "No user history",
                  "Fixed thresholds",
                  "No explanations",
                  "Generic enforcement",
                  "English-centric",
                ].map((item, idx, arr) => (
                  <div
                    key={item}
                    className="gap-row"
                    style={{
                      borderBottom:
                        idx < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    }}
                  >
                    <span style={{ color: "#F87171", fontSize: "16px", fontWeight: "700" }}>
                      ✗
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--text-tag)" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* VS divider */}
              <div style={{ textAlign: "center" }}>
                <div className="gap-vs">VS</div>
              </div>

              {/* PureTalk */}
              <div>
                <h3 className="gap-title gap-title-puretalk">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#22D3EE",
                      display: "inline-block",
                      boxShadow: "0 0 12px rgba(34,211,238,0.6)",
                    }}
                  />
                  PureTalk Approach
                </h3>
                {[
                  "Contextual analysis",
                  "User profile & history",
                  "Adaptive thresholds",
                  "Explainable decisions",
                  "Personalised enforcement",
                  "Multilingual support",
                ].map((item, idx, arr) => (
                  <div
                    key={item}
                    className="gap-row"
                    style={{
                      borderBottom:
                        idx < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    }}
                  >
                    <span style={{ color: "#34D399", fontSize: "16px", fontWeight: "700" }}>
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "var(--text-primary)",
                        fontWeight: "500",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         Proposed Solution
      ───────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 0",
          background: "var(--bg-section-alt)",
          borderTop: "1px solid var(--border-subtle)",
          position: "relative",
          zIndex: 1,
          transition: "background 0.35s ease, border-color 0.35s ease",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Proposed Solution</p>
            <h2 className="section-title" style={{ color: "var(--text-primary)" }}>
              The PureTalk{" "}
              <span className="text-gradient">Integrated Approach</span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                marginBottom: "56px",
                color: "var(--text-body)",
                lineHeight: "1.7",
                fontSize: "17px",
              }}
            >
              An end-to-end system that combines four specialised components into a cohesive
              research platform for safer online communication.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
            className="solution-grid"
          >
            {solutionComponents.map((comp, i) => (
              <ScrollReveal key={comp.step} delay={i * 100}>
                <div
                  className="solution-card"
                  style={{
                    ["--comp-color" as any]: comp.color,
                    padding: "28px 24px",
                    /* ✅ FIXED: stronger tint so card stays visible in dark mode */
                    background: `linear-gradient(145deg, ${comp.color}22, ${comp.color}08)`,
                    border: `1px solid ${comp.color}55`,
                    borderRadius: "16px",
                    height: "100%",
                    position: "relative",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "800",
                      color: comp.color,
                      letterSpacing: "2px",
                      marginBottom: "16px",
                    }}
                  >
                    {comp.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                      lineHeight: "1.35",
                    }}
                  >
                    {comp.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.7" }}>
                    {comp.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         Scoped styles
      ───────────────────────────────────────────── */}
      <style>{`
        /* ============================================
           HERO — split layout
        ============================================ */
        .hero-image-wrap {
          position: relative;
          width: 100%;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-image-glow {
          position: absolute;
          inset: -8%;
          border-radius: 40px;
          background:
            radial-gradient(circle at 30% 30%, rgba(59,130,246,0.35) 0%, transparent 55%),
            radial-gradient(circle at 70% 70%, rgba(167,139,250,0.30) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(0,214,255,0.18) 0%, transparent 65%);
          filter: blur(50px);
          z-index: 0;
          pointer-events: none;
        }

        .hero-image-card {
          position: relative;
          z-index: 1;
          aspect-ratio: 4 / 3.4;
          border-radius: 24px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.04) inset;
          transform: rotate(-1.2deg);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-image-card:hover {
          transform: rotate(0deg) translateY(-4px);
          box-shadow:
            0 40px 90px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(0, 214, 255, 0.15) inset,
            0 0 60px rgba(0, 214, 255, 0.15);
        }
        .light .hero-image-card {
          box-shadow:
            0 30px 80px rgba(15, 23, 42, 0.18),
            0 0 0 1px rgba(0, 0, 0, 0.04) inset;
        }
        .light .hero-image-card:hover {
          box-shadow:
            0 40px 90px rgba(15, 23, 42, 0.22),
            0 0 0 1px rgba(37, 99, 235, 0.15) inset,
            0 0 60px rgba(37, 99, 235, 0.12);
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg,
              rgba(59,130,246,0.18) 0%,
              rgba(0,214,255,0.06) 40%,
              rgba(124,58,237,0.18) 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .light .hero-image-overlay {
          background:
            linear-gradient(135deg,
              rgba(59,130,246,0.12) 0%,
              rgba(0,214,255,0.04) 40%,
              rgba(124,58,237,0.12) 100%);
          mix-blend-mode: normal;
        }

        .hero-float-chip {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
          background: rgba(5, 5, 5, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #E2E8F0;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          z-index: 2;
          animation: chipFloat 5s ease-in-out infinite;
        }
        .hero-float-chip-tl {
          top: 18px;
          left: 18px;
        }
        .hero-float-chip-br {
          bottom: 18px;
          right: 18px;
          animation-delay: -2.5s;
        }
        .light .hero-float-chip {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(0, 0, 0, 0.08);
          color: #0F172A;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
        }

        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }

        .hero-mini-card {
          position: absolute;
          left: -24px;
          bottom: -22px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          z-index: 3;
          transition: background 0.35s ease, border-color 0.35s ease;
        }
        /* ✅ Light theme: pure white with subtle border + shadow */
        .light .hero-mini-card {
          background: #FFFFFF;
          border-color: rgba(15, 23, 42, 0.08);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.10);
        }

        .hero-mini-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #34D399;
          box-shadow: 0 0 0 4px rgba(52,211,153,0.2), 0 0 16px rgba(52,211,153,0.7);
          animation: miniPulse 2s ease-in-out infinite;
        }
        @keyframes miniPulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(52,211,153,0.2), 0 0 16px rgba(52,211,153,0.7); }
          50%      { box-shadow: 0 0 0 6px rgba(52,211,153,0.15), 0 0 22px rgba(52,211,153,0.9); }
        }

        .hero-mini-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .hero-mini-sub {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        /* ============================================
           STAT CHIPS — light theme white
        ============================================ */
        .light .stat-chip {
          background: #FFFFFF !important;
          border-color: rgba(15, 23, 42, 0.08) !important;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }

        /* ============================================
           DOMAIN CARDS
        ============================================ */
        .domain-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          cursor: pointer; /* 👈 hand cursor */
        }
        .domain-card:hover {
          border-color: var(--border-blue);
          background: var(--bg-card-hover);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.15);
          cursor: pointer; /* 👈 hand cursor on hover */
        }

        /* ✅ Light theme: pure white card with subtle border + soft shadow */
        .light .domain-card {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }
        .light .domain-card:hover {
          border-color: rgba(37, 99, 235, 0.35);
          background: #FFFFFF;
          box-shadow:
            0 8px 24px rgba(37, 99, 235, 0.10),
            0 1px 2px rgba(15, 23, 42, 0.04);
        }

        /* ============================================
           PROBLEM CARDS  👈 message cards
        ============================================ */
        .problem-card {
          background: rgba(248,113,113,0.06);
          border: 1px solid rgba(248,113,113,0.35);
          cursor: pointer; /* 👈 hand cursor */
        }
        .problem-card.problem-medium {
          background: rgba(251,191,36,0.05);
          border: 1px solid rgba(251,191,36,0.30);
        }
        .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(248,113,113,0.15);
          cursor: pointer; /* 👈 hand cursor on hover */
        }
        .problem-card.problem-medium:hover {
          box-shadow: 0 16px 40px rgba(251,191,36,0.12);
        }

        /* ✅ Light theme: pure white bg, colored border to indicate severity */
        .light .problem-card {
          background: #FFFFFF;
          border: 1px solid rgba(248, 113, 113, 0.35);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }
        .light .problem-card.problem-medium {
          background: #FFFFFF;
          border: 1px solid rgba(251, 191, 36, 0.40);
        }
        .light .problem-card:hover {
          box-shadow: 0 8px 24px rgba(248, 113, 113, 0.12);
        }
        .light .problem-card.problem-medium:hover {
          box-shadow: 0 8px 24px rgba(251, 191, 36, 0.12);
        }

        /* Severity badge */
        .severity-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .severity-badge.severity-high {
          background: rgba(248,113,113,0.22);
          color: #F87171;
          border: 1px solid rgba(248,113,113,0.45);
        }
        .severity-badge.severity-medium {
          background: rgba(251,191,36,0.20);
          color: #FCD34D;
          border: 1px solid rgba(251,191,36,0.45);
        }
        .light .severity-badge.severity-medium {
          color: #B45309;
        }

        .problem-highlight {
          color: #F87171;
        }
        .light .problem-highlight {
          color: #DC2626;
        }

        /* ============================================
           GAP COMPARISON
        ============================================ */
        .gap-comparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 32px;
          align-items: center;
          padding: 40px;
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        /* ✅ Light theme: pure white */
        .light .gap-comparison {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }

        .gap-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
        }

        .gap-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gap-title-existing { color: #F87171; }
        .light .gap-title-existing { color: #DC2626; }
        .gap-title-puretalk { color: #22D3EE; }
        .light .gap-title-puretalk { color: #0891B2; }

        .gap-vs {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6, #A78BFA);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          color: white;
          margin: 0 auto;
          box-shadow: 0 8px 24px rgba(124,58,237,0.35);
        }

        /* ============================================
           SOLUTION CARDS
        ============================================ */
        .solution-card {
          cursor: pointer; /* 👈 hand cursor */
        }
        .solution-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--comp-color) 65%, transparent);
          box-shadow: 0 16px 40px color-mix(in srgb, var(--comp-color) 22%, transparent);
          cursor: pointer; /* 👈 hand cursor on hover */
        }

        /* ✅ Light theme: pure white bg (override inline gradient) */
        .light .solution-card {
          background: #FFFFFF !important;
          border-width: 1px;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }
        .light .solution-card:hover {
          box-shadow:
            0 8px 24px color-mix(in srgb, var(--comp-color) 18%, transparent),
            0 1px 2px rgba(15, 23, 42, 0.04);
        }

        /* ============================================
           RESPONSIVE
        ============================================ */
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .hero-image-wrap {
            max-width: 520px;
          }
          .domain-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .problems-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gap-comparison { grid-template-columns: 1fr !important; }
          .solution-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .domain-grid { grid-template-columns: 1fr !important; }
          .problems-grid { grid-template-columns: 1fr !important; }
          .solution-grid { grid-template-columns: 1fr !important; }
          .hero-mini-card {
            left: -8px;
            bottom: -16px;
            padding: 10px 14px;
          }
        }
      `}</style>
    </div>
  );
}