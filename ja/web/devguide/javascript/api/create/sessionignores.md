# `sessionIgnores` API

[(examples)](https://uncovertruth.github.io/examples/gtm/autolink/ssl.html)

`sessionIgnores` API を用いて、クロスドメインを行うことが出来ます。

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
