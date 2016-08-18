# How does USERDIVE collect user action

USERDIVE collects UI events with SDK.
For example, when the end-user have a "touch/tap" action,
USERDIVE passes the touch event to the APP
after recording it as an event within USERDIVE. (USERDIVE wraps UI operation.)

The screen names are being used to construct screen flows.
The screen names can be set later within the APP which contains our SDK.
