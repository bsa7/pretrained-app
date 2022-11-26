#!/usr/bin/env bash

set -x
set -e

docker-compose run --rm api bash -l -c "RAILS_ENV=test ward"
