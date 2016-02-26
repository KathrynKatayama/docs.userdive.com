### `create` API

`create` API では計測を始める前に必要な情報を登録することができます。

- プロジェクト情報の設定
  - 複数プロジェクトの設定
- 仮想ページ URL の設定
- カスタム変数の設定
- cookieDomainの設定

```html
<script>
ud("create", "[ Project Id ]");
</script>
```

| Field      | Type   | Required | Description                     |
|:-----------|:-------|:---------|:--------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。 |

#### 複数プロジェクトの設定

複数のプロジェクト情報を登録することが可能です

```html
<script>
ud("create", {"pc": "[ Project Id 1 ]", "sp": "[ Project Id 2 ]"});
</script>
```

| Field        | Type   | Required | Description                     |
|:-------------|:-------|:---------|:--------------------------------|
| Project Id 1 | String | Yes      | USERDIVE のプロジェクトIDです。 |
| Project Id 2 | String | Yes      | USERDIVE のプロジェクトIDです。 |

### ページエンコーディング

エンコーディングを指定することができます。
指定されたエンコーディングを下記のものに利用し、 USERDIVE に表示します。

- URL
- カスタム変数

```html
<script>
ud("create", "[ Project Id ]", {
  "encoding": "[ Encoding ]"
});
</script>
```

| Field      | Type   | Required | Description                                       |
|:-----------|:-------|:---------|:--------------------------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。                   |
| Encoding   | String | No       | 表示環境の文字コードを指定します。(default UTF-8) |

#### 指定可能なエンコード一覧

指定可能なエンコーディングは下表のとおりです。

| エンコード | 別名 (エイリアス) | 言語 |
|:-------------|:-------|:---------|
| `ascii` | `646`, `us-ascii` | 英語 |
| `big5` | `big5-tw`, `csbig5` | 繁体字中国語 |
| `big5hkscs` | `big5-hkscs`, `hkscs` | 繁体字中国語 |
| `cp037` | `IBM037`, `IBM039` | 英語 |
| `cp424` | `EBCDIC-CP-HE`, `IBM424` | ヘブライ語 |
| `cp437` | `437`, `IBM437` | 英語 |
| `cp500` | `EBCDIC-CP-BE`, `EBCDIC-CP-CH`, `IBM500` | 西ヨーロッパ言語 |
| `cp720` |  | アラビア語 |
| `cp737` |  | ギリシャ語 |
| `cp775` | `IBM775` | バルト沿岸国 |
| `cp850` | `850`, `IBM850` | 西ヨーロッパ |
| `cp852` | `852`, `IBM852` | 中央および東ヨーロッパ |
| `cp855` | `855`, `IBM855` | ブルガリア、ベラルーシ、マケドニア、ロシア、セルビア |
| `cp856` |  | ヘブライ語 |
| `cp857` | `857`, `IBM857` | トルコ語 |
| `cp858` | `858`, `IBM858` | 西ヨーロッパ |
| `cp860` | `860`, `IBM860` | ポルトガル語 |
| `cp861` | `861`, `CP-IS`, `IBM861` | アイスランド語 |
| `cp862` | `862`, `IBM862` | ヘブライ語 |
| `cp863` | `863`, `IBM863` | カナダ |
| `cp864` | `IBM864` | アラビア語 |
| `cp865` | `865`, `IBM865` | デンマーク、ノルウェー |
| `cp866` | `866`, `IBM866` | ロシア語 |
| `cp869` | `869`, `CP-GR`, `IBM869` | ギリシャ語 |
| `cp874` |  | タイ語 |
| `cp875` |  | ギリシャ語 |
| `cp932` | `932`, `ms932`, `mskanji`, `ms-kanji` | 日本語 |
| `cp949` | `949`, `ms949`, `uhc` | 韓国語 |
| `cp950` | `950`, `ms950` | 繁体字中国語 |
| `cp1006` |  | Urdu |
| `cp1026` | `ibm1026` | トルコ語 |
| `cp1140` | `ibm1140` | 西ヨーロッパ |
| `cp1250` | `windows-1250` | 中央および東ヨーロッパ |
| `cp1251` | `windows-1251` | ブルガリア、ベラルーシ、マケドニア、ロシア、セルビア |
| `cp1252` | `windows-1252` | 西ヨーロッパ |
| `cp1253` | `windows-1253` | ギリシャ |
| `cp1254` | `windows-1254` | トルコ |
| `cp1255` | `windows-1255` | ヘブライ |
| `cp1256` | `windows-1256` | アラビア |
| `cp1257` | `windows-1257` | バルト沿岸国 |
| `cp1258` | `windows-1258` | ベトナム |
| `euc_jp` | `eucjp`, `ujis`, `u-jis` | 日本語 |
| `euc_jis_2004` | `jisx0213`, `eucjis2004` | 日本語 |
| `euc_jisx0213` | `eucjisx0213` | 日本語 |
| `euc_kr` | `euckr`, `korean`, `ksc5601`, `ks_c-5601`, `ks_c-5601-1987`, `ksx1001`, `ks_x-1001` | 韓国語 |
| `gb2312` | `chinese`, `csiso58gb231280`, `euc-cn`, `euccn`, `eucgb2312-cn`, `gb2312-1980`, `gb2312-80`, `iso-ir-58` | 簡体字中国語 |
| `gbk` | `936`, `cp936`, `ms936` | 簡体字中国語 |
| `gb18030` | `gb18030-2000` | 簡体字中国語 |
| `hz` | `hzgb`, `hz-gb`, `hz-gb-2312` | 簡体字中国語 |
| `iso2022_jp` | `csiso2022jp`, `iso2022jp`, `iso-2022-jp` | 日本語 |
| `iso2022_jp_1` | `iso2022jp-1`, `iso-2022-jp-1` | 日本語 |
| `iso2022_jp_2` | `iso2022jp-2`, `iso-2022-jp-2` | 日本語, 韓国語, 簡体字中国語, 西欧, ギリシャ語 |
| `iso2022_jp_2004` | `iso2022jp-2004`, `iso-2022-jp-2004` | 日本語 |
| `iso2022_jp_3` | `iso2022jp-3`, `iso-2022-jp-3` | 日本語 |
| `iso2022_jp_ext` | `iso2022jp-ext`, `iso-2022-jp-ext` | 日本語 |
| `iso2022_kr` | `csiso2022kr`, `iso2022kr`, `iso-2022-kr` | 韓国語 |
| `latin_1` | `iso-8859-1`, `iso8859-1`, `8859`, `cp819`, `latin`, `latin1`, `L1` | 西ヨーロッパ |
| `iso8859_2` | `iso-8859-2`, `latin2`, `L2` | 中央および東ヨーロッパ |
| `iso8859_3` | `iso-8859-3`, `latin3`, `L3` | エスペラント、マルタ |
| `iso8859_4` | `iso-8859-4`, `latin4`, `L4` | バルト沿岸国 |
| `iso8859_5` | `iso-8859-5`, `cyrillic` | ブルガリア、ベラルーシ、マケドニア、ロシア、セルビア |
| `iso8859_6` | `iso-8859-6`, `arabic` | アラビア語 |
| `iso8859_7` | `iso-8859-7`, `greek`, `greek8` | ギリシャ語 |
| `iso8859_8` | `iso-8859-8`, `hebrew` | ヘブライ語 |
| `iso8859_9` | `iso-8859-9`, `latin5`, `L5` | トルコ語 |
| `iso8859_10` | `iso-8859-10`, `latin6`, `L6` | 北欧 |
| `iso8859_11` | `iso-8859-11`, `thai` | タイ語 |
| `iso8859_13` | `iso-8859-13`, `latin7`, `L7` | バルト沿岸国 |
| `iso8859_14` | `iso-8859-14`, `latin8`, `L8` | ケルト |
| `iso8859_15` | `iso-8859-15`, `latin9`, `L9` | 西ヨーロッパ |
| `iso8859_16` | `iso-8859-16`, `latin10`, `L10` | 南東ヨーロッパ |
| `johab` | `cp1361`, `ms1361` | 韓国語 |
| `koi8_r` |  | ロシア語 |
| `koi8_u` |  | ウクライナ |
| `mac_cyrillic` | `maccyrillic` | ブルガリア、ベラルーシ、マケドニア、ロシア、セルビア |
| `mac_greek` | `macgreek` | ギリシャ |
| `mac_iceland` | `maciceland` | アイスランド |
| `mac_latin2` | `maclatin2`, `maccentraleurope` | 中央および東ヨーロッパ |
| `mac_roman` | `macroman` | 西ヨーロッパ |
| `mac_turkish` | `macturkish` | トルコ語 |
| `ptcp154` | `csptcp154`, `pt154`, `cp154`, `cyrillic-asian` | カザフ |
| `shift_jis` | `csshiftjis`, `shiftjis`, `sjis`, `s_jis` | 日本語 |
| `shift_jis_2004` | `shiftjis2004`, `sjis_2004`, `sjis2004` | 日本語 |
| `shift_jisx0213` | `shiftjisx0213`, `sjisx0213`, `s_jisx0213` | 日本語 |
| `utf_32` | `U32`, `utf32` | 全ての言語 |
| `utf_32_be` | `UTF-32BE` | 全ての言語 |
| `utf_32_le` | `UTF-32LE` | 全ての言語 |
| `utf_16` | `U16`, `utf16` | 全ての言語 |
| `utf_16_be` | `UTF-16BE` | 全ての言語 (BMP only) |
| `utf_16_le` | `UTF-16LE` | 全ての言語 (BMP only) |
| `utf_7` | `U7`, `unicode-1-1-utf-7` | 全ての言語 |
| `utf_8` | `U8`, `UTF`, `utf8` | 全ての言語 |
| `utf_8_sig` |  | 全ての言語 |


#### 仮想ページ

仮想ページの URL 設定を行う API です。
仮想ページは 1URL に対して 1 つ指定することが可能です。

こちらで設定した URL は、 USERIVE で分析を行う際に必要なお客様のサイト情報を取得するため、
USERDIVE のクローラーが `GET` リクエストでアクセスを行う際に利用されます。

エンドユーザがアクセスされる際に、トラッカーからこちらの設定された URL に対してリクエストを発行することはありません。

[仮想ページについて](../../../guide/snapshot.html)

```html
<script>
ud("create", "[ Project Id ]", {
  "overrideUrl": "[ Virtual Url ]"
});
</script>
```

| Field       | Type   | Required | Description                                           |
|:------------|:-------|:---------|:------------------------------------------------------|
| Project Id  | String | Yes      | USERDIVE のプロジェクトIDです。                       |
| Virtual Url | String | No       | クローラーがアクセスを行うURLを明示的に指定できます。 |

#### カスタム変数

[カスタム変数の詳細](../../../guide/filter/customvar.html)

```html
<script>
ud("create", "[ Project Id ]", {
  "customVar": [
    "[ CustomVar1 ]",
    "[ CustomVar2 ]",
    "[ CustomVar3 ]",
    "[ CustomVar4 ]",
    "[ CustomVar5 ]"
  ]
});
</script>
```

| Field      | Type   | Required | Description                                                        |
|:-----------|:-------|:---------|:-------------------------------------------------------------------|
| Project Id | String | Yes      | USERDIVE のプロジェクトIDです。                                    |
| CustomVar1 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar2 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar3 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar4 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
| CustomVar5 | String | No       | 任意のカスタム変数を設定できます。文字列でない場合は無視されます。 |
