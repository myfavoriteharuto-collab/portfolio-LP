# Portfolio LP

AI Engineer / Researcher のポートフォリオサイト。

**本番URL:** https://portfolio-lp-chi.vercel.app

## 技術スタック

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## 構成

```
src/
  app/              # ルートレイアウト・ページ
  components/
    Nav.tsx         # スティッキーナビ
    Hero.tsx        # ヒーローセクション
    sections/       # 各セクション（Projects / Research / Workflow / Skills / Contact）
    ui/             # 共通コンポーネント（モーダル・セクションシェル）
public/
  assets/           # 画像アセット
```

## 開発

```bash
npm run dev
```

http://localhost:3000 で確認。

## デプロイ

`main` ブランチへの push で Vercel に自動デプロイされます。
