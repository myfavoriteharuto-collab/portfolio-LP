"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

const sns = [
  {
    label: "GitHub",
    href: "https://github.com/myfavoriteharuto-collab",
    bg: "#0a0a0a",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/myfuns101010",
    bg: "#0a0a0a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "note",
    href: "https://note.com/haruto_sloth980",
    bg: "#41c9b4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.67 0H7.33C3.28 0 0 3.28 0 7.33v9.34C0 20.72 3.28 24 7.33 24h9.34C20.72 24 24 20.72 24 16.67V7.33C24 3.28 20.72 0 16.67 0zM8 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 4H11a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2zm0-4H11a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2zm0-4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" />
      </svg>
    ),
  },
  {
    label: "LAPRAS",
    href: "https://lapras.com/public/haruto-miyakawa",
    bg: "#26b9eb",
    icon: (
      <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
        <path d="M10 26L18 10l8 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 21h10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:haruto.miyakawa.dev@gmail.com",
    bg: "#ea4335",
    mailto: true,
    icon: (
      <svg width="22" height="18" viewBox="0 0 26 20" fill="none">
        <rect x="1" y="1" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2 3l11 8 11-8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <SectionShell
      id="contact" num="05" title="コンタクト" kicker="CONTACT"
      lead={<>インターン・業務委託・共同研究など、<br />お気軽にどうぞ。</>}
      ctaLabel="メールを送る" ctaHref="mailto:haruto.miyakawa.dev@gmail.com" ctaVariant="blue"
      sidebar={
        <div>
          <div className="layout-3col">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: "0 14px 28px -14px rgba(15,27,45,.18)" }}
              style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minHeight: 170, transition: "box-shadow .25s" }}
            >
              <div style={{ width: 54, height: 54, borderRadius: 14, background: "linear-gradient(180deg,#eaf4ff,#cfe9ff)", display: "grid", placeItems: "center", color: "var(--blue-2)", border: "1px solid #cfeefb" }}>
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none"><rect x="1" y="1" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M2 3l11 8 11-8" stroke="currentColor" strokeWidth="2" /></svg>
              </div>
              <h5 style={{ margin: "6px 0 0", fontSize: 13, fontWeight: 900, color: "var(--ink)" }}>メール</h5>
              <a href="mailto:haruto.miyakawa.dev@gmail.com" style={{ margin: 0, fontSize: 12, fontWeight: 800, color: "var(--ink)", textDecoration: "none", wordBreak: "break-all" }}>haruto.miyakawa.dev@gmail.com</a>
              <small style={{ fontSize: 11, color: "var(--ink-2)", fontWeight: 600 }}>数日以内に返信します</small>
            </motion.div>

            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3, boxShadow: "0 14px 28px -14px rgba(15,27,45,.18)" }}
              style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minHeight: 170, transition: "box-shadow .25s" }}
            >
              <div style={{ width: 54, height: 54, borderRadius: 14, background: "linear-gradient(180deg,#eaf4ff,#cfe9ff)", display: "grid", placeItems: "center", color: "var(--blue-2)", border: "1px solid #cfeefb" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="3" width="18" height="17" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M7 1v4M15 1v4M2 9h18" stroke="currentColor" strokeWidth="2" /></svg>
              </div>
              <h5 style={{ margin: "6px 0 0", fontSize: 13, fontWeight: 900, color: "var(--ink)" }}>面談・お話ししましょう！</h5>
              <small style={{ fontSize: 11, color: "var(--ink-2)", fontWeight: 600 }}>カジュアル面談 大歓迎！<br />技術の話が大好きです</small>
            </motion.div>

            {/* SNS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3, boxShadow: "0 14px 28px -14px rgba(15,27,45,.18)" }}
              style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, minHeight: 170, transition: "box-shadow .25s" }}
            >
              <h5 style={{ margin: 0, fontSize: 13, fontWeight: 900, color: "var(--ink)" }}>SNS・プロフィール</h5>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                {sns.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    {...(!s.mailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    title={s.label}
                    style={{ width: 44, height: 44, borderRadius: 12, background: s.bg, color: "#fff", display: "grid", placeItems: "center", textDecoration: "none", transition: "transform .2s, box-shadow .2s", boxShadow: "0 4px 10px -4px rgba(15,27,45,.3)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <small style={{ fontSize: 10.5, color: "var(--muted)", fontWeight: 600 }}>GitHub · X · note · LAPRAS · Gmail</small>
            </motion.div>
          </div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 22, borderRadius: 22, padding: "34px 30px", background: "radial-gradient(circle at 18% 50%, rgba(38,185,235,.6) 0 80px, transparent 200px), radial-gradient(circle at 65% 110%, rgba(180,230,57,.5) 0 100px, transparent 220px), linear-gradient(135deg,#5ad0f0,#9bdcc6 60%,#cfeb6a)", color: "#0f1b2d", fontWeight: 900, fontSize: 28, lineHeight: 1.5, letterSpacing: ".02em", position: "relative", overflow: "hidden" }}
          >
            一緒に、<br />妥協なきものを作りましょう。
            <small style={{ display: "block", fontSize: 12, fontWeight: 700, letterSpacing: ".28em", color: "rgba(15,27,45,.55)", marginTop: 6 }}>{"LET'S BUILD SOMETHING WORTH MAKING."}</small>
            <Image src="/assets/arrow_curve.png" alt="" width={120} height={60}
              style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", opacity: 0.85 }} />
          </motion.div>
        </div>
      }
    />
  );
}
