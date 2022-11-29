#!/usr/bin/env bash

echo 'Deploy to staging server'
echo " - Deployed branch: $(git branch --show-current)"
export STAGING_HOST="staging-pretrained-app.jsdev.cyou"
export APP_PATH="/home/deploy/pretrained-app"
export STAGE="staging"

(. ./script/deploy/deploy_to_stage.sh)
