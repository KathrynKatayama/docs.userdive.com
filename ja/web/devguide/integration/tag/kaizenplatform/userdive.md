```javascript
<script>
(function (userdiveId, root) {
  var expId = -1;
  var varId = -1;
  var i;
  var separator;
  function generateUrl (dataLayer) {
    try {
      if (!dataLayer || !dataLayer.length) {
        return;
      }

      for (i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].kzsExpId !== undefined) {
          expId = dataLayer[i].kzsExpId;
          varId = dataLayer[i].kzsVarId;
        }
      }
      if (expId !== -1 && varId !== -1) {
        separator = location.search === '' ? '?' : '&';
        return location.protocol +
          '//' +
          location.host +
          location.pathname +
          location.search +
          separator +
          '_kzs_var_id=' +
          varId +
          location.hash;
      }
      return;
    } catch (e) {} finally {}
  }
  root.ud('create', userdiveId, {
    'overrideUrl': generateUrl(root.dataLayer)
  });
  root.ud('analyze');
})('[ Project Id ]', window);
</script>
```
