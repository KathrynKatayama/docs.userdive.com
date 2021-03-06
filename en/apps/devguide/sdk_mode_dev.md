# Developer Mode

```markdown
Caution: Never use this mode on released app
```

On Developer Mode, it captures screen images shown on UIWindow
as a background image for heatmaps.

## Implementation

### Automatically captures screen image

```markdown
Note: If capturing the screen image at voluntary timing, then follow the steps below; "Manually captures screen image"
```

```markdown
ノート: 組込対象のアプリで `UIApplication:sendEvent:` , `UIViewController:viewDidAppear:` , `UIViewController:viewWillDisappear:` のいずれかをMethod swizzlingを使用している場合は *「手動で画面キャプチャを取得する」* の節に従い組込を行なってください。
```

When `UINavigationController` or `UITabBarController` are bring used,
USERDIVE reconizes the page movements automatically
and upload the screen image one by one. Follow the steps below.

Import USERDIVE iOS SDK headder.

```objective-c
#import "Userdive.h"
```

Add `Userdive:startDeveloperMode:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`.
Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START DEVELOPER MODE
  [Userdive startDeveloperMode:<YOUR_TEAM_ID>];

  return YES;
}
```

When activating an app,
the following pop-up shows after screen the transition to next page.
Choose *Send* to upload screen image to USERDIVE.

![sdk_verification_capture_1.png](../../../ja/apps/devguide/files/sdk_verification_capture_1.png)

The next pop-up shows whether the screen upload was succuessful or not.

![sdk_verification_capture_2.png](../../../ja/apps/devguide/files/sdk_verification_capture_2.png)

### Manually captures screen image

When screen is dynamically switched,
it must be notified the SDK that the screen content has been changed.
By calling `Userdive:updateScreen` on the app,
SDK determines screen transition has occured.
The Implementation is following.
画面を動的に切り替えた場合、画面表示内容が変更されたことをSDKに通知する必要があります。
アプリケーション上で  を呼び出すことで、SDKは画面遷移が実施されたと判断します。
次のように実装します。

Import USERDIVE iOS SDK headder.

```objective-c
#import "Userdive.h"
```

Add `Userdive:startDeveloperMode:trackers:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`.
Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objective-c
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

- Call `updateScreen` to prepare for screen image capture
- Call `updateScreen` again to take screen image capture
  (Total of two `updateScreen` is neccessary to cop)

```objective-c
- (void)viewDidAppear:(BOOL)animated
{
  [super viewDidAppear:animated];

  [Userdive updateScreen];
  [Userdive setScreenName:@"screen A"];
}
```

When activating an app,
the following pop-up shows after screen the transition to next page.
Choose *Send* to upload screen image to USERDIVE.

![sdk_verification_capture_1.png](../../../ja/apps/devguide/files/sdk_verification_capture_1.png)

The next pop-up shows whether the screen upload was succuessful or not.

![sdk_verification_capture_2.png](../../../ja/apps/devguide/files/sdk_verification_capture_2.png)
