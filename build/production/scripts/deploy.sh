#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars with underscore
export $(egrep -v '^#' .env | xargs)


echo $APP_NAME
npm install
rm -rf dependencies/nodejs/node_modules
cp -r node_modules dependencies/nodejs/
cp package.json ./api

# Deploy Infrastructure for APP
sam deploy \
    --region us-west-2 \
    --stack-name $APP_NAME \
    --template-file template.yml \
    --parameter-overrides ApiDomainName=$API_DOMAIN_NAME HostedZoneId=$HOSTED_ZONE_ID C7ApiUrl=$C7_API_URL C7AppId=$C7_APP_ID C7AppSecret=$C7_APP_SECRET SendGridApiKey=$SENDGRID_API_KEY NoFraudApiUrl=$NOFRAUD_API_URL NoFraudPortalApiUrl=$NOFRAUD_PORTAL_API_URL