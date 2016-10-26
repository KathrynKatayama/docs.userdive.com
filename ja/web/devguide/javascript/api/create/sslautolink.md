# URL パラメーターを用いたセッション継続

[(examples)](https://uncovertruth.github.io/examples/t/autolink/ssl.html)

`sslAutolink` API を用いて、セッション継続を行うことが出来ます。

## API

```html
<script>
ud("create", "[ Project Id ]", {
  "sslAutoLink": ["[ Domain ]"]
});
</script>
```

## Parameters

| Field      | Type   | Required | Description                                          |
|:-----------|:-------|:---------|:-----------------------------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。                      |
| Domain     | String | No       | クロスドメインを行う遷移先のドメインを指定できます。 |

## メリット

- `addIFrame` API と異なり、 タグの更新を行うだけで導入可能です。

## デメリット

- 下記の URL パラメーターが付与されます
    - `__udc`
    - `__udet`
    - `__udsi`
- 事前に URL パラメーター除外を推奨します
