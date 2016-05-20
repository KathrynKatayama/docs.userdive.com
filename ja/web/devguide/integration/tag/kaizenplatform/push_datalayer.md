```html
<script>
(function (root) {
  var kzs = root.kzs || function () {
    var _ = root.kzs; return (_.q || (_.q = [])).push(arguments);
  };
  var testId = -1;
  var postId = -1;
  if (typeof kzs === 'undefined') {
    return;
  }
  try {
    kzs('getVariation', function (variation) {
      try {
        if (variation.experimentId && variation.variationId) {
          testId = variation.experimentId;
          postId = variation.variationId;
          root.dataLayer.push({
            event: 'trackKAIZEN',
            kzsExpId: String(testId),
            kzsVarId: String(postId)
          });
        }
      } catch (e) {}
    });
  } catch (e) {}
})(window);
<script>
```
