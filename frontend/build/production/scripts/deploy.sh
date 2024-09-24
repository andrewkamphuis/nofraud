#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars
export $(egrep -v '^#' ../.env.production | xargs)
echo $APP_NAME

# Sync the dist folder to S3
aws s3 sync dist/ s3://$AWS_ACCOUNT_ID-$APP_NAME

# Get the cloudfront distribution ID
export APP_DISTRIBUTION_ID=$(aws --profile production_apps cloudfront list-distributions --query "DistributionList.Items[*].{id:Id,alias:Aliases.Items[0]}[?alias=='${APP_NAME}.tinygrape.co'].id" --output text)
echo 'APP_DISTRIBUTION_ID=' $APP_DISTRIBUTION_ID

# Invalidate cloudfront (TODO need to automate getting the distribution-id)
aws cloudfront create-invalidation --distribution-id $APP_DISTRIBUTION_ID --paths '/*'