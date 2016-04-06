#!/usr/bin/sh

cp assets/CNAME dist/CNAME
cp assets/robots.txt dist/robots.txt
cd dist
git config --global user.email "develop@uncovertruth.jp"
git config --global user.name "userdive"
git init
git add -A
git commit -am '[ci skip] auto update'
git push -f git@github.com:uncovertruth/docs.userdive.com.git master:gh-pages
