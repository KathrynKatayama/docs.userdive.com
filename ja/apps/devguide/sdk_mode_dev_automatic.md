# 自動で画面イメージを取得する

```markdown
ノート: 任意のタイミングで画面キャプチャを取得したい場合には、後述の「手動で画面キャプチャを取得する」の手順にしたがって実装してください。
```

## 制限事項

組込対象のアプリで以下のメソッドのいずれかをMethod swizzlingしている場合は *「手動で画面キャプチャを取得する」* の節に従い組込を行なってください。

- UIApplication:sendEvent:
- UIViewController:viewDidAppear:
- UIViewController:viewWillDisappear:

## 自動で画面イメージが取得できるビュー

以下のビューは、画面遷移を自動的に認識して1画面ずつ画面イメージを取得することができます。

- UINavigationController配下のビュー
- UITabBarController配下のビュー

## 組込手順

### Objective-C

USERDIVE iOS SDKヘッダーをインポートします。

```objective-c
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に
`Userdive:startDeveloperMode:` を追加します。
`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Enable debug logging
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE
  [Userdive startDeveloperMode:<your team id>];

  return YES;
}
```

### Swift

`AppDelegate.swift` 内に `Userdive.startDeveloperMode(<YOUR_TEAM_ID>)` を追加します。
`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
  // Enable debug logging
  Userdive.setLogEnabled(true)

  // START DEVELOPER MODE
  Userdive.startDeveloperMode(TEAM_ID)
  return true
}
```

## 画面イメージ取得

アプリを起動すると画面遷移後、キャプチャ取得時に確認ダイアログが表示されるので、
*送信* ボタンをタップして画面イメージをUSERDIVEにアップロードします。

![sdk_verification_capture_1.png](./files/sdk_verification_capture_1.png)

画面キャプチャのアップロード状態はダイアログで表示されます。

![sdk_verification_capture_2.png](./files/sdk_verification_capture_2.png)
