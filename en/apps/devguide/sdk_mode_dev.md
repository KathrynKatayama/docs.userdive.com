<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Developer Mode](#developer-mode)
  - [Implementation](#implementation)
    - [Automatically captures screen image](#automatically-captures-screen-image)
    - [Manually captures screen image](#manually-captures-screen-image)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Developer Mode

**Caution: Never use this mode on released app**

On Developer Mode, it captures screen images shown on UIWindow as a back ground image for heatmaps.


## Implementation

### Automatically captures screen image

**Note: If capturing the screen image at voluntary timing, then follow the steps below; "Manually captures screen image"**

**ノート: 組込対象のアプリで `UIApplication:sendEvent:` , `UIViewController:viewDidAppear:` , `UIViewController:viewWillDisappear:` のいずれかをMethod swizzlingを使用している場合は *「手動で画面キャプチャを取得する」* の節に従い組込を行なってください。**

When `UINavigationController` or `UITabBarController` are bring used, USERDIVE reconizes the page movements automatically and upload the screen image one by one. Follow the steps below.

Import USERDIVE iOS SDK headder.

```objectivec
#import "Userdive.h"
```

Add `Userdive:startDeveloperMode:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`. Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE
  [Userdive startDeveloperMode:<YOUR_TEAM_ID>];

  return YES;
}
```

When activating an app, the following pop-up shows after screen the transition to next page. 
Choose *Send* to upload screen image to USERDIVE.

![sdk_verification_capture_1.png](../../../ja/apps/devguide/files/sdk_verification_capture_1.png)

The next pop-up shows whether the screen upload was succuessful or not.

![sdk_verification_capture_2.png](../../../ja/apps/devguide/files/sdk_verification_capture_2.png)


### Manually captures screen image

When screen is dynamically switched, it must be notified the SDK that the screen content has been changed.
By calling `Userdive:updateScreen` on the app, SDK determines screen transition has occured.
The Implementation is following.
画面を動的に切り替えた場合、画面表示内容が変更されたことをSDKに通知する必要があります。
アプリケーション上で  を呼び出すことで、SDKは画面遷移が実施されたと判断します。
次のように実装します。

Import USERDIVE iOS SDK headder.

```objectivec
#import "Userdive.h"
```

Add `Userdive:startDeveloperMode:trackers:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`.
Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE WITHOUT TRACKERS
  [Userdive startDeveloperMode:<YOUR_TEAM_ID>
                      trackers:@[
                      [NSNumber numberWithInteger:1],
                      [NSNumber numberWithInteger:2],
                      [NSNumber numberWithInteger:3]
                      ]];

  return YES;
}
```

When the screen you want to take capture is shown, call the following method.

- Call `updateScreen` to prepare for screen image capture.
- Call `updateScreen` again to take screen image capture. (Total of two `updateScreen` is neccessary to cop .) 

```objectivec
- (void)viewDidAppear:(BOOL)animated
{
  [super viewDidAppear:animated];

  [Userdive updateScreen];
  [Userdive setScreenName:@"screen A"];
}
```

When activating an app, the following pop-up shows after screen the transition to next page. 
Choose *Send* to upload screen image to USERDIVE.

![sdk_verification_capture_1.png](../../../ja/apps/devguide/files/sdk_verification_capture_1.png)

The next pop-up shows whether the screen upload was succuessful or not.

![sdk_verification_capture_2.png](../../../ja/apps/devguide/files/sdk_verification_capture_2.png)