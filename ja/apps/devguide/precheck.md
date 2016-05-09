<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [事前チェックリスト](#%E4%BA%8B%E5%89%8D%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%88)
  - [対応機種 / 言語](#%E5%AF%BE%E5%BF%9C%E6%A9%9F%E7%A8%AE--%E8%A8%80%E8%AA%9E)
  - [制限事項](#%E5%88%B6%E9%99%90%E4%BA%8B%E9%A0%85)
  - [アプリ仕様確認](#%E3%82%A2%E3%83%97%E3%83%AA%E4%BB%95%E6%A7%98%E7%A2%BA%E8%AA%8D)
  - [SDKライフサイクル](#sdk%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB)
    - [状態遷移](#%E7%8A%B6%E6%85%8B%E9%81%B7%E7%A7%BB)
    - [処理シーケンス](#%E5%87%A6%E7%90%86%E3%82%B7%E3%83%BC%E3%82%B1%E3%83%B3%E3%82%B9)
  - [通常版SDK / Unityプラグインの違い](#%E9%80%9A%E5%B8%B8%E7%89%88sdk--unity%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AE%E9%81%95%E3%81%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 事前チェックリスト

この資料のゴールは、SDKの動作と実装方法を理解することです。

## 対応機種 / 言語

USERDIVE iOS SDK v1.2.0は以下の機種およびアーキテクチャ、言語に対応しています。

- 対応機種
    - iPhone4
    - iPhone4s
    - iPhone5
    - iPhone5c
    - iPhone5s
    - iPhone6
    - iPhone6+
    - iPhone6s
    - iPhone6s+
- 対応CPUアーキテクチャ
    - armv7
    - armv7s
    - arm64
    - i386
    - x86_64
- 対応言語
    - Objective-C
    - Swift (bridging headerを書く必要があります)
- BITCODE
    - 対応

## 制限事項

トラッキングイベント数やセッション数には次の上限があります。

- トラッキングの制限
    - 画面あたりの制限
        - 最大200イベント
        - 最大5分
    - セッションあたりの制限
        - 最大1200イベント
        - 最大1時間    
    - 1か月あたりのセッション数
        - *契約内容による*
    - 1日あたりのセッション数（アプリ別）
        - *契約内容による*
    - 1時間あたりのセッション数（アプリ別）
        - *契約内容による*


## アプリ仕様確認

SDKを組み込むアプリの仕様を確認し、追加するSDKの種類や問い合わせ内容についてご確認ください。

| 確認項目                                                | 利用している場合                     |
|:--------------------------------------------------------|:-------------------------------------|
| Unityを使用していますか                                 | [Unityプラグイン](https://github.com/uncovertruth/userdive-ios-sdk-for-unity)をご利用ください。    |
| WebViewを利用していますか                               | URLの組み合わせを限定するため、URLパラメータを管理画面上で制限することができます。詳しくはUncoverTruthまでお問い合わせください。 |
| 1つのビューコントローラで複数のビューを描画していますか | ビュー毎（ViewController毎）に一意の画面名を付ける必要があります。詳しくはUncoverTruthまでお問い合わせください。 |


## SDKライフサイクル

SDKのライフサイクルについて。

### 状態遷移

SDKは以下の状態を持ちます。

| 状態名 | 動作 |
|:-------|:-----|
| Tracking | ユーザ操作のトラッキング中。 |
| Pause | ユーザ操作のトラッキングを一時中断。 |
| Uploading | トラッキングログをアップロード中。 |
| Stop | 停止状態 |

![lifecycle](./files/lifecycle.png)

### 処理シーケンス

SDKは`Userdive:startTracking:`呼び出すとUserdiveサーバにセッション取得を試みます。
成功するとトラッキングを開始し、バックグラウンド移行時にログのアップロードを行います。

![sequence](./files/sequence.png)


## 通常版SDK / Unityプラグインの違い

通常版SDKとUnityプラグインでは動作が異なります。

| 機能                     | 通常版SDK | Unityプラグイン |
|:-------------------------|:----------|:----------------|
| タップヒートマップ       | ◯         | ◯             |
| スクロールヒートマップ   | ◯         | ×※1          |
| ルッキングヒートマップ   | ◯         | ×※1          |
| その他のイベント情報     | ◯         | ×※1          |
| ロケーションヒートマップ | ◯         | ×※2          |
| 導線分析                 | ◯         | ◯             |
| セッションプレイバック   | ◯         | ◯             |
| フィルタ                 | ◯         | ◯             |

※1 Unity GameView内ではスクロールヒートマップ、ルッキングヒートマップ、その他のイベント情報は取得できません。GameView以外では取得することができます。詳しくはお問い合わせください。

※2 Unityプラグインは通常版SDKを内包しているので、C#からObjCへのブリッジを記述することで全機能を利用することができる。