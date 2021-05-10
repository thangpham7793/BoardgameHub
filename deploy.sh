#!/bin/bash

BUCKET_NAME=boardgamehub-vue-webapp-s3-bucket
DIST_FOLDER=dist

echo "Deploying to bucket $BUCKET_NAME"

aws s3 sync $DIST_FOLDER "s3://$BUCKET_NAME"

echo "Deployed Finished!"
