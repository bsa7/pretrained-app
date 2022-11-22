#!/usr/bin/env bash

echo 'Run Flask app'
cd ./api && API_ENV=development python development_server.py
