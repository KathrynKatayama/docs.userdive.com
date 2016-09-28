```html
<script>
(function(e,n,o,t){var i=0;var r=o||100;var f=t||5;var u=false;var a=0;function c(e,n,o){if(/\?.+$/.test(e)){return e+"&"+n+"="+o}return"?"+n+"="+o}function _(e,n){return e.protocol+"//"+e.host+e.pathname+c(e.search,"vwo",n)+e.hash}function d(o,t,r,f,a,c,d){o.push(function(){try{if(!i){for(d=0;d<t.length;d++){c=t[d];if(!r[c].ready){continue}a=n._vis_opt_readCookie("_vis_opt_exp_"+c+"_combi");if(typeof r[c].combination_chosen!=="undefined"){a=r[c].combination_chosen}if(typeof r[c].comb_n[a]!=="undefined"){i++}}if(i){f=_(n.location,a);if(f===n.location.href)f=undefined;n.ud("create",e,{overrideUrl:f});n.ud("analyze");u=true}}}catch(e){}})}function s(){try{if(a<f&&typeof n._vwo_exp_ids!=="undefined"&&!u){d(n._vis_opt_queue,n._vwo_exp_ids,n._vwo_exp);return}if(u||a<f){return}n.ud("analyze");u=true}catch(e){}finally{if(a<f&&!u){setTimeout(s,r)}a++}}n.ud("create",e);s()})(
  "[ Project Id ]",window,[ POLLING INTERVAL TIME ],[ POLLING MAX TRY COUNT ]
);
</script>
```
