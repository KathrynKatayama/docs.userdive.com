# Tracking Mode

This mode collects user action on released apps or test apps.
Like in Developer Mode, Tracking Mode have two way of noticing screen transitions; Automatically and Manually. 言い回し少し変えてます

## Kinds of Tracker

Multiple trackers are prepaerd deoending on the events to collect.
When choosing trackers manually, use the following IDs as references.

| ID | Tracker             | Function                                | Auto Tracking | Manual Tracking |
|:---|:--------------------|:----------------------------------------|:--------------|:----------------|
| 0  | ScreenEventTracker  | Screen Transition                       | ON            | Voluntary       |
| 1  | RotateEventTracker  | Screen Rotation  (portrait / landscape) | ON            | Voluntary       |
| 2  | InputEventTracker   | Keyboard Input                          | ON            | Voluntary       |
| 3  | GestureEventTracker | Gestures like Swipes                    | ON            | Voluntary       |

## Automatically notice screen transitions, and start tracking

**ノート: 組込対象のアプリで `UIApplication:sendEvent:` , `UIViewController:viewDidAppear:` , `UIViewController:viewWillDisappear:` のいずれかをMethod swizzlingを使用している場合は *「手動で画面遷移を管理し、トラッキングする」* の節に従い組込を行なってください。**

USERDIVE iOS SDK can automatically notice and track user gestures or transitions.
Call `startTrackingMode:` method to start tracking.

Import USERDIVE iOS SDK headder.

```objective-c
#import "Userdive.h"
```

Add `Userdive:startTrackingMode:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`.
Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    [Userdive setLogEnabled:YES];
    [Userdive startTrackingMode:<YOUR_TEAM_ID>];  // <-- HERE

    return YES;
}
```

## Manually notice screen transitions, and start tracking

When using own view structure (such as different from iPO standard view structure or using third-patry library), then screen transitions ofthen times needs manual management.

Import USERDIVE iOS SDK headder.

```objective-c
#import "Userdive.h"
```

Add `Userdive:startTrackingMode:<YOUR_TEAM_ID>:trackers:` to `AppDeletegate:application:didFinishLaunchingWithOptions:`.
Make sure to put your `team ID` in *\<YOUR_TEAM_ID\>*.

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [Userdive setLogEnabled:YES];

  // START TRACKING MODE WITHOUT SCREEN TRACKER
  [Userdive startTrackingMode:<YOUR_TEAM_ID>
                     trackers:@[
                     [NSNumber numberWithInteger:1],
                     [NSNumber numberWithInteger:2],
                     [NSNumber numberWithInteger:3]
                     ]];

  return YES;
}
```

Call `updateScreen` method when the screen transition happens.
Call `setScreenName:` method when setting the screen name additionally

```objective-c
- (void)viewDidAppear:(BOOL)animated
{
  [super viewDidAppear:animated];

  [Userdive updateScreen];
  [Userdive setScreenName:@"screen A"];
}
```
