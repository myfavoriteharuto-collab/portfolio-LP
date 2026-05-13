# Changelog

コードに変更を加えた際は、このファイルの先頭に追記してください。
フォーマット：日付 / 変更種別 / 変更内容 / 理由。

---

## 2026-05-14

### Added
- `LICENSE` — MIT ライセンスを新規作成
- `README_backup.md` — 旧 README のバックアップ

### Changed
- `README.md` — LAPRAS 評価を意識した構成に全面改訂
  - shields.io バッジを追加（Next.js / TypeScript / Tailwind / Framer Motion / Vercel / MIT）
  - Features 一覧を ✅ / 🔲 で実装状況付きで整理
  - Tech Stack テーブルに「採用理由」列を追加
  - Mermaid によるコンポーネント依存グラフを追加
  - Implementation Notes に SectionShell パターン・レスポンシブ設計・アニメーション設計を詳述
  - Roadmap を GitHub Issues 連携想定の形式で追加

### Fixed
- `Hero.tsx` — プロフィールカード内の G / X アイコンを `<span>` から `<a>` に変更し、GitHub・X へのリンクを追加（LinkedIn は未登録のため除外）
- `SectionShell.tsx` — `ctaExternal` prop を追加し、外部リンク時に `target="_blank" rel="noopener noreferrer"` を付与
- `Projects.tsx` — CTA を「GitHubで見る」に変更、GitHub プロフィールへリンク
- `Research.tsx` — CTA を「論文を読む」に変更、IEEE 論文ページへリンク
- `Workflow.tsx` — 自然な遷移先がないため CTA ボタンを削除
- `Skills.tsx` — CTA を「LAPRASで見る」に変更、LAPRAS プロフィールへリンク
- `Contact.tsx` — CTA を「メールを送る」に変更、`mailto:` リンクに設定

### Changed（続き）
- **モバイルレスポンシブ対応**（全コンポーネント）
  - `globals.css` にレイアウト用クラスを追加（`layout-hero` / `layout-section-grid` / `layout-2col` / `layout-3col` / `layout-5col`）
  - `@media (max-width: 767px)` ブロックで各クラスを 1 列に折り畳み
  - `Nav.tsx` にハンバーガーメニューを追加（767px 以下でリンク非表示 → ×ボタンで全画面メニュー）、Navリンクの padding を `"6px 0"` → `"6px 8px"` に修正
  - `Hero.tsx` の右カラム（写真プレースホルダー）をモバイルで非表示化
  - `Workflow.tsx` の 5 列フローをモバイルで 2 列に変更
  - `SectionShell.tsx` / `Projects.tsx` / `Research.tsx` / `Skills.tsx` / `Contact.tsx` のインライン grid をクラスに移行

### Added（続き）
- `CHANGELOG.md` 新規作成（本ファイル）

---

## 2026-05-13

### Fixed
- `Nav.tsx` — TOP リンクを `window.scrollTo({ top: 0 })` に変更（`#top` ハッシュジャンプだとアニメーションが走らない問題）
- `SectionShell.tsx` — `scrollMarginTop: 80px` を追加（スティッキーナビ分のオフセット）
- `ProjectModal.tsx` — モーダル中央寄せが Framer Motion の `transform` と競合していたため、外側 div で `translate(-50%,-50%)` を担当する構成に変更
- `ProjectModal.tsx` — モーダル本文の縦スクロールと写真ライトボックスを追加

### Added
- `Projects.tsx` — 家電量販店向けガイドシステム / AI 議事録アプリの 2 件を実データで追加
- `Projects.tsx` — GitHub URL をプロジェクトカードとモーダルに表示
- `Research.tsx` — IIAI AAI Winter 2025（IEEE）の論文情報を実データで差し替え
- `Workflow.tsx` / `Skills.tsx` / `Contact.tsx` — 各セクションを実データで差し替え
- ファビコンを `icon.png` に変更、ページタイトルを更新
- メタディスクリプションを更新

---

## 2026-05-11

### Added
- Next.js + TypeScript + Tailwind CSS + Framer Motion でポートフォリオ LP の初期実装
- `Nav.tsx` — スティッキーナビ（スクロールで境界線が出現するアニメーション付き）
- `Hero.tsx` — ヒーロー、プロフィールカード、コードブロック、スクロールキュー
- `Projects.tsx` — プロジェクトカード + モーダル + ライトボックス
- `Research.tsx` — 研究実績カード
- `Workflow.tsx` — 5 ステップ AI 開発フロー
- `Skills.tsx` — 技術スタック + LAPRAS リンク
- `Contact.tsx` — SNS リンク + 問い合わせバナー
- `SectionShell.tsx` — 共通セクション外枠コンポーネント
- Vercel デプロイ設定（`main` push で自動デプロイ）
