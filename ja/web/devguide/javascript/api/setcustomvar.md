# `setCustomVar` API

USERDIVE ではカスタム変数を独自に定義することが可能です。

[(USERDIVE におけるカスタム変数について)](../../../guide/filter/customvar.html)

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
