"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    name: "Delayd",
    description:
      "Fintech startup app with iOS, Android, and React web clients backed by a Python/FastAPI payment backend.",
    metric: "Live in production — idempotent payment processing across dual providers",
    tags: ["Swift", "Kotlin", "React", "FastAPI", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "WebDUPER",
    description:
      "AI-powered web scraping tool using Claude Sonnet 4 API for automated HTML generation.",
    metric: "95% reduction in manual coding effort, 90% anti-bot detection success rate",
    tags: ["Python", "FastAPI", "React", "TypeScript", "Claude API", "LangChain"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "Audio Pipeline",
    description:
      "GPU-accelerated C++ signal processing pipeline with FFT-based filtering and convolution reverb.",
    metric: "Sub-10ms latency, 3x throughput over CPU-only baseline",
    tags: ["C++", "CUDA", "cuFFT", "PortAudio", "Linux"],
    githubUrl: "https://github.com/lpham259",
  },
];

const SKILLS_MARQUEE = [
  "C/C++", "Python", "Go", "TypeScript", "Rust", "Swift", "Kotlin", "SQL",
  "FastAPI", "Next.js", "React", "CUDA", "STM32H7", "AWS", "GCP",
  "Docker", "Kubernetes", "PostgreSQL", "Firebase", "Claude API", "PyTorch",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="dot-grid"
        style={{
          minHeight: "100vh",
          paddingTop: "56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange glow blob */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,90,31,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          {/* Status badge */}
          <div className="fade-up fade-up-1" style={{ marginBottom: "32px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-signal)",
                border: "1px solid rgba(0,229,160,0.25)",
                borderRadius: "20px",
                padding: "5px 14px",
                backgroundColor: "rgba(0,229,160,0.05)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-signal)",
                  boxShadow: "0 0 6px var(--color-signal)",
                  animation: "signalPulse 2s ease-in-out infinite",
                }}
              />
              Open to 2026 internships &amp; new-grad roles
            </span>
          </div>

          {/* Name */}
          <h1
            className="fade-up fade-up-2"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 10vw, 108px)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              marginBottom: "28px",
            }}
          >
            Lucas
            <br />
            <span style={{ color: "var(--color-accent)" }}>Pham</span>
          </h1>

          {/* Headline */}
          <p
            className="fade-up fade-up-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(13px, 2vw, 16px)",
              lineHeight: 1.65,
              color: "var(--color-muted)",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            ECE student at UT Austin building full-stack products, embedded
            systems, and LLM-powered backends.
            <span className="cursor" />
          </p>

          {/* CTA row */}
          <div
            className="fade-up fade-up-4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px",
              marginBottom: "64px",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                backgroundColor: "var(--color-accent)",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                transition: "opacity 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View projects
              <ArrowRight size={13} />
            </Link>
            <a
              href="https://github.com/lpham259"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-muted)",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.borderColor = "var(--color-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lucas-p-60433a24b"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-muted)",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.borderColor = "var(--color-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="mailto:lucas.tru.pham@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-muted)",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                border: "1px solid var(--color-border)",
                backgroundColor: "transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.borderColor = "var(--color-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <Mail size={14} />
              Email
            </a>
          </div>

          {/* Quick stats */}
          <div
            className="fade-up fade-up-5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              borderTop: "1px solid var(--color-border)",
              paddingTop: "32px",
            }}
          >
            {[
              { val: "3.80", label: "GPA" },
              { val: "2027", label: "Graduating" },
              { val: "6", label: "Projects" },
              { val: "2×", label: "Internships" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "var(--color-text)",
                    lineHeight: 1,
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="fade-up fade-up-6"
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, transparent, var(--color-muted))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-muted)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
        </div>
      </section>

      {/* Skills marquee */}
      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "14px 0",
          overflow: "hidden",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="marquee-inner">
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                padding: "0 28px",
                whiteSpace: "nowrap",
              }}
            >
              {i % 5 === 0 ? (
                <span style={{ color: "var(--color-accent)" }}>✦</span>
              ) : null}{" "}
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Featured projects */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "96px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                color: "var(--color-accent)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              selected.work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: 800,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
              }}
            >
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-muted)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-muted)")
            }
          >
            View all 6
            <ArrowRight size={12} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} index={i + 1} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
