# API

|                |                                                            |
|:---------------|:-----------------------------------------------------------|
| 最終更新       | {{ file.mtime }}                                           |
| 対応バージョン | 1.2.0以降                                                  |
| 概要           | 任意のトラッカーを指定してアプリのトラッキングを開始する。 |

## 使い方

```objective-c
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
