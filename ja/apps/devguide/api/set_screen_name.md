# API

|                |            |
|:---------------|:-----------|
| 最終更新       | {{ file.mtime }} |
| 対応バージョン | 1.0.0以降      |
| 概要           | 画面名を設定する。 |

## 使い方

```objectivec
- (void)viewWillAppear:(id)sender
{
    [super viewWillAppear:sender];
    [Userdive setScreenName:@"TutorialScreen 1"];
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
