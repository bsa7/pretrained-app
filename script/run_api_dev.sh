#!/usr/bin/env bash

echo 'Run Flask app'
mkdir -p ./api/tmp/models
#wget https://data.deepai.org/deoldify/ColorizeArtistic_gen.pth -O ./api/tmp/models/ColorizeArtistic_gen.pth
cd ./api && API_ENV=development python development_server.py
