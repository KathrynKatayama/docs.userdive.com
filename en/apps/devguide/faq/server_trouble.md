<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [オフラインまたはUSERDIVEサーバがダウンしている場合、アプリにどのような影響がありますか](#%E3%82%AA%E3%83%95%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%BE%E3%81%9F%E3%81%AFuserdive%E3%82%B5%E3%83%BC%E3%83%90%E3%81%8C%E3%83%80%E3%82%A6%E3%83%B3%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E5%A0%B4%E5%90%88%E3%80%81%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AB%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AA%E5%BD%B1%E9%9F%BF%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%81%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# オフラインまたはUSERDIVEサーバがダウンしている場合、アプリにどのような影響がありますか

USERDIVE iOS SDKは、トラッキング開始時、アプリ終了時にUSERDIVEサーバへ通信を行います。

トラッキング開始時に通信エラーが発生するとSDKはセッションを開始しません。
この際、SDKの動作は停止状態となり、アプリは通常通り使用することができます。

アプリ終了時に通信エラーが発生した場合はセッションログを永続化して保持し、
次回アプリが起動した際に再アップロードを試みます。
