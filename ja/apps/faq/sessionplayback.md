# セッションプレイバックは動画ですか

## 重要事項

- セッションプレイバックは動画ではありません。ヒートマップで利用されるイベントログと、開発中に取得したスクリーンショットを重ね合わせることで、セッションプレイバックを構成しています。
- また、USERDIVE iOS SDKは、エンドユーザーが実行しているアプリのスクリーンショットを取得しません。

## セッションプレイバックの原理

以下の2つのデータを合成してHTML上で動画のように表示しています。

- アプリ開発エンジニアがアップロードしたスクリーンショット
- エンドユーザーの操作ログ