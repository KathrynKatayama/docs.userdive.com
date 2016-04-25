# デベロッパモード

**警告: リリース版アプリではこのモードを使ってはいけません**

デベロッパモードでは、UIWindowに表示されたビューからヒートマップ背景用画像をキャプチャします。


## 組み込み

### 自動で画面をキャプチャする

UINavigationController, UITabBarControllerを利用している場合、画面遷移を自動的に認識して
1ページずつ画面キャプチャを取得することができます。

**ノート: 任意のタイミングで画面キャプチャを取得したい場合には、後述の「手動で画面キャプチャを取得する」の手順にしたがって実装してください。**

USERDIVE iOS SDKヘッダをインポートします。

```objectivec
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に `Userdive:startDeveloperMode:` を追加します。

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE
  [Userdive startDeveloperMode:<your team id>];

  return YES;
}
```

`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

アプリを起動すると、画面遷移後にキャプチャ取得時に確認ダイアログが表示されるので、
*送信* ボタンをタップして画面イメージをUSERDIVEにアップロードします。

### 手動で画面キャプチャを取得する

独自のビュー構成を採用している場合、手動で画面キャプチャを取得する必要があります。

USERDIVE iOS SDKヘッダをインポートします。

```objectivec
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に `Userdive:startDeveloperMode:<YOUR_TEAM_ID>:trackers:` を追加します。
*<YOUR_TEAM_ID>* にはあなたのチームIDを入れてください。

**ノート: 開始時のメソッドが異なることに注意してください。**

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE WITHOUT TRACKERS
  [Userdive startDeveloperMode:<your team id>
                      trackers:@[
                      [NSNumber numberWithInteger:1],
                      [NSNumber numberWithInteger:2],
                      [NSNumber numberWithInteger:3]
                      ]];

  return YES;
}
```

画面キャプチャを取得したい画面が表示されたら、次のようにメソッドを呼び出してください。

- `updateScreen`を呼び出すと、画面キャプチャ取得の準備を行います
- 再度 `updateScreen` を呼び出すと画面キャプチャを取得します（つまり、キャプチャを取得するまでに合計二度 `updateScreen`を呼び出す必要があります）

```objectivec
- (void)viewDidAppear:(BOOL)animated
{
  [super viewDidAppear:animated];

  [Userdive updateScreen];
  [Userdive setScreenName:@"screen A"];
}
```
