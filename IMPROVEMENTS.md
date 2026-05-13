# LP 改善点まとめ

作成日：2026-05-14

---

## 優先度：高（機能バグ・ユーザーが詰まる）

### ~~1. CTA ボタンが全5箇所リンク切れ~~ ✅ 対応済み（2026-05-14）
- `SectionShell.tsx` に `ctaExternal` prop を追加（外部リンク用）
- Projects → GitHub プロフィール、Research → IEEE 論文、Skills → LAPRAS、Contact → mailto に設定
- Workflow は自然な遷移先がないため CTA ボタン自体を削除

### ~~2. Hero右カードのSNSアイコンがクリック不可~~ ✅ 対応済み（2026-05-14）
- `G`（GitHub）・`X`（Twitter）を `<a>` タグに変更しリンクを追加
- `in`（LinkedIn）は未登録のため一時的に除外

### ~~3. モバイルでレイアウトが崩壊する~~ ✅ 対応済み（2026-05-14）
- globals.css にレスポンシブ用レイアウトクラスを追加（`layout-hero` / `layout-section-grid` / `layout-2col` / `layout-3col` / `layout-5col` など）
- Nav にハンバーガーメニューを追加（767px以下でリンクを非表示 → ×ボタンで全画面メニュー表示）
- Hero右カラム（写真プレースホルダー）をモバイルで非表示化
- Workflowの5列フローを2列に折り畳み
- 各セクションのパディングをモバイル向けに縮小

---

## 優先度：中（UX 低下・印象に影響）

### ~~4. Navリンクのクリック領域が文字幅のみ~~ ✅ 対応済み（2026-05-14）
- Nav.tsx 書き直し時に `padding: "6px 0"` → `"6px 8px"` へ変更済み（#3 モバイル対応と同時）

### 5. Researchセクションの右カラムが空白
- **場所**：`Research.tsx:23` — `gridTemplateColumns: "repeat(2,1fr)"` で論文1件のみ
- **症状**：グリッドの右半分が完全に空白になっている
- **対応案**：論文を追加するか、1カラムレイアウト（または `max-width` 制限）に変更する

### 6. アクティブナビ（現在地ハイライト）がない
- **場所**：`Nav.tsx`
- **症状**：どのセクションを見ているか Nav に視覚フィードバックがなく、現在地が分からない
- **対応案**：`IntersectionObserver` でスクロール位置を検知し、対応するNavリンクをハイライトする

### 7. Contact「面談」カードにリンクがない
- **場所**：`Contact.tsx:87-98`
- **症状**：「面談・お話ししましょう！」カードにカレンダー予約などのアクションがなく、ユーザーが次に何をすればよいか分からない
- **対応案**：Calendly や Google Calendar の予約URLを埋め込む、または別の連絡手段へのリンクを追加

### 8. Heroの「PHOTO」プレースホルダーが残っている
- **場所**：`Hero.tsx:92`
- **症状**：「PHOTO」と書かれたdivがそのまま表示されており、未完成に見える
- **対応案**：本人写真またはアバター画像を設定する

---

## 優先度：低（改善するとより良い）

### 9. Projectsカードの説明文が長すぎる
- **場所**：`Projects.tsx:110` — `desc` を `whiteSpace: "pre-line"` で全文表示
- **症状**：カードが縦長になり、モーダルと情報が重複している。「クリックで詳細」の意味が薄れる
- **対応案**：カード上では2〜3行で省略（`line-clamp`）し、詳細はモーダルに委ねる

### 10. Hero の装飾アニメーションが常時4つ動いている
- **場所**：`Hero.tsx:19-34` — blob×2、sparkle×2 が無限ループ
- **症状**：低スペック端末やバッテリー残量が少ない端末でパフォーマンス問題になりうる
- **対応案**：`prefers-reduced-motion` メディアクエリでアニメーションを停止、または装飾を2つに絞る

### ~~11. 全セクションのCTAラベルが「View more」で統一されすぎている~~ ✅ 対応済み（2026-05-14）
- #1 の対応と同時に解決。「GitHubで見る」「論文を読む」「LAPRASで見る」「メールを送る」へ変更済み

### 12. SectionShellとカード内で whileInView が二重にかかっている
- **場所**：`SectionShell.tsx:27-33` ＋ 各セクション内の `motion.div`
- **症状**：セクション全体がフェードインしながら、内部カードも個別にアニメーションするため、動きがやや過剰に見える
- **対応案**：SectionShell 側のアニメーションを削除し、カード個別のアニメーションのみ残す（または逆）

---

## リンク動作確認チェックリスト

| ボタン / リンク | 接続先 | 状態 |
|---|---|---|
| Nav「Let's Connect」 | `#contact` | ✅ |
| Nav「TOP」 | `window.scrollTo(top)` | ✅ |
| Nav「開発実績」〜「コンタクト」 | 各セクションID | ✅ |
| Projects「GitHubで見る」 | GitHub プロフィール | ✅ |
| Research「論文を読む」 | IEEE 論文ページ | ✅ |
| Workflow | CTA ボタン削除済み | — |
| Skills「LAPRASで見る」 | LAPRAS プロフィール | ✅ |
| Contact「メールを送る」 | `mailto:` | ✅ |
| Hero右カード `G`（GitHub） | GitHub プロフィール | ✅ |
| Hero右カード `X`（Twitter） | X プロフィール | ✅ |
| Hero右カード `in`（LinkedIn） | 未登録のため削除 | — |
| Research「論文を見る」 | IEEE Computer Society URL | ✅ |
| Skills「LAPRASで詳しく見る」 | LAPRAS プロフィール URL | ✅ |
| ProjectModal「GitHub →」 | GitHub リポジトリ URL | ✅ |
| Contact メールリンク | `mailto:haruto.miyakawa.dev@gmail.com` | ✅ |
| Contact GitHub アイコン | `https://github.com/myfavoriteharuto-collab` | ✅ |
| Contact X アイコン | `https://x.com/myfuns101010` | ✅ |
| Contact note アイコン | `https://note.com/haruto_sloth980` | ✅ |
| Contact LAPRAS アイコン | `https://lapras.com/public/haruto-miyakawa` | ✅ |
| Contact Gmail アイコン | `mailto:haruto.miyakawa.dev@gmail.com` | ✅ |
| Contact「面談」カード | なし | ⚠️ アクションなし |
