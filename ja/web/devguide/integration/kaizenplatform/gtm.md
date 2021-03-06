# Kaizen Platform 連携(Google Tag Manager利用)

`Google Tag Manager` を利用し下記のタグを反映することにより、 USERDIVE にテスト情報を引き渡すことができます。

また、こちらの手順では `Google Tag Manager` が提供する `dataLayer` の機能を用いてテスト情報の引き渡しを行います。

- [(Google Tag Manager examples)](https://uncovertruth.github.io/examples/integration/kaizenplatform/gtm.html)

## 必要なタグ

連携には、下記の3つのタグが必要になります。

1. Kaizen Platform スニペット
1. USERDIVE ロードタグ
1. Kaizen Platform/USERDIVE 連携タグ

### Kaizen Platform スニペット

Kaizen Platfom の通常のスニペットと、下記のタグを合わせて設定します。
下記のコードで行われる主な役割は以下の2つです。

1. Kaizen Platform がテストの内容を決定する
1. 決定された情報を `dataLayer` に対して `event` 名を `kzsApply` として登録

{% include '../tag/kaizenplatform/push_datalayer.md' %}

こちらのスニペットは `Google Tag Manager` 上で `document.write` を有効にする必要があります。

![document.writeを有効にする](./img/document_write.png)

### USERDIVE ロードタグ

USERDIVE ロードタグの反映が必要です。

{% include '../tag/load.md' %}

USERDIVE ロードタグは、 下記 `Kaizen Platform/USERDIVE連携タグ` よりも前に存在している必要があります。

### Kaizen Platform/USERDIVE 連携タグ

Kaizen Platform 連携タグの反映には下記の2つが必要です。

1. `Google Tag Manager` 上でトリガーに対し **カスタムイベント** を追加する
    ![custom eventをする](./img/custom_event.png)
1. 下記のコードを配信するタグに登録し、トリガーを **作成したカスタムイベント** のもので登録し、配信を行う

{% include '../tag/kaizenplatform/userdive.md' %}

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| [Project Id] | String | Yes      | USERDIVE のプロジェクトIDです。 |

上記の連携に成功した場合

- USERDIVE上では`_kzs_var_id` というパラメーター付きURLに対してデータの計測が開始されます
- **カスタム変数1** にて `expId`、 **カスタム変数2** にて `variationId` を利用したフィルターをかけることができます
