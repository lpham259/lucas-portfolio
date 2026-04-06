interface TimelineEntry {
  org: string;
  role: string;
  period: string;
  bullets: string[];
  type: "work" | "education";
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: "7px",
          top: "8px",
          bottom: "8px",
          width: "1px",
          backgroundColor: "var(--color-border)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {entries.map((entry, i) => (
          <div
            key={i}
            style={{ display: "flex", gap: "28px", position: "relative" }}
          >
            {/* Dot */}
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                border: `2px solid ${
                  entry.type === "education"
                    ? "var(--color-signal)"
                    : "var(--color-accent)"
                }`,
                backgroundColor: "var(--color-bg)",
                flexShrink: 0,
                marginTop: "2px",
                boxShadow:
                  entry.type === "education"
                    ? "0 0 8px rgba(0,229,160,0.4)"
                    : "0 0 8px rgba(255,90,31,0.4)",
              }}
            />

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--color-text)",
                  }}
                >
                  {entry.org}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color:
                      entry.type === "education"
                        ? "var(--color-signal)"
                        : "var(--color-accent)",
                    textTransform: "uppercase",
                    padding: "2px 7px",
                    border: `1px solid ${
                      entry.type === "education"
                        ? "rgba(0,229,160,0.25)"
                        : "rgba(255,90,31,0.25)"
                    }`,
                    borderRadius: "3px",
                  }}
                >
                  {entry.type === "education" ? "edu" : "work"}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "4px",
                }}
              >
                {entry.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-muted)",
                  marginBottom: "12px",
                  letterSpacing: "0.04em",
                }}
              >
                {entry.period}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {entry.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      lineHeight: 1.65,
                      color: "var(--color-muted)",
                      paddingLeft: "16px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: entry.type === "education"
                          ? "var(--color-signal)"
                          : "var(--color-accent)",
                      }}
                    >
                      →
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { TimelineEntry };
