#!/usr/bin/env bash

echo 'Run all tests'
cd ./api && API_ENV=test ward $@
