# API

|                |            |
|:---------------|:-----------|
| 最終更新       | 2016/04/18 |
| 対応バージョン | 1.2.0以降      |
| 概要           | 画面遷移を手動で切り替える。 |

## 使い方

```objectivec
- (void)viewDidAppear:(BOOL) animated
{
    [super viewDidAppear:animated];
    [Userdive updateScreen];
}
```

## 制限

なし。

## 更新履歴

- 1.2.0 最初のリリース
