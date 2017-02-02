# DLPO 連携

下記の手順を用いて、 USERDIVE にテスト情報を引き渡すことができます。

- [(example)](http://hashimoto.data-artist.info/test/userdive_test.html)

## HTML の編集

連携を行うためには下記のタグが必要になります。

- DLPO タグ
- USERDIVE ロードタグ
- DLPO/USERDIVE 連携タグ

### DLPO タグ

DLPO の通常のタグの反映が必要です。

### USERDIVE ロードタグ

USERDIVE ロードタグの反映が必要です。

{% include './tag/load.md' %}

USERDIVE ロードタグは `</head>` の直前に反映させることを推奨しています。

### DLPO/USERDIVE 連携タグ

{% include './tag/dlpo.min.md' %}

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| [Project Id] | String | Yes      | USERDIVE のプロジェクトIDです。 |

プロジェクトIDは USERDIVE より取得することができます。

未圧縮の連携タグ

{% include './tag/dlpo.md' %}

上記のコードで行われる主な処理は下記の2つです。

1. DLPO がA/Bテストの結果を確定する。
1. 確定された情報を USERDIVE に設定し、 USERDIVE の計測を開始する。

DLPO/USERDIVE 連携タグは `</body>` の直前に反映させることを推奨しています。

## 注意点

- DLPO/USERDIVE 連携は、DLPO管理画面よりキャンペーンを有効にしてください。

- DLPO/USERDIVE 連携タグは、下記の2つのタグよりも後に存在する必要があります。

    1. DLPO タグ
    1. USERDIVE ロードタグ
