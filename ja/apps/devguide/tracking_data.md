<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [トラッキングデータ](#%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%87%E3%83%BC%E3%82%BF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# トラッキングデータ

- 共通データ
    - 時刻
    - IPアドレス
    - セッションID
- ユーザの環境情報: IP アドレス、デバイス情報から識別可能な情報
    - 国 (GeoIPにより推定)
    - デバイス種別
    - OSバージョン
    - 画面サイズ
    - ネットワーク情報(wifiか否か)
    - ユーザーの地理情報(設定時のみ）
- ユーザが表示しているスクリーンの情報
    - スクリーンを開いた時刻
    - スクリーンを閉じた時刻
    - スクリーン名
    - スクリーンのサイズ
    - スクリーンのキャプチャ画像(開発モード時のみ)
    - スクリーンの向き
- ユーザが操作したイベント情報
    - イベント発生時刻
    - タップイベント (座標)
    - タップしたオブジェクトの情報
        - アイコンが埋め込まれたボタンであれば、アイコン画像を取得
    - デバイスの回転イベント
    - キーボード入力イベント
    - スクロールイベント
    - スクロール量
    - スクリーンヘの遷移イベント
    - アプリがバックグラウンドに移行したイベント
