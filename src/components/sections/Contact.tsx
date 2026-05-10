"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionShell from "@/components/ui/SectionShell";

export default function Contact() {
  return (
    <SectionShell
      id="contact" num="05" title="コンタクト" kicker="CONTACT"
      lead={<>インターン・採用・業務委託など、<br />ご興味のある方はお気軽に<br />ご連絡ください！</>}
      ctaLabel="Message Me" ctaVariant="blue"
      sidebar={
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, alignItems: "stretch" }}>
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
              <p style={{ margin: 0, fontSize: 13, fontWeight: 800, color: "var(--ink)" }}>hello@example.com</p>
              <small style={{ fontSize: 11, color: "var(--ink-2)", fontWeight: 600 }}>24時間以内に返信します</small>
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
              style={{ border: "1px solid var(--line)", borderRadius: 18, padding: 22, background: "#fff", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minHeight: 170, transition: "box-shadow .25s" }}
            >
              <div style={{ width: 96, height: 96, background: "#0f1b2d", border: "6px solid #fff", outline: "1px solid var(--line)", backgroundSize: "8px 8px", backgroundImage: "repeating-linear-gradient(0deg,rgba(255,255,255,.15) 0 4px, transparent 4px 8px), repeating-linear-gradient(90deg,rgba(255,255,255,.15) 0 4px, transparent 4px 8px)", borderRadius: 6 }} />
              <h5 style={{ margin: 0, fontSize: 12, fontWeight: 900, color: "var(--ink)" }}>その他のSNS</h5>
              <small style={{ fontSize: 11, color: "var(--ink-2)", fontWeight: 600 }}>X / GitHub / LinkedIn<br />各種リンクはこちら</small>
            </motion.div>
          </div>

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 22, borderRadius: 22, padding: "34px 30px", background: "radial-gradient(circle at 18% 50%, rgba(38,185,235,.6) 0 80px, transparent 200px), radial-gradient(circle at 65% 110%, rgba(180,230,57,.5) 0 100px, transparent 220px), linear-gradient(135deg,#5ad0f0,#9bdcc6 60%,#cfeb6a)", color: "#0f1b2d", fontWeight: 900, fontSize: 30, lineHeight: 1.5, letterSpacing: ".02em", position: "relative", overflow: "hidden" }}
          >
            一緒に、<br />未来を創りましょう！
            <small style={{ display: "block", fontSize: 13, fontWeight: 700, letterSpacing: ".3em", color: "rgba(15,27,45,.55)", marginTop: 6 }}>{"LET'S BUILD THE FUTURE"}</small>
            <Image src="/assets/arrow_curve.png" alt="" width={120} height={60}
              style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", opacity: 0.85 }} />
          </motion.div>
        </div>
      }
    />
  );
}
