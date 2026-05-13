"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";
import ProjectModal, { Project } from "@/components/ui/ProjectModal";

const projects: Project[] = [
  {
    id: "1",
    tag: "業務システム × AI × PWA",
    tagColor: "b",
    title: "家電量販店向け 商品案内ガイドシステム",
    subtitle: "新人スタッフが顧客と一緒に最適な家電を選べる、現場発のAI接客支援システム",
    desc: "自身が家電量販店で新人スタッフとして働いた経験から、「商品知識の習得に時間がかかり、顧客の質問に即座に答えられない」という課題を発見。アルバイト先の業務改善ツールとして自主開発。\n\n管理者がPCで商品情報を一括登録・管理できる「admin（管理画面）」と、スタッフがiPad上で顧客と一緒に商品を比較・提案できる「app（接客アプリ）」の2つで構成。商品スペックの収集はGemini APIにドメイン制限を組み合わせ、ハルシネーションを抑制した独自設計。",
    chips: [
      { label: "Next.js" }, { label: "TypeScript" }, { label: "Supabase" },
      { label: "Gemini API" }, { label: "Google Custom Search API" }, { label: "PWA" }, { label: "Tailwind CSS" },
    ],
    period: "実稼働 約1週間（春休み集中開発）",
    team: "個人開発",
    status: "アルバイト先に提案中",
    githubUrl: "https://github.com/myfavoriteharuto-collab/Guide-manual",
    screenshots: [
      { src: "/assets/kaden-admin.png", caption: "管理者向け管理画面：商品スペックを AI で自動収集・登録" },
      { src: "/assets/kaden-app.png", caption: "スタッフ向け iPad PWA：接客現場でリアルタイム比較・提案" },
    ],
  },
  {
    id: "2",
    tag: "個人開発 × AI × 効率化",
    tagColor: "g",
    title: "AI議事録アプリ",
    subtitle: "1時間の会議音声を約6分で文字起こし＆要約する個人用ツール",
    desc: "会議や講義の議事録作成にかかる時間を圧縮するために自作。OpenAI Whisper で音声を文字起こしし、Gemini API で要点を構造化された議事録に整形する。1時間の音声データを約6分で処理できる速度を実現。\n\n自分の学習・作業時間を確保することを目的に、必要最小限の機能だけを作り込んだプロダクト。",
    chips: [
      { label: "Python" }, { label: "OpenAI Whisper" }, { label: "Gemini API" },
    ],
    period: "実稼働 約1週間",
    team: "個人開発",
    status: "個人運用中",
    githubUrl: "https://github.com/myfavoriteharuto-collab/lecture-minutes",
  },
];

const tagGrad = {
  b: "linear-gradient(180deg,#5cd0f0,#26b9eb)",
  g: "linear-gradient(180deg,#cdee64,#9ec918)",
  o: "linear-gradient(180deg,#ffae5e,#ff7a1f)",
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <SectionShell
        id="projects" num="01" title="開発実績" kicker="PROJECTS"
        lead={<>現場の課題発見から、AI活用、<br />設計、実装まで。すべてを<br />妥協なく作り込んだプロダクト。</>}
        ctaLabel="View more" ctaVariant="blue"
        decorLeft={<Image src="/assets/dots.png" alt="" width={90} height={90} style={{ position: "absolute", left: -60, top: 30, opacity: 0.45, pointerEvents: "none" }} />}
        decorRight={<Image src="/assets/sparkle_green.png" alt="" width={30} height={30} style={{ position: "absolute", right: 20, bottom: 90, pointerEvents: "none" }} />}
        sidebar={
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
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
                {p.screenshots ? (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
                    {p.screenshots.map(s => (
                      <div key={s.src}
                        onClick={(e) => { e.stopPropagation(); setLightboxSrc(s.src); }}
                        style={{ cursor: "zoom-in" }}
                      >
                        <Image src={s.src} alt={s.caption} width={600} height={338} style={{ width: "100%", height: "auto", borderRadius: 8, border: "1px solid var(--line)", display: "block" }} />
                        <p style={{ margin: "4px 0 0", fontSize: 9.5, color: "var(--ink-2)", textAlign: "center", lineHeight: 1.4 }}>{s.caption}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ aspectRatio: "16/10", borderRadius: 12, marginTop: 10, background: "#f1f6fc", border: "1px dashed var(--line)", display: "grid", placeItems: "center" }}>
                    <span style={{ fontSize: 11.5, color: "var(--muted)", fontWeight: 700 }}>準備中</span>
                  </div>
                )}

                <h3 style={{ fontWeight: 900, fontSize: 16.5, margin: "14px 4px 6px", letterSpacing: ".01em" }}>{p.title}</h3>
                {p.subtitle && (
                  <p style={{ margin: "0 4px 8px", fontSize: 11.5, color: "var(--blue)", fontWeight: 700, lineHeight: 1.5 }}>{p.subtitle}</p>
                )}
                <p style={{ margin: "0 4px", fontSize: 12, lineHeight: 1.85, color: "var(--ink-2)", flexGrow: 1, whiteSpace: "pre-line" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "14px 4px 0" }}>
                  {p.chips.map(c => (
                    <span key={c.label} style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 11, fontWeight: 700, color: "var(--ink-2)", padding: "5px 10px", borderRadius: 999, background: "#f1f6fc", border: "1px solid var(--line)" }}>{c.label}</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, margin: "16px 4px 4px", paddingTop: 14, borderTop: "1px dashed var(--line)", fontSize: 11.5, color: "var(--ink-2)" }}>
                  <span>開発期間：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{p.period}</strong></span>
                  <span>チーム：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{p.team}</strong></span>
                  {p.status && <span>ステータス：<strong style={{ color: "var(--ink)", fontWeight: 800 }}>{p.status}</strong></span>}
                </div>
                <div style={{ marginTop: 10, textAlign: "center", fontSize: 11, color: "var(--blue)", fontWeight: 700 }}>クリックで詳細 →</div>
              </motion.div>
            ))}
          </div>
        }
      />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />

      {/* Card-level lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <>
            <motion.div
              key="card-lb-bg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setLightboxSrc(null)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.88)", backdropFilter: "blur(8px)", zIndex: 200 }}
            />
            <motion.div
              key="card-lb-img"
              initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              onClick={() => setLightboxSrc(null)}
              style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 201, width: "min(960px, 94vw)", cursor: "zoom-out" }}
            >
              <Image src={lightboxSrc} alt="" width={1920} height={1080}
                style={{ width: "100%", height: "auto", borderRadius: 14, boxShadow: "0 40px 80px rgba(0,0,0,.6)", display: "block" }}
              />
              <p style={{ textAlign: "center", color: "rgba(255,255,255,.5)", fontSize: 11.5, marginTop: 12, letterSpacing: ".1em" }}>クリックで閉じる · ESC</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
