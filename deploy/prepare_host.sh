#!/usr/bin/env bash

sudo apt-get install -y nginx
sudo apt-get install -y git
sudo apt-get install -y docker
sudo apt-get install -y docker-compose
sudo adduser --disabled-password deploy

# Installing k8s
sudo apt-get install -y curl
sudo curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
sudo dpkg -i minikube_latest_amd64.deb
sudo usermod -aG docker slon && newgrp docker
minikube start
minikube kubectl -- get pods -A
