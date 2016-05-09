<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [リソース使用について](#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E4%BD%BF%E7%94%A8%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [CPUサイクル](#cpu%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB)
  - [メモリ](#%E3%83%A1%E3%83%A2%E3%83%AA)
  - [ネットワーク](#%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# リソース使用について

SDK実行中のリソース消費については次のとおりです。

## CPUサイクル

- 操作イベント、遷移イベント検出時にログ格納処理を実施しています
- イベント発生時に記録するのみなので、CPUサイクルは無視出来る程度と考えています


## メモリ

- SDK開始タイミングで900KB消費します
- イベントデータはバックグラウンドモードに入るまでメモリ上に保持します
- 約80イベントで100KBほど消費します（イベント内容により上下します）


## ネットワーク

- トラッキングセッション開始時に、セッション取得のため通信を実施します（1KB程度）
- バックグラウンドに移行した際にイベントログをアップロードします（200KB〜）
