# API

|                |                                  |
|:---------------|:---------------------------------|
| 最終更新       | {{ file.mtime }}                 |
| 対応バージョン | 1.0.0                            |
| 概要           | アプリのトラッキングを開始する。 |

## 使い方

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Team IDを引数として渡す
    [Userdive startTrackingMode:123];
    return YES;
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
