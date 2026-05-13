"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const stack = [
  { label: "TypeScript", abbr: "TS", bg: "#3178c6" },
  { label: "Next.js", abbr: "N", bg: "#0a0a0a" },
  { label: "React", abbr: "⚛", bg: "#149eca" },
  { label: "Python", abbr: "Py", bg: "linear-gradient(135deg,#3776ab 50%,#ffd43b 50%)" },
  { label: "Supabase", abbr: "SB", bg: "#3fcf8e" },
  { label: "Gemini API", abbr: "G", bg: "linear-gradient(135deg,#4285f4,#9b59b6)" },
  { label: "OpenAI Whisper", abbr: "W", bg: "#10a37f" },
  { label: "Tailwind CSS", abbr: "TW", bg: "#06b6d4" },
  { label: "Vercel", abbr: "V", bg: "#0a0a0a" },
  { label: "PostgreSQL", abbr: "PG", bg: "#336791" },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills" num="04" title="スキル・市場価値" kicker="SKILLS & MARKET VALUE"
      lead={<>実際に使ってきた技術と、<br />現在進行形の活動。</>}
      ctaLabel="LAPRASで見る" ctaHref="https://lapras.com/public/haruto-miyakawa" ctaExternal ctaVariant="lime"
      decorRight={<Image src="/assets/arrow_curve.png" alt="" width={80} height={40} style={{ position: "absolute", right: -10, top: "40%", opacity: 0.8, pointerEvents: "none" }} />}
      sidebar={
        <div className="layout-2col">
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff" }}
          >
            <h5 style={{ margin: "0 0 14px", textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--ink-2)", background: "#f1f6fc", borderRadius: 8, padding: 8 }}>技術スタック</h5>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10 }}>
              {stack.map(s => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "8px 4px", border: "1px solid var(--line)", borderRadius: 10, background: "#fff" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 7, display: "grid", placeItems: "center", color: "#fff", fontWeight: 900, fontSize: 11, letterSpacing: ".02em", background: s.bg }}>{s.abbr}</div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-2)", textAlign: "center" }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, textAlign: "center", fontSize: 10.5, color: "var(--muted)" }}>※ and more...</div>
          </motion.div>

          {/* LAPRAS profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
          >
            <h5 style={{ margin: 0, textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--ink-2)", background: "#f1f6fc", borderRadius: 8, padding: 8, width: "100%" }}>LAPRAS プロフィール</h5>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 72, height: 72, borderRadius: 18, margin: "0 auto", background: "linear-gradient(135deg,#eaf4ff,#cfe9ff)", border: "1px solid #cfeefb", display: "grid", placeItems: "center" }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect x="2" y="2" width="32" height="32" rx="8" fill="#26b9eb" fillOpacity=".12" />
                  <path d="M10 26L18 10l8 16" stroke="#26b9eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 21h10" stroke="#26b9eb" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.8 }}>
                技術スタック・開発実績・研究活動を<br />LAPRASでまとめて公開しています。
              </p>
            </div>
            <a
              href="https://lapras.com/public/haruto-miyakawa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "11px 0", borderRadius: 12, background: "linear-gradient(180deg,#7fdaf3,#26b9eb)", color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}
            >
              LAPRASで詳しく見る →
            </a>
          </motion.div>
        </div>
      }
    />
  );
}
