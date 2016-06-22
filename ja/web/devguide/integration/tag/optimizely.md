```html
<script>
(function (userdiveId, root, intervalTime, maxTry) {
  var tryCount = 0;
  var interval = intervalTime || 50;
  var max = maxTry || 3;
  var started = false;

  function getOptimizely () {
    return root.optimizely;
  };
  function getData () {
    return getOptimizely().data;
  };
  function getRedirectExperiment () {
    return getData().state.redirectExperiment;
  };
  function getExperiment (id) {
    return getData().experiments[id];
  };
  function getActiveExperiments () {
    return getOptimizely().activeExperiments;
  };
  function getVariationIds (experimentId) {
    return getOptimizely().variationIdsMap[experimentId];
  };
  function getSectionIds (experimentId) {
    return getExperiment(experimentId).section_ids;
  };
  function addParam (search, param, value) {
    if (typeof search !== 'string' || typeof param !== 'string' || typeof value !== 'string' || value.length < 1) return;
    if (/\?.+$/.test(search)) {
      return search + '&' + param + '=' + value;
    }
    return '?' + param + '=' + value;
  };
  function createParam (param, variationId, variationIds) {
    var variationIndex = variationIds.indexOf(variationId);
    if (variationIndex >= 0) {
      if (param) {
        param += '_' + variationIndex;
      } else {
        param = '' + variationIndex;
      }
    }
    return param;
  };
  function start (experimentId, variationId, param, result, search, url, i, j, k) {
    try {
      getOptimizely().push({
        type: 'integration',
        OAuthClientId: 6281051101
      });

      if (getRedirectExperiment()) {
        experimentId = getRedirectExperiment().experimentId;
        if (getActiveExperiments().indexOf(experimentId) === -1) {
          getActiveExperiments().push(experimentId);
        }
      }

      for (i = 0; i < getActiveExperiments().length; i++) {
        experimentId = getActiveExperiments()[i];
        param = undefined;
        for (j = 0; j < getVariationIds(experimentId).length; j++) {
          variationId = getVariationIds(experimentId)[j];
          if (getSectionIds(experimentId).length) {
            for (k = 0; k < getSectionIds(experimentId).length; k++) {
              param = createParam(
                param,
                variationId,
                getData().sections[getSectionIds(experimentId)[k]].variation_ids
              );
            }
          } else {
            param = createParam(
              param,
              variationId,
              getExperiment(experimentId).variation_ids
            );
          }
        }
        result = addParam(root.location.search, 'optimizely_x' + experimentId, param);
        if (result) {
          search = result;
        }
      }
    } catch (err) {} finally {
      url = root.location.protocol + '//' + root.location.host + root.location.pathname + search + root.location.hash;
      if (url === root.location.href) url = undefined;
      root.ud('create', userdiveId, {
        'overrideUrl': url
      });
      root.ud('analyze');
    }
  };
  function pollForReady () {
    try {
      if (getData().state && !started) {
        start();
        started = true;
        return;
      }
    } catch (err) {} finally {
      if (tryCount < max && !started) {
        setTimeout(pollForReady, interval);
      }
      tryCount++;
    }
  };
  pollForReady();
})(
  "[ Project Id ]",
  window,
  [ POLLING INTERVAL TIME ],
  [ POLLING MAX TRY COUNT ]
);
</script>
```
