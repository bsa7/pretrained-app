#!/usr/bin/env bash

echo 'Run all tests'
cd ./api && pwd && ls ./log/. && API_ENV=test ward $@
