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
        padding: "22px 24px",
        backgroundColor: "var(--color-surface)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        cursor: "default",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-muted)",
            letterSpacing: "0.06em",
          }}
        >
          {num}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--color-text)",
            letterSpacing: "0.01em",
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
          lineHeight: 1.65,
          color: "var(--color-muted)",
        }}
      >
        {description}
      </p>

      {/* Metric */}
      <div
        style={{
          borderLeft: "2px solid var(--color-signal)",
          paddingLeft: "10px",
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
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
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
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
          <Github size={12} />
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
              gap: "5px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-accent)",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ExternalLink size={12} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
