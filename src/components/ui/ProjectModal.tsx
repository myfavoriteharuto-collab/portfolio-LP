"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface Project {
  id: string;
  tag: string;
  tagColor: "b" | "g" | "o";
  title: string;
  subtitle?: string;
  desc: string;
  chips: { label: string; variant?: string }[];
  period: string;
  team: string;
  status?: string;
  screenshots?: { src: string; caption: string }[];
  githubUrl?: string;
  detailUrl?: string;
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const tagGrad = {
  b: "linear-gradient(180deg,#5cd0f0,#26b9eb)",
  g: "linear-gradient(180deg,#cdee64,#9ec918)",
  o: "linear-gradient(180deg,#ffae5e,#ff7a1f)",
};

export default function ProjectModal({ project, onClose }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxSrc) setLightboxSrc(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose, lightboxSrc]);

  return (
    <>
      <AnimatePresence>
        {project && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { if (lightboxSrc) setLightboxSrc(null); else onClose(); }}
              style={{ position: "fixed", inset: 0, background: "rgba(15,27,45,.55)", backdropFilter: "blur(4px)", zIndex: 100 }}
            />

            {/* Window - outer div handles centering, inner motion handles animation */}
            <div key="modal-wrapper" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 101, width: "min(680px, 92vw)" }}>
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.82, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: "spring", stiffness: 340, damping: 26 }}
              style={{
                maxHeight: "90vh",
                background: "#fff",
                borderRadius: 24,
                border: "2px solid var(--line)",
                boxShadow: "0 40px 80px -24px rgba(15,27,45,.45), 0 0 0 1px rgba(255,255,255,.6) inset",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Title bar */}
              <div style={{ flexShrink: 0, background: "var(--code-bg)", padding: "12px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={onClose} style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11.5, color: "#7c8aa3", letterSpacing: ".18em" }}>
                  PROJECT_STATUS.exe
                </span>
              </div>

              {/* Body - scrollable */}
              <div style={{ padding: "28px 32px 32px", overflowY: "auto", flex: 1 }}>
                {/* Tag */}
                <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 999, color: "#fff", fontWeight: 800, fontSize: 11.5, letterSpacing: ".04em", background: tagGrad[project.tagColor], marginBottom: 16, boxShadow: "0 6px 14px -8px rgba(15,27,45,.35)" }}>
                  {project.tag}
                </div>

                <h2 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 900, letterSpacing: ".01em" }}>{project.title}</h2>
                {project.subtitle && (
                  <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--blue)", fontWeight: 700 }}>{project.subtitle}</p>
                )}

                {/* Screenshots */}
                {project.screenshots && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
                    {project.screenshots.map(s => (
                      <div key={s.src}
                        onClick={() => setLightboxSrc(s.src)}
                        style={{ cursor: "zoom-in" }}
                      >
                        <Image src={s.src} alt={s.caption} width={600} height={338}
                          style={{ width: "100%", height: "auto", borderRadius: 10, border: "1px solid var(--line)", display: "block", transition: "opacity .2s" }}
                        />
                        <p style={{ margin: "5px 0 0", fontSize: 10, color: "var(--ink-2)", textAlign: "center", lineHeight: 1.4 }}>{s.caption}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p style={{ margin: "0 0 20px", fontSize: 14, lineHeight: 1.9, color: "var(--ink-2)", whiteSpace: "pre-line" }}>{project.desc}</p>

                {/* Tech chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                  {project.chips.map(c => (
                    <span key={c.label} style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 999, background: "#f1f6fc", border: "1px solid var(--line)", color: "var(--ink-2)" }}>{c.label}</span>
                  ))}
                </div>

                {/* Meta */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: "16px 0", borderTop: "1px dashed var(--line)", borderBottom: "1px dashed var(--line)", fontSize: 12.5, color: "var(--ink-2)", marginBottom: 24 }}>
                  <span>開発期間：<strong style={{ color: "var(--ink)" }}>{project.period}</strong></span>
                  <span>チーム：<strong style={{ color: "var(--ink)" }}>{project.team}</strong></span>
                  {project.status && <span>ステータス：<strong style={{ color: "var(--ink)" }}>{project.status}</strong></span>}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: 12 }}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, padding: "12px 0", borderRadius: 12, background: "var(--ink)", color: "#fff", fontWeight: 700, fontSize: 13 }}>
                      GitHub →
                    </a>
                  )}
                  {project.detailUrl && (
                    <a href={project.detailUrl} target="_blank" rel="noopener noreferrer"
                      style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 8, padding: "12px 0", borderRadius: 12, background: "linear-gradient(180deg,#5cd0f0,#26b9eb)", color: "#fff", fontWeight: 700, fontSize: 13 }}>
                      詳細レポート →
                    </a>
                  )}
                  {!project.githubUrl && !project.detailUrl && (
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "12px 0", borderRadius: 12, background: "#f1f6fc", color: "var(--muted)", fontWeight: 700, fontSize: 13 }}>
                      準備中
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <>
            <motion.div
              key="lightbox-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxSrc(null)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.88)", backdropFilter: "blur(8px)", zIndex: 200 }}
            />
            <motion.div
              key="lightbox-img"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
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
