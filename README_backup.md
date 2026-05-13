# Haruto Miyakawa — Portfolio LP

AI Engineer / Researcher / Creator のポートフォリオサイト。
現場課題の発見から設計・実装・デプロイまでを一気通貫で行う個人ポートフォリオ LP。

**本番 URL:** https://portfolio-lp-chi.vercel.app

---

## 何ができるサイトか

| セクション | 内容 |
|---|---|
| **Hero** | キャッチコピー・自己紹介・プロフィールカード |
| **開発実績 (Projects)** | 個人・業務開発プロジェクトのカード一覧。クリックでモーダル詳細表示、スクリーンショットはライトボックスで拡大 |
| **研究実績 (Research)** | 国際会議発表論文の情報と IEEE リンク |
| **ワークフロー (Workflow)** | AI を活用した開発プロセスを 5 ステップで図示 |
| **スキル (Skills)** | 技術スタック一覧 + LAPRAS プロフィールへのリンク |
| **コンタクト (Contact)** | メール・SNS・note・LAPRAS への導線、問い合わせ誘導バナー |

---

## 技術スタック

| ライブラリ | バージョン | 用途 |
|---|---|---|
| Next.js | 16.2.6 | App Router / SSG |
| React | 19.2.4 | UI |
| TypeScript | 5.x | 型安全 |
| Tailwind CSS | 4.x | ユーティリティ CSS |
| Framer Motion | 12.x | アニメーション |

---

## プロジェクト構成

```
portfolio-lp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # フォント・メタ情報の設定
│   │   ├── page.tsx            # セクション配列（順番の変更はここ）
│   │   ├── globals.css         # CSS 変数・レスポンシブ用グリッドクラス
│   │   └── icon.png            # ファビコン
│   └── components/
│       ├── Nav.tsx             # スティッキーナビ（PC：リンク、モバイル：ハンバーガー）
│       ├── Hero.tsx            # ヒーローセクション（キャッチ・プロフィール）
│       ├── sections/
│       │   ├── Projects.tsx    # 開発実績（プロジェクト配列を直接編集）
│       │   ├── Research.tsx    # 研究実績（論文情報を直接編集）
│       │   ├── Workflow.tsx    # ワークフロー（5 ステップの配列を編集）
│       │   ├── Skills.tsx      # スキル・技術スタック（配列を編集）
│       │   └── Contact.tsx     # コンタクト（SNS URL を直接編集）
│       └── ui/
│           ├── SectionShell.tsx  # 全セクション共通の外枠レイアウト
│           └── ProjectModal.tsx  # プロジェクト詳細モーダル
├── public/
│   └── assets/                 # 画像アセット（PNG）
├── CHANGELOG.md                # 変更履歴（コード変更のたびに更新すること）
└── IMPROVEMENTS.md             # 改善点リスト（優先度付き）
```

---

## ローカル開発

### 前提

- Node.js 20 以上
- npm

### セットアップ

```bash
git clone https://github.com/myfavoriteharuto-collab/portfolio-lp.git
cd portfolio-lp
npm install
npm run dev
```

`http://localhost:3000` で確認。

### その他のコマンド

```bash
npm run build   # 本番ビルド
npm run start   # ビルド済みを起動
npm run lint    # ESLint
```

---

## コンテンツの編集方法

### プロジェクトを追加・編集する

`src/components/sections/Projects.tsx` の `projects` 配列を編集します。

```ts
const projects: Project[] = [
  {
    id: "3",                          // ユニーク ID
    tag: "個人開発 × AI",             // カード上部のタグ文字列
    tagColor: "o",                    // "b"=青 / "g"=緑 / "o"=オレンジ
    title: "プロジェクト名",
    subtitle: "一行キャッチ",
    desc: "説明文（\\n で改行）",
    chips: [{ label: "Next.js" }, { label: "TypeScript" }],
    period: "約1週間",
    team: "個人開発",
    status: "公開中",
    githubUrl: "https://github.com/...",
    detailUrl: "https://...",         // 任意。詳細ページがある場合
    screenshots: [                    // 任意。スクリーンショット
      { src: "/assets/xxx.png", caption: "説明文" },
    ],
  },
];
```

### 研究論文を追加・編集する

`src/components/sections/Research.tsx` の `chips` / `meta` / 本文を直接編集します。
複数論文にするには `layout-2col` グリッド内にカードを追加してください。

### ナビゲーションのリンクを変更する

`src/components/Nav.tsx` の `links` 配列を編集します。

```ts
const links = [
  { href: "#top", label: "TOP" },
  { href: "#projects", label: "開発実績" },
  // ...
];
```

対応するセクションの `id` と `href` を一致させてください。

### SNS リンクを変更する

`src/components/sections/Contact.tsx` の `sns` 配列を編集します。

```ts
const sns = [
  { label: "GitHub", href: "https://github.com/your-handle", ... },
  // ...
];
```

### テーマカラーを変更する

`src/app/globals.css` の `:root` 変数を編集します。

```css
:root {
  --blue: #26b9eb;   /* アクセントカラー */
  --lime-2: #a4d61c; /* サブカラー */
  /* ... */
}
```

### レスポンシブ ブレークポイント

`globals.css` の `.layout-*` クラスと `@media (max-width: 767px)` ブロックで管理しています。
新しいグリッドレイアウトを作る場合はここに追加してください。

---

## デプロイ

`main` ブランチへの push で Vercel に自動デプロイされます。

手動でデプロイする場合：

```bash
npx vercel          # プレビュー
npx vercel --prod   # 本番
```

---

## 改善点・今後のタスク

[IMPROVEMENTS.md](./IMPROVEMENTS.md) に優先度付きで整理しています。
