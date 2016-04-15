<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`changeVirtualUrl` API](#changevirtualurl-api)
- [Out of support](#out-of-support)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `changeVirtualUrl` API

USERDIVE can track and analyse the user action on each URL. (`window.location.href`)

USERDIVE can also analyze a web site that adds the element dynamically within the same URL.

```html
<script>
ud("changeVirtualUrl", "[ Virtual Url ]");
</script>
```

| Field       | Type   | Required | Description                                                            |
|:------------|:-------|:---------|:-----------------------------------------------------------------------|
| Virtual URL | String | Yes      | [ virtual page](../../../guide/snapshot.html) URL of the current state |

`changeVirtualUrl` API can be use the following web site.

- Web site that changes the element of display without any page moves
- Web site that uses asynchronous transmission like Ajax
- Use following JavaScript framework
    - AngularJS
    - React.js
    - Ember.js
    - Backbone.js
    - Vue.js
    - etc

# Out of support

`changeVirtualUrl` API does not support the following two.

- Tracking on the form analysis
- Events to related to it
