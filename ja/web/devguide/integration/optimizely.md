# Optimizely 連携

下記の手順を用いて、 USERDIVE に Optimizely の実験情報を引き渡すことができます。

[example](https://uncovertruth.github.io/examples/integration/optimizely.html)

## HTML の編集

連携を行うには下記のタグが必要になります。

- Optimizely スニペット
- USERDIVE ロードタグ
- Optimizely/USERDIVE 連携タグ

### Optimizely スニペット

通常の Optimizely のスニペットが必要です。

### USERDIVE ロードタグ

{% include './tag/load.md' %}

USERDIVE ロードタグは `</head>` の直前に反映させることを推奨しています。

### Optimizely/USERDIVE 連携タグ

{% include './tag/optimizely.min.md' %}

| Field                     | Type    | Required | Description                       |
|:--------------------------|:--------|:---------|:----------------------------------|
| [ Project Id ]            | String  | Yes      | USERDIVE のプロジェクトIDです。   |
| [ POLLING INTERVAL TIME ] | Integer | No       | デフォルト 50 ミリ秒              |
| [ POLLING MAX TRY COUNT ] | Integer | No       | 最大ポーリング回数。 デフォルト 3 |

プロジェクトIDは USERDIVE より取得することができます。

未圧縮の連携タグ

{% include './tag/optimizely.md' %}

上記のコードで行われる主な処理は下記の3つです。

1. `window.optimizely.data.state` が有効になるまでポーリングして待機
1. `window.optimizely` より実験データの抽出を行い、 USERDIVE で利用するURLを作成
1. 作成した URL を USERDIVE に設定し、計測を開始

## 注意点

Optimizely/USERDIVE 連携タグは下記よりもあとに存在する必要があります。

1. USERDIVE ロードタグ

下記の場合、 USERDIVE の計測は開始されません。

1. Optimizely での実験が一定時間以内( [ POLLING INTERVAL TIME] * [ POLLING MAX TRY COUNT ] ミリ秒以内) に確定されなかった場合

## Redirect experiments

Optimizely では [`Redirect experiments`](https://help.optimizely.com/Build_Experiments/Redirect_experiments:_Test_separate_URLs) 機能を提供しています。
こちらの機能を用いた際、Optimizely/USERDIVE 連携では下記のような注意点があります。

### ノート

1. リダイレクト後のURLには必ず USERDIVE の計測タグが必要です。
1. リダイレクトされた URL はリダイレクト前のページと同一ドメインであることを推奨しています。
    - 異なるドメイン間でのセッション継続を行う場合、リダイレクト後のドメインへセッション継続するカスタムタグを設置する必要があります。
1. リダイレクトページが挟まれるため、参照元情報を引き継ぐことはできません。
