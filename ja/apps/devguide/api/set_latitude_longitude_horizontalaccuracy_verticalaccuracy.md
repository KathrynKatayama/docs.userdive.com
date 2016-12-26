# API

|                |                          |
|:---------------|:-------------------------|
| 最終更新       | {{ file.mtime }}         |
| 対応バージョン | 1.1.0以降                |
| 概要           | 位置情報ログを記録する。 |

## 使い方

### Objective-C

```objective-c
- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    CLLocation *location = locations[0];

    [Userdive setLatitude:location.coordinate.latitude
                longitude:location.coordinate.longitude
       horizontalAccuracy:location.horizontalAccuracy
         verticalAccuracy:location.verticalAccuracy];
}
```

### Swift

```swift
func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    let location = locations[0]

    Userdive.setLatitude(location.coordinate.latitude,
                         longitude: location.coordinate.longitude,
                         horizontalAccuracy: location.horizontalAccuracy,
                         verticalAccuracy: location.verticalAccuracy)
}
```

## 制限

- ユーザーアプリケーション内で位置情報を取得して渡すこと。

## 更新履歴

- 1.1.0 最初のリリース
