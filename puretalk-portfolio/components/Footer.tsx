"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/domain", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/components", label: "Components" },
  { href: "/documents", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-footer)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "64px 0 32px",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #2563EB, #00D6FF)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                PT
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                  color: "var(--text-primary)",
                }}
              >
                PureTalk
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                lineHeight: "1.6",
                marginBottom: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Intelligent. Adaptive. Explainable.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                maxWidth: "280px",
              }}
            >
              A university research project building safer, smarter, and more explainable online
              communication.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}
            >
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Research info */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              Research
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Research Area", value: "AI & NLP" },
                { label: "Focus", value: "Online Safety" },
                { label: "Type", value: "University Project" },
                { label: "Status", value: "In Progress" },
              ].map((item) => (
                <div key={item.label}>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      fontWeight: "500",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,214,255,0.15), rgba(37,99,235,0.15), transparent)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            © 2026 PureTalk Research Team. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            University Research Project · Department of Computing
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 4px 0;
        }
        .footer-link:hover {
          color: var(--accent-cyan);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}