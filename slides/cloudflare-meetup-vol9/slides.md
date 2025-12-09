---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cf-assets.www.cloudflare.com/slt3lc6tev37/6VGwVJTzNdd2Jhij9A94so/49da00693309690c84183b645394bb18/Cloudflare_Network_275__Cities_in_100__Countries.png
dim: true
# some information about your slides (markdown enabled)
title: Cloudflare Meet-up Vol.9
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
duration: 5min
seoMeta:
  ogTitle: Cloudflare 公式の教科書がある話
  ogDescription: Cloudflare Meet-up Vol.9
  ogUrl: https://slide.reisan.dev/cloudflare-meetup-vol9/
  ogImage: auto
---

# Cloudflare 公式の<br>教科書がある話

## Cloudflare Meet-up Tokyo Vol.9

### #CloudflareUG #CloudflareUG_hnd

<PoweredBySlidev />

---
layout: intro
image: ./tora_and_me.jpg
---

# 自己紹介

<img src="/tora_and_me.jpg" alt="tora_and_me" width="200" class="abs-br right-8 top-8"/>

<v-clicks>

- 名前: 吉川 祥生 (YOSHIKAWA Shosei) @toreis-up
- 所属: 木更津工業高等専門学校 制御・情報システム工学専攻 1年 (20 y/o)
- 趣味: プログラミング、バイク (Yamaha MT-25)
- Slidev JP Doc のメンテナをやっています
- 最近の CF 事情: ひとり Cloudflare を使い倒すアドカレを走っています (現在 7/10 記事投稿済み)
- 好きな Region: NRT (Tokyo)
</v-clicks>



---
layout: statement
---

<v-clicks>

# Cloudflare、製品多すぎ問題

## ひいては、組み合わせが多すぎ問題

</v-clicks>

---
layout: statement
---

# 何が何に使えるのか分からない

---
layout: statement
---

# 公式ドキュメントはある <span class="text-4xl" v-click> けど </span>

<div v-click>

## 結構深いところにある

</div>
<div v-click>

### しかも英語

</div>

---
layout: statement
---

## どこかに Cloudflare の製品を<br>くっつけて使っている教科書はないかなあ

---
layout: image
image: /image.png
backgroundSize: 75%
---

あった

---
layout: quote
---

# Reference Architectures #とは

<div class="quote">
All the documents in this section are designed to help you understand how Cloudflare and its products are designed and architected.

These documents describe <br>
"<span v-mark.underline.orange>how you can leverage our platform to create solutions based on your business needs.</span>"

<span v-mark.underline.orange>No matter if you know Cloudflare well, or if you are just starting out.</span><br>
These documents help you understand how our connectivity cloud is architectured and how the services can be integrated with your own infrastructure.<br>
<span class="text-gray">Read How to use to understand how the documentation is structured, and either navigate by type from the menu or find by solution area.</span>
</div>

---
layout: quote
---

# Reference Architectures #とは

<div>
Cloudflare 製品がどのように設計・構築されているかを理解するのに役立つドキュメント群です。<br>
これらのドキュメントは、ビジネスニーズに基づいてソリューションを作成するために、<br>
<span v-mark.underline.orange>Cloudflare のプラットフォームをどのように活用できるか</span>を説明しています。
</div>

<br>

<div v-click>
<span v-mark.underline.orange>Cloudflare をよく知っていようが、始めたばかりであろうが関係ありません。</span><br>
これらのドキュメントは、Cloudflare のコネクティビティクラウドがどのように設計されているか、<br>
また、サービスがどのように独自のインフラストラクチャと統合できるかを理解するのに役立ちます。<br>
<span class="text-gray">
ドキュメントの構成方法を理解するには「How to use」を読み、<br>
メニューからタイプ別にナビゲートするか、ソリューションエリアで見つけてください。
</span>
</div>

---
layout: statement
---

# Reference Architectures #とは

### Cloudflare 製品のアーキテクチャ解説 と その活用法の紹介

---
layout: two-cols-header
---

# Reference Architectures に載っているもの

::left::

<div v-click>

### アーキテクチャ解説

- ロードバランシングの仕組み
- セキュリティ対策の仕組み
- CDN の仕組み

</div>

::right::

<div v-click>

### 活用法

- AI Vibe Coding Platform
  - AI Gateway を使ってコード生成をする
  - 生成したコードを Sandbox, Containers で実行する
  - アプリを Workers でホスティングする

- 画像の最適化と配信
  - Cloudflare Image Resizing と R2 を使って画像を最適化・配信する

</div>

<style>
.two-cols-header {
  column-gap: 20px;
}
</style>

---
layout: statement
---

## とはいえ、結局英語ではある

<v-clicks>

### 英語を読もう

### あと各サービスのドキュメントが結局最強

</v-clicks>

---
layout: statement
---

<v-clicks>

# まとめ

## Cloudflare 製品の教科書的ドキュメント群がある

### ぜひ読んでみてください

</v-clicks>

---
layout: statement
---

<v-clicks>

# 大変です

## 尺が余りました

なので、私がよく読む教科書をざっと紹介します

</v-clicks>

---
layout: fact
---

<v-clicks>

# Cloudflare Docs

### https://developers.cloudflare.com/

Cloudflare 製品の公式ドキュメント群

各サービスの使い方や API リファレンスが載っている

紹介した Reference Architectures もここにある

読んでるだけで勉強になる (Reference とかは結構深く勉強できる)

コードサンプルが多く、実践もしやすい

</v-clicks>

---
layout: fact
---

<v-clicks>

# Cloudflare Blog

### https://blog.cloudflare.com/

Cloudflare の公式ブログ

製品の新機能紹介が多いので、アーリーアダプターにはおすすめ

歴史をたどるときに便利

<div class="abs-br right-8 bottom-8">
etc...
</div>

</v-clicks>

---
layout: statement
---

##  みなさんが読むドキュメントは何ですか？

### ぜひ教えてください！(X とか Discord とかで…！)

---
layout: statement
---

# ! BREAKING NEWS !

## 尺埋めの小ネタ

---
layout: statement
---

## Wrangler は `wrangler2` でも一応動きます

https://github.com/cloudflare/workers-sdk/discussions/11341

---
layout: end
---

END

Thank you for your attention! :)