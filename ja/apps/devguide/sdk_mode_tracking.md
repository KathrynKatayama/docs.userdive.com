# トラッキングモード

リリース版アプリまたはテスト版アプリに組み込み、ユーザの動きを追跡するモードです。
デベロッパモードと同様に、自動、手動でトラッキングする画面を切り替えることができます。

## トラッカーの種類

トラッキングしたいイベントに応じて複数の種類のトラッカーが用意されています。
手動でトラッカーを選択する場合には、以下の表のIDを参考に設定してください。

| ID | トラッカー          | 機能                                | 自動トラッキング | 手動トラッキング |
|:---|:--------------------|:------------------------------------|:-----------------|:-----------------|
| 0  | ScreenEventTracker  | 画面遷移                            | ON               | 任意             |
| 1  | RotateEventTracker  | 回転イベント (portrait / landscape) | ON               | 任意             |
| 2  | InputEventTracker   | キーボード入力                      | ON               | 任意             |
| 3  | GestureEventTracker | スワイプ等のジェスチャ入力          | ON               | 任意             |

## 自動で画面遷移を認識し、トラッキングする

```markdown
ノート: 組込対象のアプリで下記のいずれかをMethod swizzlingを使用している場合は
「手動で画面遷移を管理し、トラッキングする」の節に従い組込を行なってください

- `UIApplication:sendEvent:`
- `UIViewController:viewDidAppear:`
- `UIViewController:viewWillDisappear:`

USERDIVE iOS SDKはユーザのジェスチャや画面遷移を自動的に認識してトラッキングすることができます。
トラッキングを開始するには `startTrackingMode:` メソッドを呼び出します。
```

USERDIVE iOS SDKのヘッダをインポートします。

```objective-c
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に
`Userdive:startTrackingMode:<YOUR_TEAM_ID>` を追加します。
*<YOUR_TEAM_ID>* にはあなたのチームIDを入れてください。

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [Userdive setLogEnabled:YES];
    [Userdive startTrackingMode:<your team id>];  // <-- HERE

    return YES;
}
```

## 手動で画面遷移を管理し、トラッキングする

独自のビュー構成(iOS標準と異なるビュー構成、サードパーティのライブラリを使用しているなど)の場合、
手動で画面遷移を管理しなければならないことがあります。

USERDIVE iOS SDKのヘッダをインポートします。

```objective-c
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に
`Userdive:startTrackingMode:<YOUR_TEAM_ID>:trackers:` を追加します。
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
