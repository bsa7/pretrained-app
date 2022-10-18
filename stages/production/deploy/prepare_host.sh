#!/usr/bin/env bash

sudo apt-get install -y nginx
sudo apt-get install -y git
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy

su deploy
mkdir -p /home/deploy/pretrained-app
cd /home/deploy/pretrained-app
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git init
git remote add origin git@github.com:bsa7/pretrained-app.git
