"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const chips = ["Python", "RoBERTa", "Cosine Similarity", "Explainable AI", "NLP"];

const meta = [
  { label: "発表", value: "IIAI AAI Winter 2025（国際会議）" },
  { label: "掲載", value: "IEEE Computer Society" },
  { label: "役割", value: "共著（7名）" },
  { label: "時期", value: "学部1年次（2025年）" },
];

export default function Research() {
  return (
    <SectionShell
      id="research" num="02" title="研究実績" kicker="RESEARCH"
      lead={<>学部1年次より国際会議での<br />共同研究に参加。AIと自然言語<br />処理の研究実装を経験。</>}
      ctaLabel="論文を読む" ctaHref="https://www.computer.org/csdl/proceedings-article/iiai-aai-winter/2025/932000a203/2eP1ndhvMeA" ctaExternal ctaVariant="lime"
      decorLeft={<Image src="/assets/sparkle_purple.png" alt="" width={30} height={30} style={{ position: "absolute", left: 30, top: 60, pointerEvents: "none" }} />}
      sidebar={
        <div className="layout-2col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(15,27,45,.2)" }}
            style={{ position: "relative", border: "1px solid var(--line)", borderRadius: 18, padding: 14, background: "#fff", display: "flex", flexDirection: "column", transition: "box-shadow .25s" }}
          >
            {/* Floating tag */}
            <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "6px 16px", borderRadius: 999, color: "#fff", fontWeight: 800, fontSize: 11.5, letterSpacing: ".04em", background: "linear-gradient(180deg,#5cd0f0,#26b9eb)", boxShadow: "0 6px 14px -8px rgba(15,27,45,.35)", whiteSpace: "nowrap" }}>
              共同研究 × NLP × Explainable AI
            </span>

            {/* Conference badge */}
            <div style={{ aspectRatio: "16/7", borderRadius: 12, marginTop: 10, background: "radial-gradient(circle at 30% 50%, #cfe9ff 0 60px, transparent 61px), radial-gradient(circle at 70% 40%, #e3f7c8 0 50px, transparent 51px), linear-gradient(180deg,#fafdff,#eef6ff)", border: "1px solid var(--line)", display: "grid", placeItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 900, fontSize: 15, color: "#26b9eb", letterSpacing: ".06em" }}>IIAI AAI Winter 2025</div>
                <div style={{ fontSize: 10.5, color: "var(--ink-2)", fontWeight: 800, marginTop: 5, letterSpacing: ".18em" }}>IEEE COMPUTER SOCIETY</div>
              </div>
            </div>

            <h3 style={{ fontWeight: 900, fontSize: 16.5, margin: "14px 4px 6px", letterSpacing: ".01em" }}>
              オンライン炎上リスク検出フレームワーク
            </h3>
            <p style={{ margin: "0 4px 10px", fontSize: 11.5, color: "var(--blue)", fontWeight: 700, lineHeight: 1.5 }}>
              ペルソナ条件付き評価を可能にする類似度ベースのAI検出システム
            </p>
            <p style={{ margin: "0 4px", fontSize: 12, lineHeight: 1.85, color: "var(--ink-2)", flexGrow: 1, whiteSpace: "pre-line" }}>
              {`SNS上の炎上リスクをAIで事前検知するフレームワークの共同研究。\n従来のブラックボックス型トキシシティ分類器の課題を解決するため、SAFE/OUTデータベースの切り替えによってユーザーや組織ごとの判断基準に柔軟に対応できる類似度ベースの手法を提案・実装。\n\n判定根拠として類似事例を提示する説明可能AIとしての設計も特徴。`}
            </p>

            {/* Tech chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 4px 0" }}>
              {chips.map(c => (
                <span key={c} style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 11, fontWeight: 700, color: "var(--ink-2)", padding: "5px 10px", borderRadius: 999, background: "#f1f6fc", border: "1px solid var(--line)" }}>{c}</span>
              ))}
            </div>

            {/* Meta */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", margin: "16px 4px 0", paddingTop: 14, borderTop: "1px dashed var(--line)", fontSize: 11.5, color: "var(--ink-2)" }}>
              {meta.map(m => (
                <span key={m.label}>{m.label}：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{m.value}</strong></span>
              ))}
            </div>

            {/* Link button */}
            <a
              href="https://www.computer.org/csdl/proceedings-article/iiai-aai-winter/2025/932000a203/2eP1ndhvMeA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 16, padding: "11px 0", borderRadius: 12, background: "linear-gradient(180deg,#5cd0f0,#26b9eb)", color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}
            >
              論文を見る →
            </a>
          </motion.div>
        </div>
      }
    />
  );
}
