"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const topics = [
  { label: "マルチモーダル理解", variant: "" },
  { label: "プロンプト最適化", variant: "l" },
  { label: "自己教師あり学習", variant: "o" },
  { label: "人間中心のAIインタラクション", variant: "p" },
];

const topicColor = { "": "var(--blue)", l: "var(--lime-2)", o: "var(--orange)", p: "var(--purple)" };
const topicShadow = { "": "rgba(38,185,235,.18)", l: "rgba(164,214,28,.2)", o: "rgba(255,122,31,.18)", p: "rgba(164,134,255,.2)" };

export default function Research() {
  return (
    <SectionShell
      id="research" num="02" title="研究実績" kicker="RESEARCH"
      lead={<>国際会議での発表・論文掲載など、<br />学際的な研究で新しい知を追求。</>}
      ctaLabel="View more" ctaVariant="lime"
      decorLeft={<Image src="/assets/sparkle_purple.png" alt="" width={30} height={30} style={{ position: "absolute", left: 30, top: 60, pointerEvents: "none" }} />}
      sidebar={
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {/* ACM MM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(15,27,45,.2)" }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", position: "relative", overflow: "hidden", transition: "box-shadow .25s" }}
          >
            <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, color: "#fff", fontWeight: 800, fontSize: 11.5, marginBottom: 10, background: "linear-gradient(180deg,#5cd0f0,#0aa3da)" }}>国際会議発表</span>
            <div style={{ aspectRatio: "16/8", borderRadius: 12, marginBottom: 14, background: "linear-gradient(180deg,#eaf4ff,#f6fbff)", border: "1px solid var(--line)", display: "grid", placeItems: "center" }}>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 800, fontSize: 18, color: "#0aa3da", letterSpacing: ".04em", textAlign: "center", lineHeight: 1.3 }}>
                ACM<br />Multimedia 2024
                <small style={{ display: "block", fontSize: 10.5, color: "var(--ink-2)", marginTop: 6, fontWeight: 700, letterSpacing: ".18em" }}>INTERNATIONAL CONFERENCE</small>
              </div>
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 900 }}>ACM MM 2024</h3>
            <p style={{ margin: "0 0 14px", fontSize: 11.5, lineHeight: 1.85, color: "var(--ink-2)", fontStyle: "italic" }}>"Multimodal Prompt Optimization for Video Understanding"</p>
            <div style={{ fontSize: 11.5, color: "var(--ink-2)", lineHeight: 2 }}>
              Acceptance Rate：<strong style={{ color: "var(--ink)" }}>24.3%</strong> <span style={{ color: "var(--lime-2)", fontWeight: 900 }}>🏛</span><br />
              Role：<strong style={{ color: "var(--ink)" }}>First Author</strong>
            </div>
          </motion.div>

          {/* IEEE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(15,27,45,.2)" }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", position: "relative", overflow: "hidden", transition: "box-shadow .25s" }}
          >
            <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, color: "#fff", fontWeight: 800, fontSize: 11.5, marginBottom: 10, background: "#3b4a63" }}>論文掲載</span>
            <div style={{ aspectRatio: "16/8", borderRadius: 12, marginBottom: 14, background: "linear-gradient(180deg,#eaf4ff,#f6fbff)", border: "1px solid var(--line)", display: "grid", placeItems: "center" }}>
              <div style={{ fontFamily: "var(--font-mono), monospace", fontWeight: 800, fontSize: 18, color: "#3b4a63", letterSpacing: ".04em", textAlign: "center", lineHeight: 1.3 }}>
                IEEE Access
                <small style={{ display: "block", fontSize: 10.5, color: "var(--ink-2)", marginTop: 6, fontWeight: 700, letterSpacing: ".18em" }}>JOURNAL · 2024</small>
              </div>
            </div>
            <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 900 }}>IEEE Access 2024</h3>
            <p style={{ margin: "0 0 14px", fontSize: 11.5, lineHeight: 1.85, color: "var(--ink-2)", fontStyle: "italic" }}>"Vision-Language Alignment with Self-Supervised Reward Modeling"</p>
            <div style={{ fontSize: 11.5, color: "var(--ink-2)", lineHeight: 2 }}>
              Impact Factor：<strong style={{ color: "var(--ink)" }}>3.9</strong> <span style={{ color: "var(--lime-2)", fontWeight: 900 }}>🏛</span><br />
              Role：<strong style={{ color: "var(--ink)" }}>First Author</strong>
            </div>
          </motion.div>

          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(15,27,45,.2)" }}
            style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 18, background: "#fff", position: "relative", overflow: "hidden", transition: "box-shadow .25s" }}
          >
            <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, color: "#fff", fontWeight: 800, fontSize: 11.5, marginBottom: 10, background: "linear-gradient(180deg,#ffae5e,#ff7a1f)" }}>研究テーマ</span>
            <div style={{ aspectRatio: "16/8", borderRadius: 12, marginBottom: 14, border: "1px solid var(--line)", background: "radial-gradient(circle at 25% 40%, #ffd1e2 0 18px, transparent 19px), radial-gradient(circle at 60% 30%, #c9eaff 0 22px, transparent 23px), radial-gradient(circle at 75% 60%, #ddf0a4 0 16px, transparent 17px), radial-gradient(circle at 40% 70%, #cdb6ff 0 14px, transparent 15px), linear-gradient(180deg,#fafdff,#eef6ff)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 6 }}>
              {topics.map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: topicColor[t.variant as keyof typeof topicColor], boxShadow: `0 0 0 3px ${topicShadow[t.variant as keyof typeof topicShadow]}`, flexShrink: 0, display: "inline-block" }} />
                  {t.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      }
    />
  );
}
