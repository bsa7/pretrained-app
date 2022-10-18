#!/usr/bin/env bash

set -x
set -e

docker-compose run --rm frontend pwd && script/run_eslint.sh
