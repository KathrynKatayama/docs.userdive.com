<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`setCustomVar` API](#setcustomvar-api)
- [カスタム変数にセットできる内容](#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%A4%89%E6%95%B0%E3%81%AB%E3%82%BB%E3%83%83%E3%83%88%E3%81%A7%E3%81%8D%E3%82%8B%E5%86%85%E5%AE%B9)
- [API](#api)
  - [1. `create` API を利用したカスタム変数の設定](#1-create-api-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%A4%89%E6%95%B0%E3%81%AE%E8%A8%AD%E5%AE%9A)
  - [2. `setCustomVar` を利用したカスタム変数の設定](#2-setcustomvar-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E5%A4%89%E6%95%B0%E3%81%AE%E8%A8%AD%E5%AE%9A)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `setCustomVar` API

USERDIVE ではカスタム変数を独自に定義することが可能です。

# カスタム変数にセットできる内容

カスタム変数には下記の条件があります

- 3バイト以下の UTF-8 文字列 (`string`)
- 最大 5 つまで
- 最大 128 文字

**一意にユーザが特定できる文字列** の設定は非推奨とさせて頂いております。

- ID
- 氏名
- メールアドレス

# API

API は二種類提供しています。

## 1. `create` API を利用したカスタム変数の設定

[ `create` API のドキュメント](../api/create.html)を参照ください。

## 2. `setCustomVar` を利用したカスタム変数の設定

`setCustomVar` は任意のタイミングで実行することが可能です

| Field      | Type   | Required | Description                                                      |
|:-----------|:-------|:---------|:-----------------------------------------------------------------|
| CustomVar1 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar2 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar3 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar4 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar5 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |

```html
<script>
ud("setCustomVar", [
  "[ CustomVar1 ]",
  "[ CustomVar2 ]",
  "[ CustomVar3 ]",
  "[ CustomVar4 ]",
  "[ CustomVar5 ]"
]);
</script>
```

`<script>` タグ内だけではなく、任意の JavaScript 内より実行することが可能です
