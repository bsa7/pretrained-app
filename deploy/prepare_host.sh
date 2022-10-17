#!/usr/bin/env bash

sudo apt-get install -y nginx
sudo apt-get install -y git
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy

sudo apt-get install -y curl
sudo usermod -aG docker deploy && newgrp docker
mkdir -p /home/deploy/pretrained-app
cd /home/deploy/pretrained-app
git init
git remote add origin git@github.com:bsa7/pretrained-app.git
git fetch
git checkout develop
