"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const steps = [
  { num: "01", icon: "💡", title: "アイデア発想", desc: "課題を発見し、AIと壁打ちして仮説を構築", tool: "ChatGPT / Claude" },
  { num: "02", icon: "📐", title: "設計・計画", desc: "AIと要件整理・設計。実装タスクに分解", tool: "Notion AI / Miro AI" },
  { num: "03", icon: "⌨️", title: "実装（爆速）", desc: "AIペアプロで高速実装。品質を保ちつつ量産", tool: "GitHub Copilot" },
  { num: "04", icon: "📈", title: "検証・改善", desc: "AIでテスト・分析。データドリブンに改善", tool: "LangSmith / GPT-4o" },
  { num: "05", icon: "🚀", title: "リリース・成長", desc: "素早くリリースし、ユーザーと共に成長", tool: "Vercel / Analytics" },
];

export default function Workflow() {
  return (
    <SectionShell
      id="workflow" num="03" title="AI共創ワークフロー" kicker="WORKFLOW"
      lead={<>AIを"相棒"として、アイデアから<br />リリースまでを爆速で回す。</>}
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
              <span style={{ color: "#7fdaf3" }}>AI</span> × <span style={{ color: "#7fdaf3" }}>Human</span> = <span style={{ color: "#a486ff", fontWeight: 700, margin: "0 4px" }}>∞</span> の可能性を、プロダクトと研究で証明する。
            </div>
            <div style={{ color: "#7c8aa3", flexShrink: 0 }}>{"< >"}</div>
          </motion.div>
        </div>
      }
    />
  );
}
