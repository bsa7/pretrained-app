#!/usr/bin/env bash
rsync -e "ssh -o StrictHostKeyChecking=no" \
      --progress -azhr \
      --exclude ".git/*" \
      --exclude "api/log/*" \
      --exclude "frontend/node_modules/*" \
      --exclude "tmp/" \
      . deploy@$STAGING_HOST:$APP_PATH

ssh deploy@$STAGING_HOST "\
  ln -sf $APP_PATH/stages/$STAGE/docker-compose.yml $APP_PATH/docker-compose.yml \
  && cd $APP_PATH \
  && cp ./shared/stages/$STAGE/mongo/password ./shared/stages/$STAGE/mongo/root_password ./stages/$STAGE/mongo \
  && mkdir -p api/tmp \
  && mkdir -p api/log \
  && touch api/log/production.log \
  && docker-compose build \
  && docker-compose up -d \
  && docker system prune --force"
