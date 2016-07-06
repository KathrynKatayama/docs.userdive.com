# `create` API

`create` API can set necessary information before start tracking.

- Project information
    - Multiple projects
- Virtual page URL
- Custom variable
- Cookie
    - `cookieDomain`
    - `cookieExpires`

## Setting of single project

```html
<script>
ud("create", "[ Project Id ]");
</script>
```

| Field      | Type   | Required | Description             |
|:-----------|:-------|:---------|:------------------------|
| Project Id | String | Yes      | Project ID for USERDIVE |

## Setting of multiple projects

`create` API can register information aboutmultiple projects.

```html
<script>
ud("create", {"pc": "[ Project Id 1 ]", "sp": "[ Project Id 2 ]"});
</script>
```

| Field        | Type   | Required | Description             |
|:-------------|:-------|:---------|:------------------------|
| Project Id 1 | String | Yes      | Project ID for USERDIVE |
| Project Id 2 | String | Yes      | Project ID for USERDIVE |
