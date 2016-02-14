#!/bin/sh

./end.sh

echo "grunt"
grunt development &

echo "watchfy"
npm start &

echo "server start"
node app.js
