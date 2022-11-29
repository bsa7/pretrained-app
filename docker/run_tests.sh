#!/usr/bin/env bash

set -x
set -e

docker-compose run --rm api bash -l -c "API_ENV=test ward $@"
