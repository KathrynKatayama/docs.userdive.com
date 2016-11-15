# 画面イメージの採集

USERDIVEのヒートマップを利用いただくために、事前に画面イメージを
採集する必要があります。これは、ユーザーの操作データを統計的に処理する際に
1つのビュー対して1つの画面イメージとして取り扱う必要があるためです。

USERDIVE iOS SDKには画面イメージのキャプチャとユーザアクションの追跡という
2つの動作モードがあり、前者を **デベロッパーモード** 、
後者を **トラッキングモード** と呼びます。

```markdown
警告: リリース版のアプリではデベロッパモードを使用しないでください。
```