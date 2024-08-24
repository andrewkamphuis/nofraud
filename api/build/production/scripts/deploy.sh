#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars
export $(egrep -v '^#' .env | xargs)

echo $APP_NAME
npm install
mv node_modules dependencies/nodejs/

# Deploy Infrastructure for APP
sam deploy \
    --region us-west-2 \
    --stack-name $APP_NAME \
    --template-file template.yml \
    --parameter-overrides ApiDomainName=$API_DOMAIN_NAME HostedZoneId=$HOSTED_ZONE_ID \
    --guided

mv dependencies/nodejs/node_modules ./