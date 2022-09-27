#!/usr/bin/env bash

set -x
set -e

export LANG=en_US.UTF-8
export LANGUAGE=en_US:en
export LC_ALL=en_US.UTF-8

docker-compose run app script/run_tests.sh $1
