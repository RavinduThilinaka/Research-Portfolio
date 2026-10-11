"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroScrollSequence from "@/components/HeroScrollSequence";

const features = [
  {
    num: "01",
    icon: "🛡️",
    title: "Toxicity Detection & Classification",
    desc: "AI-assisted analysis of user-generated content using advanced NLP models trained on multilingual datasets.",
    accent: "#3B82F6",
  },
  {
    num: "02",
    icon: "🖼️",
    title: "Image Detection & Visual Content Analysis",
    desc: "Computer-vision models detect harmful imagery, symbols and visual hate speech across uploaded media.",
    accent: "#06B6D4",
  },
  {
    num: "03",
    icon: "⚖️",
    title: "Profile-Based Enforcement & Explainable AI",
    desc: "User behaviour and offence history drive adaptive enforcement, with transparent explanations for every decision.",
    accent: "#8B5CF6",
  },
  {
    num: "04",
    icon: "💚",
    title: "Adaptive Emotional Shielding",
    desc: "Real-time emotional state detection shields users from harmful interactions before they escalate.",
    accent: "#10B981",
  },
];

const pipelineSteps = [
  { label: "Client Input", icon: "💬", accent: "#3B82F6" },
  { label: "Toxicity Detection", icon: "🔍", accent: "#06B6D4" },
  { label: "Image Detection", icon: "🖼️", accent: "#8B5CF6" },
  { label: "Behaviour Analysis", icon: "📊", accent: "#F59E0B" },
  { label: "Adaptive Enforcement", icon: "⚖️", accent: "#EC4899" },
  { label: "Explainable Decision", icon: "✅", accent: "#10B981" },
];

const archTags = [
  "Toxicity Detection",
  "Image Detection",
  "Profile-Based Enforcement",
  "Explainable AI",
  "Emotional Shielding",
];

export default function HomePage() {
  const [isLight, setIsLight] = useState(false);
  const [archOpen, setArchOpen] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsLight(document.documentElement.classList.contains("light"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setArchOpen(false);
    };
    if (archOpen) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [archOpen]);

  const t = {
    cardBg: isLight ? "#FFFFFF" : "rgba(255,255,255,0.025)",
    cardBorder: isLight ? "rgba(15,23,42,0.08)" : "rgba(255,255,255,0.07)",
    cardShadow: isLight
      ? "0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)"
      : "none",
    heading: isLight ? "#0B1220" : "#F0F2F5",
    body: isLight ? "#475569" : "#94A3B8",
    muted: isLight ? "#94A3B8" : "#64748B",
    subtleBorder: isLight ? "rgba(15,23,42,0.07)" : "rgba(255,255,255,0.06)",
  };

  return (
    <>
      <HeroScrollSequence />

      {/* ============== FEATURES ============== */}
      <section
        id="features"
        style={{
          padding: "72px 0",
          background: isLight ? "#F8FAFC" : "var(--bg-secondary)",
          position: "relative",
          transition: "background 0.35s ease",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                textAlign: "center",
                maxWidth: "660px",
                margin: "0 auto 44px",
              }}
            >
              <span className="eyebrow">Core Capabilities</span>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: t.heading,
                  margin: "14px 0 14px",
                }}
              >
                What makes PureTalk{" "}
                <span className="text-gradient">different</span>
              </h2>
              <p
                style={{
                  fontSize: "15.5px",
                  lineHeight: 1.65,
                  color: t.body,
                }}
              >
                A multi-component research system designed to address the
                fundamental limitations of conventional online content moderation.
              </p>
            </div>
          </ScrollReveal>

          <div className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <article
                  className="feature-card"
                  style={{
                    background: t.cardBg,
                    border: `1px solid ${t.cardBorder}`,
                    boxShadow: t.cardShadow,
                  }}
                >
                  <span
                    className="feature-accent-line"
                    style={{
                      background: `linear-gradient(90deg, ${f.accent}, ${f.accent}00)`,
                    }}
                  />
                  <span className="feature-num" style={{ color: t.muted }}>
                    {f.num}
                  </span>

                  <div
                    className="feature-icon"
                    style={{
                      background: isLight ? `${f.accent}10` : `${f.accent}14`,
                      border: `1px solid ${f.accent}${isLight ? "30" : "25"}`,
                    }}
                  >
                    {f.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 700,
                      color: t.heading,
                      letterSpacing: "-0.01em",
                      marginBottom: 8,
                      lineHeight: 1.35,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13.5px",
                      lineHeight: 1.6,
                      color: t.body,
                    }}
                  >
                    {f.desc}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ARCHITECTURE ============== */}
      <section
        style={{
          padding: "72px 0",
          background: isLight ? "#FFFFFF" : "var(--bg-primary)",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.35s ease",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: isLight
              ? "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(59,130,246,0.05), transparent)"
              : "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(37,99,235,0.06), transparent)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="arch-grid">
            <ScrollReveal>
              <span className="eyebrow">System Architecture</span>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: t.heading,
                  margin: "14px 0 14px",
                }}
              >
                An integrated{" "}
                <span className="text-gradient">research ecosystem</span>
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.65,
                  color: t.body,
                  marginBottom: 24,
                  maxWidth: 500,
                }}
              >
                PureTalk combines multiple intelligent components into a unified
                platform that processes messages through a sophisticated pipeline
                — from initial toxicity detection to explainable enforcement
                decisions.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                {archTags.map((tag) => (
                  <span
                    key={tag}
                    className="chip"
                    style={{
                      background: isLight ? "#F1F5F9" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${t.subtleBorder}`,
                      color: isLight ? "#334155" : "#CBD5E1",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <Link href="/domain" className="btn-primary">
                  Explore Architecture
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                {/* ===== View Architecture Button ===== */}
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setArchOpen(true)}
                >
                  View Architecture
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 15l4-4a3 3 0 014 0l4 4 M14 13l1-1a3 3 0 014 0l1 1"
                    />
                  </svg>
                </button>
              </div>
            </ScrollReveal>

            {/* ===== Pipeline Timeline (box-free) ===== */}
            <ScrollReveal delay={120}>
              <div
                className="pipeline-timeline"
                style={{
                  background: isLight ? "#F8FAFC" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${t.subtleBorder}`,
                  boxShadow: isLight
                    ? "0 4px 24px rgba(15,23,42,0.05)"
                    : "none",
                }}
              >
                {pipelineSteps.map((step, idx) => {
                  const isLast = idx === pipelineSteps.length - 1;
                  return (
                    <div key={step.label} className="timeline-item">
                      {/* Left rail: dot + line */}
                      <div className="timeline-rail" aria-hidden>
                        <span
                          className="timeline-dot"
                          style={{
                            background: isLight ? "#FFFFFF" : "var(--bg-primary)",
                            borderColor: step.accent,
                            boxShadow: `0 0 0 4px ${step.accent}${isLight ? "15" : "20"
                              }`,
                          }}
                        >
                          <span
                            className="timeline-dot-inner"
                            style={{ background: step.accent }}
                          />
                        </span>
                        {!isLast && (
                          <span
                            className="timeline-line"
                            style={{
                              background: `linear-gradient(to bottom, ${step.accent
                                }50, ${pipelineSteps[idx + 1].accent}30)`,
                            }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="timeline-content">
                        <div className="timeline-head">
                          <span
                            className="timeline-icon"
                            style={{
                              background: `${step.accent}${isLight ? "12" : "18"
                                }`,
                              color: step.accent,
                            }}
                          >
                            {step.icon}
                          </span>
                          <span
                            className="timeline-label"
                            style={{ color: t.heading }}
                          >
                            {step.label}
                          </span>
                          <span
                            className="timeline-index"
                            style={{ color: t.muted }}
                          >
                            0{idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============== TEAM CTA ============== */}
      <section
        style={{
          padding: "72px 0",
          background: isLight ? "#F8FAFC" : "var(--bg-secondary)",
          transition: "background 0.35s ease",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div
              className="cta-panel"
              style={{
                background: isLight
                  ? "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)"
                  : "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.06) 100%)",
                border: `1px solid ${t.subtleBorder}`,
                boxShadow: isLight
                  ? "0 8px 40px rgba(15,23,42,0.06)"
                  : "none",
              }}
            >
              <div
                aria-hidden
                className="cta-grid-pattern"
                style={{
                  backgroundImage: isLight
                    ? "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)"
                    : "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                }}
              />

              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: isLight
                    ? "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)"
                    : "radial-gradient(circle, rgba(124,58,237,0.16), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -80,
                  left: -80,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: isLight
                    ? "radial-gradient(circle, rgba(59,130,246,0.10), transparent 70%)"
                    : "radial-gradient(circle, rgba(37,99,235,0.14), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span className="eyebrow">Meet the Team</span>
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.05rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    color: t.heading,
                    margin: "14px 0 14px",
                  }}
                >
                  Built by a{" "}
                  <span className="text-gradient">dedicated research team</span>
                </h2>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: t.body,
                    maxWidth: 580,
                    margin: "0 auto 28px",
                  }}
                >
                  PureTalk is a collaborative university research project. Each
                  team member contributes a specialised component to the overall
                  PureTalk ecosystem.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/about" className="btn-primary">
                    Meet the Team
                  </Link>
                  <Link href="/components" className="btn-secondary">
                    View Components
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============== ARCHITECTURE MODAL ============== */}
      {archOpen && (
        <div
          className="arch-modal-overlay"
          onClick={() => setArchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Project Architecture"
        >
          <div
            className="arch-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="arch-modal-header">
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: t.heading,
                  letterSpacing: "-0.01em",
                }}
              >
                Project Architecture
              </h3>
              <button
                type="button"
                className="arch-modal-close"
                onClick={() => setArchOpen(false)}
                aria-label="Close"
                style={{
                  background: isLight
                    ? "rgba(15,23,42,0.05)"
                    : "rgba(255,255,255,0.08)",
                  color: t.heading,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="arch-modal-body">
              <img
                src="/images/Architecture.jpeg"
                alt="PureTalk Project Architecture"
                className="arch-modal-image"
              />
            </div>
          </div>
        </div>
      )}

      {/* ============== SCOPED STYLES ============== */}
      <style>{`
        /* ---------- Eyebrow ---------- */
        .eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #3B82F6;
          padding: 5px 11px;
          border-radius: 999px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.18);
        }
        .light .eyebrow {
          color: #1D4ED8;
          background: rgba(29,78,216,0.06);
          border-color: rgba(29,78,216,0.16);
        }

        /* ---------- Feature cards ---------- */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 16px;
        }
        .feature-card {
          position: relative;
          padding: 24px 20px 22px;
          border-radius: 14px;
          height: 100%;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease,
                      border-color 0.28s ease, background 0.28s ease;
        }
        .feature-card:hover {
          transform: translateY(-3px);
        }
        .light .feature-card:hover {
          box-shadow: 0 4px 12px rgba(15,23,42,0.06),
                      0 16px 40px rgba(15,23,42,0.08) !important;
          border-color: rgba(29,78,216,0.22) !important;
        }
        :not(.light) .feature-card:hover {
          box-shadow: 0 12px 40px rgba(0,214,255,0.10),
                      0 0 0 1px rgba(0,214,255,0.10) !important;
          border-color: rgba(0,214,255,0.20) !important;
        }

        .feature-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0.9;
        }

        .feature-num {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-family: 'Inter', monospace;
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 11px;
          font-size: 20px;
          margin-bottom: 16px;
        }

        /* ---------- Chips ---------- */
        .chip {
          display: inline-flex;
          align-items: center;
          height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        /* ---------- Architecture grid ---------- */
        .arch-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 48px;
          align-items: center;
        }

        /* ---------- Pipeline Timeline (box-free) ---------- */
        .pipeline-timeline {
          padding: 28px 24px;
          border-radius: 20px;
          transition: background 0.35s ease, border-color 0.35s ease;
          position: relative;
        }

        .timeline-item {
          display: flex;
          gap: 18px;
          position: relative;
        }

        .timeline-item:not(:last-child) {
          padding-bottom: 4px;
        }

        .timeline-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 6px;
        }

        .timeline-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          transition: transform 0.25s ease;
        }
        .timeline-item:hover .timeline-dot {
          transform: scale(1.15);
        }

        .timeline-dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          min-height: 32px;
          margin: 6px 0;
          border-radius: 1px;
        }

        .timeline-content {
          flex: 1;
          padding: 4px 0 18px;
        }

        .timeline-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .timeline-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          font-size: 17px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .timeline-item:hover .timeline-icon {
          transform: scale(1.06);
        }

        .timeline-label {
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: -0.005em;
        }

        .timeline-index {
          margin-left: auto;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-family: 'Inter', monospace;
          opacity: 0.7;
        }

        /* ---------- CTA panel ---------- */
        .cta-panel {
          position: relative;
          overflow: hidden;
          padding: 48px 32px;
          border-radius: 20px;
          text-align: center;
          transition: background 0.35s ease, border-color 0.35s ease;
        }
        .cta-grid-pattern {
          position: absolute;
          inset: 0;
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
          pointer-events: none;
          opacity: 0.6;
        }

        /* ---------- Architecture Modal ---------- */
        .arch-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: archFadeIn 0.22s ease;
        }
        .light .arch-modal-overlay {
          background: rgba(15, 23, 42, 0.55);
        }

        .arch-modal-content {
          position: relative;
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #0F172A;
          border: 1px solid rgba(255, 255, 255, 0.10);
          box-shadow:
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 24px 80px rgba(0, 0, 0, 0.65);
          animation: archZoomIn 0.26s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .light .arch-modal-content {
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow:
            0 24px 80px rgba(15, 23, 42, 0.18),
            0 4px 16px rgba(15, 23, 42, 0.08);
        }

        .arch-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
        }
        .light .arch-modal-header {
          border-bottom: 1px solid rgba(15, 23, 42, 0.07);
          background: rgba(15, 23, 42, 0.02);
        }

        .arch-modal-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .arch-modal-close:hover {
          transform: scale(1.06);
        }

        .arch-modal-body {
          flex: 1;
          overflow: auto;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
        }
        .light .arch-modal-body {
          background: #F8FAFC;
        }

        .arch-modal-image {
          width: 100%;
          height: auto;
          max-height: 78vh;
          object-fit: contain;
          border-radius: 10px;
          display: block;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: #FFFFFF;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
        }
        .light .arch-modal-image {
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.10);
        }

        @keyframes archFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes archZoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .arch-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr; gap: 12px; }
          .cta-panel { padding: 40px 22px; }
          .pipeline-timeline { padding: 22px 18px; }
          .timeline-label { font-size: 14px; }
          .arch-modal-overlay { padding: 12px; }
          .arch-modal-body { padding: 12px; }
        }
      `}</style>
    </>
  );
}