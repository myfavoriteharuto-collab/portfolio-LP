"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "60px 0 80px", overflow: "hidden" }}>
      {/* Decorative */}
      <Image className="deco" src="/assets/dots.png" alt="" width={90} height={90}
        style={{ position: "absolute", top: "18%", left: -30, opacity: 0.55, pointerEvents: "none" }} />
      <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", left: -60, top: "54%", pointerEvents: "none" }}>
        <Image src="/assets/blob_orange.png" alt="" width={200} height={200} style={{ opacity: 0.85 }} />
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", right: -50, top: "46%", pointerEvents: "none" }}>
        <Image src="/assets/blob_pink.png" alt="" width={160} height={160} style={{ opacity: 0.9 }} />
      </motion.div>
      <motion.div animate={{ rotate: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "6%", right: "38%", pointerEvents: "none" }}>
        <Image src="/assets/sparkle_purple.png" alt="" width={36} height={36} />
      </motion.div>
      <motion.div animate={{ rotate: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ position: "absolute", top: "15%", left: "36%", pointerEvents: "none" }}>
        <Image src="/assets/sparkle_green.png" alt="" width={36} height={36} />
      </motion.div>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 30, alignItems: "start", position: "relative" }}>
        {/* Left */}
        <div>
          <motion.div {...fade(0.1)} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink-2)", fontWeight: 700, fontSize: 14, marginBottom: 14 }}>
            <span style={{ width: 26, height: 26, backgroundImage: "url(/assets/sparkle_green.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "inline-block" }} />
            Creator × Researcher × Engineer
          </motion.div>

          <motion.h1 {...fade(0.2)} style={{ fontWeight: 900, fontSize: 62, lineHeight: 1.18, letterSpacing: "-.01em", margin: "0 0 18px" }}>
            妥協なき
            <span style={{ color: "var(--blue)", position: "relative", display: "inline-block", padding: "0 4px" }}>
              創作
              <span style={{ position: "absolute", left: 0, right: 0, bottom: 6, height: 10, background: "rgba(38,185,235,.18)", zIndex: -1, borderRadius: 3, display: "block" }} />
            </span>
            のために、<br />
            <span style={{ color: "var(--lime-2)", position: "relative", display: "inline-block", padding: "0 4px" }}>
              技術
              <span style={{ position: "absolute", left: 0, right: 0, bottom: 6, height: 10, background: "rgba(164,214,28,.22)", zIndex: -1, borderRadius: 3, display: "block" }} />
            </span>
            を磨く。
          </motion.h1>

          <motion.div {...fade(0.3)} style={{ display: "flex", alignItems: "center", gap: 14, color: "var(--ink)", fontWeight: 700, fontSize: 15.5, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, padding: "12px 18px", width: "fit-content", boxShadow: "0 6px 18px -12px rgba(15,27,45,.18)" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid var(--blue)", position: "relative", flexShrink: 0, display: "inline-block" }}>
              <span style={{ position: "absolute", top: 2, left: 6, width: 2, height: 6, background: "var(--blue)", display: "block" }} />
            </span>
            AI個人開発、ピクセルアート研究、現場のDX。<br />{'"最高傑作"'}を作るための三軸。
          </motion.div>

          <motion.div {...fade(0.4)} style={{ display: "flex", gap: 14, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { dot: "b", label: "AI Development", letter: "A" },
              { dot: "l", label: "Pixel Art Research", letter: "P" },
              { dot: "p", label: "Indie Creation", letter: "I" },
            ].map(({ dot, label, letter }) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "10px 18px", borderRadius: 999, background: "#fff", border: "1px solid var(--line)", fontWeight: 700, fontSize: 13.5, color: "var(--ink)", boxShadow: "0 4px 14px -10px rgba(15,27,45,.25)" }}>
                <span style={{
                  width: 18, height: 18, borderRadius: "50%", display: "grid", placeItems: "center", color: "#fff", fontSize: 10, fontWeight: 900,
                  background: dot === "b" ? "var(--blue)" : dot === "l" ? "var(--lime-2)" : "var(--purple)",
                }}>{letter}</span>
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div {...fade(0.5)} style={{ marginTop: 34, background: "var(--code-bg)", color: "#cfe6ff", fontFamily: "var(--font-mono), monospace", fontSize: 13.5, lineHeight: 1.85, padding: "18px 22px", borderRadius: 14, boxShadow: "0 16px 40px -22px rgba(15,27,45,.55)", position: "relative", maxWidth: 560 }}>
            <span style={{ position: "absolute", top: 14, right: 14, width: 30, height: 30, borderRadius: 9, background: "linear-gradient(180deg,#5cd0f0,#26b9eb)", display: "grid", placeItems: "center", color: "#fff", fontWeight: 900, fontSize: 13 }}>&lt;/&gt;</span>
            <div><span style={{ color: "#ff8aa6" }}>const</span> <span style={{ color: "#9bd4ff" }}>mission</span> = <span style={{ color: "#b5e639" }}>{`'妥協なき最高傑作を、世に送り出す'`}</span>;</div>
            <div><span style={{ color: "#ff8aa6" }}>let</span> <span style={{ color: "#9bd4ff" }}>craft</span> = <span style={{ color: "#b5e639" }}>{`'徹底的に'`}</span>; <span style={{ color: "#7c8aa3" }}>{"// 細部まで作り込む"}</span></div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ position: "relative", minHeight: 560 }}>
          <div style={{ position: "absolute", inset: "-30px -10px 30px 0", backgroundImage: "url(/assets/blob_blue.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", opacity: 0.95, zIndex: 0 }} />
          <div style={{ position: "relative", zIndex: 1, width: "100%", height: 520, background: "linear-gradient(180deg, oklch(95% .03 240), oklch(90% .05 200))", borderRadius: "50% 45% 55% 50% / 60% 50% 60% 50%", overflow: "hidden", display: "grid", placeItems: "end center", boxShadow: "inset 0 -40px 80px rgba(38,185,235,.15)" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "var(--font-mono), monospace", fontSize: 12, letterSpacing: ".25em", color: "rgba(15,27,45,.28)", textAlign: "center", lineHeight: 1.7, border: "1px dashed rgba(15,27,45,.15)", padding: "10px 24px", borderRadius: 8 }}>PHOTO</div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={{ position: "absolute", top: 32, right: -10, zIndex: 3, background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: "14px 18px", fontWeight: 700, fontSize: 14, lineHeight: 1.6, boxShadow: "0 10px 22px -16px rgba(15,27,45,.35)" }}>
            創作と技術の<br />交差点で、<span style={{ color: "var(--purple)" }}>ものをつくる</span>。
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ position: "absolute", right: -10, bottom: 80, zIndex: 3, width: 240, background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: "16px 18px", boxShadow: "0 18px 40px -24px rgba(15,27,45,.35)" }}>
            <h4 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 800 }}>AI Engineer / Creator / Researcher</h4>
            <div style={{ color: "var(--muted)", fontSize: 11.5, marginBottom: 10 }}>情報系学部 学部2年</div>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: "var(--ink-2)" }}>
              好きなもの：創作 · ピクセルアート · 細部へのこだわり<br />
              得意なこと：AI個人開発 · 研究 · 課題解決<br />
              モットー：作るなら、妥協しない。
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
              {["G", "X", "in"].map((s, i) => (
                <span key={s} style={{ width: 22, height: 22, borderRadius: 6, background: i === 2 ? "#0a66c2" : "var(--ink)", display: "grid", placeItems: "center", color: "#fff", fontSize: 11, fontWeight: 900 }}>{s}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "absolute", left: "50%", bottom: 6, transform: "translateX(-50%)", textAlign: "center", color: "var(--muted)", fontSize: 10.5, letterSpacing: ".3em", fontWeight: 800 }}
      >
        <div style={{ width: 24, height: 38, border: "2px solid var(--ink-2)", borderRadius: 14, margin: "0 auto 8px", position: "relative" }}>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 3, height: 8, borderRadius: 2, background: "var(--ink-2)" }}
          />
        </div>
        SCROLL
      </motion.div>
    </section>
  );
}
