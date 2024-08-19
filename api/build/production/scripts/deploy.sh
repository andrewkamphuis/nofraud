#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

# export envars
export $(egrep -v '^#' .env | xargs)

ECR_SERVICE_NAME=$APP_NAME-ecr
APP_SERVICE_NAME=$APP_NAME-app
SQS_SERVICE_NAME=$APP_NAME-sqs
echo $APP_NAME

# Logging in to Amazon ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com
echo Building the Docker image...
docker build --platform linux/amd64 --build-arg AWS_ACCOUNT_ID=$AWS_ACCOUNT_ID --build-arg AWS_DEFAULT_REGION=us-west-2 -t $ECR_SERVICE_NAME -f build/dockerfiles/Dockerfile.app .

# Tagging the docker image as the APP name.
echo Tagging the Docker image...
docker tag $ECR_SERVICE_NAME $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/$ECR_SERVICE_NAME

# Pusing the image to ECR repo created in APP infrastructure deployment.
echo Pushing the Docker image...
docker push $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/$ECR_SERVICE_NAME

# Deploy new image to ECS Cluster for APP and SQS
echo Deploying Image to ECS
aws ecs --region us-west-2 update-service --cluster app-shared-infrastructure --service $APP_SERVICE_NAME --force-new-deployment > /dev/null &
aws ecs --region us-west-2 update-service --cluster app-shared-infrastructure --service $SQS_SERVICE_NAME --force-new-deployment > /dev/null