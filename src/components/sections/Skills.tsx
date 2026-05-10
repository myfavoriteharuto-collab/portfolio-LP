"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const stack = [
  { label: "TypeScript", abbr: "TS", bg: "#3178c6" },
  { label: "Next.js", abbr: "N", bg: "#0a0a0a" },
  { label: "React", abbr: "⚛", bg: "#149eca" },
  { label: "Python", abbr: "Py", bg: "linear-gradient(135deg,#3776ab 50%,#ffd43b 50%)" },
  { label: "FastAPI", abbr: "F", bg: "#0a8b6b" },
  { label: "Node.js", abbr: "N", bg: "#3c873a" },
  { label: "PostgreSQL", abbr: "PG", bg: "#336791" },
  { label: "MongoDB", abbr: "M", bg: "#13aa52" },
  { label: "Tailwind", abbr: "TW", bg: "#06b6d4" },
  { label: "Docker", abbr: "🐳", bg: "#1f8de4" },
  { label: "AWS", abbr: "AWS", bg: "#232f3e" },
  { label: "GH Actions", abbr: "GH", bg: "#0a0a0a" },
];

const bars = [
  { label: "バックエンド", value: 72.1, pct: 72 },
  { label: "フロントエンド", value: 75.4, pct: 75 },
  { label: "AI/機械学習", value: 78.3, pct: 78 },
  { label: "インフラ", value: 64.8, pct: 65 },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills" num="04" title="スキル・市場価値" kicker="SKILLS & MARKET VALUE"
      lead={<>客観的な指標で、技術力と<br />市場価値を可視化。</>}
      ctaLabel="View more" ctaVariant="lime"
      decorRight={<Image src="/assets/arrow_curve.png" alt="" width={80} height={40} style={{ position: "absolute", right: -10, top: "40%", opacity: 0.8, pointerEvents: "none" }} />}
      sidebar={
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff" }}
          >
            <h5 style={{ margin: "0 0 14px", textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--ink-2)", background: "#f1f6fc", borderRadius: 8, padding: 8 }}>技術スタック</h5>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
              {stack.map(s => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "8px 4px", border: "1px solid var(--line)", borderRadius: 10, background: "#fff" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 7, display: "grid", placeItems: "center", color: "#fff", fontWeight: 900, fontSize: 11, letterSpacing: ".02em", background: s.bg }}>{s.abbr}</div>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-2)", textAlign: "center" }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 10, textAlign: "center", fontSize: 10.5, color: "var(--muted)" }}>※ and more...</div>
          </motion.div>

          {/* LAPRAS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", textAlign: "center" }}
          >
            <h5 style={{ margin: "0 0 14px", textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--ink-2)", background: "#f1f6fc", borderRadius: 8, padding: 8 }}>LAPRAS スコア</h5>
            <div style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 54, fontWeight: 800, lineHeight: 1, color: "var(--blue)", letterSpacing: "-.02em" }}>
              4.28
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-2)", marginLeft: 8, background: "#eaf4ff", padding: "3px 8px", borderRadius: 6, verticalAlign: "middle" }}>Top 3.2%</span>
            </div>
            <div style={{ position: "relative", margin: "14px auto 0", width: 240, height: 200 }}>
              <svg viewBox="0 0 240 200" width="100%" height="100%">
                <g fill="none" stroke="#dde7f3" strokeWidth="1">
                  <polygon points="120,18 217,75 187,180 53,180 23,75" />
                  <polygon points="120,50 188,90 168,160 72,160 52,90" />
                  <polygon points="120,82 158,105 148,140 92,140 82,105" />
                </g>
                <g stroke="#eaf2fa" strokeWidth="1">
                  <line x1="120" y1="100" x2="120" y2="18" />
                  <line x1="120" y1="100" x2="217" y2="75" />
                  <line x1="120" y1="100" x2="187" y2="180" />
                  <line x1="120" y1="100" x2="53" y2="180" />
                  <line x1="120" y1="100" x2="23" y2="75" />
                </g>
                <polygon points="120,30 198,82 178,170 62,168 38,82" fill="rgba(38,185,235,.25)" stroke="#26b9eb" strokeWidth="2" />
                <g fill="#26b9eb">
                  <circle cx="120" cy="30" r="4" /><circle cx="198" cy="82" r="4" />
                  <circle cx="178" cy="170" r="4" /><circle cx="62" cy="168" r="4" />
                  <circle cx="38" cy="82" r="4" />
                </g>
              </svg>
              {[
                { cls: { top: -2, left: "50%", transform: "translateX(-50%)", textAlign: "center" as const }, label: "技術力", val: "4.4" },
                { cls: { top: 48, right: -22 }, label: "ビジネス力", val: "3.9" },
                { cls: { bottom: 8, right: -6 }, label: "発信力", val: "4.3" },
                { cls: { bottom: 8, left: -6 }, label: "協調性", val: "4.1" },
                { cls: { top: 48, left: -22 }, label: "学習能力", val: "4.5" },
              ].map(({ cls, label, val }) => (
                <div key={label} style={{ position: "absolute", fontSize: 11, fontWeight: 800, color: "var(--ink)", ...cls }}>
                  {label}<small style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--ink-2)" }}>{val}</small>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Findy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", textAlign: "center" }}
          >
            <h5 style={{ margin: "0 0 14px", textAlign: "center", fontSize: 13, fontWeight: 800, color: "var(--ink-2)", background: "#f1f6fc", borderRadius: 8, padding: 8 }}>Findy スキル偏差値</h5>
            <div style={{ fontSize: 11.5, color: "var(--ink-2)", fontWeight: 700, marginBottom: 6 }}>総合スコア</div>
            <div style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 54, fontWeight: 800, lineHeight: 1, color: "var(--blue)", letterSpacing: "-.02em" }}>
              73.6
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-2)", marginLeft: 8, background: "#eaf4ff", padding: "3px 8px", borderRadius: 6, verticalAlign: "middle" }}>上位 6%</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
              {bars.map((b, i) => (
                <div key={b.label} style={{ display: "grid", gridTemplateColumns: "80px 1fr 36px", alignItems: "center", gap: 10, fontSize: 11.5, fontWeight: 700, color: "var(--ink)" }}>
                  <span>{b.label}</span>
                  <div style={{ height: 8, borderRadius: 5, background: "#eaf4ff", overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      style={{ height: "100%", borderRadius: 5, background: "linear-gradient(90deg,#7fdaf3,#26b9eb)" }}
                    />
                  </div>
                  <span style={{ textAlign: "right", color: "var(--blue)", fontWeight: 800 }}>{b.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      }
    />
  );
}
