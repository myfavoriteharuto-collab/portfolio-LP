"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const steps = [
  { num: "01", icon: "💡", title: "課題の発見", desc: "現場や日常の「これ不便」を見逃さず、解決すべき課題として定義する", tool: "Claude / 観察・メモ" },
  { num: "02", icon: "📐", title: "設計・構造化", desc: "妥協点を作らないよう、ユーザー・技術・制約を整理して設計に落とす", tool: "Claude Code / Notion" },
  { num: "03", icon: "⌨️", title: "実装・作り込み", desc: "Claude Codeとペアプロしながら、細部まで動作と品質にこだわって実装する", tool: "Claude Code / GitHub" },
  { num: "04", icon: "📈", title: "検証・磨き込み", desc: "「これで十分」と思ってからもう一歩。ユーザー視点で使い続けて改善する", tool: "Claude / 実運用フィードバック" },
  { num: "05", icon: "🚀", title: "リリース・継続", desc: "動くものを世に出し、実際に使われる中で課題を見つけ、また作り込む", tool: "Vercel / Supabase" },
];

export default function Workflow() {
  return (
    <SectionShell
      id="workflow" num="03" title="AI共創ワークフロー" kicker="WORKFLOW"
      lead={<>AIを"相棒"として、細部まで<br />妥協せず作り込む。</>}
      ctaLabel="View more" ctaVariant="blue"
      sidebar={
        <div>
          {/* Steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8, alignItems: "start", marginTop: 10 }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{ position: "relative", textAlign: "center", padding: 6 }}
              >
                <div style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 13, color: "var(--muted)", fontWeight: 800, letterSpacing: ".1em", marginBottom: 8 }}>{s.num}</div>
                <div style={{ width: 120, height: 120, borderRadius: "50%", margin: "0 auto", background: "radial-gradient(circle at 50% 40%, #fff 0 50%, #eaf4ff 70%, #d6ecfa 100%)", border: "1px solid var(--line)", display: "grid", placeItems: "center", fontSize: 42, boxShadow: "0 16px 26px -22px rgba(38,185,235,.45)", position: "relative" }}>
                  {s.icon}
                  {i < steps.length - 1 && (
                    <Image src="/assets/arrow_orange.png" alt="" width={28} height={14}
                      style={{ position: "absolute", top: 55, right: -14, opacity: 0.7 }} />
                  )}
                </div>
                <h4 style={{ margin: "14px 0 6px", fontSize: 15, fontWeight: 900 }}>{s.title}</h4>
                <p style={{ margin: 0, fontSize: 11.5, color: "var(--ink-2)", lineHeight: 1.85 }}>{s.desc}</p>
                <span style={{ marginTop: 12, display: "inline-block", padding: "6px 13px", borderRadius: 999, background: "#f1f6fc", border: "1px solid var(--line)", fontSize: 11, fontWeight: 700, color: "var(--ink-2)" }}>{s.tool}</span>
              </motion.div>
            ))}
          </div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: 36, background: "#0e1424", color: "#cfe6ff", borderRadius: 14, padding: "14px 18px", fontFamily: "var(--font-mono), monospace", fontSize: 14, display: "flex", alignItems: "center", gap: 18, boxShadow: "0 16px 28px -22px rgba(15,27,45,.45)" }}
          >
            <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, display: "inline-block" }} />)}
            </div>
            <div style={{ flex: 1, letterSpacing: ".02em" }}>
              <span style={{ color: "#7fdaf3" }}>AI</span> × <span style={{ color: "#7fdaf3" }}>Human</span> = <span style={{ color: "#a486ff", fontWeight: 700, margin: "0 4px" }}>妥協なき創作</span>を、現実に変える。
            </div>
            <div style={{ color: "#7c8aa3", flexShrink: 0 }}>{"< >"}</div>
          </motion.div>
        </div>
      }
    />
  );
}
