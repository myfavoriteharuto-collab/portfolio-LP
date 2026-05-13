"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const links = [
  { href: "#top", label: "TOP" },
  { href: "#projects", label: "開発実績" },
  { href: "#research", label: "研究実績" },
  { href: "#workflow", label: "ワークフロー" },
  { href: "#skills", label: "スキル・市場価値" },
  { href: "#contact", label: "コンタクト" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(247,251,254,.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: borderOpacity.get() > 0.5 ? "rgba(0,0,0,.06)" : "transparent",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px", maxWidth: 1280, margin: "0 auto" }}>
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/assets/logo.png" alt="logo" width={38} height={38} />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: ".02em" }}>
                AI<span style={{ color: "var(--blue)", margin: "0 4px", fontWeight: 500 }}>×</span>
                Code<span style={{ color: "var(--blue)", margin: "0 4px", fontWeight: 500 }}>×</span>
                Research
              </div>
              <div style={{ fontSize: 10.5, color: "var(--muted)", marginTop: 3, letterSpacing: ".04em" }}>Speed. Intelligence. Impact.</div>
            </div>
          </div>

          {/* Nav links – desktop */}
          <div className="nav-links">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={href === "#top" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } : undefined}
                style={{ position: "relative", padding: "6px 8px", transition: "color .2s" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--blue-2)";
                  (e.currentTarget.querySelector(".ul") as HTMLElement)!.style.width = "100%";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--ink-2)";
                  (e.currentTarget.querySelector(".ul") as HTMLElement)!.style.width = "0";
                }}
              >
                {label}
                <span className="ul" style={{ position: "absolute", left: 0, bottom: -2, width: 0, height: 2, background: "var(--blue)", borderRadius: 2, transition: "width .25s", display: "block" }} />
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "11px 22px", borderRadius: 999,
                background: "linear-gradient(180deg,#5cd0f0,#26b9eb)",
                color: "#fff", fontWeight: 700, fontSize: 13.5,
                boxShadow: "0 8px 18px -8px rgba(38,185,235,.6), inset 0 1px 0 rgba(255,255,255,.45)",
              }}
            >
              {"Let's Connect"}
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,.25)", display: "grid", placeItems: "center", fontSize: 11 }}>→</span>
            </motion.a>

            {/* Hamburger – mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="16" y2="16" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="4" x2="4" y2="16" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="5" x2="17" y2="5" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="17" y2="10" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="15" x2="17" y2="15" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href === "#top" ? undefined : href}
            onClick={(e) => {
              if (href === "#top") e.preventDefault();
              handleNavClick(href);
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
