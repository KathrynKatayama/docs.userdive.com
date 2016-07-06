# Virtual page

`create` API can set virtual page URL.
It is possible to specify one virtual page for one URL.

This URL is used for collecting the customer's site information which is necessary to analyze in the USERDIVE by crawler can access by `GET` request.

When End user is accessed, tracker does not issue request for this URL.

[About virtual page](../../../../guide/snapshot.html)

```html
<script>
ud("create", "[ Project Id ]", {
  "overrideUrl": "[ Virtual Url ]"
});
</script>
```

## Parameters

| Field       | Type   | Required | Description                                           |
|:------------|:-------|:---------|:------------------------------------------------------|
| Project Id  | String | Yes      | Project ID for USERDIVE                               |
| Virtual Url | String | No       | Able to explicitly specify the URL a crawler accesses |
