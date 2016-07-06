# Custom Variable

- [Detail of Custom Variable](../../../../guide/filter/customvar.html)
- [(example)](https://uncovertruth.github.io/examples/t/setcustomvar.html)

## API

```html
<script>
ud("create", "[ Project Id ]", {
  "customVar": [
    "[ CustomVar1 ]",
    "[ CustomVar2 ]",
    "[ CustomVar3 ]",
    "[ CustomVar4 ]",
    "[ CustomVar5 ]"
  ]
});
</script>
```

## Parameters

| Field      | Type   | Required | Description                                               |
|:-----------|:-------|:---------|:----------------------------------------------------------|
| Project Id | String | Yes      | Project ID for USERDIVE                                   |
| CustomVar1 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar2 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar3 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar4 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar5 | String | No       | Able to set any custom variable. Not string is discarded. |
