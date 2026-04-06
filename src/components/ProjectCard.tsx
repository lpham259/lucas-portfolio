"use client";

import TechTag from "./TechTag";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  metric: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  index,
  name,
  description,
  metric,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const num = String(index).padStart(2, "0");

  return (
    <div
      className="card-hover"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        padding: "28px",
        backgroundColor: "var(--color-surface)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Index watermark */}
      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "20px",
          fontFamily: "var(--font-display)",
          fontSize: "64px",
          fontWeight: 800,
          color: "var(--color-border)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {num}
      </span>

      {/* Header */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--color-accent)",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          project.{num}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 700,
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
          }}
        >
          {name}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "var(--color-muted)",
        }}
      >
        {description}
      </p>

      {/* Metric */}
      <div
        style={{
          borderLeft: "2px solid var(--color-signal)",
          paddingLeft: "12px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            color: "var(--color-signal)",
            lineHeight: 1.5,
          }}
        >
          {metric}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "auto",
          paddingTop: "4px",
        }}
      >
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
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
          <Github size={13} />
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-accent)",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
