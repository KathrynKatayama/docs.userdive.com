# SDKデベロッパモードの動作確認

デベロッパモードの動作は以下を確認します。

- 開始動作
- キャプチャ動作
- アップロードされたキャプチャ内容

## 開始動作の確認

USERDIVEをデベロッパモードで組み込んだアプリを起動し、
SDKのバージョン番号と `start capturing` の文字列が
出力されることを確認してください。

```text
2016-04-11 17:53:58.000 AppDiveSample[41018:2951170] [Userdive][INFO] VERSION: 1.2.0 ()
2016-04-11 17:53:58.001 AppDiveSample[41018:2951170] [Userdive][INFO] FOR DEVELOPMENT ONLY! start capturing (team_id=1)
```

## キャプチャ動作の確認

画面が遷移するとキャプチャが行われます。アップロード
ダイアログの表示とアップロード成功後の表示を確認してください。

アップロードの確認は次のように表示され、 `Send` ボタンを
タップすることでキャプチャのアップロードが実行されます。

![upload confirmation dialog](./files/sdk_verification_capture_1.png)

キャプチャのアップロードに成功すると次のダイアログが表示されます。

![upload status dialog](./files/sdk_verification_capture_2.png)

アップロード成功時には次のようなログが出力されるので確認してください。

```sh
2016-04-11 18:07:01.909 AppDiveSample[41018:2951170] ADVResourceAPIClient.m(34) -[ADVResourceAPIClient init] Resource API Base URL=https://detector.userdive.com/
2016-04-11 18:07:01.924 AppDiveSample[41018:2951170] ADVAPIClient.m(62) -[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:] request to https://detector.userdive.com/webapi/image/upload/
2016-04-11 18:07:03.327 AppDiveSample[41018:2993544] ADVAPIClient.m(104) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response code: 200
2016-04-11 18:07:03.328 AppDiveSample[41018:2993544] ADVAPIClient.m(105) __58-[ADVAPIClient postToPath:dictionary:onSuccess:onFailure:]_block_invoke response body: {"status": "OK"}
```

## アップロードされた画面キャプチャの確認

アップロードされた画面キャプチャは管理画面上で確認することができます。
管理画面でアプリの設定を開きます。

![sdk_verification_capture_3.png](./files/sdk_verification_capture_3.png)

下部の `アップロード済み画面キャプチャの確認` を開きます。

![sdk_verification_capture_4.png](./files/sdk_verification_capture_4.png)

画面名と画面キャプチャの一覧が表示されます。
`画面イメージを表示` をクリックすると、アップロード済みの画面キャプチャが表示されます。

![sdk_verification_capture_5.png](./files/sdk_verification_capture_5.png)
