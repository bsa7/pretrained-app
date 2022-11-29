#!/usr/bin/env bash
rsync --progress -azhr \
      --exclude ".git/*" \
      --exclude "api/log/*" \
      --exclude "frontend/node_modules/*" \
      --exclude "tmp/" \
      . deploy@$STAGING_HOST:$APP_PATH

ssh deploy@$STAGING_HOST "\
  ln -sf $APP_PATH/stages/$STAGE/docker-compose.yml $APP_PATH/docker-compose.yml \
  && cd $APP_PATH \
  && docker-compose build \
  && docker-compose up -d"
