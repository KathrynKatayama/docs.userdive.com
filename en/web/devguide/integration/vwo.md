<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Linkage with VWO](#linkage-with-vwo)
  - [Edit HTML](#edit-html)
    - [VWO tag](#vwo-tag)
    - [USERDIVE Load tag](#userdive-load-tag)
    - [VWO/USERDIVE Link tag](#vwouserdive-link-tag)
  - [Attention](#attention)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Linkage with VWO

USERDIVE can receive test information by following process.

- [(example)](https://finder3.userdive.com/examples/integration/vwo/)

## Edit HTML

Following tags are necessary for linkage.

- VWO tag
- USERDIVE Load tag
- VWO/USERDIVE Linkage tag

### VWO tag

VWO tag is necessary for linkage.

### USERDIVE Load tag

USERDIVE Load tag is necessary for linkage.

{% include './tag/load.md' %}

Please copy and paste the script after the main `<head>` tag and before the end `</head>` tag of your website code.

### VWO/USERDIVE Link tag

{% include './tag/vwo.min.md' %}

| Field        | Type   | Required | Description             |
|:-------------|:-------|:---------|:------------------------|
| [Project Id] | String | Yes      | Project ID for USERDIVE |

Project ID can be found on USERDIVE.

Uncompressed link tag

{% include './tag/vwo.md' %}

The code above mainly process following two.

1. VMO finalize on A/B testing result.
2. Set the result on USERDIVE and start to tracking

Please copy and paste VWO/USERDIVE Link tag after the main `<body>` tag and before the end `</body>` tag of your website code.

## Attention

VWO/USERDIVE Link tag should be placed after the followings.

1. VWO tag
2. USERDIVE Load tag
