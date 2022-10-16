#!/usr/bin/env bash

sudo apt-get install -y nginx
sudo apt-get install -y git
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy

# Installing k8s
sudo apt-get install -y curl
