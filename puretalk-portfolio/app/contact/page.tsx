"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: in a real implementation, send to an API endpoint
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--bg-input)",
    border: "1px solid var(--border-input)",
    borderRadius: "10px",
    color: "var(--text-primary)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease, background 0.2s ease",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <div
      className="contact-page"
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
          bottom: "10%",
          left: "35%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
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
                Get In Touch
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
              Contact <span className="text-gradient">PureTalk</span>
            </h1>
            <p
              style={{
                maxWidth: "600px",
                lineHeight: "1.75",
                fontSize: "17px",
                color: "var(--text-body)",
              }}
            >
              Interested in the PureTalk research project? Reach out for academic enquiries,
              collaboration opportunities, or general information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: "0 0 100px", position: "relative", zIndex: 1 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "48px",
            }}
            className="contact-grid"
          >
            {/* Left — Info */}
            <div>
              <ScrollReveal>
                {/* Project links */}
                <div className="info-card" style={{ marginBottom: "20px" }}>
                  <h3
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#22D3EE",
                      marginBottom: "20px",
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
                    Project Links
                  </h3>
                  {[
                    {
                      icon: (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.1 18 6.4 18 6.4c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                        </svg>
                      ),
                      label: "Project Repository",
                      value: "GitHub Repository URL",
                      href: "https://github.com/senu02/R26-IT-008.git",
                      color: "var(--text-primary)",
                    },
                    {
                      icon: "📧",
                      label: "Team Email",
                      value: "puretalk@gmail.com",
                      href: "dulajperera34senura@gmail.com",
                      color: "#60A5FA",
                    },
                    {
                      icon: "🎓",
                      label: "University",
                      value: "SLIIT",
                      href: "#",
                      color: "var(--text-tag)",
                    },
                    {
                      icon: "👨‍🏫",
                      label: "Supervisor",
                      value: "Manori Gamage",
                      href: "#",
                      color: "var(--text-tag)",
                    },
                  ].map((item, idx, arr) => (
                    <div
                      key={item.label}
                      className="contact-info-row"
                      style={{
                        borderBottom:
                          idx < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
                      }}
                    >
                      <div className="contact-info-icon">
                        {item.icon}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--text-secondary)",
                            marginBottom: "3px",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.label}
                        </div>
                        <a
                          href={item.href}
                          className="contact-info-link"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Department info */}
              <ScrollReveal delay={100}>
                <div className="department-card">
                  <div style={{ fontSize: "28px", marginBottom: "12px" }}>🎓</div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    Department of Information Technology  
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--text-body)", lineHeight: "1.7" }}>
                    SLIIT
                    <br />
                    Malabe
                    <br />
                    Academic Year: 2026
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Contact form */}
            <ScrollReveal delay={150}>
              <div className="form-card">
                {submitted ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "48px 0",
                    }}
                  >
                    <div style={{ fontSize: "48px", marginBottom: "20px" }}>✅</div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#34D399",
                        marginBottom: "12px",
                      }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: "1.7" }}>
                      Thank you for reaching out to the PureTalk team. We will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-secondary"
                      style={{ marginTop: "24px", display: "inline-flex" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Send a Message
                    </h3>
                    <p style={{ fontSize: "14px", color: "var(--text-body)", marginBottom: "28px", lineHeight: "1.6" }}>
                      Fill out the form below and the PureTalk team will respond to your enquiry.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <div>
                        <label htmlFor="contact-name" className="contact-label">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={inputStyle}
                          className="contact-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="contact-label">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={inputStyle}
                          className="contact-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="contact-label">
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          placeholder="Enquiry subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          style={inputStyle}
                          className="contact-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="contact-label">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          placeholder="Your message..."
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                          className="contact-input"
                        />
                      </div>

                      <button
                        id="contact-submit"
                        type="submit"
                        className="btn-primary"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        Send Message
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        /* Info card (Project Links) */
        .info-card {
          padding: 28px;
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        /* Info rows */
        .contact-info-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
        }

        /* Info icon square */
        .contact-info-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--bg-input);
          border: 1px solid var(--border-input);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tag);
          flex-shrink: 0;
          font-size: 16px;
          transition: background 0.35s ease, border-color 0.35s ease, color 0.35s ease;
        }
        .light .contact-info-icon {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.10);
          color: var(--text-secondary);
        }

        /* Info link */
        .contact-info-link {
          font-size: 14px;
          text-decoration: none;
          font-weight: 500;
          word-break: break-word;
          transition: opacity 0.2s ease;
          cursor: pointer; /* 👈 hand cursor */
        }
        .contact-info-link:hover {
          opacity: 0.75;
          cursor: pointer; /* 👈 hand cursor on hover */
        }

        /* Department card */
        .department-card {
          padding: 24px 28px;
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.10),
            rgba(167,139,250,0.10)
          );
          border: 1px solid rgba(59,130,246,0.30);
          border-radius: 18px;
          transition: background 0.35s ease, border-color 0.35s ease;
          cursor: pointer; /* 👈 hand cursor */
        }
        .light .department-card {
          background: linear-gradient(
            135deg,
            rgba(59,130,246,0.08),
            rgba(167,139,250,0.08)
          );
          border-color: rgba(59,130,246,0.25);
        }

        /* Form card */
        .form-card {
          padding: 36px;
          background: var(--bg-card-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        /* Form label */
        .contact-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-tag);
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        /* Form input focus/hover */
        .contact-input {
          cursor: text; /* 👈 text cursor for inputs */
        }
        .contact-input::placeholder {
          color: var(--text-muted);
        }
        .light .contact-input::placeholder {
          color: #94A3B8;
        }
        .contact-input:hover {
          border-color: var(--border-input-hover) !important;
        }
        .contact-input:focus {
          border-color: rgba(34,211,238,0.6) !important;
          background: var(--bg-input-focus) !important;
        }

        /* Primary + secondary buttons — hand cursor */
        .btn-primary,
        .btn-secondary {
          cursor: pointer; /* 👈 hand cursor */
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}