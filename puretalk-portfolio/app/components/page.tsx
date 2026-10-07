"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface StrategyIntervention {
  title: string;
  icon: string;
  description: string;
  example: string | null;
}

interface StrategyExample {
  level: string;
  action: string;
  color: string;
}

interface ComponentStrategy {
  intro: string;
  interventions: StrategyIntervention[];
  decisionEngine: {
    title: string;
    formula: string;
    examples: StrategyExample[];
  };
}

interface Component {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  gradient: string;
  image: string;
  description: string;
  functionality: string[];
  technologies: string[];
  member: string;
  contribution: string;
  github: string | null;
  highlight?: boolean;
  strategy?: ComponentStrategy;
}

const components: Component[] = [
  {
    id: "toxicity",
    number: "01",
    title: "Toxicity Detection & Classification",
    shortTitle: "Toxicity Detection",
    icon: "🔍",
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    image: "/images/images5.jpg",
    description:
      "An NLP-based automated toxicity detection system that classifies user-generated content across multiple toxic categories with high accuracy.",
    functionality: [
      "Multi-label toxic content classification",
      "Multilingual text processing and tokenisation",
      "Fine-tuned transformer models (BERT-based)",
      "Real-time message scoring API",
    ],
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "BERT"],
    member: "Tharindi W A K",
    contribution:
      "Designed and implemented the core NLP pipeline for automated toxicity classification using transformer-based models.",
    github: null,
  },
  {
    id: "image-detection",
    number: "02",
    title: "Image Detection & Visual Content Analysis",
    shortTitle: "Image Detection",
    icon: "🖼️",
    color: "#22D3EE",
    gradient: "linear-gradient(135deg, #22D3EE, #3B82F6)",
    image: "/images/images4.jpg",
    description:
      "A computer vision system that analyses visual content to detect harmful, explicit, or policy-violating imagery using deep learning models.",
    functionality: [
      "NSFW and explicit content detection",
      "Object and scene recognition for policy violations",
      "Multi-label image classification",
      "Real-time image moderation API",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "CNN", "FastAPI"],
    member: "Perera M D S",
    contribution:
      "Developed the visual content analysis pipeline for detecting harmful imagery using deep learning models.",
    github: null,
  },
  {
    id: "enforcement",
    number: "03",
    title: "Profile-Based Enforcement & Explainable AI",
    shortTitle: "Adaptive Enforcement & XAI",
    icon: "⚖️",
    color: "#A78BFA",
    gradient: "linear-gradient(135deg, #A78BFA, #EC4899)",
    image: "/images/images3.jpg",
    description:
      "An intelligent enforcement system that dynamically calibrates moderation actions based on both toxicity severity and individual user risk profiles. By analysing historical offence patterns and behavioural trends, the module classifies users into LOW, MEDIUM, HIGH, or SEVERE risk levels using a Random Forest model. Every decision is transparent and explainable through SHAP-based reasoning, while Social Network Analysis identifies toxic clusters and affected users to enable proactive, network-aware moderation.",
    functionality: [
      "Dynamic toxicity threshold adjustment based on user offence history",
      "Random Forest-based risk classification (LOW / MEDIUM / HIGH / SEVERE)",
      "SHAP-powered explainable AI for human-readable decision justifications",
      "Profile-based adaptive enforcement actions (warn, mute, suspend, ban)",
      "Social Network Analysis for toxic cluster detection & affected user identification",
      "Behaviour-aware graduated enforcement pipeline",
      "Real-time risk scoring and decision transparency",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "SHAP",
      "NetworkX",
      "Pandas",
      "Django",
      "SQLIte",
      "React",
      "Next.js",
    ],
    member: "Manohara H U K R T",
    contribution:
      "Designed and implemented the complete Profile-Based Toxic Behaviour Enforcement and Explainable AI module. This includes the adaptive enforcement engine that personalises moderation based on user risk profiles, a Random Forest classifier for multi-tier risk categorisation, SHAP-based explanations that make every decision interpretable, and Social Network Analysis for detecting toxic interaction patterns and clusters. The module transforms basic toxicity detection into a personalised, behaviour-aware, and fully explainable enforcement system.",
    github: null,
    highlight: true,
  },
  {
    id: "emotional-shielding",
    number: "04",
    title: "Adaptive Emotional Shielding",
    shortTitle: "Emotional Shielding",
    icon: "🛡️",
    color: "#34D399",
    gradient: "linear-gradient(135deg, #34D399, #06B6D4)",
    image: "/images/images2.jpg",
    description:
      "An adaptive emotional protection system that shields users from psychologically harmful content by analysing emotional impact and dynamically filtering or softening toxic interactions in real time. Instead of simply blocking every harmful message, the Adaptive Emotional Shielding Module (AESM) selects a suitable intervention based on the toxicity level and the user's behavioural context.",
    functionality: [
      "Real-time emotional impact analysis",
      "Adaptive content filtering based on user sensitivity",
      "Sentiment-aware message softening",
      "User emotional wellbeing dashboard",
    ],
    strategy: {
      intro:
        "This section explains how the system decides what action to take after detecting a toxic message. Instead of simply blocking every harmful message, AESM (Adaptive Emotional Shielding Module) selects a suitable intervention based on the toxicity level and the user's behavioural context.",
      interventions: [
        {
          title: "Message Filtering",
          icon: "🚫",
          description: "Completely hides highly toxic or harmful messages.",
          example: "A very severe abusive message is blocked from being shown.",
        },
        {
          title: "Content Blurring",
          icon: "🌫️",
          description:
            "Blurs sensitive or offensive words. The user can still see the message, but harmful words are hidden.",
          example: null,
        },
        {
          title: "Warning Notifications",
          icon: "⚠️",
          description:
            "Shows a warning when a message may contain harmful content.",
          example: "\u201CThis message may contain harmful content.\u201D",
        },
        {
          title: "Tone Rewriting",
          icon: "✍️",
          description:
            "Changes an aggressive message into a more neutral and respectful version. This helps maintain communication without the aggressive tone.",
          example: null,
        },
        {
          title: "Emotional Support Responses",
          icon: "💚",
          description:
            "Provides supportive messages or guidance to users affected by harmful interactions.",
          example: null,
        },
      ],
      decisionEngine: {
        title: "How the decision works",
        formula:
          "Toxicity Score + User Behavioral Context → Appropriate Intervention",
        examples: [
          { level: "Low toxicity", action: "Warning", color: "#34D399" },
          { level: "Moderate toxicity", action: "Blurring or tone rewriting", color: "#FBBF24" },
          { level: "High toxicity", action: "Filtering / blocking", color: "#F87171" },
          { level: "Affected user", action: "Emotional support", color: "#60A5FA" },
        ],
      },
    },
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "DJango","BERT","Pandas"],
    member: "Praveen H G",
    contribution:
      "Developed the adaptive emotional shielding system that protects users from psychologically harmful content through real-time emotional analysis and dynamic filtering.",
    github: null,
  },
];

export default function ComponentsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const activeComponent = components.find((c) => c.id === openId) || null;

  /* Lock body scroll when modal open */
  useEffect(() => {
    if (openId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openId]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="components-page"
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
          top: "10%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      {/* Header */}
      <section style={{ padding: "80px 0 60px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #3B82F6, #A78BFA, #34D399)",
                  borderRadius: "2px",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  background: "linear-gradient(90deg, #60A5FA, #C4B5FD, #6EE7B7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Research Components
              </p>
            </div>
            <h1
              className="section-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                marginBottom: "20px",
                lineHeight: "1.15",
                color: "var(--text-primary)",
              }}
            >
              The PureTalk{" "}
              <span className="text-gradient">Component Ecosystem</span>
            </h1>
            <p
              style={{
                maxWidth: "700px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              PureTalk is a collaborative team research project. Each component below
              represents a distinct research contribution, together forming the complete PureTalk
              intelligent moderation platform.
            </p>
          </ScrollReveal>

          {/* Ecosystem overview visual */}
          <ScrollReveal delay={200}>
            <div
              className="ecosystem-overview"
              style={{
                marginTop: "48px",
                padding: "28px 32px",
                background: "var(--bg-card-subtle)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.35s ease, border-color 0.35s ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "10%",
                  right: "10%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(167,139,250,0.6), rgba(52,211,153,0.6), transparent)",
                }}
              />
              {components.map((c, i) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    className="ecosystem-pill"
                    style={{
                      padding: "10px 18px",
                      background: `${c.color}18`,
                      border: `1px solid ${c.color}45`,
                      borderRadius: "100px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: c.color,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenId(c.id)}
                  >
                    <span style={{ fontSize: "15px" }}>{c.icon}</span>
                    <span>{c.shortTitle}</span>
                  </div>
                  {i < components.length - 1 && (
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="var(--text-muted)"
                      className="ecosystem-arrow"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Component Cards — HORIZONTAL (2-col grid) */}
      <section style={{ padding: "0 0 100px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div className="components-grid">
            {components.map((comp, i) => {
              const isHovered = hoveredCard === comp.id;
              return (
                <ScrollReveal key={comp.id} delay={i * 80}>
                  <div
                    className={`component-card${comp.highlight ? " component-card-highlight" : ""}${isHovered ? " component-card-hovered" : ""}`}
                    onMouseEnter={() => setHoveredCard(comp.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setOpenId(comp.id)}
                    style={{
                      background: comp.highlight
                        ? `linear-gradient(135deg, ${comp.color}14, transparent 60%)`
                        : undefined,
                      borderColor: comp.highlight
                        ? `${comp.color}50`
                        : isHovered
                          ? `${comp.color}45`
                          : undefined,
                      borderRadius: "24px",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                      boxShadow: isHovered
                        ? `0 20px 60px ${comp.color}20, 0 0 0 1px ${comp.color}25`
                        : "0 4px 20px rgba(0,0,0,0.06)",
                      position: "relative",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {comp.highlight && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "15%",
                          bottom: "15%",
                          width: "4px",
                          background: comp.gradient,
                          borderRadius: "0 4px 4px 0",
                          boxShadow: `0 0 20px ${comp.color}60`,
                          zIndex: 2,
                        }}
                      />
                    )}

                    {/* Image banner */}
                    <div
                      style={{
                        position: "relative",
                        height: "160px",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={comp.image}
                        alt={comp.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: isHovered ? "scale(1.08)" : "scale(1)",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(135deg, ${comp.color}60, ${comp.color}20 50%, transparent)`,
                          mixBlendMode: "multiply",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)",
                        }}
                      />
                      {/* Number badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "20px",
                          padding: "6px 14px",
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          borderRadius: "100px",
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: "2px",
                          color: "#fff",
                        }}
                      >
                        {comp.number}
                      </div>
                      {comp.highlight && (
                        <div
                          style={{
                            position: "absolute",
                            top: "16px",
                            right: "20px",
                            padding: "6px 14px",
                            background: `${comp.color}30`,
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${comp.color}60`,
                            borderRadius: "100px",
                            fontSize: "10px",
                            fontWeight: "700",
                            color: "#fff",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                          }}
                        >
                          ⭐ Featured
                        </div>
                      )}
                      {/* Icon overlay */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          left: "20px",
                          width: "48px",
                          height: "48px",
                          borderRadius: "14px",
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(16px)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          transition: "all 0.3s ease",
                          transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0)",
                        }}
                      >
                        {comp.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "24px 26px 26px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: "700",
                          color: "var(--text-primary)",
                          marginBottom: "10px",
                          lineHeight: "1.3",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {comp.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--text-body)",
                          lineHeight: "1.65",
                          marginBottom: "18px",
                          flex: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {comp.description}
                      </p>

                      {/* Tech tags */}
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          marginBottom: "18px",
                          flexWrap: "wrap",
                        }}
                      >
                        {comp.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {comp.technologies.length > 3 && (
                          <span className="tech-tag tech-tag-more">
                            +{comp.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Details button */}
                      <button
                        className="view-details-btn"
                        style={{
                          alignSelf: "flex-start",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 18px",
                          background: `${comp.color}18`,
                          border: `1px solid ${comp.color}45`,
                          borderRadius: "10px",
                          color: comp.color,
                          fontSize: "13px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.25s ease",
                        }}
                      >
                        View Details
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         POPUP MODAL — Fixed Size + Scrollable Body
      ───────────────────────────────────────────── */}
      {activeComponent && (
        <div
          className="modal-overlay"
          onClick={() => setOpenId(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            animation: "modalFadeIn 0.25s ease",
          }}
        >
          {/* ✅ FIXED SIZE MODAL */}
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "720px",
              height: "min(85vh, 720px)",
              display: "flex",
              flexDirection: "column",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px ${activeComponent.color}30`,
              animation: "modalSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* ── FIXED HEADER (image + title) ── */}
            <div
              style={{
                position: "relative",
                height: "180px",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={activeComponent.image}
                alt={activeComponent.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${activeComponent.color}70, ${activeComponent.color}20 50%, transparent)`,
                  mixBlendMode: "multiply",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.65) 100%)",
                }}
              />

              {/* Number badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "24px",
                  padding: "6px 14px",
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "100px",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  color: "#fff",
                }}
              >
                {activeComponent.number}
              </div>

              {activeComponent.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "72px",
                    padding: "6px 14px",
                    background: `${activeComponent.color}40`,
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${activeComponent.color}70`,
                    borderRadius: "100px",
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "#fff",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  ⭐ Featured
                </div>
              )}

              {/* Close button */}
              <button
                className="modal-close"
                onClick={() => setOpenId(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "20px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "400",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>

              {/* Title overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "24px",
                  right: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    flexShrink: 0,
                  }}
                >
                  {activeComponent.icon}
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)",
                    fontWeight: "700",
                    color: "#fff",
                    lineHeight: "1.25",
                    letterSpacing: "-0.01em",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    margin: 0,
                  }}
                >
                  {activeComponent.title}
                </h2>
              </div>
            </div>

            {/* ── SCROLLABLE BODY ── */}
            <div
              className="modal-body"
              style={{
                padding: "28px 32px 32px",
                overflowY: "auto",
                flex: 1,
                minHeight: 0,
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-body)",
                  lineHeight: "1.75",
                  marginBottom: "26px",
                }}
              >
                {activeComponent.description}
              </p>

              {/* ── ADAPTIVE EMOTIONAL SHIELDING STRATEGY ── */}
              {activeComponent.strategy && (
                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "var(--text-body)",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                    }}
                  >
                    {activeComponent.strategy.intro}
                  </p>

                  {/* Intervention cards */}
                  <h4
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: activeComponent.color,
                      marginBottom: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: activeComponent.color,
                        display: "inline-block",
                        boxShadow: `0 0 10px ${activeComponent.color}`,
                      }}
                    />
                    Possible Strategies
                  </h4>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: "10px",
                      marginBottom: "24px",
                    }}
                  >
                    {activeComponent.strategy.interventions.map((item) => (
                      <div
                        key={item.title}
                        style={{
                          padding: "14px",
                          background: "var(--bg-input)",
                          border: "1px solid var(--border-input)",
                          borderRadius: "12px",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "8px",
                          }}
                        >
                          <span style={{ fontSize: "16px" }}>{item.icon}</span>
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: "700",
                              color: "var(--text-primary)",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "var(--text-body)",
                            lineHeight: "1.55",
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                        {item.example && (
                          <p
                            style={{
                              fontSize: "11.5px",
                              color: "var(--text-secondary)",
                              fontStyle: "italic",
                              lineHeight: "1.5",
                              marginTop: "8px",
                              marginBottom: 0,
                              paddingLeft: "10px",
                              borderLeft: `2px solid ${activeComponent.color}50`,
                            }}
                          >
                            {item.example}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Decision engine */}
                  <h4
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--text-tag)",
                      marginBottom: "14px",
                    }}
                  >
                    {activeComponent.strategy.decisionEngine.title}
                  </h4>

                  <div
                    style={{
                      padding: "16px 18px",
                      background: `linear-gradient(135deg, ${activeComponent.color}12, transparent 70%)`,
                      border: `1px solid ${activeComponent.color}35`,
                      borderRadius: "14px",
                      marginBottom: "18px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12.5px",
                        fontWeight: "700",
                        color: activeComponent.color,
                        margin: 0,
                        textAlign: "center",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {activeComponent.strategy.decisionEngine.formula}
                    </p>
                  </div>

                  {/* Decision examples */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {activeComponent.strategy.decisionEngine.examples.map((ex) => (
                      <div
                        key={ex.level}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                          padding: "10px 14px",
                          background: "var(--bg-input)",
                          border: "1px solid var(--border-input)",
                          borderRadius: "10px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: ex.color,
                              boxShadow: `0 0 8px ${ex.color}80`,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "var(--text-primary)",
                            }}
                          >
                            {ex.level}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: "12.5px",
                            fontWeight: "600",
                            color: ex.color,
                          }}
                        >
                          → {ex.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="comp-detail-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "28px",
                }}
              >
                {/* Key Functionality */}
                <div>
                  <h4
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: activeComponent.color,
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: activeComponent.color,
                        display: "inline-block",
                        boxShadow: `0 0 10px ${activeComponent.color}`,
                      }}
                    />
                    Key Functionality
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {activeComponent.functionality.map((fn) => (
                      <li key={fn} className="functionality-item">
                        <span
                          style={{
                            color: activeComponent.color,
                            marginTop: "2px",
                            flexShrink: 0,
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          →
                        </span>
                        {fn}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <h4
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--text-tag)",
                      marginTop: "22px",
                      marginBottom: "14px",
                    }}
                  >
                    Tech Stack
                  </h4>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {activeComponent.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team & Contribution */}
                <div>
                  <h4
                    className="contribution-heading"
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      className="contribution-dot"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        display: "inline-block",
                      }}
                    />
                    Team Contribution
                  </h4>
                  <div className="contribution-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${activeComponent.color}30, ${activeComponent.color}15)`,
                          border: `1px solid ${activeComponent.color}45`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        👤
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>
                          {activeComponent.member}
                        </div>
                        <div style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "2px" }}>
                          Component Developer
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: "1.7" }}>
                      {activeComponent.contribution}
                    </p>
                  </div>

                  {activeComponent.github && (
                    <a
                      href={activeComponent.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ marginTop: "16px", display: "inline-flex" }}
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.1 18 6.4 18 6.4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                      </svg>
                      View Repository
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── FIXED FOOTER ── */}
            <div
              style={{
                flexShrink: 0,
                padding: "14px 24px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-tertiary)",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setOpenId(null)}
                style={{
                  padding: "8px 18px",
                  background: "transparent",
                  border: "1px solid var(--border-input)",
                  borderRadius: "10px",
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                className="modal-footer-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────
         Scoped styles
      ───────────────────────────────────────────── */}
      <style>{`
        /* ============================================
           HORIZONTAL CARD GRID (2 columns on desktop)
        ============================================ */
        .components-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        /* Base component card — theme aware */
        .component-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
        }
        .component-card.component-card-hovered:not(.component-card-highlight) {
          background: var(--bg-card-hover);
          cursor: pointer;
        }

        /* ✅ DARK THEME: stronger card visibility */
        :root:not(.light) .component-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.10);
        }
        :root:not(.light) .component-card.component-card-hovered:not(.component-card-highlight) {
          background: rgba(255, 255, 255, 0.08);
        }

        /* ✅ LIGHT theme */
        .light .component-card {
          background: #FFFFFF;
          border-color: rgba(15, 23, 42, 0.08);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        }
        .light .component-card.component-card-hovered {
          background: #FFFFFF;
        }

        /* View Details button */
        .view-details-btn:hover {
          transform: translateX(2px);
          filter: brightness(1.15);
        }
        .light .view-details-btn:hover {
          filter: brightness(0.95);
        }

        /* Tech tag */
        .tech-tag {
          padding: 5px 12px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          border-radius: 8px;
          font-size: 12px;
          color: var(--text-tag);
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .tech-tag:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .light .tech-tag {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }
        .tech-tag-more {
          font-weight: 700;
          opacity: 0.85;
        }

        /* Functionality list item */
        .functionality-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 14px;
          color: var(--text-body);
          line-height: 1.55;
          transition: all 0.2s ease;
        }
        .functionality-item:last-child {
          border-bottom: none;
        }
        .functionality-item:hover {
          padding-left: 4px;
        }

        /* Team contribution heading */
        .contribution-heading { color: var(--text-tag); }
        .contribution-dot { background: var(--text-tag); }

        /* Team contribution card */
        .contribution-card {
          padding: 20px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          border-radius: 16px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }
        .light .contribution-card {
          background: rgba(0,0,0,0.03);
          border-color: rgba(0,0,0,0.10);
        }

        /* Ecosystem pill */
        .ecosystem-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* ============================================
           MODAL ANIMATIONS
        ============================================ */
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Modal body scrollbar */
        .modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: var(--border-input);
          border-radius: 3px;
        }
        .modal-body::-webkit-scrollbar-thumb:hover {
          background: var(--text-muted);
        }

        /* Close button hover */
        .modal-close:hover {
          background: rgba(220, 38, 38, 0.9) !important;
          transform: rotate(90deg);
          border-color: rgba(220, 38, 38, 1) !important;
        }

        /* Footer button hover */
        .modal-footer-btn:hover {
          background: var(--bg-input);
          color: var(--text-primary);
          border-color: var(--border-input-hover);
        }

        /* ============================================
           RESPONSIVE
        ============================================ */
        @media (max-width: 900px) {
          .components-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .comp-detail-grid { grid-template-columns: 1fr !important; }
          .component-card img { height: 140px !important; }
          .modal-body { padding: 22px !important; }
        }
      `}</style>
    </div>
  );
}