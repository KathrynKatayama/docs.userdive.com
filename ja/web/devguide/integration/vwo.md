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
var _vis_opt_queue=window._vis_opt_queue||[];_vis_opt_queue.push(function(){var b=window;var d;var f=function(g,i,h){if(/\?.+$/.test(g)){return g+"&"+i+"="+h}return g+"?"+i+"="+h};try{var a;var e=0;for(;e<b._vwo_exp_ids.length;e++){a=b._vwo_exp_ids[e];if(b._vwo_exp[a].ready){d=b._vis_opt_readCookie("_vis_opt_exp_"+a+"_combi");if(typeof(b._vwo_exp[a].combination_chosen)!=="undefined"){d=b._vwo_exp[a].combination_chosen}}}}catch(c){}finally{
  b.ud("create","[Project Id]",{overrideUrl:f(location.href,"vwo",d)});
  b.ud("analyze")}
});
</script>
```

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| [Project Id] | String | Yes      | USERDIVE のプロジェクトIDです。 |

プロジェクトIDは USERDIVE より取得することができます。

未圧縮の連携タグ

```html
<script>
var _vis_opt_queue = window._vis_opt_queue || [];
_vis_opt_queue.push(function () {
  var root = window;
  var _vis_combination;
  var addParam = function (url, param, value) {
    if (/\?.+$/.test(url)) {
      return url + '&' + param + '=' + value;
    }
    return url + '?' + param + '=' + value;
  };
  try {
    var _vis_id;
    var _vis_l = 0;
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
    root.ud('create', '[Project Id]', {
      'overrideUrl': addParam(location.href, 'vwo', _vis_combination)
    });
    root.ud('analyze');
  }
});
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
