# API

|                |                      |
|:---------------|:---------------------|
| 最終更新       | {{ file.mtime }}     |
| 対応バージョン | 1.1.0以降            |
| 概要           | ログ出力を制御する。 |

## 使い方

### Objective-C

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // True=ログ出力, False=ログを出力しない
    [Userdive setLogEnabled:True];
    [Userdive startTrackingMode:123];
    return YES;
}
```

### Swift

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    // True=ログ出力, False=ログを出力しない
    Userdive.setLogEnabled(true)
    Userdive.startTrackingMode(123)
    return true
}
```


## 制限

なし。

## 更新履歴

- 1.1.0 最初のリリース
