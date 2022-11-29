#!/usr/bin/env bash

echo 'Deploy to production server'
echo " - Deployed branch: $(git branch --show-current)"
export STAGING_HOST="pretrained-app.jsdev.cyou"
export APP_PATH="/home/deploy/pretrained-app"
export STAGE="production"

(. ./script/deploy/deploy_to_stage.sh)
