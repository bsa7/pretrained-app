#!/usr/bin/env bash

echo 'Run all tests'
pwd
echo '#####################5'
ls -lah ./api/.
echo '#####################7'
ls -lah .
echo '#####################9'
ls -lah ../.
echo '#####################11'
ls -lah ../../.

cd ./api && pwd && ls ./log/. && API_ENV=test ward  --test-output-style live $@
#[test-per-line|dots-module|dots-global|live]
