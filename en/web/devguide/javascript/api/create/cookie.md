# Setting of Cookie

## API

```html
<script>
ud("create", "[ Project Id ]", {
  "cookieDomain": "[ Cookie Domain ]",
  "cookieExpires": [ Cookie Expires ]
});
</script>
```

## Parameters

| Field         | Type    | Required | Description                                    |
|:--------------|:--------|:---------|:-----------------------------------------------|
| Project Id    | String  | Yes      | Project ID for USERDIVE                        |
| CookieDomain  | String  | No       | Able change CookieDomain                       |
| CookieExpires | Integer | No       | Able specify days to keep Cookie (default 365) |
