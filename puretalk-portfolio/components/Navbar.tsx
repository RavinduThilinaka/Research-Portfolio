"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

/* ---------- Inline SVG Icons ---------- */
const Icons = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  Domain: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18a14 14 0 010-18z" />
    </svg>
  ),
  Milestones: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3 2 3H5" />
    </svg>
  ),
  Components: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  Documents: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  ),
  Presentations: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
    </svg>
  ),
  About: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0114 0" />
    </svg>
  ),
  Contact: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

/* ---------- Nav Links with icon keys ---------- */
const navLinks = [
  { href: "/", label: "Home", icon: "Home" as const },
  { href: "/domain", label: "Domain", icon: "Domain" as const },
  { href: "/milestones", label: "Milestones", icon: "Milestones" as const },
  { href: "/components", label: "Components", icon: "Components" as const },
  { href: "/documents", label: "Documents", icon: "Documents" as const },
  { href: "/presentations", label: "Presentations", icon: "Presentations" as const },
  { href: "/about", label: "About Us", icon: "About" as const },
  { href: "/contact", label: "Contact Us", icon: "Contact" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        id="navbar"
        className={`navbar-root${scrolled ? " scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "var(--bg-navbar)"
            : "var(--bg-navbar-transparent)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                  letterSpacing: "-0.5px",
                }}
              >
                P
              </div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  letterSpacing: "-0.5px",
                  color: "var(--text-primary)",
                }}
              >
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const Icon = Icons[link.icon];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${active ? " nav-link-active" : ""}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: active ? "600" : "500",
                    color: active ? "var(--accent-cyan)" : "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    background: active ? "rgba(0, 214, 255, 0.08)" : "transparent",
                    border: active
                      ? "1px solid rgba(0, 214, 255, 0.15)"
                      : "1px solid transparent",
                  }}
                >
                  <Icon
                    style={{
                      flexShrink: 0,
                      opacity: active ? 1 : 0.85,
                    }}
                  />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: theme toggle + hamburger */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="theme-toggle-btn"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9px",
                background: "transparent",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: "var(--text-primary)",
              }}
            >
              {theme === "dark" ? (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              )}
            </button>

            <button
              aria-label="Toggle navigation menu"
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                flexDirection: "column",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
              }}
              className="hamburger-btn"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="mobile-menu mobile-menu-root"
          style={{
            maxHeight: menuOpen ? "600px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease",
            background: "var(--bg-navbar)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: menuOpen ? "1px solid var(--border-subtle)" : "none",
          }}
        >
          <div style={{ padding: "16px 24px 24px" }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const Icon = Icons[link.icon];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: active ? "600" : "500",
                    color: active ? "var(--accent-cyan)" : "var(--text-secondary)",
                    textDecoration: "none",
                    marginBottom: "4px",
                    background: active ? "rgba(0, 214, 255, 0.08)" : "transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: active
                        ? "rgba(0, 214, 255, 0.12)"
                        : "var(--nav-hover-bg)",
                      color: active ? "var(--accent-cyan)" : "var(--text-secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon />
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <style>{`
        .nav-link:hover {
          color: var(--text-primary) !important;
          background: var(--nav-hover-bg) !important;
        }
        .nav-link-active:hover {
          color: var(--accent-cyan) !important;
          background: rgba(0, 214, 255, 0.08) !important;
        }
        .mobile-nav-link:hover {
          color: var(--text-primary) !important;
          background: var(--nav-hover-bg) !important;
        }
        .theme-toggle-btn:hover {
          border-color: var(--border-glow) !important;
          background: rgba(0, 214, 255, 0.08) !important;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}