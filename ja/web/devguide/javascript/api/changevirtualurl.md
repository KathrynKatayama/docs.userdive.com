<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`changeVirtualUrl` API](#changevirtualurl-api)
- [サポート外の項目](#%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E5%A4%96%E3%81%AE%E9%A0%85%E7%9B%AE)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `changeVirtualUrl` API

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
    - AngularJS
    - React.js
    - Ember.js
    - Backbone.js
    - Vue.js
    - etc

# サポート外の項目

`changeVirtualUrl` API を利用した分析では、下記のことをサポートしていません。

- リンク解析、およびそれに関係するイベントの計測
- フォーム分析、およびそれに関係するイベントの計測
