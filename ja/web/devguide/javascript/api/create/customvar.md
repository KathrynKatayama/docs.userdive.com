# カスタム変数

USERDIVE では [カスタム変数](../../../../guide/filter/customvar.html) を独自に定義することが可能です。
カスタム変数は `create API` への `customVar` オプションによりセットします。

[(example)](https://uncovertruth.github.io/examples/t/setcustomvar.html)

## API

```html
<script>
ud("create", "[ Project Id ]", {
  "customVar": [
    "[ CustomVar1 ]",
    "[ CustomVar2 ]",
    "[ CustomVar3 ]",
    "[ CustomVar4 ]",
    "[ CustomVar5 ]"
  ]
});
</script>
```

### Parameters

| Field      | Type   | Required | Description                                                        |
|:-----------|:-------|:---------|:-------------------------------------------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。                                    |
| CustomVar1 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar2 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar3 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar4 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar5 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |

## カスタム変数の更新

カスタム変数の更新には [`setCustomVar API`](../setcustomvar.html) を利用します。
