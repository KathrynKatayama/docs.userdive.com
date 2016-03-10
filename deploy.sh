#!/usr/bin/sh

git config --global user.email "develop@uncovertruth.jp"
git config --global user.name "userdive"

gitbook install
npm run clean
npm run build
cp assets/CNAME dist/CNAME
cp assets/robots.txt dist/robots.txt
cd dist
git init
git add -A
git commit -m '[auto] update docs'
git push -f git@github.com:uncovertruth/docs.userdive.com.git master:gh-pages
