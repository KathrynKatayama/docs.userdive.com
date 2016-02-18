### `changeVirtualUrl` API

USERDIVE では、ユーザの起こしたアクションを URL (`window.location.href`) 単位に集約し、分析を行うことができます。

USERDIVE では同一のURLで動的に要素の追加を行うサイトの分析も行うことができます。

```html
<script>
ud("changeVirtualUrl", "[ Virtual Url ]");
</script>
```

| Field       | Type   | Required | Description                                                |
|:------------|:-------|:---------|:-----------------------------------------------------------|
| Virtual URL | String | Yes      | 現在の状態の[仮想ページ](../../../guide/snapshot.html) URL |

`changeVirtualUrl` API は下記のようなページでの利用を推奨しています。

- ページの遷移を行わず表示の要素が変化するサイト
- Ajaxなどの非同期通信を利用したサイト
- JavaScript フレームワークを利用したサイト
    - Angular.js
    - React.js
    - Ember.js
    - Backbone.js
    - Vue.js
    - etc

### サポート外の項目

`changeVirtualUrl` API を利用した分析では、下記のことをサポートしていません。

- リンク解析、およびそれに関係するイベントの計測
- フォーム分析、およびそれに関係するイベントの計測
