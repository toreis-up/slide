# slide

Slidev でスライドを作成して勝手にホストするやつです。
Thanks to [slidev](https://sli.dev/) and [Antfu's talk](https://github.com/antfu/talks).

## 使いかた

```bash
# 新しいスライドを作る
pnpm run new

# スライドをビルドする
pnpm run build

# スライドをローカルで確認する
pnpm wrangler dev
```

## 自動デプロイ

GitHub Actions で `main` ブランチに push されたときに自動でデプロイされます。

Actions の設定で `WRANGLER_API_TOKEN` シークレットに Cloudflare Workers の API トークンを設定してください。

## ライセンス

AGPL-3.0 License
