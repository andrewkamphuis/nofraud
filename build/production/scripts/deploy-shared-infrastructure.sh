#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars
export $(egrep -v '^#' .env | xargs)

aws --region us-west-2 cloudformation deploy \
    --stack-name app-shared-infrastructure \
    --template-file build/production/cloudformation/shared-infrastructure.yml \
    --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM \
    --output json \
    --no-fail-on-empty-changeset \
    --parameter-overrides file://build/production/secrets/production-parameters.json