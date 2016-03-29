<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [VWO 連携](#vwo-%E9%80%A3%E6%90%BA)
  - [HTML の編集](#html-%E3%81%AE%E7%B7%A8%E9%9B%86)
    - [VWO タグ](#vwo-%E3%82%BF%E3%82%B0)
    - [USERDIVE ロードタグ](#userdive-%E3%83%AD%E3%83%BC%E3%83%89%E3%82%BF%E3%82%B0)
    - [VWO/USERDIVE 連携タグ](#vwouserdive-%E9%80%A3%E6%90%BA%E3%82%BF%E3%82%B0)
  - [注意点](#%E6%B3%A8%E6%84%8F%E7%82%B9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# VWO 連携

下記の手順を用いて、 USERDIVE にテスト情報を引き渡すことができます。

- [(example)](https://finder3.userdive.com/examples/integration/vwo/)

## HTML の編集

連携を行うためには下記のタグが必要になります。

- VWO タグ
- USERDIVE ロードタグ
- VWO/USERDIVE 連携タグ

### VWO タグ

VWO の通常のタグの反映が必要です。

### USERDIVE ロードタグ

USERDIVE ロードタグの反映が必要です。

```html
<script>
!function(e,t,n,c,r,u,s){e.USERDIVEObject=r,e[r]=e[r]||function(){(e[r].queue=e[r].queue||[]).push(arguments)},
u=t.createElement(n),s=document.getElementsByTagName(n)[0],u.async=1,u.src=c,s.parentNode.insertBefore(u,s)
}(window,document,"script","//harpoon3.userdive.com/static/UDTracker.js?" + new Date().getTime(),"ud");
</script>
```

USERDIVE ロードタグは `</head>` の直前に反映させることを推奨しています。

### VWO/USERDIVE 連携タグ

```html
<script>
(function(o,e){e._vis_opt_queue=e._vis_opt_queue||[];e._vis_opt_queue.push(function(){var i;var _=function(o,e,i){if(/\?.+$/.test(o)){return o+"&"+e+"="+i}return"?"+e+"="+i};var n;var t=0;var a;try{for(;t<e._vwo_exp_ids.length;t++){n=e._vwo_exp_ids[t];if(e._vwo_exp[n].ready){i=e._vis_opt_readCookie("_vis_opt_exp_"+n+"_combi");if(typeof e._vwo_exp[n].combination_chosen!=="undefined"){i=e._vwo_exp[n].combination_chosen}}}}catch(r){}finally{a=e.location.protocol+"//"+e.location.host+e.location.pathname+_(e.location.search,"vwo",i)+e.location.hash;if(a===e.location.href)a=undefined;e.ud("create",o,{overrideUrl:a});e.ud("analyze")}})})(
  "[Project Id]",window
);
</script>
```

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| [Project Id] | String | Yes      | USERDIVE のプロジェクトIDです。 |

プロジェクトIDは USERDIVE より取得することができます。

未圧縮の連携タグ

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

上記のコードで行われる主な処理は下記の2つです。

1. VWO がA/Bテストの結果を確定する。
1. 確定された情報を USERDIVE に設定し、 USERDIVE の計測を開始する。

VWO/USERDIVE 連携タグは `</body>` の直前に反映させることを推奨しています。

## 注意点

VWO/USERDIVE 連携タグは、下記の2つのタグよりも後に存在する必要があります。

1. VWO タグ
1. USERDIVE ロードタグ
