"use client";

import Timeline from "@/components/Timeline";
import type { TimelineEntry } from "@/components/Timeline";
import TechTag from "@/components/TechTag";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const TIMELINE: TimelineEntry[] = [
  {
    org: "Enpower Resources",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Aug 2025",
    type: "work",
    bullets: [
      "Built distributed IoT platform processing 100K+ sensor readings/min on AWS.",
      "Achieved 99.5% uptime through fault-tolerant microservices on AWS Lambda.",
      "Reduced infrastructure costs by 30% through targeted auto-scaling optimizations.",
    ],
  },
  {
    org: "Halliburton",
    role: "R&D Computer Engineering Intern",
    period: "May 2024 – Aug 2024",
    type: "work",
    bullets: [
      "Built C/C++ firmware testing frameworks for STM32H7 microcontrollers.",
      "Developed Python automation scripts for FRAM memory validation.",
      "Worked on mission-critical embedded systems for downhole drilling tools in extreme environments.",
    ],
  },
  {
    org: "University of Texas at Austin",
    role: "B.S. Electrical and Computer Engineering (Honors)",
    period: "Aug 2023 – May 2026",
    type: "education",
    bullets: [
      "GPA: 3.80 | Minor in Business Management.",
      "Coursework: Operating Systems, Embedded Systems, Computer Architecture, Machine Learning.",
      "Co-founded Delayd — a fintech startup building cross-platform payment infrastructure.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "56px",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 96px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            04 / about
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
            }}
          >
            About Me
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: Bio */}
          <div>
            {/* Identity badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <MapPin size={11} style={{ color: "var(--color-accent)" }} />
                Austin, TX
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <GraduationCap
                  size={11}
                  style={{ color: "var(--color-signal)" }}
                />
                ECE @ UT Austin
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Briefcase
                  size={11}
                  style={{ color: "var(--color-accent)" }}
                />
                Open to 2026 roles
              </span>
            </div>

            {/* Bio */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "var(--color-muted)",
                marginBottom: "28px",
              }}
            >
              I&apos;m a junior at UT Austin studying Electrical and Computer
              Engineering{" "}
              <span style={{ color: "var(--color-text)" }}>
                (GPA: 3.80, graduating May 2026)
              </span>{" "}
              with a minor in Business Management.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "var(--color-muted)",
                marginBottom: "28px",
              }}
            >
              I&apos;ve interned at{" "}
              <span style={{ color: "var(--color-text)" }}>Halliburton</span>{" "}
              building embedded firmware for downhole tools and at{" "}
              <span style={{ color: "var(--color-text)" }}>
                Enpower Resources
              </span>{" "}
              building IoT infrastructure on AWS.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "var(--color-muted)",
                marginBottom: "28px",
              }}
            >
              Outside of class I co-founded{" "}
              <span style={{ color: "var(--color-accent)" }}>Delayd</span> and
              spend a lot of time thinking about systems that have to work
              reliably — whether that&apos;s a satellite, a robot, or a payment
              backend.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                lineHeight: 1.65,
                color: "var(--color-muted)",
                padding: "16px",
                border: "1px solid var(--color-border)",
                borderRadius: "4px",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span style={{ color: "var(--color-signal)" }}>→</span> U.S.
              citizen, eligible for security clearance.
            </p>

            {/* Focus areas */}
            <div style={{ marginTop: "36px" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Current focus
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {[
                  "Fintech infrastructure",
                  "LLM backends",
                  "Embedded firmware",
                  "Distributed systems",
                  "Real-time processing",
                ].map((tag) => (
                  <TechTag key={tag} label={tag} variant="accent" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Experience &amp; Education
            </p>
            <Timeline entries={TIMELINE} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
