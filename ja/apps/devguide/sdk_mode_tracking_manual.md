# 手動で画面遷移を管理し、トラッキングする

UINavigationControllerやUITabBarControllerを
使用せずに画面内容が切り替わる場合、手動で画面切替を
行う必要があります。
UIWindow上に直接ビューオブジェクトを配置する場合などが
これに該当します。

## トラッカーの種類

トラッキングしたいイベントに応じて複数の種類のトラッカーが用意されています。
手動でトラッカーを選択する場合には、以下の表のID 1, 2, 3番のみを
実行するようにします。

| ID | トラッカー            | 機能                               | 自動トラッキング | 手動トラッキング |
|:---|:--------------------|:---------------------------------|:-------------|:-------------|
| 0  | ScreenEventTracker  | 画面遷移                           | ON           | 任意          |
| 1  | RotateEventTracker  | 回転イベント (portrait / landscape) | ON           | 任意          |
| 2  | InputEventTracker   | キーボード入力                      | ON           | 任意          |
| 3  | GestureEventTracker | スワイプ等のジェスチャ入力             | ON           | 任意          |

## 組込手順

### Objective-C

USERDIVE iOS SDKのヘッダーをインポートします。

```objective-c
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に下記を追加します。

- `Userdive:startTrackingMode:<YOUR_TEAM_ID>:trackers:`

`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions

{
  [Userdive setLogEnabled:YES];

  // START TRACKING MODE WITHOUT SCREEN TRACKER
  [Userdive startTrackingMode:1
                     trackers:@[
                     [NSNumber numberWithInteger:1],
                     [NSNumber numberWithInteger:2],
                     [NSNumber numberWithInteger:3]
                     ]];

  return YES;
}
```

画面遷移が発生したタイミングで `updateScreen` メソッドを呼び出してください。
画面名をセットする場合は、追加で `setScreenName:` メソッドを呼び出します。

```objective-c
- (void)viewDidAppear:(BOOL)animated
{
  [super viewDidAppear:animated];

  [Userdive updateScreen];
  [Userdive setScreenName:@"screen A"];
}
```

### Swift

`AppDelegate.swift` 内に
`Userdive.startTrackingMode(<YOUR_TEAM_ID>, trackers: [Int])`
を追加します。`trackers`の引数に注意してください。
また、 `<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
  // Enable debug logging
  Userdive.setLogEnabled(true)

  // START TRACKING MODE
  Userdive.startTrackingMode(TEAM_ID, trackers: [1, 2, 3])
  return true
}
```

アプリケーション上で `Userdive.updateScreen()` を呼び出すと、
ビューが変更されたことをSDKに通知します。明示的に画面名を指定する場合には
続けて `Userdive.setScreenName()` を実行してください。

```swift
override func viewDidAppear(animated: Bool) {
  super.viewDidAppear(animated)

  Userdive.updateScreen()
  Userdive.setScreenName("screen A")
}
```
