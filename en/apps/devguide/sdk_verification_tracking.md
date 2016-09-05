<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [SDKトラッキングモードの動作確認](#sdk%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%A2%E3%83%BC%E3%83%89%E3%81%AE%E5%8B%95%E4%BD%9C%E7%A2%BA%E8%AA%8D)
  - [開始動作](#%E9%96%8B%E5%A7%8B%E5%8B%95%E4%BD%9C)
  - [トラッキング動作](#%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E5%8B%95%E4%BD%9C)
  - [イベントログアップロード動作](#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%AD%E3%82%B0%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E5%8B%95%E4%BD%9C)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SDKトラッキングモードの動作確認

トラッキングモードの動作は以下を確認します。

- 起動時動作ログ
- タッチ操作時の動作ログ
- イベントアップロード時の動作ログ

## 開始動作

トラッキングモード開始後、次のログが出力されることを確認してください。

```console
2016-04-11 18:24:47.586 AppDiveSample[42606:3050491] ADVAppDive.m(250) -[ADVAppDive startTrackingMode:trackers:] start tracking mode: team_id=1
2016-04-11 18:24:47.586 AppDiveSample[42606:3050491] [Userdive][INFO] VERSION: 1.2.0 ()
2016-04-11 18:24:47.586 AppDiveSample[42606:3050491] [Userdive][INFO] start tracking (team_id=1)
2016-04-11 18:24:47.587 AppDiveSample[42606:3050491] ADVTrackingAPIClient.m(59) -[ADVTrackingAPIClient init] API Base URL=https://spear.userdive.com/
2016-04-11 18:24:47.589 AppDiveSample[42606:3050491] ADVAppDive.m(299) -[ADVAppDive startTracker:isStarted:] start ADVScreenEventTracker
2016-04-11 18:24:47.589 AppDiveSample[42606:3050491] ADVAppDive.m(303) -[ADVAppDive startTracker:isStarted:] start ADVRotateEventTracker
2016-04-11 18:24:47.590 AppDiveSample[42606:3050491] ADVAppDive.m(307) -[ADVAppDive startTracker:isStarted:] start ADVInputEventTracker
2016-04-11 18:24:47.590 AppDiveSample[42606:3050709] ADVAPIClient.m(62) -[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:] request to https://spear.userdive.com/start_tracking
2016-04-11 18:24:47.590 AppDiveSample[42606:3050491] ADVAppDive.m(311) -[ADVAppDive startTracker:isStarted:] start ADVGestureEventTracker
2016-04-11 18:24:48.613 AppDiveSample[42606:3050715] ADVAPIClient.m(104) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response code: 200
2016-04-11 18:24:48.613 AppDiveSample[42606:3050715] ADVAPIClient.m(105) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response body: {"enable": true, "session_id": "2016-04-000000000001-000000000008", "consumer_id": "fa90ee9a54614cec82a1225f1d2c00ef"}
2016-04-11 18:24:48.615 AppDiveSample[42606:3050715] [Userdive][INFO] tracking started (session_id=2016-04-000000000001-000000000008, team_id=1)
```

## トラッキング動作

画面遷移やUIオブジェクトの操作など、アプリを操作してください。
次のようなログが出力されることを確認してください。

```console
2016-04-11 18:27:22.960 AppDiveSample[42606:3050491] ADVLogManager.m(60) -[ADVLogManager logEvent:] {
    area = main;
    event = tap;
    "screen_count" = 4;
    "screen_x" = 114;
    "screen_y" = 136;
    timestamp = "2016-04-11T09:27:22.960";
    x = 114;
    y = 73;
}
2016-04-11 18:27:22.961 AppDiveSample[42606:3050491] ADVLogManager.m(60) -[ADVLogManager logEvent:] {
    event = ui;
    row = 1;
    "screen_count" = 4;
    section = 0;
    timestamp = "2016-04-11T09:27:22.961";
    type = tableView;
}
2016-04-11 18:27:24.133 AppDiveSample[42606:3050491] ADVLogManager.m(60) -[ADVLogManager logEvent:] {
    action = close;
    event = screen;
    meta =     {
        "looking_time" =         (
                        {
                bottom = 672;
                time = 24298;
                top = 0;
            }
        );
        "next_screen_name" = SmallUICatalogViewController;
        orientation = portrait;
        "previous_screen_name" = "\U30a2\U30e9\U30fc\U30c8\U4e00\U89a7";
        "screen_exit_time" = "2016-04-11T09:27:24.132";
        "screen_start_time" = "2016-04-11T09:26:59.833";
        "screen_staying_time" = "24.2996090054512";
        "scroll_reached" = 736;
    };
    "screen_count" = 4;
    "screen_name" = CatalogViewController;
    timestamp = "2016-04-11T09:27:24.132";
}
2016-04-11 18:27:24.135 AppDiveSample[42606:3050491] ADVLogManager.m(60) -[ADVLogManager logEvent:] {
    action = open;
    event = screen;
    "screen_count" = 5;
    "screen_name" = SmallUICatalogViewController;
    timestamp = "2016-04-11T09:27:24.135";
}
```

## イベントログアップロード動作

アプリをバックグラウンドへ移し、次のようなログが表示されることを確認します。

```console
2016-04-11 18:28:05.429 AppDiveSample[42606:3058057] ADVAPIClient.m(62) -[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:] request to https://spear.userdive.com/tracking
2016-04-11 18:28:06.681 AppDiveSample[42606:3058107] ADVAPIClient.m(104) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response code: 200
2016-04-11 18:28:06.682 AppDiveSample[42606:3058107] ADVAPIClient.m(105) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response body: {"status": "OK"}
2016-04-11 18:28:06.683 AppDiveSample[42606:3058107] [Userdive][INFO] tracking log upload succeeded
2016-04-11 18:28:06.683 AppDiveSample[42606:3058107] ADVTrackingAPIClient.m(155) __61-[ADVTrackingAPIClient trackingWithLogs:onSuccess:onFailure:]_block_invoke upload track log succeeded
```
