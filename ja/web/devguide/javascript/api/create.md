# `create` API

`create` API では計測を始める前に必要な情報を登録することができます。

1. プロジェクト情報
    1. 複数プロジェクト
1. 仮想ページ URL
1. カスタム変数
1. cookie
    1. `cookieDomain`
    1. `cookieExpires`

ここでは `create` API に必須な `[ Project Id ]` の設定方法に関して説明します。
`[ Project Id ]` の設定は、[計測を開始](./analyze.html)するまでに必ず必要です。

## プロジェクトの設定

```html
<script>
ud("create", "[ Project Id ]", [ Options ]);
</script>
```

| Field      | Type   | Required | Description                     |
|:-----------|:-------|:---------|:--------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。 |
| Options    | Object | No       | オプションを指定                |

### 複数プロジェクトの設定

複数のプロジェクト情報を登録することが可能です

```html
<script>
ud("create", {"pc": "[ Project Id 1 ]", "sp": "[ Project Id 2 ]"}, [ Options ]);
</script>
```

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| Project Id 1 | String | Yes      | USERDIVE のプロジェクトIDです。 |
| Project Id 2 | String | Yes      | USERDIVE のプロジェクトIDです。 |
| Options      | Object | No       | オプションを指定                |

## オプション

`create` API では下記のオプションを指定できます。

- [カスタム変数の設定](./create/customvar.html)
- [仮想ページの設定](./create/overrideurl.html)
- [cookieの設定](./create/cookie.html)
