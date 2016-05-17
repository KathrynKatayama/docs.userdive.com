```html
<script>
(function (userdiveId, root) {
  var _vis_counter = 0;
  root._vis_opt_queue = root._vis_opt_queue || [];
  root._vis_opt_queue.push(function () {
    var _vis_combination;
    var _vis_id;
    var _vis_l = 0;
    var url;
    function addParam (search, param, value) {
      if (/\?.+$/.test(search)) {
        return search + '&' + param + '=' + value;
      }
      return '?' + param + '=' + value;
    };
    try {
      if (!_vis_counter) {
        for (;_vis_l < root._vwo_exp_ids.length; _vis_l++) {
          _vis_id = root._vwo_exp_ids[_vis_l];
          if (root._vwo_exp[_vis_id].ready) {
            _vis_combination = root._vis_opt_readCookie('_vis_opt_exp_' + _vis_id + '_combi');
            if (typeof (root._vwo_exp[_vis_id].combination_chosen) !== 'undefined') {
              _vis_combination = root._vwo_exp[_vis_id].combination_chosen;
            }
            if (typeof (root._vwo_exp[_vis_id].comb_n[_vis_combination]) !== 'undefined') {
              _vis_counter++;
            }
          }
        }
        if (_vis_counter) {
          url = root.location.protocol + '//' + root.location.host +
            root.location.pathname +
            addParam(root.location.search, 'vwo', _vis_combination) +
            root.location.hash;
          if (url === root.location.href) url = undefined;
          root.ud('create', userdiveId, {
            'overrideUrl': url
          });
          root.ud('analyze');
        }
      }
    } catch (err) {};
  });
})('[Project Id]', window);
</script>
```
