<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [サイトの計測を開始する](#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%A8%88%E6%B8%AC%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%99%E3%82%8B)
- [HTML `<script>` タグの設定](#html-script-%E3%82%BF%E3%82%B0%E3%81%AE%E8%A8%AD%E5%AE%9A)
- [API について](#api-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### サイトの計測を開始する

USERDIVE ユーザの行動を計測するために ( UDTracker.js ) を利用します。  
以下では、サイトに対して UDTracker.js を追加する方法を説明します。

### HTML `<script>` タグの設定

サイトの計測を行う方法として、下記の HTML `<script>` タグ(以下、タグ)を設定をする方法を説明します。
こちらのタグを、サイト内の `</body>` タグの直前に記載することを弊社では推奨しております。

また、下記のタグ内に存在する `xx-xx` はプロジェクトごとに発行される `ID` となっています。  
発行には弊社 USERDIVE のアカウントが必要となります。

```html
<script>
!function(e,t,n,c,r,u,s){e.USERDIVEObject=r,e[r]=e[r]||function(){(e[r].queue=e[r].queue||[]).push(arguments)},
u=t.createElement(n),s=document.getElementsByTagName(n)[0],u.async=1,u.src=c,s.parentNode.insertBefore(u,s)
}(window,document,"script","//harpoon3.userdive.com/static/UDTracker.js?" + new Date().getTime(),"ud");
ud("create", "xx-xx");
ud("analyze");
</script>
```

上記のコードで行われる主な処理は下記の4種類です。

1. グローバル関数 `ud` の初期化処理を行います。
1. 弊社の提供する JavaScript を非同期でロードする `<script>` タグを発行します。
1. `ID` の登録を行います。 [( `create` API について)](./api/create.html)
1. サイトの計測を開始します。 [( `analyze` API について)](./api/analyze.html)

### API について

USERDIVE では下記の API を利用することができます。

- [`create`](./api/create.html)
- [`analyze`](./api/analyze.html)
- [`setcustomVar`](./api/setcustomvar.html)
- [`changeVirtualUrl`](./api/changevirtualurl.html)
