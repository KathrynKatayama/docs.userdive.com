<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`changeVirtualUrl` API](#changevirtualurl-api)
- [Out of support](#out-of-support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `changeVirtualUrl` API

USERDIVE can gather user action by the URL (`window.location.href`) and analyze.

USERDIVE can also analyze a web site that adds the element dynamically with
the same URL.

```html
<script>
ud("changeVirtualUrl", "[ Virtual Url ]");
</script>
```

| Field       | Type   | Required | Description                                                            |
|:------------|:-------|:---------|:-----------------------------------------------------------------------|
| Virtual URL | String | Yes      | [ virtual page](../../../guide/snapshot.html) URL of the current state |

`changeVirtualUrl` API can use the following web site.

- Change the element of display without any page transitions
- Use asynchronous transmission as the Ajax
- Use JavaScript framework
    - AngularJS
    - React.js
    - Ember.js
    - Backbone.js
    - Vue.js
    - etc

# Out of support

`changeVirtualUrl` API does not support the following two.

- Tracking of the form analysis and event to be related to it
