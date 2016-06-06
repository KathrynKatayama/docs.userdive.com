# Operation Check with Developer Mode SDK

Please check the followings.

- Event log
- Up loading Capture

## Check the start of the operation

After starting developer mode, check if following log is being output.

```
2016-04-11 17:53:58.000 AppDiveSample[41018:2951170] ADVAppDive.m(205) -[ADVAppDive startDeveloperMode:trackers:] start developer mode: team_id=1
2016-04-11 17:53:58.000 AppDiveSample[41018:2951170] [Userdive][INFO] VERSION: 1.2.0 ()
2016-04-11 17:53:58.001 AppDiveSample[41018:2951170] [Userdive][INFO] FOR DEVELOPMENT ONLY! start capturing (team_id=1)
```


## Check the capturing operation

The capture is uploaded after the transition is completed.
Please check the two dialogue boxs before and after uploading.

When moving to next page to upload the capture, the following dialogue box appears.
（日本語：アップロードの確認は次のようになります）

![upload confirmation dialog](../../../ja/apps/devguide/files/sdk_verification_capture_1.png)

If the upload is successful, then the following dialogue box appears.
Check if log right blow the dialogue box is also being output.

![upload status dialog](../../../ja/apps/devguide/files/sdk_verification_capture_2.png)

```
2016-04-11 18:07:01.909 AppDiveSample[41018:2951170] ADVResourceAPIClient.m(34) -[ADVResourceAPIClient init] Resource API Base URL=https://detector.userdive.com/
2016-04-11 18:07:01.924 AppDiveSample[41018:2951170] ADVAPIClient.m(62) -[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:] request to https://detector.userdive.com/webapi/image/upload/
2016-04-11 18:07:03.327 AppDiveSample[41018:2993544] ADVAPIClient.m(104) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response code: 200
2016-04-11 18:07:03.328 AppDiveSample[41018:2993544] ADVAPIClient.m(105) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response body: {"status": "OK"}
```

## Check the uploaded screen capture

It's possible to check the screen captures on administrative account.

Open "Manage" on Home.

![sdk_verification_capture_3.png](../../../ja/apps/devguide/files/sdk_verification_capture_3.png)

Open `Check uploaded screen images` below the page.

![sdk_verification_capture_4.png](../../../ja/apps/devguide/files/sdk_verification_capture_4.png)

List of screen names and screen captures are displayed.
Click on `Preview screen images` to see uploaded screen captures.
If the captures are not listed, then the upload was not successful.

![sdk_verification_capture_5.png](../../../ja/apps/devguide/files/sdk_verification_capture_5.png)
