import SkillGroup from "@/components/SkillGroup";

const SKILL_DOMAINS = [
  {
    domain: "Languages",
    skills: ["C/C++", "Python", "Go", "Java", "JavaScript/TypeScript", "SQL", "Rust", "Swift", "Kotlin"],
  },
  {
    domain: "Backend & APIs",
    skills: ["FastAPI", "Node.js", "REST", "GraphQL", "WebSockets", "Prisma ORM", "Springboot"],
  },
  {
    domain: "Frontend & Mobile",
    skills: ["React", "Next.js", "Tailwind", "iOS (Swift)", "Android (Kotlin)", "HTML/CSS"],
  },
  {
    domain: "Embedded & Systems",
    skills: ["STM32H7", "UART/SPI/I2C", "CUDA", "QEMU", "Linux", "Real-time systems"],
  },
  {
    domain: "AI & ML",
    skills: ["Claude API", "LangChain", "PyTorch", "Prompt Engineering", "LLM Evaluation", "NumPy", "pandas"],
  },
  {
    domain: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS IoT Core", "CodePipeline", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    domain: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase", "DynamoDB"],
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
        <div style={{ marginBottom: "56px" }}>
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
            }}
          >
            Skills
          </h1>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",
          }}
        >
          <div style={{ gridColumn: "span 12" }}>
            <SkillGroup index={1} domain={SKILL_DOMAINS[0].domain} skills={SKILL_DOMAINS[0].skills} />
          </div>

          <div style={{ gridColumn: "span 7" }} className="skill-col-responsive">
            <SkillGroup index={2} domain={SKILL_DOMAINS[1].domain} skills={SKILL_DOMAINS[1].skills} />
          </div>
          <div style={{ gridColumn: "span 5" }} className="skill-col-responsive">
            <SkillGroup index={3} domain={SKILL_DOMAINS[2].domain} skills={SKILL_DOMAINS[2].skills} />
          </div>

          <div style={{ gridColumn: "span 5" }} className="skill-col-responsive">
            <SkillGroup index={4} domain={SKILL_DOMAINS[3].domain} skills={SKILL_DOMAINS[3].skills} />
          </div>
          <div style={{ gridColumn: "span 7" }} className="skill-col-responsive">
            <SkillGroup index={5} domain={SKILL_DOMAINS[4].domain} skills={SKILL_DOMAINS[4].skills} />
          </div>

          <div style={{ gridColumn: "span 6" }} className="skill-col-responsive">
            <SkillGroup index={6} domain={SKILL_DOMAINS[5].domain} skills={SKILL_DOMAINS[5].skills} />
          </div>
          <div style={{ gridColumn: "span 6" }} className="skill-col-responsive">
            <SkillGroup index={7} domain={SKILL_DOMAINS[6].domain} skills={SKILL_DOMAINS[6].skills} />
          </div>
        </div>
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
