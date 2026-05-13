"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  num: string;
  title: string;
  kicker: string;
  lead: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "blue" | "lime";
  sidebar: ReactNode;
  decorLeft?: ReactNode;
  decorRight?: ReactNode;
}

export default function SectionShell({
  id, num, title, kicker, lead, ctaLabel, ctaHref = "#", ctaVariant = "blue",
  sidebar, decorLeft, decorRight,
}: Props) {
  return (
    <div className="relative" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px" }}>
      {decorLeft}
      {decorRight}
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        style={{
          position: "relative",
          background: "#fff",
          borderRadius: 28,
          padding: "50px 48px",
          margin: "24px 0",
          boxShadow: "0 30px 60px -50px rgba(15,27,45,.25)",
          scrollMarginTop: "80px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 500, fontSize: 64, lineHeight: 1, letterSpacing: "-.02em", marginBottom: 14 }}>{num}</div>
            <h2 style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.2, letterSpacing: ".01em", margin: 0 }}>{title}</h2>
            <div style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, fontSize: 11.5, color: "var(--muted)", letterSpacing: ".32em", margin: "6px 0 18px" }}>{kicker}</div>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 2, margin: "0 0 22px" }}>{lead}</p>
            {ctaLabel && (
              <a
                href={ctaHref}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "11px 22px", borderRadius: 999,
                  background: ctaVariant === "lime"
                    ? "linear-gradient(180deg,#cdee64,#a4d61c)"
                    : "linear-gradient(180deg,#7fdaf3,#26b9eb)",
                  color: "#fff", fontWeight: 800, fontSize: 13,
                  boxShadow: ctaVariant === "lime"
                    ? "0 8px 18px -10px rgba(164,214,28,.55)"
                    : "0 8px 18px -10px rgba(38,185,235,.6)",
                  transition: "transform .2s, box-shadow .2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "none")}
              >
                <span>{ctaLabel}</span>
                <span style={{ width: 14, height: 1.5, background: "#fff", position: "relative", display: "inline-block" }}>
                  <span style={{ position: "absolute", right: 0, top: -3, width: 7, height: 7, borderTop: "1.5px solid #fff", borderRight: "1.5px solid #fff", transform: "rotate(45deg)", display: "block" }} />
                </span>
              </a>
            )}
          </div>
          <div>{sidebar}</div>
        </div>
      </motion.section>
    </div>
  );
}
