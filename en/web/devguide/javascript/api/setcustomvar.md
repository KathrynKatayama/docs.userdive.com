# `setCustomVar` API

USERDIVE can define the custom variable on its own.

[(about USERDIVE custom variables)](../../../guide/filter/customvar.html)

## Custom Variables API

USERDIVE provides two kinds of API.

### 1. Settings of Custom Variable using `create` API

Please see [Document to 'create' API](../api/create/customvar.html).

### 2. Settings of Custom Variable using `setCustomVar`

`setCustomVar` can be performed at any timing.

| Field      | Type   | Required | Description                                               |
|:-----------|:-------|:---------|:----------------------------------------------------------|
| CustomVar1 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar2 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar3 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar4 | String | No       | Able to set any custom variable. Not string is discarded. |
| CustomVar5 | String | No       | Able to set any custom variable. Not string is discarded. |

```html
<script>
ud("setCustomVar", [
  "[ CustomVar1 ]",
  "[ CustomVar2 ]",
  "[ CustomVar3 ]",
  "[ CustomVar4 ]",
  "[ CustomVar5 ]"
]);
</script>
```

`<script>` タグ内だけではなく、任意の JavaScript 内より実行することが可能です
