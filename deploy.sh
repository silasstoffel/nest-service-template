#!/bin/bash
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt install npm -y
git clone https://github.com/madeiramadeirabr/nest-service-template.git
cd nest-service-template
npm install
npm run build
npm run start:prod