```html
<script>
!function(t,n,i,e){function r(){return n.optimizely}function o(){return r().data}function a(){return o().state.redirectExperiment}function c(t){return o().experiments[t]}function u(){return r().activeExperiments}function f(t){return r().variationIdsMap[t]}function s(t){return c(t).section_ids}function l(t,n,i){if(!("string"!=typeof t||"string"!=typeof n||"string"!=typeof i||i.length<1))return/\?.+$/.test(t)?t+"&"+n+"="+i:"?"+n+"="+i}function d(t,n,i){var e=i.indexOf(n);return e>=0&&(t?t+="_"+e:t=""+e),t}function h(i,e,h,p,y,g,v,m){try{for(r().push({type:"integration",OAuthClientId:6281051101}),a()&&(i=a().experimentId,u().indexOf(i)===-1&&u().push(i)),g=0;g<u().length;g++){for(i=u()[g],h=void 0,v=0;v<f(i).length;v++)if(e=f(i)[v],s(i).length)for(m=0;m<s(i).length;m++)h=d(h,e,o().sections[s(i)[m]].variation_ids);else h=d(h,e,c(i).variation_ids);p=l(n.location.search,"optimizely_x"+i,h)}}catch(t){}finally{p&&(y=n.location.protocol+"//"+n.location.host+n.location.pathname+p+n.location.hash),n.ud("create",t,{overrideUrl:y}),n.ud("analyze")}}function p(){try{if(o().state&&!m)return h(),void(m=!0)}catch(t){}finally{y<v&&!m&&setTimeout(p,g),y++}}var y=0,g=i||50,v=e||3,m=!1;p()}(
  "[ Project Id ]",window,[ POLLING INTERVAL TIME ],[ POLLING MAX TRY COUNT ]
);
</script>
```
