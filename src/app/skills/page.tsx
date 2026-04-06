import SkillGroup from "@/components/SkillGroup";

const SKILL_DOMAINS = [
  {
    domain: "Languages",
    skills: ["C/C++", "Python", "Go", "Java", "JavaScript/TypeScript", "SQL", "Rust", "Swift", "Kotlin"],
    featured: true,
  },
  {
    domain: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "REST", "GraphQL", "WebSockets", "Prisma ORM", "Springboot"],
    featured: false,
  },
  {
    domain: "Frontend & Mobile",
    skills: ["React", "Next.js", "Tailwind", "iOS (Swift)", "Android (Kotlin)", "HTML/CSS"],
    featured: false,
  },
  {
    domain: "Embedded & Systems",
    skills: ["STM32H7", "UART/SPI/I2C", "CUDA", "QEMU", "Linux", "Real-time systems"],
    featured: true,
  },
  {
    domain: "AI & ML",
    skills: ["Claude API", "LangChain", "PyTorch", "Prompt Engineering", "LLM Evaluation", "NumPy", "pandas"],
    featured: false,
  },
  {
    domain: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS IoT Core", "CodePipeline", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    featured: false,
  },
  {
    domain: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB"],
    featured: false,
  },
];

export default function SkillsPage() {
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
        <div style={{ marginBottom: "64px" }}>
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
            03 / skills
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text)",
              marginBottom: "20px",
            }}
          >
            Signal Map
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              lineHeight: 1.65,
              color: "var(--color-muted)",
              maxWidth: "520px",
            }}
          >
            Seven domains. From bare metal to cloud edge. Highlighted blocks
            represent primary depth.
          </p>
        </div>

        {/* Domain count bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {SKILL_DOMAINS.map((d, i) => (
            <div
              key={d.domain}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: d.featured ? "var(--color-accent)" : "var(--color-muted)",
                textTransform: "uppercase",
                padding: "4px 10px",
                border: `1px solid ${
                  d.featured
                    ? "rgba(255,90,31,0.3)"
                    : "var(--color-border)"
                }`,
                borderRadius: "3px",
              }}
            >
              {String(i + 1).padStart(2, "0")} {d.domain}
            </div>
          ))}
        </div>

        {/* Dashboard grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",
          }}
        >
          {/* Languages — full width */}
          <div style={{ gridColumn: "span 12" }}>
            <SkillGroup
              index={1}
              domain={SKILL_DOMAINS[0].domain}
              skills={SKILL_DOMAINS[0].skills}
              featured={SKILL_DOMAINS[0].featured}
            />
          </div>

          {/* Backend — 7 cols */}
          <div
            style={{ gridColumn: "span 7" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={2}
              domain={SKILL_DOMAINS[1].domain}
              skills={SKILL_DOMAINS[1].skills}
              featured={SKILL_DOMAINS[1].featured}
            />
          </div>

          {/* Frontend — 5 cols */}
          <div
            style={{ gridColumn: "span 5" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={3}
              domain={SKILL_DOMAINS[2].domain}
              skills={SKILL_DOMAINS[2].skills}
              featured={SKILL_DOMAINS[2].featured}
            />
          </div>

          {/* Embedded — 5 cols */}
          <div
            style={{ gridColumn: "span 5" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={4}
              domain={SKILL_DOMAINS[3].domain}
              skills={SKILL_DOMAINS[3].skills}
              featured={SKILL_DOMAINS[3].featured}
            />
          </div>

          {/* AI — 7 cols */}
          <div
            style={{ gridColumn: "span 7" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={5}
              domain={SKILL_DOMAINS[4].domain}
              skills={SKILL_DOMAINS[4].skills}
              featured={SKILL_DOMAINS[4].featured}
            />
          </div>

          {/* Cloud — 6 cols */}
          <div
            style={{ gridColumn: "span 6" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={6}
              domain={SKILL_DOMAINS[5].domain}
              skills={SKILL_DOMAINS[5].skills}
              featured={SKILL_DOMAINS[5].featured}
            />
          </div>

          {/* Databases — 6 cols */}
          <div
            style={{ gridColumn: "span 6" }}
            className="skill-col-responsive"
          >
            <SkillGroup
              index={7}
              domain={SKILL_DOMAINS[6].domain}
              skills={SKILL_DOMAINS[6].skills}
              featured={SKILL_DOMAINS[6].featured}
            />
          </div>
        </div>

        {/* Footer note */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-muted)",
            marginTop: "48px",
            letterSpacing: "0.06em",
            borderTop: "1px solid var(--color-border)",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "var(--color-accent)" }}>✦</span> Highlighted
          domains represent primary depth (languages, embedded systems).{" "}
          <span style={{ color: "var(--color-signal)" }}>
            {SKILL_DOMAINS.reduce((acc, d) => acc + d.skills.length, 0)} total
            signals
          </span>{" "}
          across 7 domains.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skill-col-responsive {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
