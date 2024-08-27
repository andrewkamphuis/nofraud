#!/bin/zsh

# Set tail mode
PS3='Select Tail Mode:'
select MODE in interactive print-only
break

# export envars
export $(egrep -v '^#' .env | xargs)

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# Tail APP and SQS Logs
aws --profile production_apps --region us-west-2 logs start-live-tail --log-group-identifiers arn:aws:logs:us-west-2:${AWS_ACCOUNT_ID}:log-group:${APP_NAME}-sqs arn:aws:logs:us-west-2:${AWS_ACCOUNT_ID}:log-group:${APP_NAME}-app --mode $MODE
