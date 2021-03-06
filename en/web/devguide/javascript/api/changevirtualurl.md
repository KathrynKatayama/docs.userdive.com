# `changeVirtualUrl` API

USERDIVE can track and analyse the user action on each URL. (`window.location.href`)

[(example)](https://uncovertruth.github.io/examples/t/changevirtualurl.html)

USERDIVE can also analyze a web site that adds the element dynamically within
the same URL.

```html
<script>
ud("changeVirtualUrl", "[ Virtual Url ]");
</script>
```

| Field       | Type   | Required | Description                                                            |
|:------------|:-------|:---------|:-----------------------------------------------------------------------|
| Virtual URL | String | Yes      | [virtual page](../../../guide/snapshot.html) URL of the current state |

`changeVirtualUrl` API can be use the following web site.

- Web site that changes the element of display without any page moves
- Web site that uses asynchronous transmission like Ajax
- Use following JavaScript framework
    - AngularJS
    - Backbone.js
    - Ember.js
    - jQuery
    - React.js
    - Vue.js
    - etc

## sequence diagram

![change virtual url](../../../../../ja/web/devguide/javascript/api/mmd/changevirtualurl.mmd.png)

## Out of support

`changeVirtualUrl` API does not support the following two.

- Tracking on the form analysis
- Events to related to it
