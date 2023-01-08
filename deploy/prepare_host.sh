#!/usr/bin/env bash

# sudo update-alternatives --config editor

# login as sudo user
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy
sudo usermod -aG docker deploy
sudo mcedit /etc/hosts

# Add to end of file:
# staging-pretrained-app.jsdev.cyou 0.0.0.0
# staging-pretrained-app-frontend.jsdev.cyou 0.0.0.0

# login as deploy
sudo su deploy
mkdir -p ~/.ssh
mcedit ~/.ssh/authorized_keys
# Добавить публичную часть ssh ключей допущенных к деплою разработчиков, сохранить


mkdir -p /home/deploy/pretrained-app
cd /home/deploy/pretrained-app

# To debug a docker container:
# docker ps -a
# docker exec -it 7154c4b58472 bash
