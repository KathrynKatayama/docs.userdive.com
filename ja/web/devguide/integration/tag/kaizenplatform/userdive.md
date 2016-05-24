```javascript
<script>
(function (userdiveId, root, kzsState, kzsExpId, kzsVarId, data) {
  function getKzsState (dataLayer) {
    var i;
    try {
      if (!dataLayer || !dataLayer.length) {
        return {};
      }
      for (i = 0; i < dataLayer.length; i++) {
        if (dataLayer[i].kzsState !== undefined) {
          return dataLayer[i];
        }
      }
    } catch (e) {} finally {}
  }

  function generateUrl (varId, state) {
    var separator;
    if (state !== 'decided') {
      return;
    }

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

  data = getKzsState(root.dataLayer);
  kzsState = data.kzsState;
  kzsExpId = data.kzsExpId;
  kzsVarId = data.kzsVarId;

  root.ud('create', userdiveId, {
    'overrideUrl': generateUrl(kzsVarId, kzsState),
    'customVar': [kzsVarId, kzsExpId]
  });
  root.ud('analyze');
})('[ Project Id ]', window);
</script>
```
