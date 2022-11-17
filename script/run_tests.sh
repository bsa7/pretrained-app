#!/usr/bin/env bash

echo 'Run all tests'
cd ./api && FLASK_ENV=test python -m pytest $@
