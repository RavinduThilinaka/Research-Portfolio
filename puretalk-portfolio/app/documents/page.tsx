"use client";
import ScrollReveal from "@/components/ScrollReveal";

const documents = [
  {
    icon: "📜",
    title: "Project Charter",
    desc: "Formal project charter authorising the PureTalk initiative — defining purpose, scope, stakeholders, deliverables, and success criteria.",
    type: "Charter",
    version: "v1.0",
    date: "2024",
    color: "#3B82F6",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80",
    available: false,
  },
  {
    icon: "📋",
    title: "Proposal Document",
    desc: "Detailed project proposal outlining research objectives, methodology, timelines, resource requirements, and expected outcomes of PureTalk.",
    type: "Proposal",
    version: "v1.0",
    date: "2024",
    color: "#22D3EE",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop&q=80",
    available: false,
  },
  {
    icon: "✅",
    title: "Check List Documents",
    desc: "Structured checklists tracking project milestones, deliverable reviews, quality gates, and completion status across all phases.",
    type: "Checklist",
    version: "Collection",
    date: "2024",
    color: "#34D399",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop&q=80",
    available: false,
  },
  {
    icon: "🔬",
    title: "Research Paper",
    desc: "Peer-review ready research paper presenting the PureTalk approach, methodology, experiments, results, and comparison with existing systems.",
    type: "Paper",
    version: "Draft",
    date: "2024",
    color: "#FBBF24",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&h=500&fit=crop&q=80",
    available: false,
  },
  {
    icon: "📓",
    title: "Log Books",
    desc: "Chronological log books capturing weekly progress, meeting notes, decisions, and individual team member contributions throughout the project.",
    type: "Logbook",
    version: "Collection",
    date: "2024",
    color: "#A78BFA",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop&q=80",
    available: false,
  },
  {
    icon: "📄",
    title: "Draft Final Report",
    desc: "Comprehensive draft final report summarising the PureTalk system, its components, implementation results, and recommendations for future work.",
    type: "Report",
    version: "Draft",
    date: "2024",
    color: "#F472B6",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&q=80",
    available: false,
  },
];

const stats = [
  { label: "Total Documents", value: "06", color: "#3B82F6", icon: "📚" },
  { label: "Categories", value: "06", color: "#A78BFA", icon: "🗂️" },
  { label: "Available Now", value: "00", color: "#34D399", icon: "✅" },
  { label: "In Progress", value: "06", color: "#FBBF24", icon: "⏳" },
];

export default function DocumentsPage() {
  return (
    <div
      className="documents-page"
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
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
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
                  backgroundImage: "linear-gradient(90deg, #3B82F6, #A78BFA, #34D399)",
                  borderRadius: "2px",
                }}
              />
              <p className="library-label">Academic Library</p>
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
              Project <span className="text-gradient">Documents</span>
            </h1>
            <p
              style={{
                maxWidth: "680px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              A curated library of academic and technical documents produced throughout the
              PureTalk research project. Documents will be made available as they are
              completed.
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

      {/* Documents Grid */}
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
                  All Documents
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
                  {documents.length} items
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
                    background: "#FBBF24",
                    display: "inline-block",
                    boxShadow: "0 0 8px #FBBF24",
                  }}
                />
                All documents currently in progress
              </div>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="docs-grid"
          >
            {documents.map((doc, i) => (
              <ScrollReveal key={doc.title} delay={i * 80}>
                <div
                  className="doc-card"
                  style={{
                    ["--doc-color" as any]: doc.color,
                    borderRadius: "22px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Image banner */}
                  <div
                    style={{
                      position: "relative",
                      height: "150px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.title}
                      loading="lazy"
                      className="doc-card-image"
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
                        backgroundImage: `linear-gradient(135deg, ${doc.color}80, ${doc.color}30 50%, transparent)`,
                        mixBlendMode: "multiply",
                      }}
                    />
                    {/* Bottom gradient for text */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 30%, rgba(0,0,0,0.55) 100%)",
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
                      {doc.type}
                    </span>
                    {/* Icon — bottom left */}
                    <div
                      className="doc-card-icon"
                      style={{
                        position: "absolute",
                        bottom: "14px",
                        left: "16px",
                        width: "46px",
                        height: "46px",
                        borderRadius: "13px",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "21px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                      }}
                    >
                      {doc.icon}
                    </div>
                    {/* Status badge — bottom right */}
                    <div
                      className="doc-status-badge"
                      style={{
                        position: "absolute",
                        bottom: "14px",
                        right: "14px",
                        padding: "5px 10px",
                        background: doc.available
                          ? "rgba(16,185,129,0.85)"
                          : "rgba(251,191,36,0.85)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        borderRadius: "100px",
                        fontSize: "10px",
                        fontWeight: "700",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        letterSpacing: "0.4px",
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
                      {doc.available ? "Available" : "Coming Soon"}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "22px 22px 24px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        marginBottom: "10px",
                        lineHeight: "1.35",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {doc.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-body)",
                        lineHeight: "1.7",
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {doc.desc}
                    </p>

                    {/* Meta chips */}
                    <div
                      className="doc-meta"
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "20px",
                        paddingTop: "16px",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <span className="doc-meta-chip">
                        <span style={{ opacity: 0.6, marginRight: "4px" }}>◆</span>
                        {doc.version}
                      </span>
                      <span className="doc-meta-chip">
                        <span style={{ opacity: 0.6, marginRight: "4px" }}>📅</span>
                        {doc.date}
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                      {/* ---------- VIEW BUTTON ---------- */}
                      <button
                        type="button"
                        className="doc-btn doc-btn-view"
                        style={{
                          ["--btn-color" as any]: doc.color,
                        }}
                        aria-label={`View ${doc.title}`}
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
                        View
                      </button>

                      {/* ---------- DOWNLOAD BUTTON ---------- */}
                      <button
                        type="button"
                        className="doc-btn doc-btn-download"
                        style={{
                          ["--btn-color" as any]: doc.color,
                        }}
                        aria-label={`Download ${doc.title}`}
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

                    {/* Info notice */}
                    <div className="doc-info-notice">
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8h.01M11 12h1v4h1"
                        />
                      </svg>
                      <span style={{ fontSize: "11px", lineHeight: "1.4", fontWeight: "500" }}>
                        Available when completed
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Gradient text label */
        .library-label {
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
        .doc-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          cursor: pointer;
        }
        .doc-card:hover {
          background: var(--bg-card-hover);
          border-color: color-mix(in srgb, var(--doc-color) 55%, transparent);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px color-mix(in srgb, var(--doc-color) 22%, transparent),
                      0 0 0 1px color-mix(in srgb, var(--doc-color) 30%, transparent);
        }
        .doc-card:hover .doc-card-image {
          transform: scale(1.1);
        }
        .doc-card:hover .doc-card-icon {
          transform: scale(1.1) rotate(-6deg);
          background: rgba(255,255,255,0.25);
        }

        /* Stat card hover */
        .stat-card { cursor: pointer; }
        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
          border-color: var(--border-input);
        }

        /* Meta chips */
        .doc-meta-chip {
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
        .light .doc-meta-chip {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }

        /* Divider above meta */
        .doc-meta { border-top: 1px solid var(--border-subtle); }

        /* ---------- Action buttons (base) ---------- */
        .doc-btn {
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
        .doc-btn:active { transform: scale(0.97); }

        /* ---------- VIEW button ---------- */
        .doc-btn-view {
          background: color-mix(in srgb, var(--btn-color) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--btn-color) 42%, transparent);
          color: var(--btn-color);
        }
        .doc-btn-view:hover {
          background: color-mix(in srgb, var(--btn-color) 22%, transparent);
          border-color: color-mix(in srgb, var(--btn-color) 70%, transparent);
          box-shadow: 0 6px 18px color-mix(in srgb, var(--btn-color) 28%, transparent);
          transform: translateY(-1px);
        }
        .light .doc-btn-view {
          background: color-mix(in srgb, var(--btn-color) 10%, transparent);
        }
        .light .doc-btn-view:hover {
          background: color-mix(in srgb, var(--btn-color) 18%, transparent);
        }

        /* ---------- DOWNLOAD button ---------- */
        .doc-btn-download {
          background: linear-gradient(
            135deg,
            var(--btn-color) 0%,
            color-mix(in srgb, var(--btn-color) 70%, #000) 100%
          );
          border: 1px solid color-mix(in srgb, var(--btn-color) 80%, transparent);
          color: #fff;
          text-shadow: 0 1px 1px rgba(0,0,0,0.15);
        }
        .doc-btn-download:hover {
          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--btn-color) 90%, #fff) 0%,
            var(--btn-color) 100%
          );
          box-shadow: 0 8px 22px color-mix(in srgb, var(--btn-color) 45%, transparent);
          transform: translateY(-1px);
        }
        .light .doc-btn-download {
          box-shadow: 0 4px 14px color-mix(in srgb, var(--btn-color) 32%, transparent);
        }

        /* ---------- Info notice ---------- */
        .doc-info-notice {
          margin-top: 12px;
          padding: 10px 12px;
          background: color-mix(in srgb, var(--doc-color) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--doc-color) 25%, transparent);
          border-radius: 9px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-tag);
          transition: background 0.35s ease, border-color 0.35s ease;
        }
        .doc-info-notice svg {
          color: var(--doc-color);
          flex-shrink: 0;
        }
        .light .doc-info-notice {
          color: #475569;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .docs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .docs-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .doc-card-image { height: 130px !important; }
        }
        @media (max-width: 380px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}