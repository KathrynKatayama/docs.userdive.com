# URL パラメーターを用いたクロスドメイン

[(examples)](https://uncovertruth.github.io/examples/gtm/autolink/ssl.html)

`sslAutolink` API を用いて、クロスドメインを行うことが出来ます。

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
