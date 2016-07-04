# 手動インストール

## ファイルダウンロード

次のリンクからプラットホームに対応したUSERDIVE SDKをダウンロードします。

- [USERDIVE iOS SDK](https://github.com/uncovertruth/userdive-ios-sdk/releases/tag/1.1.0)
- [USERDIVE iOS SDK for Unity (Unity用)](https://github.com/uncovertruth/userdive-ios-sdk-for-unity/releases/tag/v1.0.0)

## SDKの追加

ダウンロードしたファイルを解凍して対象アプリのXcodeプロジェクトに追加します。

## フレームワークの追加

プロジェクトに`SystemConfigurationフレームワーク`を追加します。

![add systemconfiguration framework](./files/install_manual_1.png)

## リンカオプションの変更

Build Settingsを開き、Linking -> Other Linker Flagsに`-ObjC`を追加します。

![add objc linker flag](./files/install_manual_2.png)
