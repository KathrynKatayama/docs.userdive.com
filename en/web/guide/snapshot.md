# Web snapshot

On USERDIVE, it takes web snapshots from a web page (or from a virtual page)
which has USERDIVE tag implemented.
This function allows to compare the current and past data.

Web snapshot is available for three functions.

- Heatmaps
- Form analysis
- Session Playback

## Virtual page

On USERDIVE, it is possible to specify a virtual page instead of web page.
It is recommended to specify on following cirnumstances.

- The page that can be viewed only in login status
- Form (When session information is remaining)

## Requirements

Followings are required for virtual page.

- [Create virtual page](../devguide/virtualpage.html)
- [Specify virtual page and start to tracking](../devguide/javascript/api/create.html)

## pros/cons

pros/cons of the virtual page.

### pros

1. Clearly specify the web snapshot that users had made action on,
   and re-create it
1. Able to create a safe web snapshot with no personal information

### cros

1. Must develop a virtual page
1. Must update the virtual page when there is renewal or changes
