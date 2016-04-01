<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Starting to tracking web site](#starting-to-tracking-web-site)
- [Setting of the HTML `<script>` tag](#setting-of-the-html-script-tag)
- [About API](#about-api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Starting to tracking web site

You use  ( UDTracker.js ) to measure the action of USERDIVE’s user. In the following, I explain a method to add ( UDTracker.js ) to for a site.

# Setting of the HTML `<script>` tag

I explain a method to set the following HTML `<script>` tag for tracking the site.
We recommend that you list this just before `</body>` tag of the site.

The following `xx-xx` is ID published by every project.
An account of USERDIVE is necessary to publish it.

```html
<script>
!function(e,t,n,c,r,u,s){e.USERDIVEObject=r,e[r]=e[r]||function(){(e[r].queue=e[r].queue||[]).push(arguments)},
u=t.createElement(n),s=document.getElementsByTagName(n)[0],u.async=1,u.src=c,s.parentNode.insertBefore(u,s)
}(window,document,"script","//harpoon3.userdive.com/static/UDTracker.js?" + new Date().getTime(),"ud");
ud("create", "xx-xx");
ud("analyze");
</script>
```

There is the following four kind of main processing the above cord.

1. Initialization of the global function `ud`
1. To publish the `<script>` tag which loads the JavaScript that we prodive in async
1. Register of the ID [(about create API)](./api/create.html)
1. Start the tracking of the site [(about analyze API)](./api/analyze.md)

# About API

You can use the following API on USERDIVE.

- [`create`](./api/create.html)
- [`analyze`](./api/analyze.html)
- [`setcustomVar`](./api/setcustomvar.html)
- [`changeVirtualUrl`](./api/changevirtualurl.html)
