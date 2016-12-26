# API

|                |                                  |
|:---------------|:---------------------------------|
| 最終更新       | {{ file.mtime }}                 |
| 対応バージョン | 1.0.0                            |
| 概要           | アプリのトラッキングを開始する。 |

## 使い方

### Objective-C

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // Team IDを引数として渡す
    [Userdive startTrackingMode:123];
    return YES;
}
```

### Swift

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    // Team IDを引数として渡す
    Userdive.startTrackingDeveloperMode(123)
    return true
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
