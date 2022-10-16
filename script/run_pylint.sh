#!/usr/bin/env bash

echo 'Run Python linter'
cd ./api && pylint --rcfile .pylintrc ./**/*.py
