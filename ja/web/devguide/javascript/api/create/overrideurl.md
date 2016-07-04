# 仮想ページ

仮想ページの URL 設定を行う API です。
仮想ページは 1URL に対して 1 つ指定することが可能です。

こちらで設定した URL は、 USERIVE で分析を行う際に必要なお客様のサイト情報を取得するため、
USERDIVE のクローラーが `GET` リクエストでアクセスを行う際に利用されます。

エンドユーザーがアクセスされる際に、トラッカーからこちらの設定された URL に対してリクエストを発行することはありません。

[仮想ページについて](../../../../guide/snapshot.html)

```html
<script>
ud("create", "[ Project Id ]", {
  "overrideUrl": "[ Virtual Url ]"
});
</script>
```

| Field       | Type   | Required | Description                                           |
|:------------|:-------|:---------|:------------------------------------------------------|
| Project Id  | String | Yes      | USERDIVE のプロジェクトIDです。                       |
| Virtual Url | String | No       | クローラーがアクセスを行うURLを明示的に指定できます。 |

仮想ページを指定するAPIとして [`changeVirtualUrl`](../changevirtualurl.html) を利用する方法もあります。
