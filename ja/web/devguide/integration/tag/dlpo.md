```html
<script>
(function (userdiveId, name, global, url) {
  global[name] = global[name] || function () {
    (global[name].queue = global[name].queue || []).push(arguments);
  };
  global.ud('create', userdiveId, {
    'overrideUrl': url
  });
  global.ud('analyze');
})('[Project Id]', window.USERDIVEObject, window, window.USERDIVE_OVERRIDE_URL);
</script>
```
