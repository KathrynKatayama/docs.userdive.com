# Install manually

## Download the file

You download USERDIVE SDK corresponding to the platform from the following links.

- [USERDIVE iOS SDK](https://github.com/uncovertruth/userdive-ios-sdk/releases/tag/1.1.0)
- [USERDIVE iOS SDK for Unity (Unity用)](https://github.com/uncovertruth/userdive-ios-sdk-for-unity/releases/tag/v1.0.0)

## Add SDK

You decompress the file which you downloaded and add it to the Xcode project of application you want to.

## Add framework

You add `SystemConfigurationframework` to the project.

![](./files/install_manual_1.png)

## Change Linker option

You open the Build Settings and add `-ObjC` to Linking -> Other Linker Flags.

![](./files/install_manual_2.png)
