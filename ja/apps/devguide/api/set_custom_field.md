# API

|                |                          |
|:---------------|:-------------------------|
| 最終更新       | {{ file.mtime }}         |
| 対応バージョン | 1.0.0以降                |
| 概要           | カスタム変数を設定する。 |

## 使い方

### Objective-C

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [Userdive startTrackingMode:123];

    // カスタム変数は最大5個まで指定できる￥
    [Userdive setCustomField1:@"male"];
    [Userdive setCustomField2:@"33"];
    return YES;
}
```

### Swift

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    Userdive.startTrackingMode(123)
    Userdive.setCustomField1("male")
    Userdive.setCustomField1("33")
    return true
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
