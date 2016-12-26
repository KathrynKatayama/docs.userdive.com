# API

|                |                    |
|:---------------|:-------------------|
| 最終更新       | {{ file.mtime }}   |
| 対応バージョン | 1.0.0以降          |
| 概要           | 画面名を設定する。 |

## 使い方

### Objective-C

```objective-c
- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
    [Userdive setScreenName:@"TutorialScreen 1"];
}
```

### Swift

```swift
func viewWillAppear(animated: Bool) {
    super.viewWillAppear(animated)
    Userdive.setScreenName("TutorialScreen 1")
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
