### `create` API

USERDIVE ではトラッカーに

- プロジェクト情報の設定
  - 複数プロジェクトの設定
- 仮想ページ URL の設定
- カスタム変数の設定
- cookieDomainの設定

```html
<script>
ud("create", [Project Id]);
</script>
```

#### 複数プロジェクトの設定

複数のプロジェクト情報を登録することが可能です

```html
<script>
ud("create", {pc: [Project Id2], sp: [Project Id2]});
</script>
```

#### 仮想ページ

仮想ページの URL 設定を行う API です。
仮想ページは 1URL に対して 1 つ指定することが可能です。

こちらで設定した URL は、 USERIVE で分析を行う際に必要なお客様のサイト情報を取得するため、
USERDIVE のクローラーが `GET` リクエストでアクセスを行う際に利用されます。

エンドユーザがアクセスされる際に、トラッカーからこちらの設定された URL に対してリクエストを発行することはありません。

[仮想ページについて](../../../guide/snapshot.html)

```html
<script>
ud("create", "xx-xx", {
  "overrideUrl": [Virtual Url]
});
</script>
```

| Field       | Type   | Required | Description                                           |
|:------------|:-------|:---------|:------------------------------------------------------|
| Virtual Url | String | No       | クローラーがアクセスを行うURLを明示的に指定できます。 |

#### カスタム変数

[カスタム変数の詳細](../../../guide/filter/customvar.html)

```html
<script>
ud("create", "xx-xx", {
  "customVar": [CustomVar1, CustomVar2, CustomVar3, CustomVar4, CustomVar5]
});
</script>
```

| Field      | Type   | Required | Description                                                      |
|:-----------|:-------|:---------|:-----------------------------------------------------------------|
| CustomVar1 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar2 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar3 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar4 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
| CustomVar5 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます |
