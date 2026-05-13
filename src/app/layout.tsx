import type { Metadata } from "next";
import { Noto_Sans_JP, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const manrope = Manrope({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Haruto Miyakawa | AI Engineer",
  description: "妥協なき創作のために、技術を磨く。AI Engineer / Creator / Researcher のポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${jetbrainsMono.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
