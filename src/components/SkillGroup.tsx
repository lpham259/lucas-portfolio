import TechTag from "./TechTag";

interface SkillGroupProps {
  domain: string;
  index: number;
  skills: string[];
}

export default function SkillGroup({ domain, index, skills }: SkillGroupProps) {
  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        padding: "20px 22px",
        backgroundColor: "var(--color-surface)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: "100%",
          backgroundColor: "var(--color-border)",
          borderRadius: "6px 0 0 6px",
        }}
      />

      <div style={{ paddingLeft: "4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {String(index).padStart(2, "0")}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--color-text)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            {domain}
          </h3>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
