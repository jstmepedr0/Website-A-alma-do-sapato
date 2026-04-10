#!/bin/sh

set -eu

rm -rf dist
mkdir -p dist/assets dist/images

cp *.html dist/
cp -R assets/. dist/assets/
cp -R public/images/. dist/images/

for file in dist/*.html; do
  perl -0pi -e 's|public/images/|images/|g' "$file"
done
