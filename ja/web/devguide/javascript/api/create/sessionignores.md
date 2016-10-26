# `sessionIgnores` API

[(examples)](http://uncovertruth.github.io/examples/t/iframe/)

`sessionIgnores` API には、セッションを継続を許可するドメインを、複数指定することが可能です。

## API

```html
<script>
ud("create", "[ Project Id ]", {
  "sessionIgnores": ["[ Domain ]"]
});
</script>
```

## Parameters

| Field      | Type   | Required | Description                                          |
|:-----------|:-------|:---------|:-----------------------------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。                      |
| Domain     | String | No       | クロスドメインを行う遷移先のドメインを指定できます。 |

## Details

`sessionIgnores` は下記のAPIと併用して利用します。

- [`addiFrame` API](./addiframe.html)
- [`sslAutolink` API](./sslautolink.html)
