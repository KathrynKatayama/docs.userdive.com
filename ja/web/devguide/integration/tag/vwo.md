```html
<script>
(function (userdiveId, global, intervalTime, maxTry) {
  var visCounter = 0;
  var interval = intervalTime || 200;
  var max = maxTry || 10;
  var started = false;
  var tryCount = 0;

  function addParam (search, param, value) {
    if (/\?.+$/.test(search)) {
      return search + '&' + param + '=' + value;
    }
    return '?' + param + '=' + value;
  }
  function createUrl (l, id) {
    return l.protocol + '//' + l.host + l.pathname + addParam(l.search, 'vwo', id) + l.hash;
  }

  function start (queue, vwoExpIds, vwoExp, url, visCombination, visId, i) {
    queue.push(function () {
      try {
        if (!visCounter) {
          for (i = 0; i < vwoExpIds.length; i++) {
            visId = vwoExpIds[i];
            if (!vwoExp[visId].ready) {
              continue;
            }
            visCombination = global._vis_opt_readCookie('_vis_opt_exp_' + visId + '_combi');
            if (typeof (vwoExp[visId].combination_chosen) !== 'undefined') {
              visCombination = vwoExp[visId].combination_chosen;
            }
            if (typeof (vwoExp[visId].comb_n[visCombination]) !== 'undefined') {
              visCounter++;
            }
          }
          if (visCounter) {
            url = createUrl(global.location, visCombination);
            if (url === global.location.href) url = undefined;
            global.ud('create', userdiveId, {
              'overrideUrl': url
            });
            global.ud('analyze');
            started = true;
          }
        }
      } catch (err) {};
    });
  }

  function pollForReady () {
    try {
      if (tryCount < max && typeof global._vwo_exp_ids !== 'undefined' && !started) {
        start(global._vis_opt_queue, global._vwo_exp_ids, global._vwo_exp);
        return;
      }
      if (started || tryCount < max) {
        return;
      }
      global.ud('analyze');
      started = true;
    } catch (err) {} finally {
      if (tryCount < max && !started) {
        setTimeout(pollForReady, interval);
      }
      tryCount++;
    }
  }
  global.ud('create', userdiveId);
  pollForReady();
})(
  "[ Project Id ]",
  window,
  [ POLLING INTERVAL TIME ],
  [ POLLING MAX TRY COUNT ]
);
</script>
```
