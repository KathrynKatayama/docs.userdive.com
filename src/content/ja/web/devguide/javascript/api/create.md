### `create` メソッド

USERDIVE ではトラッカーに

- プロジェクト情報の設定
  - 複数プロジェクトの設定
- 仮想ページ URL の設定
- カスタム変数の設定
- cookieDomainの設定

```html
<script>
ud("create", "xx-xx");
</script>
```

#### 複数プロジェクトの設定

複数のプロジェクト情報を登録することが可能です

```html
<script>
ud("create", {pc: "xx-xx", sp: "yy-yy"});
</script>
```

#### 仮想ページ

仮想ページの URL 設定を行う API です。
仮想ページは 1URL に対して 1 つ指定することが可能です。

こちらで設定した URL は、 USERIVE で分析を行う際に必要なお客様のサイト情報を取得するため、
USERDIVE のクローラーが `GET` リクエストでアクセスを行う際に利用されます。

エンドユーザがアクセスされる際に、トラッカーからこちらの設定された URL に対してリクエストを発行することはありません。

[仮想ページについて](../../../guide/snapshot.html)

| Field       | Type   | Required | Description                                           |
|:------------|:-------|:---------|:------------------------------------------------------|
| overrideUrl | String | No       | クローラーがアクセスを行うURLを明示的に指定できます。 |

```html
<script>
ud("create", "xx-xx", {
  "overrideUrl": "http://userdive.com"
});
</script>
```

#### カスタム変数

[カスタム変数の詳細](../../../guide/filter/customvar.html)

| Field     | Type  | Required | Description                          |
|:----------|:------|:---------|:-------------------------------------|
| customVar | Array | No       | カスタム変数を５つまで指定できます。 |

```html
<script>
ud("create", "xx-xx", {
  "customVar": ["foo"]
});
</script>
```
