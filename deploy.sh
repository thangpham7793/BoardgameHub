#!/bin/bash

BUCKET_NAME=boardgamehub-vue-webapp-s3-bucket
DIST_FOLDER=dist
REGION=ap-southeast-2

echo "Deploying to bucket $BUCKET_NAME"

aws s3 sync --delete $DIST_FOLDER "s3://$BUCKET_NAME" --region $REGION

echo "Deployed Finished!"
