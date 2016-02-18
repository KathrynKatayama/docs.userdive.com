#!/usr/bin/sh

rm -rf _book
rm -rf dist
gitbook build
cp assets/CNAME _book/CNAME
cp assets/robots.txt _book/robots.txt
gulp build
cd dist
git init
git add -A
git commit -m 'update book'
git push -f git@github.com:uncovertruth/docs.userdive.com.git master:gh-pages
