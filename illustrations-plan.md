# 挿絵生成システム構築プラン

React 環境で実際のコンポーネントライブラリを描画し、Playwright でスクリーンショットを撮って挿絵画像を量産する。

## ディレクトリ構造

```
illustrations/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── playwright.config.ts
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx                    # 開発用ギャラリー（全図一覧）
│   ├── routes.ts                  # figureId → component マッピング
│   ├── styles/
│   │   ├── global.css             # Inter font, #f1f1f1 背景, リセット
│   │   ├── tokens.ts              # 色・間隔・フォントサイズ定数
│   │   └── radix-common.css       # Radix UI 共通スタイル
│   ├── shared/
│   │   ├── IllustrationFrame.tsx   # 全図共通の外枠
│   │   ├── Caption.tsx             # キャプション
│   │   ├── FlowDiagram.tsx         # React Flow ラッパー
│   │   ├── FlowNode.tsx            # カスタムノード
│   │   ├── ComparisonLayout.tsx    # 2〜3列比較レイアウト
│   │   ├── ComponentShowcase.tsx   # 実コンポーネント展示枠
│   │   └── AnnotationLabel.tsx     # 矢印付き注釈
│   └── figures/
│       ├── fig-01-component-decision-flow.tsx
│       ├── fig-02-three-layer-architecture.tsx
│       ├── fig-03-generic-vs-domain.tsx
│       ├── fig-04-slot-pattern-button.tsx
│       ├── fig-05-toggle-vs-switch-bad-good.tsx
│       ├── fig-06-shared-color-tokens.tsx
│       ├── fig-07-ui-state-transitions.tsx
│       ├── fig-08-width-behaviors.tsx
│       ├── fig-09-svg-vs-asset-decision.tsx
│       ├── fig-10-article-knowledge-hierarchy.tsx
│       ├── fig-11-radix-dialog-vs-alertdialog.tsx
│       ├── fig-12-mui-chip-vs-badge.tsx
│       ├── fig-13-antd-tag-vs-badge.tsx
│       ├── fig-14-radix-select-dropdown-context.tsx
│       ├── fig-15-radix-toggle-vs-switch-rendered.tsx
│       ├── fig-16-chakra-badge-tag-colorscheme.tsx
│       ├── fig-17-property-types-explanation.tsx
│       ├── fig-18-figma-property-panel-mockup.tsx
│       ├── fig-19-padding-vs-margin.tsx
│       ├── fig-20-premature-abstraction-before-after.tsx
│       ├── fig-21-icon-library-vs-custom.tsx
│       └── fig-22-component-lifecycle-timeline.tsx
├── scripts/
│   └── capture.ts                  # Playwright 一括キャプチャ
└── output/                         # 生成 PNG
```

## 依存パッケージ

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6",
    "@xyflow/react": "^12",
    "@radix-ui/react-dialog": "^1",
    "@radix-ui/react-alert-dialog": "^1",
    "@radix-ui/react-select": "^2",
    "@radix-ui/react-dropdown-menu": "^2",
    "@radix-ui/react-context-menu": "^2",
    "@radix-ui/react-toggle": "^1",
    "@radix-ui/react-switch": "^1",
    "@mui/material": "^5",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "@chakra-ui/react": "^2",
    "antd": "^5",
    "lucide-react": "^0.300"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4",
    "typescript": "^5",
    "vite": "^5",
    "@playwright/test": "^1",
    "tsx": "^4"
  }
}
```

## 共有コンポーネント仕様

### IllustrationFrame

全図の外枠。スクリーンショットの対象要素。

- 幅 800px 固定
- 背景 #f1f1f1
- padding 48px
- border-radius 12px
- `data-testid="illustration-frame"` を付与（Playwright セレクタ用）

### Caption

図の下部キャプション。

- Inter 14px, color #666, text-align center
- 上マージン 24px
- オプションで subtext（出典・ライブラリ名）

### FlowDiagram

React Flow ラッパー。mermaid 図の代替。

- ReactFlowProvider 内包
- fitView 自動適用
- インタラクション全無効（ズーム・パン・ドラッグ・選択）
- 高さ可変（デフォルト 400px）
- オプションで薄いドット背景

### FlowNode

React Flow 用カスタムノード。

- 白背景, border-radius 8px, box-shadow sm
- タイトル（太字）+ サブテキスト（小さい灰色）
- オプション: 左アクセントバー（色指定可）
- variant: default | decision（菱形風） | result | group（背景色付きコンテナ）

### ComparisonLayout

Good/Bad、Before/After の横並び比較。

- 2〜3列対応
- ヘッダーラベル（色指定可: red/green 等）
- 各列に children

### ComponentShowcase

実コンポーネントの展示枠。

- ライブラリ名バッジ（例: "Radix UI"）
- コンポーネント名ヘッダー
- 白背景パネル内に children をレンダリング

## スクリーンショット自動化

### ルーティング

```
/          → 全図一覧ギャラリー（開発用）
/fig/:id   → 個別 figure 表示
```

### Playwright キャプチャ (`scripts/capture.ts`)

1. `routes.ts` から全 figure ID を取得
2. 各 ID について `/fig/{id}` にナビゲーション
3. `data-testid="illustration-frame"` の表示を待つ
4. `document.fonts.ready` を await
5. 要素スクリーンショットを `output/{id}.png` に保存
6. deviceScaleFactor: 2（Retina 品質）

```bash
npx tsx scripts/capture.ts           # 全図一括
npx tsx scripts/capture.ts fig-01    # 個別
```

## UIライブラリ共存の方針

MUI, Chakra UI, antd は各 figure コンポーネント内で局所的に Provider をラップする。グローバルスタイルの汚染を防ぐ。Radix UI はスタイルレスなので `styles/radix-common.css` に共通スタイルを定義。

## 命名規則

| 項目 | 規則 | 例 |
|---|---|---|
| figure ファイル | `fig-{番号2桁}-{英語slug}.tsx` | `fig-01-component-decision-flow.tsx` |
| 出力 PNG | `fig-{番号2桁}.png` | `fig-01.png` |
| figure ID | `fig-{番号2桁}` | `fig-01` |
| ルートパス | `/fig/fig-{番号2桁}` | `/fig/fig-01` |

- fig-01〜10: 既存 mermaid 図の置き換え
- fig-11〜22: 新規挿絵
- 追加は末尾に番号を振る（途中挿入しない）

## 全 22 図の一覧

### mermaid 置き換え（10件）

| ID | セクション | 内容 | 実装方針 |
|---|---|---|---|
| fig-01 | コンポーネント化するか？ | コンポーネント化判断フロー | FlowDiagram: 菱形質問2→角丸回答3。Yes/No エッジ |
| fig-02 | FSD 3つのアプローチ | 3層アーキテクチャ | FlowDiagram: 縦3段 Widgets→Features→UI Kit |
| fig-03 | 汎用とドメインの分離 | 依存関係図 | FlowDiagram: 左右 subgraph + 依存矢印 |
| fig-04 | Element型（スロット） | Button のスロット構造 | FlowDiagram: Button→Slot→Icon/Badge/Nothing |
| fig-05 | 直交性 Toggle vs Switch | Bad vs Good 比較 | ComparisonLayout + FlowDiagram |
| fig-06 | トークンの共有 | カラートークン参照構造 | FlowDiagram: 4色ノード→Tag/Badge/Callout |
| fig-07 | UIスタック | 5状態の遷移図 | FlowDiagram: Loading→Ideal/Empty/Error/Partial |
| fig-08 | 幅の振る舞い | Fill/Hug/Fixed | ComparisonLayout 3列 + 実 HTML/CSS で幅可視化 |
| fig-09 | コード実装か画像か | 決定木 | FlowDiagram: 菱形→Code/SVG/WebP |
| fig-10 | おわりに | 記事の知識階層 | FlowDiagram: 縦階段型 原則→…→アセット |

### 新規挿絵（12件）

| ID | セクション | 内容 | 実装方針 |
|---|---|---|---|
| fig-11 | 関心の分離 Dialog例 | Radix Dialog vs AlertDialog | ComponentShowcase x2。開いた状態で実描画 |
| fig-12 | 早すぎる共通化 MUI例 | MUI Chip vs Badge | ComponentShowcase x2。Chip(操作可) vs Badge(表示のみ) |
| fig-13 | 早すぎる共通化 Ant例 | Ant Design Tag vs Badge | ComponentShowcase x2 |
| fig-14 | Headless UI の設計思想 | Radix Select/DropdownMenu/ContextMenu | ComponentShowcase x3。3列で「値選択/アクション/右クリック」注釈 |
| fig-15 | 直交性 実描画補足 | Radix Toggle vs Switch | ComponentShowcase x2。ツールバーボタン vs スライダー |
| fig-16 | Enum Chakra例 | Chakra Badge/Tag colorScheme | ComponentShowcase。5色 x 3variant 一覧 |
| fig-17 | プロパティの型解説 | 型とFigma/コードの対応 | カスタム。Boolean→トグル、Enum→ドロップダウン等のUI模型 |
| fig-18 | Figmaパネル=コード設計図 | Figma プロパティパネルモック | カスタム。Figma風UI→コード対応を矢印で |
| fig-19 | 外側の余白 | padding vs margin | カスタム。ボタンを例にピンク(内側)/青破線(外側)で可視化 |
| fig-20 | 早すぎる共通化 概念 | プロパティ肥大化 Before/After | ComparisonLayout。1 Card(肥大)→2 Card(分離) |
| fig-21 | アイコン管理 | ライブラリ vs 独自 | ComparisonLayout。Lucide React vs カスタムSVG |
| fig-22 | ライフサイクル | コンポーネントのタイムライン | FlowDiagram 横型。Draft→Stable→Deprecated→Removed |

## 実装順序

1. **Phase 1: 基盤** — Vite + React + TS 初期化, global.css, tokens.ts, IllustrationFrame, Caption, ルーティング, Playwright 設定
2. **Phase 2: ダイアグラム系** — FlowDiagram, FlowNode, fig-01〜03, 05〜07, 09〜10
3. **Phase 3: 実コンポーネント系** — ComponentShowcase, fig-11〜16
4. **Phase 4: 独自ビジュアル系** — fig-04, 08, 17〜22
5. **Phase 5: 最終出力** — 一括キャプチャ, 画像確認, zenn.md への `![](./illustrations/output/fig-XX.png)` 挿入
