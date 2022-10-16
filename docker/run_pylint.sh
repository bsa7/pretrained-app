#!/usr/bin/env bash

set -x
set -e

docker-compose run --rm api ./script/run_pylint.sh
