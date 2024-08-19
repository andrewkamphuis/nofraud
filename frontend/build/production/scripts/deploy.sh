#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# App Name is pulled from the base APP folder name
DIR=${PWD%/*}
APP_NAME=${DIR##*/}-frontend
echo $APP_NAME

# Sync the dist folder to S3
aws s3 sync dist/ s3://$AWS_ACCOUNT_ID-$APP_NAME
# TODO invalidate cloudfront