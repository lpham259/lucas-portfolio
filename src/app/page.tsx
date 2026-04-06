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
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-5%",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,90,31,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "64px 24px",
            width: "100%",
          }}
        >
          {/* Name */}
          <h1
            className="fade-up fade-up-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 11vw, 96px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              color: "var(--color-text)",
              marginBottom: "24px",
            }}
          >
            Lucas Pham
          </h1>

          {/* Headline */}
          <p
            className="fade-up fade-up-2"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(12px, 1.8vw, 15px)",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            ECE student at UT Austin building full-stack products, embedded
            systems, and LLM-powered backends.
            <span className="cursor" />
          </p>

          {/* CTA + social row */}
          <div
            className="fade-up fade-up-3"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                backgroundColor: "var(--color-accent)",
                textDecoration: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Projects
              <ArrowRight size={12} />
            </Link>

            <div
              style={{
                width: "1px",
                height: "20px",
                backgroundColor: "var(--color-border)",
              }}
            />

            {/* Icon links */}
            {[
              { href: "https://github.com/lpham259", icon: <Github size={16} />, label: "GitHub" },
              { href: "https://linkedin.com/in/lucas-p-60433a24b", icon: <Linkedin size={16} />, label: "LinkedIn" },
              { href: "mailto:lucas.tru.pham@gmail.com", icon: <Mail size={16} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "72px 24px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "var(--color-text)",
              letterSpacing: "0.01em",
            }}
          >
            Selected Projects
          </h2>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
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
            All 6 →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
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
