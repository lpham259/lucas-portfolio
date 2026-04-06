interface TechTagProps {
  label: string;
  variant?: "default" | "accent" | "signal";
}

export default function TechTag({ label, variant = "default" }: TechTagProps) {
  const styles: React.CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "3px 8px",
    borderRadius: "3px",
    border: "1px solid",
    lineHeight: 1.5,
    whiteSpace: "nowrap" as const,
    ...(variant === "accent"
      ? {
          color: "var(--color-accent)",
          borderColor: "rgba(255,90,31,0.35)",
          backgroundColor: "rgba(255,90,31,0.07)",
        }
      : variant === "signal"
      ? {
          color: "var(--color-signal)",
          borderColor: "rgba(0,229,160,0.3)",
          backgroundColor: "rgba(0,229,160,0.06)",
        }
      : {
          color: "var(--color-muted)",
          borderColor: "var(--color-border)",
          backgroundColor: "transparent",
        }),
  };

  return <span style={styles}>{label}</span>;
}
