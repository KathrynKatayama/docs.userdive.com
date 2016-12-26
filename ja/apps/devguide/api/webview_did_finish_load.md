# API

|                |                                   |
|:---------------|:----------------------------------|
| 最終更新       | {{ file.mtime }}                  |
| 対応バージョン | 1.0.0以降                         |
| 概要           | WebViewのトラッキングを開始する。 |

## 使い方

### Objective-C

```objective-c
- (void)webViewDidFinishLoad:(UIWebView *)webView
{
    [Userdive webViewDidFinishLoad:webView];
}
```

### Swift

```swift
func webViewDidFinishLoad(webView: UIWebView) {
    Userdive.webViewDidFinishLoad(webView)
}
```

## 制限

なし。

## 更新履歴

- 1.0.0 最初のリリース
