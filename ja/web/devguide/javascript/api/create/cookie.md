# Cookie の設定

```html
<script>
ud("create", "[ Project Id ]", {
  "cookieDomain": "[ Cookie Domain ]",
  "cookieExpires": [ Cookie Expires ]
});
</script>
```

| Field         | Type    | Required | Description                                     |
|:--------------|:--------|:---------|:------------------------------------------------|
| Project Id    | String  | Yes      | USERDIVE のプロジェクトIDです。                 |
| CookieDomain  | String  | No       | Cookie ドメインを変更できます。                 |
| CookieExpires | Integer | No       | Cookie の保存日数を指定できます。デフォルト 365 |
