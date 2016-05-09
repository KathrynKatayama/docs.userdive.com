<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [API](#api)
  - [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [制限](#%E5%88%B6%E9%99%90)
  - [更新履歴](#%E6%9B%B4%E6%96%B0%E5%B1%A5%E6%AD%B4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# API

|                |            |
|:---------------|:-----------|
| 最終更新       | {{ file.mtime }} |
| 対応バージョン | 1.2.0以降  |
| 概要           | 任意のトラッカーを指定してアプリのトラッキングを開始する。 |

## 使い方

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // 起動したい任意のトラッカーを指定する
    NSMutableArray *trackers = @[
        [NSNumber numberWithInteger:1],
        [NSNumber numberWithInteger:2],
        [NSNumber numberWithInteger:3]
    ];

    // Team IDを引数として渡す
    [Userdive startTrackingMode:123
                       trackers:trackers];
    return YES;
}
```

指定可能なトラッカーは以下の通り。

| ID | トラッカ            | 機能                                |
|:---|:--------------------|:------------------------------------|
| 0  | ScreenEventTracker  | 画面遷移                            |
| 1  | RotateEventTracker  | 回転イベント (portrait / landscape) |
| 2  | InputEventTracker   | キーボード入力                      |
| 3  | GestureEventTracker | ジェスチャ入力                      |


## 制限

なし。

## 更新履歴

- 1.2.0 最初のリリース
