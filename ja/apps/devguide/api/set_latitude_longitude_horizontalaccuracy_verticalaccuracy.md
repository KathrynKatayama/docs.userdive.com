<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [API](#api)
  - [使い方](#%E4%BD%BF%E3%81%84%E6%96%B9)
  - [制限](#%E5%88%B6%E9%99%90)
  - [更新履歴](#%E6%9B%B4%E6%96%B0%E5%B1%A5%E6%AD%B4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# API

|                |            |
|:---------------|:-----------|
| 最終更新       | {{ file.mtime }} |
| 対応バージョン | 1.1.0以降      |
| 概要           | 位置情報ログを記録する。 |

## 使い方

```objectivec
- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    CLLocation *location = locations[0];

    [Userdive setLatitude:location.coordinate.latitude
                longitude:location.coordinate.longitude
       horizontalAccuracy:location.horizontalAccuracy
         verticalAccuracy:location.verticalAccuracy];
}
```

## 制限

- ユーザアプリケーション内で位置情報を取得して渡すこと。

## 更新履歴

- 1.1.0 最初のリリース
