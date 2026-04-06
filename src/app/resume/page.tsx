"use client";

import { Download, ExternalLink } from "lucide-react";

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
          maxWidth: "960px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
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
                marginBottom: "10px",
              }}
            >
              05 / resume
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: "var(--color-text)",
              }}
            >
              Resume
            </h1>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", marginTop: "8px" }}>
            <a
              href="/lucas_pham_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--color-muted)",
                textDecoration: "none",
                padding: "10px 16px",
                borderRadius: "4px",
                border: "1px solid var(--color-border)",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.borderColor = "var(--color-muted)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <ExternalLink size={13} />
              Open
            </a>
            <a
              href="/lucas_pham_resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                backgroundColor: "var(--color-accent)",
                textDecoration: "none",
                padding: "10px 18px",
                borderRadius: "4px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </div>

        {/* PDF embed */}
        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <iframe
            src="/lucas_pham_resume.pdf"
            style={{
              width: "100%",
              height: "85vh",
              minHeight: "600px",
              border: "none",
              display: "block",
            }}
            title="Lucas Pham Resume"
          />
        </div>
      </div>
    </div>
  );
}
