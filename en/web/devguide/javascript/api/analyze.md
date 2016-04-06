<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [`analyze` API](#analyze-api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# `analyze` API

Starting to tracking web site.
Before running `analyze` API, you have to run `create` API.
USERDIVE account is needed to web site tracking.

- [About `create`](./create.html)

```html
<script>
ud("analyze");
</script>
```

When execute above, runned each steps following.

1. Verify your account to via USERDIVE server and create session if verification passed.
1. Collect user and event data following.
    - Information about user environment (Data collected from Browser info a.k.a User-Agent)
        - IP Address (Not saved to database)
        - Country, Region
        - Device
        - OS
        - Browser
        - Screen size
    - Information for page in which user is viewing
        - URL in which user is viewing
        - Browser window size
        - Size of page
        - Number of form, input content info within a page
    - User event data
        - Mouse event (position, click, button etc.)
        - Tap event (position)
        - keyboard events (only key up event, not key code)
        - scroll events (scroll reach)
        - Change in Device orientation
        - Focus on form, submitting event
        - JavaScript errors
        - Transition event to next page
        - Timestamp
1. Sending event data.

Sent data which is applied to USERDIVE after the elapse of a certain period of time.