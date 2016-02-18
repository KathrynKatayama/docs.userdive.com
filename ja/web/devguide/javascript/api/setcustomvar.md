### setCustomVar API

USERDIVE ではカスタム変数を独自に定義することが可能です。

### カスタム変数にセットできる内容

カスタム変数には下記の条件があります

- 3バイト以下の UTF-8 文字列 (`string`)
- 最大 5 つまで
- 最大 128 文字

**一意にユーザが特定できる文字列** の設定は非推奨とさせて頂いております。

- ID
- 氏名
- メールアドレス

### API

API は二種類提供しています。

#### 1. `create` API を利用したカスタム変数の設定

[ `create` API のドキュメント](../api/create.html)を参照ください。

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

#### 2. `setCustomVar` を利用したカスタム変数の設定

`setCustomVar` は任意のタイミングで実行することが可能です

`<script>` タグ内だけではなく、任意の JavaScript 内より実行することが可能です