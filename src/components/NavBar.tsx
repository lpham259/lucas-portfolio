"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "home", num: "01" },
  { href: "/projects", label: "projects", num: "02" },
  { href: "/skills", label: "skills", num: "03" },
  { href: "/about", label: "about", num: "04" },
  { href: "/resume", label: "resume", num: "05" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "rgba(6,8,10,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "var(--color-text)",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          LP
          <span style={{ color: "var(--color-accent)", marginLeft: "2px" }}>
            .
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: active ? 600 : 400,
                  letterSpacing: "0.05em",
                  color: active ? "var(--color-accent)" : "var(--color-muted)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: active
                    ? "1px solid rgba(255,90,31,0.3)"
                    : "1px solid transparent",
                  backgroundColor: active
                    ? "rgba(255,90,31,0.06)"
                    : "transparent",
                  transition: "color 0.15s, border-color 0.15s, background 0.15s",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ color: "var(--color-border)", marginRight: "4px" }}>
                  {link.num}
                </span>
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume"
            style={{
              marginLeft: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "var(--color-bg)",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "4px",
              backgroundColor: "var(--color-accent)",
              textTransform: "uppercase",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--color-text)",
            display: "none",
          }}
          className="show-mobile"
        >
          <div
            style={{
              width: "20px",
              height: "2px",
              background: "currentColor",
              marginBottom: "5px",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "2px",
              background: "currentColor",
              marginBottom: "5px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "2px",
              background: "currentColor",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "16px 24px",
            backgroundColor: "var(--color-bg)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-text)",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid var(--color-border)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "var(--color-accent)", marginRight: "8px" }}>
                {link.num}
              </span>
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
