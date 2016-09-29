# Integration with VWO

USERDIVE can receive test information by following process.

- [(example)](https://uncovertruth.github.io/examples/integration/vwo.html)

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

Please copy and paste the script after the main `<head>` tag
and before the end `</head>` tag of your website code.

### VWO/USERDIVE Link tag

{% include './tag/vwo.min.md' %}

| Field                     | Type    | Required | Description                                   |
|:--------------------------|:--------|:---------|:----------------------------------------------|
| [Project Id]              | String  | Yes      | Project ID for USERDIVE                       |
| [ POLLING INTERVAL TIME ] | Integer | No       | Default 100 millisecounds                     |
| [ POLLING MAX TRY COUNT ] | Integer | No       | 5 Maximum numbers of polling: Default 5 times |

Project ID can be found on USERDIVE.

Uncompressed link tag

{% include './tag/vwo.md' %}

The code above mainly process following two.

1. VMO finalize on A/B testing result.
1. Set the result on USERDIVE and start to tracking

Please copy and paste VWO/USERDIVE Link tag after the main `<body>` tag
and before the end `</body>` tag of your website code.

## Attention

VWO/USERDIVE Link tag should be placed after the followings.

1. VWO tag
1. USERDIVE Load tag
