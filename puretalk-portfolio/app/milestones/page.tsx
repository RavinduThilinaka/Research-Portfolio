"use client";
import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  {
    phase: "Phase 01",
    title: "Project Proposal",
    desc: "Initial proposal defining the research scope, objectives, methodology, and expected contributions of the PureTalk project.",
    status: "Completed",
    date: "[Project Date]",
    doc: "Project Proposal Document",
    color: "#34D399",
  },
  {
    phase: "Phase 02",
    title: "Literature Review",
    desc: "Comprehensive review of existing research in toxicity detection, content moderation, behavioural analysis, and explainable AI.",
    status: "Completed",
    date: "[Project Date]",
    doc: "Literature Review Report",
    color: "#34D399",
  },
  {
    phase: "Phase 03",
    title: "Requirement Analysis",
    desc: "Identification and documentation of functional and non-functional system requirements for all PureTalk components.",
    status: "Completed",
    date: "[Project Date]",
    doc: "Requirements Specification",
    color: "#34D399",
  },
  {
    phase: "Phase 04",
    title: "System Design",
    desc: "Architecture design, component diagrams, data flow models, and interface design for the integrated PureTalk platform.",
    status: "Completed",
    date: "[Project Date]",
    doc: "System Design Document",
    color: "#34D399",
  },
  {
    phase: "Phase 05",
    title: "Component Development",
    desc: "Individual development of each research component by designated team members: toxicity detection, behaviour analysis, adaptive enforcement, and XAI.",
    status: "In Progress",
    date: "[Project Date]",
    doc: null,
    color: "#3B82F6",
  },
  {
    phase: "Phase 06",
    title: "Integration",
    desc: "Integration of all individual components into a unified PureTalk platform with shared API interfaces and data pipelines.",
    status: "In Progress",
    date: "[Project Date]",
    doc: null,
    color: "#3B82F6",
  },
  {
    phase: "Phase 07",
    title: "Testing",
    desc: "Unit testing, integration testing, and system testing of all components to ensure correctness, performance, and reliability.",
    status: "Pending",
    date: "[Project Date]",
    doc: null,
    color: "#94A3B8",
  },
  {
    phase: "Phase 08",
    title: "Evaluation",
    desc: "Performance evaluation using accuracy, precision, recall, F1-score, and comparison against baseline systems.",
    status: "Pending",
    date: "[Project Date]",
    doc: null,
    color: "#94A3B8",
  },
  {
    phase: "Phase 09",
    title: "Documentation",
    desc: "Final technical documentation including the dissertation, research paper, poster, and supplementary materials.",
    status: "Pending",
    date: "[Project Date]",
    doc: null,
    color: "#94A3B8",
  },
  {
    phase: "Phase 10",
    title: "Final Presentation",
    desc: "Final presentation of the PureTalk research project to academic supervisors, examiners, and stakeholders.",
    status: "Pending",
    date: "[Project Date]",
    doc: null,
    color: "#94A3B8",
  },
];

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Completed: {
    bg: "rgba(52,211,153,0.18)",
    text: "#34D399",
    border: "rgba(52,211,153,0.45)",
  },
  "In Progress": {
    bg: "rgba(59,130,246,0.18)",
    text: "#60A5FA",
    border: "rgba(59,130,246,0.45)",
  },
  Pending: {
    bg: "rgba(148,163,184,0.15)",
    text: "#CBD5E1",
    border: "rgba(148,163,184,0.35)",
  },
};

export default function MilestonesPage() {
  return (
    <div
      className="milestones-page"
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
          top: "40%",
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

      {/* Header */}
      <section style={{ padding: "80px 0 60px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "linear-gradient(90deg, #3B82F6, #A78BFA)",
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
                  background: "linear-gradient(90deg, #60A5FA, #C4B5FD)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="timeline-label"
              >
                Project Timeline
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
              Research{" "}
              <span className="text-gradient">Milestones</span>
            </h1>
            <p
              style={{
                maxWidth: "640px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              A structured timeline tracking the progress of the PureTalk research project from
              initial proposal through to final presentation.
            </p>
          </ScrollReveal>

          {/* Progress indicators */}
          <ScrollReveal delay={200}>
            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "40px",
                flexWrap: "wrap",
                padding: "20px 24px",
                background: "var(--bg-card-subtle)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                transition: "background 0.35s ease, border-color 0.35s ease",
              }}
            >
              {Object.entries(statusColors).map(([status, colors]) => (
                <div
                  key={status}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: colors.text,
                      boxShadow: `0 0 12px ${colors.text}60`,
                    }}
                  />
                  <span
                    className="status-count-label"
                    style={{
                      fontSize: "13px",
                      color: "var(--text-tag)",
                      fontWeight: "600",
                    }}
                  >
                    {status}{" "}
                    <span style={{ color: colors.text, fontWeight: "700" }}>
                      ({milestones.filter((m) => m.status === status).length})
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "0 0 100px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "0",
                bottom: "0",
                width: "2px",
                background:
                  "linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(167,139,250,0.5), rgba(148,163,184,0.2))",
                transform: "translateX(-50%)",
                borderRadius: "1px",
              }}
              className="timeline-line"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                const sc = statusColors[m.status];
                return (
                  <ScrollReveal key={m.phase} delay={i * 60}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 60px 1fr",
                        alignItems: "center",
                        marginBottom: "32px",
                        position: "relative",
                      }}
                      className="timeline-item"
                    >
                      {/* Left side */}
                      <div style={{ textAlign: "right", paddingRight: "32px" }}>
                        {isLeft ? <TimelineCard milestone={m} sc={sc} /> : <div />}
                      </div>

                      {/* Center dot */}
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div
                          className="timeline-dot"
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: `${m.color}25`,
                            border: `2px solid ${m.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: "800",
                            color: m.color,
                            flexShrink: 0,
                            zIndex: 1,
                            position: "relative",
                            boxShadow: `0 0 0 6px var(--bg-primary), 0 0 20px ${m.color}40`,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Right side */}
                      <div style={{ paddingLeft: "32px" }}>
                        {!isLeft ? <TimelineCard milestone={m} sc={sc} /> : <div />}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Timeline card hover — theme aware */
        .timeline-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          cursor: pointer; /* 👈 hand cursor */
        }
        .timeline-card:hover {
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          cursor: pointer; /* 👈 hand cursor on hover */
        }

        /* Date / doc chips */
        .date-chip {
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          color: var(--text-tag);
        }
        .light .date-chip {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }

        .doc-chip {
          background: rgba(96,165,250,0.12);
          border: 1px solid rgba(96,165,250,0.30);
          color: #60A5FA;
        }
        .light .doc-chip {
          background: rgba(37,99,235,0.10);
          border-color: rgba(37,99,235,0.28);
          color: #2563EB;
        }

        /* Pending badge in light theme — darker text for contrast */
        .light .status-count-label .badge-pending {
          color: #64748B;
        }

        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .timeline-item {
            grid-template-columns: 40px 1fr !important;
            align-items: start !important;
          }
          .timeline-item > div:last-child,
          .timeline-item > div:first-child {
            display: none !important;
          }
          .timeline-item > div:nth-child(2) { order: 1; }
        }
      `}</style>
    </div>
  );
}

function TimelineCard({
  milestone,
  sc,
}: {
  milestone: (typeof milestones)[0];
  sc: { bg: string; text: string; border: string };
}) {
  // Adapt "Pending" badge for light theme (gray on white needs darker text)
  const isPending = milestone.status === "Pending";
  const badgeBg = isPending ? "rgba(148,163,184,0.18)" : sc.bg;
  const badgeText = isPending ? "#64748B" : sc.text;
  const badgeBorder = isPending ? "rgba(100,116,139,0.35)" : sc.border;

  return (
    <div
      className="timeline-card"
      style={{
        padding: "24px",
        borderRadius: "16px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "12px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: milestone.color,
          }}
        >
          {milestone.phase}
        </span>
        <span
          style={{
            padding: "4px 12px",
            borderRadius: "100px",
            fontSize: "11px",
            fontWeight: "700",
            background: badgeBg,
            color: badgeText,
            border: `1px solid ${badgeBorder}`,
            letterSpacing: "0.3px",
          }}
        >
          {milestone.status}
        </span>
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "700",
          color: "var(--text-primary)",
          marginBottom: "10px",
          lineHeight: "1.35",
        }}
      >
        {milestone.title}
      </h3>
      <p style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: "1.7", marginBottom: "14px" }}>
        {milestone.desc}
      </p>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <span
          className="date-chip"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 10px",
            borderRadius: "6px",
            fontWeight: "500",
          }}
        >
          📅 {milestone.date}
        </span>
        {milestone.doc && (
          <span
            className="doc-chip"
            style={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 10px",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            📄 {milestone.doc}
          </span>
        )}
      </div>
    </div>
  );
}