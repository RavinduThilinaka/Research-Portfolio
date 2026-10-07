"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const presentations = [
  {
    id: "proposal",
    number: "01",
    title: "Proposal Presentation",
    desc: "Initial project presentation covering the research problem, proposed approach, objectives, methodology, and expected outcomes of the PureTalk project.",
    type: "Proposal",
    date: "2024",
    slides: "24 Slides",
    color: "#2563EB",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80",
    available: false,
    viewUrl: null as string | null,
  },
  {
    id: "progress",
    number: "02",
    title: "Progress Presentation",
    desc: "Mid-project progress presentation showcasing completed milestones, preliminary results, current system status, and upcoming development phases.",
    type: "Progress",
    date: "2024",
    slides: "32 Slides",
    color: "#00D6FF",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&h=600&fit=crop&q=80",
    available: false,
    viewUrl: null as string | null,
  },
  {
    id: "research",
    number: "03",
    title: "Research Presentation",
    desc: "Focused research presentation covering literature findings, research gap analysis, methodology, and the theoretical foundation of the PureTalk approach.",
    type: "Research",
    date: "2024",
    slides: "28 Slides",
    color: "#7C3AED",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1000&h=600&fit=crop&q=80",
    available: false,
    viewUrl: null as string | null,
  },
  {
    id: "final",
    number: "04",
    title: "Final Presentation",
    desc: "Comprehensive final project presentation demonstrating the complete PureTalk platform, evaluation results, team contributions, and research conclusions.",
    type: "Final",
    date: "2024",
    slides: "40 Slides",
    color: "#10B981",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000&h=600&fit=crop&q=80",
    available: false,
    viewUrl: null as string | null,
  },
];

const stats = [
  { label: "Total Presentations", value: "04", color: "#2563EB", icon: "🎤" },
  { label: "Total Slides", value: "124", color: "#7C3AED", icon: "📑" },
  { label: "Delivered", value: "00", color: "#10B981", icon: "✅" },
  { label: "Upcoming", value: "04", color: "#00D6FF", icon: "⏳" },
];

export default function PresentationsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const activePresentation =
    presentations.find((p) => p.id === openId) || null;

  /* Lock body scroll when modal is open */
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

  /* Handle View button click */
  const handleView = (pres: (typeof presentations)[number]) => {
    if (!pres.available) {
      setOpenId(pres.id);
      return;
    }
    if (pres.viewUrl) {
      window.open(pres.viewUrl, "_blank", "noopener,noreferrer");
    } else {
      setOpenId(pres.id);
    }
  };

  /* Handle Download button click */
  const handleDownload = (pres: (typeof presentations)[number]) => {
    if (!pres.available) return;
    // Hook up real download later
  };

  return (
    <div
      className="presentations-page"
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
          top: "8%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "35%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "35%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(80px)",
        }}
      />

      {/* Header */}
      <section style={{ padding: "80px 0 40px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundImage: "linear-gradient(90deg, #2563EB, #7C3AED, #10B981)",
                  borderRadius: "2px",
                }}
              />
              <p className="presentation-label">Academic Presentations</p>
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
              Project <span className="text-gradient">Presentations</span>
            </h1>
            <p
              style={{
                maxWidth: "680px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              PureTalk presentations delivered throughout the research lifecycle — from initial
              proposal to final demonstration of the complete system.
            </p>
          </ScrollReveal>

          {/* Stats Overview */}
          <ScrollReveal delay={200}>
            <div
              className="stats-grid"
              style={{
                marginTop: "48px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card"
                  style={{
                    padding: "20px 22px",
                    background: "var(--bg-card-subtle)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundImage: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                      opacity: 0.6,
                    }}
                  />
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${stat.color}18`,
                      border: `1px solid ${stat.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "800",
                        color: stat.color,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                        marginTop: "6px",
                        fontWeight: "500",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Presentation Cards */}
      <section style={{ padding: "40px 0 100px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal delay={100}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "28px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  All Presentations
                </h2>
                <span
                  style={{
                    padding: "3px 10px",
                    background: "var(--bg-input)",
                    border: "1px solid var(--border-input)",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "var(--text-tag)",
                  }}
                >
                  {presentations.length} items
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00D6FF",
                    display: "inline-block",
                    boxShadow: "0 0 8px #00D6FF",
                  }}
                />
                All presentations currently in progress
              </div>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="pres-grid"
          >
            {presentations.map((pres, i) => (
              <ScrollReveal key={pres.id} delay={i * 100}>
                <div
                  className="pres-card"
                  style={{
                    ["--pres-color" as any]: pres.color,
                    borderRadius: "22px",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {/* Image thumbnail */}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={pres.image}
                      alt={pres.title}
                      loading="lazy"
                      className="pres-card-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    {/* Color overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `linear-gradient(135deg, ${pres.color}90, ${pres.color}40 50%, transparent)`,
                        mixBlendMode: "multiply",
                      }}
                    />
                    {/* Dark gradient for content readability */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 35%, rgba(0,0,0,0.75) 100%)",
                      }}
                    />

                    {/* Type badge — top right */}
                    <span
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        padding: "5px 12px",
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        borderRadius: "100px",
                        fontSize: "10px",
                        fontWeight: "700",
                        color: "#fff",
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      {pres.type}
                    </span>

                    {/* Slide number — top left */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        padding: "5px 12px",
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "100px",
                        fontSize: "11px",
                        fontWeight: "800",
                        color: "#fff",
                        letterSpacing: "1px",
                      }}
                    >
                      {pres.number}
                      <span style={{ opacity: 0.5 }}>
                        /{presentations.length.toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Bottom-left: Icon + title overlay */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "16px",
                        right: "16px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        className="pres-card-icon"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "13px",
                          background: "rgba(255,255,255,0.18)",
                          backdropFilter: "blur(16px)",
                          WebkitBackdropFilter: "blur(16px)",
                          border: "1px solid rgba(255,255,255,0.28)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          flexShrink: 0,
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                        }}
                      >
                        {pres.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#fff",
                            lineHeight: "1.3",
                            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                          }}
                        >
                          {pres.title}
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "rgba(255,255,255,0.75)",
                            marginTop: "2px",
                            fontWeight: "500",
                          }}
                        >
                          Research Presentation
                        </div>
                      </div>
                    </div>

                    {/* Coming Soon badge — replaces lock ribbon */}
                    {!pres.available && (
                      <div
                        className="pres-status-badge"
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          right: "16px",
                          padding: "5px 11px",
                          background: "rgba(251,191,36,0.85)",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.25)",
                          borderRadius: "100px",
                          fontSize: "10px",
                          fontWeight: "700",
                          color: "#fff",
                          letterSpacing: "0.4px",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#fff",
                            boxShadow: "0 0 6px rgba(255,255,255,0.9)",
                          }}
                        />
                        Coming Soon
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div
                    style={{
                      padding: "22px 22px 24px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-body)",
                        lineHeight: "1.7",
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {pres.desc}
                    </p>

                    {/* Meta chips */}
                    <div
                      className="pres-meta"
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "20px",
                        paddingTop: "16px",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <span className="pres-meta-chip">
                        <span style={{ opacity: 0.6, marginRight: "4px" }}>📅</span>
                        {pres.date}
                      </span>
                      <span className="pres-meta-chip">
                        <span style={{ opacity: 0.6, marginRight: "4px" }}>📑</span>
                        {pres.slides}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                      {/* ---------- VIEW BUTTON (colored like documents page) ---------- */}
                      <button
                        type="button"
                        onClick={() => handleView(pres)}
                        className="pres-btn pres-btn-view"
                        style={{
                          ["--btn-color" as any]: pres.color,
                        }}
                        aria-label={`View ${pres.title}`}
                      >
                        <svg
                          width="13"
                          height="13"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {pres.available ? "View" : "Preview"}
                      </button>

                      {/* ---------- DOWNLOAD BUTTON (solid gradient) ---------- */}
                      <button
                        type="button"
                        onClick={() => handleDownload(pres)}
                        disabled={!pres.available}
                        className="pres-btn pres-btn-download"
                        style={{
                          ["--btn-color" as any]: pres.color,
                        }}
                        aria-label={`Download ${pres.title}`}
                        title={
                          pres.available
                            ? "Download slides"
                            : "Download not available yet"
                        }
                      >
                        <svg
                          width="13"
                          height="13"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
         PRESENTATION MODAL
      ───────────────────────────────────────────── */}
      {activePresentation && (
        <div
          className="pres-modal-overlay"
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
            animation: "presModalFadeIn 0.25s ease",
          }}
        >
          <div
            className="pres-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "640px",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px ${activePresentation.color}30`,
              animation: "presModalSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Header image */}
            <div
              style={{
                position: "relative",
                height: "180px",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={activePresentation.image}
                alt={activePresentation.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `linear-gradient(135deg, ${activePresentation.color}80, ${activePresentation.color}30 50%, transparent)`,
                  mixBlendMode: "multiply",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)",
                }}
              />

              {/* Close button */}
              <button
                className="pres-modal-close"
                onClick={() => setOpenId(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#1E293B",
                  border: "none",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "400",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.25s ease",
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
                  left: "22px",
                  right: "22px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
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
                  {activePresentation.icon}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                      fontWeight: "700",
                      color: "#fff",
                      lineHeight: "1.25",
                      textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                      margin: 0,
                    }}
                  >
                    {activePresentation.title}
                  </h2>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.8)",
                      marginTop: "4px",
                      fontWeight: "500",
                    }}
                  >
                    {activePresentation.type} · {activePresentation.date} ·{" "}
                    {activePresentation.slides}
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div
              className="pres-modal-body"
              style={{
                padding: "26px 28px",
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
                  marginBottom: "20px",
                }}
              >
                {activePresentation.desc}
              </p>

              {!activePresentation.available ? (
                <div
                  className="pres-modal-info"
                  style={{
                    padding: "20px",
                    background: `color-mix(in srgb, ${activePresentation.color} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${activePresentation.color} 30%, transparent)`,
                    borderRadius: "14px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>⏳</div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                    }}
                  >
                    Coming Soon
                  </div>
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    This presentation is still being finalised and will be
                    available here once it's delivered.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    padding: "16px",
                    background: `${activePresentation.color}12`,
                    border: `1px solid ${activePresentation.color}35`,
                    borderRadius: "12px",
                    fontSize: "13px",
                    color: "var(--text-body)",
                    lineHeight: "1.6",
                  }}
                >
                  ✅ Presentation is available. Click the button below to open
                  the slides.
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                flexShrink: 0,
                padding: "14px 22px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-tertiary)",
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              {activePresentation.available && activePresentation.viewUrl && (
                <a
                  href={activePresentation.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "8px 18px",
                    background: "#3B82F6",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "opacity 0.25s ease",
                  }}
                >
                  Open Slides
                  <svg
                    width="12"
                    height="12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              <button
                onClick={() => setOpenId(null)}
                className="pres-modal-footer-btn"
                style={{
                  padding: "8px 18px",
                  background: "#334155",
                  border: "none",
                  borderRadius: "10px",
                  color: "#E2E8F0",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.25s ease",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Gradient text label */
        .presentation-label {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          background-image: linear-gradient(90deg, #60A5FA, #C4B5FD, #6EE7B7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        /* Card base */
        .pres-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          cursor: pointer;
        }
        .pres-card:hover {
          background: var(--bg-card-hover);
          border-color: color-mix(in srgb, var(--pres-color) 55%, transparent);
          transform: translateY(-6px);
        }
        .pres-card:hover .pres-card-image {
          transform: scale(1.08);
        }
        .pres-card:hover .pres-card-icon {
          transform: scale(1.1) rotate(-5deg);
          background: rgba(255,255,255,0.25);
        }

        /* Stat card hover */
        .stat-card { cursor: pointer; }
        .stat-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-input);
        }

        /* Meta chips */
        .pres-meta-chip {
          font-size: 11px;
          color: var(--text-tag);
          padding: 4px 10px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          border-radius: 6px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          letter-spacing: 0.02em;
        }
        .light .pres-meta-chip {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }

        /* Meta divider */
        .pres-meta {
          border-top: 1px solid var(--border-subtle);
        }

        /* ---------- Action buttons (base) ---------- */
        .pres-btn {
          flex: 1;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          letter-spacing: 0.02em;
          transition: transform 0.18s ease, box-shadow 0.22s ease,
                      background 0.22s ease, border-color 0.22s ease, color 0.22s ease;
        }
        .pres-btn:active { transform: scale(0.97); }

        /* ---------- VIEW button — tinted with card color ---------- */
        .pres-btn-view {
          background: color-mix(in srgb, var(--btn-color) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--btn-color) 42%, transparent);
          color: var(--btn-color);
        }
        .pres-btn-view:hover {
          background: color-mix(in srgb, var(--btn-color) 22%, transparent);
          border-color: color-mix(in srgb, var(--btn-color) 70%, transparent);
          box-shadow: 0 6px 18px color-mix(in srgb, var(--btn-color) 28%, transparent);
          transform: translateY(-1px);
        }
        .light .pres-btn-view {
          background: color-mix(in srgb, var(--btn-color) 10%, transparent);
        }
        .light .pres-btn-view:hover {
          background: color-mix(in srgb, var(--btn-color) 18%, transparent);
        }

        /* ---------- DOWNLOAD button — solid gradient ---------- */
        .pres-btn-download {
          background: linear-gradient(
            135deg,
            var(--btn-color) 0%,
            color-mix(in srgb, var(--btn-color) 70%, #000) 100%
          );
          border: 1px solid color-mix(in srgb, var(--btn-color) 80%, transparent);
          color: #fff;
          text-shadow: 0 1px 1px rgba(0,0,0,0.15);
        }
        .pres-btn-download:hover:not(:disabled) {
          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--btn-color) 90%, #fff) 0%,
            var(--btn-color) 100%
          );
          box-shadow: 0 8px 22px color-mix(in srgb, var(--btn-color) 45%, transparent);
          transform: translateY(-1px);
        }
        .light .pres-btn-download:not(:disabled) {
          box-shadow: 0 4px 14px color-mix(in srgb, var(--btn-color) 32%, transparent);
        }
        .pres-btn-download:disabled {
          cursor: not-allowed;
          opacity: 0.55;
          filter: saturate(0.7);
        }

        /* ─── Modal animations ─── */
        @keyframes presModalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes presModalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Modal scrollbar */
        .pres-modal-body::-webkit-scrollbar { width: 6px; }
        .pres-modal-body::-webkit-scrollbar-track { background: transparent; }
        .pres-modal-body::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--pres-color) 40%, transparent);
          border-radius: 3px;
        }
        .pres-modal-body::-webkit-scrollbar-thumb:hover {
          background: color-mix(in srgb, var(--pres-color) 65%, transparent);
        }

        /* Modal close hover */
        .pres-modal-close {
          transition: background 0.25s ease;
        }
        .pres-modal-close:hover {
          background: #DC2626 !important;
        }

        /* Modal footer button */
        .pres-modal-footer-btn {
          transition: background 0.25s ease;
        }
        .pres-modal-footer-btn:hover {
          background: #475569 !important;
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .pres-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}