# Integration with Optimizely

USERDIVE can receive experiment information from Optimizely by following process.

[example](https://uncovertruth.github.io/examples/integration/optimizely.html)

## Edit HTML

Followings are needed in order to link USERDIVE and Optimizely.

- Optimizely Snippet
- USERDIVE Load tag
- Optimizely/USERDIVE Linkage tag

### Optimizely Snippet

Snippet from Optimizely is necessary for linkage.

### USERDIVE Load tag

{% include './tag/load.md' %}

Please copy and paste the script after the main `<head>` tag and before the end `</head>` tag of your HTML document.

### Optimizely/USERDIVE Link Tag

{% include './tag/optimizely.min.md' %}

| Field                     | Type    | Required | Description                                   |
|:--------------------------|:--------|:---------|:----------------------------------------------|
| [ Project Id ]            | String  | Yes      | Project ID for USERDIVE                       |
| [ POLLING INTERVAL TIME ] | Integer | No       | Default 50 millisecounds                      |
| [ POLLING MAX TRY COUNT ] | Integer | No       | 3 Maximum numbers of polling: Default 3 times |

Project ID can be found on USERDIVE.

Uncompressed link tag

{% include './tag/optimizely.md' %}

The code above mainly process following three.

- Standby polling until `window.optimizely.data.state` activated
- Take samples out from test data on `window.optimizely`, create URL for USERDIVE
- Set the created URL on USERDIVE, and start tracking

## Attention

Optimizely/USERDIVE Link tag should be placed after the followings.

1. USERDIVE Load tag

Collection of data does not start in the case of following.

1. When the testing at Optimizely was not confirmed within certain amount of time ( within [ POLLING INTERVAL TIME] * [ POLLING MAX TRY COUNT ] millisecounds)

## Redirect experiments

Optimizely provides the following function.
[`Redirect experiments`](https://help.optimizely.com/Build_Experiments/Redirect_experiments:_Test_separate_URLs)
When using this function, please note that integration of Optimizely/USERDIVE needs an additional process.

### Note

1. After being redirected, the URL needs USERDIVE script tag.
1. It is recommended for the redirected URL to have same domain as the previous page.
    - When connecting the sessions of two URLs with different domain, then it is necessary to set custom tag to connect the domain after being redirected.
1. Cannot use Previous-page Filter Function because of redirection.
