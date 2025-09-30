#!/bin/zsh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ jbrunson@172.232.175.214:/var/www/wreckitbrunson.dev/
echo "Deployment complete"
