<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [API](#api)
  - [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [制限](#%E5%88%B6%E9%99%90)
  - [更新履歴](#%E6%9B%B4%E6%96%B0%E5%B1%A5%E6%AD%B4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# API

|                |                              |
|:---------------|:-----------------------------|
| 最終更新       | {{ file.mtime }}             |
| 対応バージョン | 1.2.0以降                    |
| 概要           | 画面遷移を手動で切り替える。 |

## 使い方

```objective-c
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
