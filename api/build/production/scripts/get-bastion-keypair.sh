#!/bin/zsh

# Set Credentials
export AWS_ACCESS_KEY_ID=$(aws configure get production_apps.aws_access_key_id)
export AWS_SECRET_ACCESS_KEY=$(aws configure get production_apps.aws_secret_access_key)
export AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
export AWS_DEFAULT_REGION=us-west-2

# TODO move ssh bastion-keypair to users home folder
KeyPairId=$(aws ec2 describe-key-pairs --filters Name=key-name,Values=bastion-keypair --query 'KeyPairs[*].KeyPairId' --output text)
aws ssm get-parameter --name /ec2/keypair/$KeyPairId --with-decryption --query Parameter.Value --output text > build/production/secrets/bastion-keypair.pem
chmod 0400 build/production/secrets/bastion-keypair.pem