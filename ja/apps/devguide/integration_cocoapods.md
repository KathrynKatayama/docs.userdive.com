# CocoaPodsからインストール (推奨)

USERDIVE iOS SDKはCocoaPodsからインストールできます。

## Podfileの記述

ターミナルを開き、USERDIVE iOS SDKを組み込むXcodeプロジェクトの
ルートディレクトリーへ移動し、 `pod init` コマンドを実行して `Podfile` を生成します。

```bash
pod init
```

`Podfile` にUSERDIVE-iOS-SDKを利用するための定義を書き加えます。
他に設定がなければ次のようになります。

```ruby
# Uncomment this line to define a global platform for your project
# platform :ios, '9.0'

target 'YourProject' do
  # Uncomment this line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for YourProject
  pod 'Userdive-iOS-SDK', '~> 1.0'

  target 'YourProjectTests' do
    inherit! :search_paths
    # Pods for testing
  end

  target 'YourProjectUITests' do
    inherit! :search_paths
    # Pods for testing
  end

end
```

YourProject はアプリケーション名によって違いますが、Podfileをpod initコマンドで
自動生成した場合には自動で設定されています。`# Pods for YourProject` の次の行に
Userdive-iOS-SDKの行を追加します。

[Podsのインストールへ](#pods&#x306E;&#x30A4;&#x30F3;&#x30B9;&#x30C8;&#x30FC;&#x30EB;)

## インストール

Podfileで定義したライブラリ群をインストールします。

```sh
pod install
```

## 開発開始

ワークスペースは、 `YourProject.xcodeproj` ではなく、 `YourProject.xcworkspace` を指定して開きます。

```sh
open YourProject.xcworkspace
```
