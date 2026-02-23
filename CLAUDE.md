# Component Design Guide for Designers

デザインシステムのコンポーネント設計について体系的にまとめた Zenn Book のリポジトリ。

## リポジトリ構成

```
books/b62994c6b0b1e9/          ← Zenn Book 本体
  _component-design-guide-for-designers.md  ← 原稿（単一ファイル、H1 で章区切り）
  config.yaml                  ← Book 設定（チャプター順序・メタデータ）
  cover.png                    ← 表紙画像
  *.md                         ← split_zenn.py で生成されるチャプターファイル（直接編集しない）
articles/                      ← Zenn 記事（現在未使用）
illustrations/                 ← 図版生成プロジェクト（React + Vite + Playwright）
split_zenn.py                  ← 原稿 → チャプター分割スクリプト
```

## 執筆ワークフロー

1. **原稿の編集**: `books/b62994c6b0b1e9/_component-design-guide-for-designers.md` を編集する。これが唯一の原稿ソース。
2. **チャプター生成**: `python split_zenn.py` を実行すると、H1 見出しごとにチャプターファイルを生成し、`config.yaml` の `chapters` も同期する。
3. **プレビュー**: `npx zenn-cli preview` で http://localhost:8000 にプレビューが立つ。
4. **デプロイ**: `main` ブランチに push すると Zenn が自動デプロイする。

### 重要なルール

- **チャプターファイル（`introduction.md` 等）は直接編集しない。** `split_zenn.py` の実行で毎回上書きされる。編集は必ず `_component-design-guide-for-designers.md` に対して行う。
- 原稿内の章見出しは `# タイトル` (H1)。split 時に見出しレベルが1段繰り上がる（H2→H1, H3→H2, ...）。
- 新しい章を追加した場合、`split_zenn.py` の `CHAPTER_SLUG_MAP` に日本語タイトル → ASCII スラッグのマッピングを追加する。マップにないタイトルは `chapter-NN` にフォールバックする。

## 原稿のスタイル

- 言語は日本語。
- 対象読者: プロダクトデザイナー・UIデザイナー（コードを書かない人にも伝わるように）、エンジニア、プロダクトマネージャー。
- コード例は React / Swift / Kotlin / Figma を横断的に扱う。
- 図版は `![fig-NN の説明](/images/books/b62994c6b0b1e9/fig-NN.png)` の形式で参照する。
- バッククォート（`` ` ``）はコード要素（コンポーネント名、プロパティ名、型名など）に使い、一般的な概念や用語には使わない。

## illustrations/ プロジェクト

図版は React コンポーネントとして実装し、Playwright でスクリーンショットをキャプチャする。

```bash
cd illustrations
npm run dev          # Vite 開発サーバー
npm run capture:all  # 全図版をキャプチャ
```

- 各図版は `illustrations/src/figures/fig-NN-*.tsx` に対応。
- UI ライブラリ実例の図版では Radix UI, MUI, Chakra UI, Ant Design を実際にレンダリングしている。
- 出力先: `illustrations/output/`
