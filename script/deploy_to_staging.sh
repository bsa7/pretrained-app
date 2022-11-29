#!/usr/bin/env bash

echo 'Deploy to staging server'
echo " - Deployed branch: $(git branch --show-current)"
export STAGING_HOST="staging-pretrained-app.jsdev.cyou"
export APP_PATH="/home/deploy/pretrained-app"

rsync --progress -azhr \
      --exclude "api/log/*" \
      --exclude "frontend/node_modules/*" \
      --exclude "tmp/" \
      . deploy@$STAGING_HOST:$APP_PATH

ssh deploy@$STAGING_HOST "\
  ln -sf $APP_PATH/stages/staging/docker-compose.yml $APP_PATH/docker-compose.yml \
  && cd $APP_PATH \
  && docker-compose build \
  && docker-compose up -d"
