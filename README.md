# ハンター文字変換サイト
ひらがなとハンター文字を相互に変換できます。

## 使用技術
- フレームワーク: React + Vite
- CSS: TailwindCSS + Tailwind Variants
- デプロイ: GitHub Pages

### フォント
このサイトでは、ハンター文字の表示に[このフォント](https://half-a.net/sozai-page4)を使用しています。

## 開発
以下のコマンドで開発サーバーを起動できます。
```bash
bun install
bun run dev
```

### ビルド
このコマンドを実行します。
```bash
bun run build
```

すると、`/dist`以下にビルドしたファイルが作られます。
何も指定しなか合った場合、パスは`./`から始まります。