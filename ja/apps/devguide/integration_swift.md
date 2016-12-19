# Swift環境への組込

USERDIVE iOS SDKはObjective-Cで作成されたライブラリーですので、
Swift環境で利用するためにはブリッジングヘッダーを作成する必要があります。

ブリッジングヘッダーが無い場合、 *アプリ名* + `_Bridging_Header.h` という名前で作成します。

![briding header file](../files/bridging_file.png)

次の内容を書き込みます（ `AppName` の部分は自身のアプリ名に置き換えてください）。

```c
#ifndef AppName_Bridging_Header_h
#define AppName_Bridging_Header_h

#import "Userdive.h"

#endif /* AppName_Bridging_Header_h */
```

次に、プロジェクトでブリッジングヘッダーを参照するため *Project ->
Build Settings -> Objective-C Bridging Header* を設定します。

設定内容は `$(SRCROOT)/AppName/AppName_Bridging_Header.h` としてください。

![bridging header build settings](../files/bridging_build_settings.png)

以上の設定で、SwiftからUSERDIVEを呼び出すことが出来るようになります。
