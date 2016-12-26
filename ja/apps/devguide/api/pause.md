# API

|                |                                  |
|:---------------|:---------------------------------|
| 最終更新       | {{ file.mtime }}                 |
| 対応バージョン | 1.0.0以降                        |
| 概要           | トラッキングを一時的に中断する。 |

## 使い方

### Objective-C

```objective-c
- (IBAction)pauseButtonTapped:(id)sender
{
    [Userdive pause];
}
```

### Swift

```swift
func pauseButtonTapped(sender: AnyObject) {
    Userdive.pause()
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
