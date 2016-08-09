# オフラインまたはUSERDIVEサーバがダウンしている場合、アプリにどのような影響がありますか

USERDIVE iOS SDKは、トラッキング開始時、アプリ終了時にUSERDIVEサーバへ通信を行います。

トラッキング開始時に通信エラーが発生するとSDKはセッションを開始しません。
この際、SDKの動作は停止状態となり、アプリは通常通り使用することができます。

アプリ終了時に通信エラーが発生した場合はセッションログを永続化して保持し、
次回アプリが起動した際に再アップロードを試みます。