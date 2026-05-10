"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import ProjectModal, { Project } from "@/components/ui/ProjectModal";

const projects: Project[] = [
  {
    id: "1",
    tag: "AI × SaaS",
    tagColor: "b",
    title: "AI議事録サマライザー",
    desc: "GPT-4o × Whisperで議事録を自動要約。ハルシネーションを自動検知する実務特化型AIツール。チームの生産性を最大化するSaaS。",
    chips: [
      { label: "Next.js" }, { label: "TypeScript" }, { label: "tRPC" }, { label: "PostgreSQL" },
    ],
    period: "2週間",
    team: "個人開発",
  },
  {
    id: "2",
    tag: "AI × Web",
    tagColor: "g",
    title: "パーソナルコーデ提案AI",
    desc: "画像認識×スタイル分析で最適なコーデを提案。ファッション体験をパーソナライズ。",
    chips: [
      { label: "React" }, { label: "Python" }, { label: "FastAPI" }, { label: "MongoDB" },
    ],
    period: "3週間",
    team: "個人開発",
  },
  {
    id: "3",
    tag: "AI × Mobile",
    tagColor: "o",
    title: "AI英会話トレーナー",
    desc: "AIキャラクターとリアルタイムで会話練習。スコアリングで学習を可視化。",
    chips: [
      { label: "Flutter" }, { label: "TypeScript" }, { label: "OpenAI API" }, { label: "Supabase" },
    ],
    period: "2週間",
    team: "個人開発",
  },
];

const tagGrad = {
  b: "linear-gradient(180deg,#5cd0f0,#26b9eb)",
  g: "linear-gradient(180deg,#cdee64,#9ec918)",
  o: "linear-gradient(180deg,#ffae5e,#ff7a1f)",
};

function MiniDashboard() {
  return (
    <div style={{ position: "absolute", inset: "22px 14px 14px", display: "grid", gridTemplateColumns: "80px 1fr", gap: 10 }}>
      <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 8 }} />
      <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 8, display: "flex", flexDirection: "column", gap: 6, padding: 10 }}>
        <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#cfe9ff,#9bd1ee)" }} />
        <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#cfe9ff,#9bd1ee)", width: "60%" }} />
        <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg,#dff09a,#b5e639)", width: "60%" }} />
        <div style={{ width: 62, height: 62, borderRadius: "50%", background: "conic-gradient(#26b9eb 0 60%, #b5e639 60% 85%, #ffd166 85% 100%)", alignSelf: "flex-end", marginLeft: "auto" }} />
      </div>
    </div>
  );
}

function MiniColumns() {
  return (
    <div style={{ position: "absolute", inset: "22px 14px 14px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
      {[0, 1, 2].map(i => <div key={i} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 8 }} />)}
    </div>
  );
}

function MiniPhone() {
  return (
    <div style={{ position: "absolute", inset: 18, display: "grid", placeItems: "center" }}>
      <div style={{ width: 120, height: 180, borderRadius: 24, background: "#fff", border: "1px solid var(--line)", boxShadow: "0 14px 24px -18px rgba(15,27,45,.35)", padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#cfe9ff,#b5e639)" }} />
        {[["70%", "#cfe9ff,#9bd1ee"], ["100%", "#eaf4ff"], ["55%", "#dff09a,#b5e639"], ["100%", "#eaf4ff"], ["70%", "#cfe9ff,#9bd1ee"]].map(([w, bg], i) => (
          <div key={i} style={{ height: 8, borderRadius: 4, background: bg.includes(",") ? `linear-gradient(90deg,${bg})` : bg, width: w }} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <SectionShell
        id="projects" num="01" title="開発実績" kicker="PROJECTS"
        lead={<>AIを活用した高速開発で、<br />ユーザー価値の高いプロダクトを<br />スピーディに実装。</>}
        ctaLabel="View more" ctaVariant="blue"
        decorLeft={<Image src="/assets/dots.png" alt="" width={90} height={90} style={{ position: "absolute", left: -60, top: 30, opacity: 0.45, pointerEvents: "none" }} />}
        decorRight={<Image src="/assets/sparkle_green.png" alt="" width={30} height={30} style={{ position: "absolute", right: 20, bottom: 90, pointerEvents: "none" }} />}
        sidebar={
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -20px rgba(15,27,45,.2)" }}
                onClick={() => setSelected(p)}
                style={{ position: "relative", border: "1px solid var(--line)", borderRadius: 18, padding: 14, background: "#fff", display: "flex", flexDirection: "column", cursor: "pointer", transition: "box-shadow .25s" }}
              >
                <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "6px 16px", borderRadius: 999, color: "#fff", fontWeight: 800, fontSize: 11.5, letterSpacing: ".04em", background: tagGrad[p.tagColor], boxShadow: "0 6px 14px -8px rgba(15,27,45,.35)", whiteSpace: "nowrap" }}>
                  {p.tag}
                </span>
                {/* Screenshot area */}
                <div style={{ aspectRatio: "16/10", borderRadius: 12, marginTop: 10, background: "radial-gradient(circle at 30% 35%, #cfe9ff 0 70px, transparent 71px), radial-gradient(circle at 70% 65%, #e3f7c8 0 60px, transparent 61px), linear-gradient(180deg,#fafdff,#eef6ff)", border: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 8, left: 10, display: "flex", gap: 5 }}>
                    {["#ff5f57", "#febc2e", "#28c840"].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />)}
                  </div>
                  {p.tagColor === "b" && <MiniDashboard />}
                  {p.tagColor === "g" && <MiniColumns />}
                  {p.tagColor === "o" && <MiniPhone />}
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 16.5, margin: "14px 4px 8px", letterSpacing: ".01em" }}>{p.title}</h3>
                <p style={{ margin: "0 4px", fontSize: 12, lineHeight: 1.85, color: "var(--ink-2)", flexGrow: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 4px 0" }}>
                  {p.chips.map(c => (
                    <span key={c.label} style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 11, fontWeight: 700, color: "var(--ink-2)", padding: "5px 10px", borderRadius: 999, background: "#f1f6fc", border: "1px solid var(--line)" }}>{c.label}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 24, margin: "16px 4px 4px", paddingTop: 14, borderTop: "1px dashed var(--line)", fontSize: 11.5, color: "var(--ink-2)" }}>
                  <span>開発期間：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{p.period}</strong></span>
                  <span>チーム：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{p.team}</strong></span>
                </div>
                <div style={{ marginTop: 10, textAlign: "center", fontSize: 11, color: "var(--blue)", fontWeight: 700 }}>クリックで詳細 →</div>
              </motion.div>
            ))}
          </div>
        }
      />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
