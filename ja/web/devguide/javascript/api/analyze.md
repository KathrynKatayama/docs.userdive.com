<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`analyze` API](#analyze-api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `analyze` API

サイトの計測を開始します。
`analyze` APIを実行する前に、必ず `create` API をご利用ください。
サイトの計測には USERDIVE のアカウント情報が必要です。

- [`create` API について](./create.html)

```html
<script>
ud("analyze");
</script>
```

上記のコードで行われる主な処理は下記の

1. アカウント情報を USERDIVE に問い合わせし、セッションを作成する。
1. 下記、イベント・ユーザ情報の計測を開始する。
  - ユーザの環境情報: IP アドレス、ユーザーエージェントから識別可能な情報
    - 国、地域
    - デバイス種別
    - OS種別
    - ブラウザ種別
    - 画面サイズ
  - ユーザが表示しているページの情報
    - 表示されている URL
    - ブラウザのウィンドウサイズ
    - ウェブページのサイズ
    - ウェブページ内のフォーム数、インプット項目情報
  - ユーザが操作したイベント情報
    - マウスイベント (座標、クリック、ボタン情報)
    - タップイベント (座標)
    - デバイスの回転イベント
    - キーボード操作イベント (キーが押されたかのみ、どのキーが押されたかは収集対象外)
    - スクロールイベント
    - JavaScript エラー情報
    - 次ページヘの遷移イベント
    - イベント発生時刻
1. イベントデータの送信を行う。

送信されたイベントデータは一定時間たった後、 USERDIVE に反映されます。
