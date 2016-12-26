# API

|                |                          |
|:---------------|:-------------------------|
| 最終更新       | {{ file.mtime }}         |
| 対応バージョン | 1.0.0以降                |
| 概要           | トラッキングを再開する。 |

## 使い方

### Objective-C

```objective-c
- (IBAction)resumeButtonTapped:(id)sender
{
    [Userdive resume];
}
```

### Swift

```swift
func resumeButtonTapped(sender: AnyObject) {
    Userdive.resume()
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
