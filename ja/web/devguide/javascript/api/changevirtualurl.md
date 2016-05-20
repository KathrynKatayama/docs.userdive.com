<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`changeVirtualUrl` API](#changevirtualurl-api)
- [サポート外の項目](#%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E5%A4%96%E3%81%AE%E9%A0%85%E7%9B%AE)
- [確認方法](#%E7%A2%BA%E8%AA%8D%E6%96%B9%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `changeVirtualUrl` API

USERDIVE では、ユーザの起こしたアクションを URL (`window.location.href`) 単位に集約し、分析を行うことができます。

[(example)](https://uncovertruth.github.io/examples/t/changevirtualurl.html)

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

- フォーム分析、およびそれに関係するイベントの計測

# 確認方法

[(example)](https://uncovertruth.github.io/examples/t/changevirtualurl.html) を例に確認方法について記載します。確認には DeveloperTools などを用います。

examples ではヘッダー内に存在している `About` をクリックすることにより、 `changeVirtualUrl` を実行します。

1. `//harpoon3.userdive.com/tracking.php` への送信データに含まれる `attr[url]` の値を確認ください。
1. `changeVirtualUrl` を実行後、引数に与えられたURLに `attr[url]` の値が変更されていることを確認してください。

![debug image](./files/changeVirtualUrlDebug.png)
