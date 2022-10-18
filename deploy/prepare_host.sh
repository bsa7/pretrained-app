#!/usr/bin/env bash

sudo apt-get install -y git
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy

sudo apt-get install -y curl
sudo usermod -aG docker deploy && newgrp docker
mkdir -p /home/deploy/pretrained-app
cd /home/deploy
git config --global user.email "deploy@example.com"
git config --global user.name "Deploy"

cd /home/deploy/pretrained-app
git init
git remote add origin git@github.com:bsa7/pretrained-app.git
git fetch
git checkout develop

# SSL self-signed certificates
sudo openssl req -x509 -nodes -days 3365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -subj "/C=US/ST=Some/L=Some/O=Individual/OU=IT Department/CN=some.com"
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
