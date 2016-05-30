```html
<script data-kz-key="XXXXXX"
  data-kz-namespace="kzs"
  src="https://cdn.kaizenplatform.net/y/XX/ZZZZZZZ.js"></script>
<script>
(function (root) {
  try {
    root.kzs = root.kzs || function () {
      var _ = root.kzs;
      return (_.q || (_.q = [])).push(arguments);
    };
    root.kzs('getVariation', function (data, state) {
      var expId;
      var varId;
      try {
        if (state === 'unmatched') {
          root.dataLayer.push({
            event: 'kzsApply',
            kzsState: String(state)
          });
        } else if (state === 'decided') {
          expId = data.expId;
          varId = data.variationId;
          root.dataLayer.push({
            event: 'kzsApply',
            kzsState: String(state),
            kzsExpId: String(expId),
            kzsVarId: String(varId)
          });
        }
      } catch (e) {}
    });
  } catch (e) {}
})(window);
<script>
```
