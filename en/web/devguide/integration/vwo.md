<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Linkage with VWO](#linkage-with-vwo)
  - [Edit HTML](#edit-html)
    - [VWO tag](#vwo-tag)
    - [USERDIVE Load tag](#userdive-load-tag)
    - [VWO/USERDIVE Link tag](#vwouserdive-link-tag)
  - [Attention](#attention)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Linkage with VWO

USERDIVE can receive test information by following process.

- [(example)](https://finder3.userdive.com/examples/integration/vwo/)

## Edit HTML

Following tags are necessary for linkage.

- VWO tag
- USERDIVE Load tag
- VWO/USERDIVE Linkage tag

### VWO tag

VWO tag is necessary for linkage.

### USERDIVE Load tag

USERDIVE Load tag is necessary for linkage.

```html
<script>
!function(e,t,n,c,r,u,s){e.USERDIVEObject=r,e[r]=e[r]||function(){(e[r].queue=e[r].queue||[]).push(arguments)},
u=t.createElement(n),s=document.getElementsByTagName(n)[0],u.async=1,u.src=c,s.parentNode.insertBefore(u,s)
}(window,document,"script","//harpoon3.userdive.com/static/UDTracker.js?" + new Date().getTime(),"ud");
</script>
```

Please copy and paste the script after the main `<head>` tag and before the end `</head>` tag of your website code.

### VWO/USERDIVE Link tag

```html
<script>
(function(o,e){e._vis_opt_queue=e._vis_opt_queue||[];e._vis_opt_queue.push(function(){var i;var _=function(o,e,i){if(/\?.+$/.test(o)){return o+"&"+e+"="+i}return"?"+e+"="+i};var n;var t=0;var a;try{for(;t<e._vwo_exp_ids.length;t++){n=e._vwo_exp_ids[t];if(e._vwo_exp[n].ready){i=e._vis_opt_readCookie("_vis_opt_exp_"+n+"_combi");if(typeof e._vwo_exp[n].combination_chosen!=="undefined"){i=e._vwo_exp[n].combination_chosen}}}}catch(r){}finally{a=e.location.protocol+"//"+e.location.host+e.location.pathname+_(e.location.search,"vwo",i)+e.location.hash;if(a===e.location.href)a=undefined;e.ud("create",o,{overrideUrl:a});e.ud("analyze")}})})(
  "[Project Id]",window
);
</script>
```

| Field        | Type   | Required | Description             |
|:-------------|:-------|:---------|:------------------------|
| [Project Id] | String | Yes      | Project ID for USERDIVE |

Project ID can be found on USERDIVE.

Uncompressed link tag

```html
<script>
(function (userdiveId, root) {
  root._vis_opt_queue = root._vis_opt_queue || [];
  root._vis_opt_queue.push(function () {
    var _vis_combination;
    var addParam = function (search, param, value) {
      if (/\?.+$/.test(search)) {
        return search + '&' + param + '=' + value;
      }
      return '?' + param + '=' + value;
    };
    var _vis_id;
    var _vis_l = 0;
    var url;
    try {
      for (;_vis_l < root._vwo_exp_ids.length; _vis_l++) {
        _vis_id = root._vwo_exp_ids[_vis_l];
        if (root._vwo_exp[_vis_id].ready) {
          _vis_combination = root._vis_opt_readCookie('_vis_opt_exp_' + _vis_id + '_combi');
          if (typeof (root._vwo_exp[_vis_id].combination_chosen) !== 'undefined') {
            _vis_combination = root._vwo_exp[_vis_id].combination_chosen;
          }
        }
      }
    } catch (err) {} finally {
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
  });
})('[Project Id]', window);
</script>
```

The code above mainly process following two.

1. VMO finalize on A/B testing result.
2. Set the result on USERDIVE and start to tracking

Please copy and paste VWO/USERDIVE Link tag after the main `<body>` tag and before the end `</body>` tag of your website code.

## Attention

VWO/USERDIVE Link tag should be placed after the followings.

1. VWO tag
2. USERDIVE Load tag
