"use client";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  {
    id: "member1",
    name: "Tharindi W A K",
    role: "Toxicity Detection Researcher",
    component: "Toxicity Detection & Classification",
    contribution:
      "Designed and implemented the NLP-based toxicity detection pipeline using transformer models, enabling accurate classification of harmful online content including text-based toxicity detection.",
    technologies: ["Python", "BERT", "PyTorch", "FastAPI", "Transformers"],
    color: "#3B82F6",
    initials: "TM",
    image: "/images/member1.png",
    github: "#",
    linkedin: "#",
  },
  {
    id: "member2",
    name: "Perera M D S,",
    role: "Image Detection Researcher",
    component: "Image Detection & Visual Content Analysis",
    contribution:
      "Developed the image detection module that identifies harmful visual content using deep learning and computer vision techniques, ensuring multimedia content moderation across the platform.",
    technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "PyTorch"],
    color: "#22D3EE",
    initials: "TM",
    image: "/images/member2.jpeg",
    github: "https://github.com/senu02",
    linkedin: "www.linkedin.com/in/senura-perera-21b26b33a",
  },
  {
    id: "member3",
    name: "Manohara H U K R T",
    role: "Enforcement & XAI Researcher",
    component: "Profile-Based Enforcement & Explainable AI",
    contribution:
      "Designed and implemented the adaptive enforcement engine and the explainable AI module, ensuring every moderation decision is transparent and contextually appropriate.",
    technologies: ["Python", "SHAP", "LIME", "React", "Next.js"],
    color: "#A78BFA",
    initials: "YN",
    image: "/images/member3.png",
    github: "https://github.com/RavinduThilinaka",
    linkedin: "https://www.linkedin.com/in/ravindu-thilinaka",
    highlight: true,
  },
  {
    id: "member4",
    name: "Praveen H G",
    role: "Adaptive Emotional Shielding Researcher",
    component: "Adaptive Emotional Shielding",
    contribution:
      "Built the adaptive emotional shielding system that dynamically protects users from emotionally harmful interactions based on their profile and real-time sentiment analysis.",
    technologies: ["Python", "NLP", "Sentiment Analysis", "React", "WebSocket"],
    color: "#34D399",
    initials: "TM",
    image: "/images/member4.jpeg",
    github: "#",
    linkedin: "#",
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <div
      className="about-page"
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
          top: "35%",
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
              >
                The Team
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
              Meet the{" "}
              <span className="text-gradient">PureTalk Team</span>
            </h1>
            <p
              style={{
                maxWidth: "640px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              PureTalk is a collaborative university research project. Each team member leads
              a specialised research component contributing to the complete PureTalk ecosystem.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ padding: "0 0 80px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="team-grid"
          >
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 100}>
                <div
                  className={`team-card${member.highlight ? " team-card-highlight" : ""}`}
                  onClick={() => setSelectedMember(member)}
                  style={{
                    ["--member-color" as any]: member.color,
                    padding: "32px",
                    background: member.highlight
                      ? `linear-gradient(135deg, ${member.color}14, transparent 60%)`
                      : undefined,
                    borderColor: member.highlight ? `${member.color}50` : undefined,
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                  }}
                >
                  {/* Profile header */}
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: `2px solid ${member.color}60`,
                        boxShadow: `0 4px 16px ${member.color}30`,
                        position: "relative",
                        background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={64}
                          height={64}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top",
                            display: "block",
                          }}
                        />
                      ) : (
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "800",
                            color: "white",
                          }}
                        >
                          {member.initials}
                        </span>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                        <div style={{ minWidth: 0 }}>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              color: "var(--text-primary)",
                              marginBottom: "4px",
                              lineHeight: "1.3",
                            }}
                          >
                            {member.name}
                          </h3>
                          <p style={{ fontSize: "13px", color: member.color, fontWeight: "600" }}>
                            {member.role}
                          </p>
                        </div>
                        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                          <a
                            href={member.github}
                            aria-label={`${member.name} GitHub`}
                            className="social-icon social-icon-github"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.1 18 6.4 18 6.4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                            </svg>
                          </a>
                          <a
                            href={member.linkedin}
                            aria-label={`${member.name} LinkedIn`}
                            className="social-icon social-icon-linkedin"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Component badge */}
                  <div
                    style={{
                      padding: "12px 14px",
                      background: `${member.color}18`,
                      border: `1px solid ${member.color}45`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill={member.color}>
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: member.color }}>
                      {member.component}
                    </span>
                  </div>

                  {/* Contribution */}
                  <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.7" }}>
                    {member.contribution}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {member.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section
        style={{
          padding: "60px 0 100px",
          borderTop: "1px solid var(--border-subtle)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px",
              }}
              className="about-info-grid"
            >
              <div className="info-panel">
                <h3
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#22D3EE",
                    marginBottom: "24px",
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
                      background: "#22D3EE",
                      display: "inline-block",
                    }}
                  />
                  Project Information
                </h3>
                {[
                  { label: "Project Name", value: "PureTalk" },
                  { label: "Type", value: "University Research Project" },
                  { label: "Department", value: "IT" },
                  { label: "University", value: "SLIIT" },
                  { label: "Academic Year", value: "2026" },
                  { label: "Supervisor", value: "Manori Gamage" },
                ].map((item, idx, arr) => (
                  <div
                    key={item.label}
                    className="info-row"
                    style={{
                      borderBottom:
                        idx < arr.length - 1
                          ? "1px solid var(--border-subtle)"
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-primary)",
                        fontWeight: "500",
                        textAlign: "right",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="info-panel">
                <h3
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#A78BFA",
                    marginBottom: "24px",
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
                      background: "#A78BFA",
                      display: "inline-block",
                    }}
                  />
                  Research Summary
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.75", marginBottom: "20px" }}>
                  PureTalk is a collaborative university research project that investigates the
                  integration of <strong>toxicity detection</strong>, <strong>image detection</strong>,{" "}
                  <strong>adaptive emotional shielding</strong>,{" "}
                  <strong>profile-based toxic behaviour enforcement</strong>, and{" "}
                  <strong>explainable AI (XAI)</strong> into a unified online communication
                  platform.
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.75", marginBottom: "24px" }}>
                  The project addresses fundamental limitations in current content moderation
                  systems, proposing a context-aware, personalised, and transparent approach to
                  promoting safer online interactions.
                </p>
                <Link href="/domain" className="btn-secondary" style={{ display: "inline-flex" }}>
                  View Research Domain
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== POPUP: Image + Name + Role + Component + Technologies ===== */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="member-modal-backdrop"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.25s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="member-modal"
            style={{
              ["--member-color" as any]: selectedMember.color,
              position: "relative",
              maxWidth: "440px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "24px",
              background: "var(--bg-card, #111827)",
              border: `1px solid ${selectedMember.color}50`,
              boxShadow: `0 30px 90px ${selectedMember.color}50`,
              animation: "popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
              className="modal-close-btn"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(0,0,0,0.55)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                transition: "all 0.2s ease",
                zIndex: 3,
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                position: "relative",
                background: `linear-gradient(135deg, ${selectedMember.color}, ${selectedMember.color}99)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selectedMember.image ? (
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  sizes="(max-width: 440px) 100vw, 440px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  priority
                />
              ) : (
                <span style={{ fontSize: "96px", fontWeight: "800", color: "white" }}>
                  {selectedMember.initials}
                </span>
              )}
            </div>

            {/* Info below image */}
            <div style={{ padding: "24px" }}>
              {/* Name */}
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                  lineHeight: "1.3",
                }}
              >
                {selectedMember.name}
              </h2>

              {/* Role */}
              <p
                style={{
                  fontSize: "13px",
                  color: selectedMember.color,
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {selectedMember.role}
              </p>

              {/* Component badge */}
              <div
                style={{
                  padding: "12px 14px",
                  background: `${selectedMember.color}18`,
                  border: `1px solid ${selectedMember.color}45`,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={selectedMember.color}
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: selectedMember.color,
                    lineHeight: "1.4",
                  }}
                >
                  {selectedMember.component}
                </span>
              </div>

              {/* Technologies */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {selectedMember.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .team-card {
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          cursor: pointer;
        }
        .team-card:hover {
          background: var(--bg-card-hover);
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--member-color) 60%, transparent);
          box-shadow: 0 20px 60px color-mix(in srgb, var(--member-color) 20%, transparent);
        }

        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tag);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .light .social-icon {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }
        .social-icon:hover {
          background: var(--bg-card-hover);
          color: var(--text-primary);
          border-color: var(--border-input-hover);
        }
        .light .social-icon:hover {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.18);
        }

        .social-icon-github:hover {
          background: rgba(36,41,46,0.15) !important;
          color: #24292e !important;
          border-color: rgba(36,41,46,0.35) !important;
        }
        .light .social-icon-github:hover {
          background: rgba(36,41,46,0.10) !important;
          color: #24292e !important;
          border-color: rgba(36,41,46,0.40) !important;
        }

        .social-icon-linkedin:hover {
          background: rgba(10,102,194,0.15) !important;
          color: #2563EB !important;
          border-color: rgba(10,102,194,0.35) !important;
        }
        .light .social-icon-linkedin:hover {
          background: rgba(10,102,194,0.12) !important;
          color: #0A66C2 !important;
          border-color: rgba(10,102,194,0.4) !important;
        }

        .tech-tag {
          padding: 4px 11px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          border-radius: 6px;
          font-size: 12px;
          color: var(--text-tag);
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .light .tech-tag {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }
        .tech-tag:hover {
          background: color-mix(in srgb, var(--member-color) 15%, transparent);
          border-color: color-mix(in srgb, var(--member-color) 45%, transparent);
          color: var(--member-color);
        }

        .info-panel {
          padding: 32px;
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          gap: 16px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn:hover {
          background: rgba(0,0,0,0.85) !important;
          transform: rotate(90deg);
        }

        .member-modal::-webkit-scrollbar {
          width: 6px;
        }
        .member-modal::-webkit-scrollbar-track {
          background: transparent;
        }
        .member-modal::-webkit-scrollbar-thumb {
          background: var(--border-input);
          border-radius: 3px;
        }
        .member-modal::-webkit-scrollbar-thumb:hover {
          background: var(--member-color);
        }

        @media (max-width: 760px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .about-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}