# 自動で画面遷移を認識し、トラッキングする

## 制限事項

 組込対象のアプリで下記のいずれかをMethod swizzlingを使用している場合は
「手動で画面遷移を管理し、トラッキングする」の節に従い組込を行なってください

- `UIApplication:sendEvent:`
- `UIViewController:viewDidAppear:`
- `UIViewController:viewWillDisappear:`

USERDIVE iOS SDKはユーザーのジェスチャや画面遷移を自動的に認識してトラッキングすることができます。
トラッキングを開始するには `startTrackingMode:` メソッドを呼び出します。

## 自動で画面イメージが取得できるビュー

以下のビューは、画面遷移を自動的に認識して1画面ずつ画面イメージを取得することができます。

- UINavigationController配下のビュー
- UITabBarController配下のビュー

## 組込手順

### Objective-C

USERDIVE iOS SDKのヘッダーをインポートします。

```objective-c
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に下記を追加します。

- `Userdive:startTrackingMode:<YOUR_TEAM_ID>`

`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [Userdive setLogEnabled:YES];
    [Userdive startTrackingMode:<your team id>];  // <-- HERE

    return YES;
}
```

### Swift

`AppDelegate.swift` 内に `Userdive.startTrackingMode(<YOUR_TEAM_ID>)` を追加します。
`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
  // Enable debug logging
  Userdive.setLogEnabled(true)

  // START TRACKING MODE
  Userdive.startTrackingMode(TEAM_ID)
  return true
}
```
