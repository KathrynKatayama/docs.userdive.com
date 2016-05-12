```html
<script>
(function (userdiveId, root) {
  var kzs;
  var separator;
  var url;
  try {
    kzs = root.kzs || function () {
      var _ = root.kzs; return (_.q || (_.q = [])).push(arguments);
    };
    kzs('getVariation', function (data, state) {
      try {
        if (state === 'decided') {
          separator = root.location.search === '' ? '?' : '&';
          url = root.location.protocol +
            '//' +
            root.location.host +
            root.location.pathname +
            root.location.search +
            separator + '_kzs_var_id=' +
            data.variationId +
            root.location.hash;
        }
      } catch (e) {
        // Do nothing
      } finally {
        if (state === 'decided' || state === 'unmatched') {
          root.ud('create', userdiveId, {
            'overrideUrl': url
          });
          root.ud('analyze');
        }
      }
    });
  } catch (e) {
    root.ud('create', userdiveId);
    root.ud('analyze');
  }
})('[Project Id]', window);
</script>
```
