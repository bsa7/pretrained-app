#!/usr/bin/env bash

echo 'Run all tests'
cd ./api && python -m pytest $@
