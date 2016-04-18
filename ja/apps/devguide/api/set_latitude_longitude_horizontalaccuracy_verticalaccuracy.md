# API

|                |            |
|:---------------|:-----------|
| 最終更新       | 2016/04/18 |
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
