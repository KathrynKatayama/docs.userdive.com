<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Kaizen Platform 連携](#kaizen-platform-%E9%80%A3%E6%90%BA)
  - [HTML の編集](#html-%E3%81%AE%E7%B7%A8%E9%9B%86)
    - [Kaizen Platform スニペット](#kaizen-platform-%E3%82%B9%E3%83%8B%E3%83%9A%E3%83%83%E3%83%88)
    - [USERDIVE ロードタグ](#userdive-%E3%83%AD%E3%83%BC%E3%83%89%E3%82%BF%E3%82%B0)
    - [Kaizen Platform/USERDIVE 連携タグ](#kaizen-platformuserdive-%E9%80%A3%E6%90%BA%E3%82%BF%E3%82%B0)
  - [注意点](#%E6%B3%A8%E6%84%8F%E7%82%B9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Kaizen Platform 連携

下記の手順を用いて、 USERDIVE にテスト情報を引き渡すことができます。

- [(example)](https://uncovertruth.github.io/examples/integration/kaizenplatform.html)

## HTML の編集

連携を行うためには下記のタグが必要になります。

- Kaizen Platform スニペット
- USERDIVE ロードタグ
- Kaizen Platform/USERDIVE 連携タグ

### Kaizen Platform スニペット

Kaizen Platfom の通常のタグの反映が必要です。

### USERDIVE ロードタグ

USERDIVE ロードタグの反映が必要です。

{% include './tag/load.md' %}

USERDIVE ロードタグは `</head>` の直前に反映させることを推奨しています。

### Kaizen Platform/USERDIVE 連携タグ

{% include './tag/kaizenplatform.min.md' %}

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| [Project Id] | String | Yes      | USERDIVE のプロジェクトIDです。 |

プロジェクトIDは USERDIVE より取得することができます。

未圧縮の連携タグ

{% include './tag/kaizenplatform.md' %}

上記のコードで行われる主な処理は下記の2つです。

1. Kaizen Platform がA/Bテストの結果を確定する。
1. 確定された情報を USERDIVE に設定し、 USERDIVE の計測を開始する。

Kaizen Platform/USERDIVE 連携タグは `</body>` の直前に反映させることを推奨しています。

## 注意点

Kaizen Platform/USERDIVE 連携タグは、下記の2つのタグよりも後に存在する必要があります。

1. Kaizen Platform タグ
1. USERDIVE ロードタグ
