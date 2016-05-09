<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [画面単位でトラッキングの有無を設定できますか](#%E7%94%BB%E9%9D%A2%E5%8D%98%E4%BD%8D%E3%81%A7%E3%83%88%E3%83%A9%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%81%AE%E6%9C%89%E7%84%A1%E3%82%92%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 画面単位でトラッキングの有無を設定できますか

USERDIVE iOS SDK v1.2.0以降で可能です。
`Userdive:updateScreen`と`Userdive:pause`を組み合わせて、必要な画面のみトラッキングを実行するようにしてください。
