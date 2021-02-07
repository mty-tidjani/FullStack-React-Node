#!/usr/bin/env bash
cd ./server
#yarn
yarn run build
rm -r ./client || true


cd ../client
#yarn
yarn run build
mv ./build ../server/client

cd ../server
node ./build/app.js