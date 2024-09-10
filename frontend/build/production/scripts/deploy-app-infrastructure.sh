#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars
export $(egrep -v '^#' ../.env | xargs)
echo $APP_NAME

# Deploy Infrastructure for APP
aws --region us-east-1 cloudformation deploy \
    --stack-name $APP_NAME \
    --template-file build/production/cloudformation/app-infrastructure.yml \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --no-fail-on-empty-changeset \
    --parameter-overrides file://build/production/secrets/production-parameters.json