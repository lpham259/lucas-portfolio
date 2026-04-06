"use client";

import { Download, FileText, ExternalLink } from "lucide-react";
import TechTag from "@/components/TechTag";

export default function ResumePage() {
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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px 96px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
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
                marginBottom: "12px",
              }}
            >
              05 / resume
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
              Resume
            </h1>
          </div>

          <a
            href="/lucas-pham-resume.pdf"
            download
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
              marginTop: "8px",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>

        {/* PDF viewer / placeholder */}
        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "var(--color-surface)",
            marginBottom: "32px",
          }}
        >
          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface-2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FileText
                size={14}
                style={{ color: "var(--color-accent)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-text)",
                  letterSpacing: "0.04em",
                }}
              >
                lucas-pham-resume.pdf
              </span>
            </div>
            <a
              href="/lucas-pham-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-muted)",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              Open in new tab
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Inline resume content */}
          <div style={{ padding: "40px 48px" }} className="resume-content">
            {/* Name + contact */}
            <div
              style={{
                borderBottom: "2px solid var(--color-border)",
                paddingBottom: "24px",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "var(--color-text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                Lucas Pham
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                {[
                  { label: "lucas.tru.pham@gmail.com", href: "mailto:lucas.tru.pham@gmail.com" },
                  { label: "github.com/lpham259", href: "https://github.com/lpham259" },
                  { label: "linkedin.com/in/lucas-p-60433a24b", href: "https://linkedin.com/in/lucas-p-60433a24b" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-accent)",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Education */}
            <ResumeSection title="Education">
              <ResumeEntry
                left="University of Texas at Austin"
                right="Aug 2023 – May 2027"
                sub="B.S. Electrical and Computer Engineering (Honors) | Minor: Business Management | GPA: 3.80"
              />
            </ResumeSection>

            {/* Experience */}
            <ResumeSection title="Experience">
              <ResumeEntry
                left="Enpower Resources — Software Engineering Intern"
                right="Jun 2025 – Aug 2025"
                bullets={[
                  "Built distributed IoT platform processing 100K+ sensor readings/min on AWS with 99.5% uptime.",
                  "Architected microservices on AWS Lambda with auto-scaling, reducing infrastructure costs by 30%.",
                ]}
              />
              <ResumeEntry
                left="Halliburton — R&D Computer Engineering Intern"
                right="May 2024 – Aug 2024"
                bullets={[
                  "Built C/C++ firmware testing frameworks for STM32H7 microcontrollers in extreme environments.",
                  "Developed Python automation for FRAM memory validation and regression testing.",
                ]}
              />
            </ResumeSection>

            {/* Projects */}
            <ResumeSection title="Projects">
              {[
                {
                  name: "Delayd",
                  desc: "Fintech startup with iOS, Android, and React clients backed by FastAPI. Idempotent payment processing in production.",
                  tags: ["Swift", "Kotlin", "React", "FastAPI", "PostgreSQL"],
                },
                {
                  name: "WebDUPER",
                  desc: "AI web scraping tool using Claude Sonnet 4 — 95% reduction in manual effort, 90% anti-bot success rate.",
                  tags: ["Python", "Claude API", "LangChain", "FastAPI"],
                },
                {
                  name: "Real-Time Audio Pipeline",
                  desc: "GPU-accelerated C++ signal processing with cuFFT. Sub-10ms latency, 3x CPU throughput.",
                  tags: ["C++", "CUDA", "cuFFT"],
                },
                {
                  name: "StreamShare",
                  desc: "Video streaming platform on GCP. 99.9% processing reliability with fault-tolerant distributed transcoding.",
                  tags: ["Next.js", "Python", "GCP", "Cloud Run"],
                },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    marginBottom: "18px",
                    paddingBottom: "18px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                      flexWrap: "wrap",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                      }}
                    >
                      {p.name}
                    </span>
                    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                      {p.tags.map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      lineHeight: 1.65,
                      color: "var(--color-muted)",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Technical Skills">
              {[
                ["Languages", "C/C++, Python, Go, Java, TypeScript, SQL, Rust, Swift, Kotlin"],
                ["Backend", "FastAPI, Node.js, REST, GraphQL, Prisma ORM, Springboot"],
                ["Frontend", "React, Next.js, Tailwind, iOS (Swift), Android (Kotlin)"],
                ["Cloud", "AWS (Lambda, IoT Core, CodePipeline), GCP, Docker, Kubernetes, Terraform"],
                ["Embedded", "STM32H7, UART/SPI/I2C, CUDA, Linux, Real-time systems"],
                ["AI/ML", "Claude API, LangChain, PyTorch, NumPy, pandas"],
                ["Databases", "PostgreSQL, MySQL, MongoDB, Redis, Firebase, Supabase, DynamoDB"],
              ].map(([domain, skills]) => (
                <div
                  key={domain}
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      minWidth: "90px",
                      flexShrink: 0,
                    }}
                  >
                    {domain}:
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-muted)",
                    }}
                  >
                    {skills}
                  </span>
                </div>
              ))}
            </ResumeSection>
          </div>
        </div>

        {/* Download CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            border: "1px dashed var(--color-border)",
            borderRadius: "6px",
          }}
        >
          <a
            href="/lucas-pham-resume.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Download size={14} />
            Download PDF version
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .resume-content {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <h3
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          color: "var(--color-accent)",
          textTransform: "uppercase",
          marginBottom: "16px",
          paddingBottom: "8px",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function ResumeEntry({
  left,
  right,
  sub,
  bullets,
}: {
  left: string;
  right: string;
  sub?: string;
  bullets?: string[];
}) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "4px",
          marginBottom: sub || bullets ? "4px" : 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--color-text)",
          }}
        >
          {left}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-muted)",
          }}
        >
          {right}
        </span>
      </div>
      {sub && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-muted)",
            lineHeight: 1.5,
          }}
        >
          {sub}
        </p>
      )}
      {bullets && (
        <ul style={{ listStyle: "none", marginTop: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-muted)",
                lineHeight: 1.6,
                paddingLeft: "14px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--color-accent)",
                }}
              >
                –
              </span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
