import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Delayd",
    description:
      "Fintech startup app with iOS, Android, and React web clients backed by a Python/FastAPI payment backend.",
    metric:
      "Live in production — idempotent payment processing across dual providers",
    tags: ["Swift", "Kotlin", "React", "FastAPI", "PostgreSQL", "MySQL", "Supabase"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "WebDUPER",
    description:
      "AI-powered web scraping tool using Claude Sonnet 4 API for automated HTML generation.",
    metric:
      "95% reduction in manual coding effort, 90% anti-bot detection success rate",
    tags: ["Python", "FastAPI", "React", "TypeScript", "Claude API", "LangChain"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "Real-Time Audio Pipeline",
    description:
      "GPU-accelerated C++ signal processing pipeline with FFT-based filtering and convolution reverb.",
    metric: "Sub-10ms latency, 3x throughput over CPU-only baseline",
    tags: ["C++", "CUDA", "cuFFT", "PortAudio", "Linux"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "PintOS",
    description:
      "Fully implemented OS kernel in C covering scheduling, virtual memory, and system calls.",
    metric:
      "Built from scratch — priority scheduling, demand paging, full syscall interface",
    tags: ["C", "x86 Assembly", "QEMU", "Linux"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "StreamShare",
    description:
      "Scalable video streaming platform with fault-tolerant distributed transcoding on GCP.",
    metric: "99.9% processing reliability across a global user base",
    tags: ["Next.js", "TypeScript", "Python", "Firebase", "GCP", "Pub/Sub", "Cloud Run"],
    githubUrl: "https://github.com/lpham259",
  },
  {
    name: "G-Research Hackathon",
    description:
      "Real-time financial data pipeline with ML forecasting models on equity data.",
    metric:
      "18% accuracy improvement over baseline, 25% compute overhead reduction",
    tags: ["Python", "SQL", "ML", "NumPy", "pandas"],
    githubUrl: "https://github.com/lpham259",
  },
];

export default function ProjectsPage() {
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
            02 / projects
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
            All Projects
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
            A collection of systems, tools, and products built across fintech,
            ML, embedded, and cloud domains.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} index={i + 1} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
