<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [デベロッパモード](#%E3%83%87%E3%83%99%E3%83%AD%E3%83%83%E3%83%91%E3%83%A2%E3%83%BC%E3%83%89)
  - [組み込み](#%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF)
    - [自動で画面をキャプチャする](#%E8%87%AA%E5%8B%95%E3%81%A7%E7%94%BB%E9%9D%A2%E3%82%92%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E3%81%99%E3%82%8B)
    - [手動で画面キャプチャを取得する](#%E6%89%8B%E5%8B%95%E3%81%A7%E7%94%BB%E9%9D%A2%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# デベロッパモード

**警告: リリース版アプリではこのモードを使ってはいけません**

デベロッパモードでは、UIWindowに表示されたビューからヒートマップ背景用画像をキャプチャします。


## 組み込み

### 自動で画面をキャプチャする

**ノート: 任意のタイミングで画面キャプチャを取得したい場合には、後述の「手動で画面キャプチャを取得する」の手順にしたがって実装してください。**

**ノート: 組込対象のアプリで `UIApplication:sendEvent:` , `UIViewController:viewDidAppear:` , `UIViewController:viewWillDisappear:` のいずれかをMethod swizzlingを使用している場合は *「手動で画面キャプチャを取得する」* の節に従い組込を行なってください。**


UINavigationController, UITabBarControllerを利用している場合、画面遷移を自動的に認識して
1ページずつ画面キャプチャを取得することができます。次の手順で実施します。

USERDIVE iOS SDKヘッダをインポートします。

```objectivec
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に `Userdive:startDeveloperMode:` を追加します。 `<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE
  [Userdive startDeveloperMode:<your team id>];

  return YES;
}
```

アプリを起動すると、画面遷移後にキャプチャ取得時に確認ダイアログが表示されるので、
*送信* ボタンをタップして画面イメージをUSERDIVEにアップロードします。

![sdk_verification_capture_1.png](./files/sdk_verification_capture_1.png)

画面キャプチャのアップロード状態はダイアログで表示されます。

![sdk_verification_capture_2.png](./files/sdk_verification_capture_2.png)


### 手動で画面キャプチャを取得する

画面を動的に切り替えた場合、画面表示内容が変更されたことをSDKに通知する必要があります。
アプリケーション上で `Userdive:updateScreen` を呼び出すことで、SDKは画面遷移が実施されたと判断します。
次のように実装します。

USERDIVE iOS SDKヘッダをインポートします。

```objectivec
#import "Userdive.h"
```

`AppDeletegate:application:didFinishLaunchingWithOptions:` に `Userdive:startDeveloperMode:trackers:` を追加します。
`<YOUR_TEAM_ID>` にはあなたのチームIDを入れてください。

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

アプリを起動すると、画面遷移後にキャプチャ取得時に確認ダイアログが表示されるので、
*送信* ボタンをタップして画面イメージをUSERDIVEにアップロードします。

![sdk_verification_capture_1.png](./files/sdk_verification_capture_1.png)

画面キャプチャのアップロード状態はダイアログで表示されます。

![sdk_verification_capture_2.png](./files/sdk_verification_capture_2.png)
