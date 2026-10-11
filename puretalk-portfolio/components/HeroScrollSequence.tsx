"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const totalFrames = 30;

  // ✅ Forward-only progress — never decreases
  const maxProgressRef = useRef(0);

  useEffect(() => {
    // ✅ FIX: Disable browser's automatic scroll restoration
    // This ensures on refresh, page starts from top (frame 1)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // ✅ FIX: Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    maxProgressRef.current = 0;

    // Preload all frames
    for (let i = 1; i <= totalFrames; i++) {
      const idx = i.toString().padStart(6, "0");
      const img = new window.Image();
      img.src = `/frames/frame_${idx}.png`;
    }

    let animationFrameId: number;
    let currentProgress = 0;
    let lastFrame = -1;

    const updateFrame = () => {
      const diff = maxProgressRef.current - currentProgress;

      if (Math.abs(diff) > 0.001) {
        currentProgress += diff * 0.15;
      } else {
        currentProgress = maxProgressRef.current;
      }

      const currentFrame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(currentProgress * (totalFrames - 1)) + 1)
      );

      if (currentFrame !== lastFrame) {
        lastFrame = currentFrame;
        const idx = currentFrame.toString().padStart(6, "0");
        if (imgRef.current) {
          imgRef.current.src = `/frames/frame_${idx}.png`;
        }
      }

      if (imgContainerRef.current) {
        imgContainerRef.current.style.transform = `scale(${
          1 + currentProgress * 0.05
        }) translateY(${currentProgress * 10}px)`;
      }

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${
          currentProgress * -15
        }px)`;
        contentRef.current.style.opacity = `${1 - currentProgress * 0.2}`;
      }

      animationFrameId = requestAnimationFrame(updateFrame);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollHeight = rect.height - windowHeight;
      const scrolled = -rect.top;

      let progress = scrolled / totalScrollHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Forward-only: only increase
      if (progress > maxProgressRef.current) {
        maxProgressRef.current = progress;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Small delay to ensure browser scroll restoration doesn't override
    const initTimeout = setTimeout(() => {
      window.scrollTo(0, 0);
      maxProgressRef.current = 0;
      currentProgress = 0;
      handleScroll();
    }, 10);

    animationFrameId = requestAnimationFrame(updateFrame);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animationFrameId);
      // Restore default when leaving
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        height: "350vh",
        position: "relative",
      }}
    >
      <div
        className="hero-section"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "var(--bg-primary)",
          transition: "background 0.3s ease",
        }}
      >
        <div
          ref={imgContainerRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            willChange: "transform",
          }}
        >
          <img
            ref={imgRef}
            src="/frames/frame_000001.png"
            alt="PureTalk AI Sequence"
            className="hero-image"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              inset: 0,
            }}
          />
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            ref={contentRef}
            style={{
              maxWidth: "600px",
            }}
          >
    
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: "900",
                letterSpacing: "-0.03em",
                lineHeight: "1.05",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  background: "var(--hero-title-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pure
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00D6FF 0%, #2563EB 60%, #7C3AED 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Talk
              </span>
            </h1>

            <p
              className="hero-subheading"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                fontWeight: "600",
                color: "var(--text-primary)",
                lineHeight: "1.4",
                marginBottom: "20px",
              }}
            >
              Building Safer, Smarter, and More Explainable Online Communication
            </p>

            <p
              className="hero-paragraph"
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: "1.75",
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              PureTalk is an intelligent social communication platform that
              combines automated toxicity detection, behavioural analysis,
              adaptive enforcement, and explainable AI to promote safer and
              more responsible online interactions.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/components" className="btn-primary">
                Explore the Project
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
              <Link href="/domain" className="btn-secondary">
                View Research
              </Link>
            </div>

            <div
              className="hero-divider"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "32px",
                marginTop: "56px",
                paddingTop: "40px",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {[
                { value: "4+", label: "Research Components" },
                { value: "NLP", label: "Core Technology" },
                { value: "XAI", label: "Explainable AI" },
                { value: "100%", label: "Team Collaboration" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      fontWeight: "800",
                      background:
                        "linear-gradient(135deg, #00D6FF, #2563EB)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="hero-stat-label"
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      fontWeight: "500",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}