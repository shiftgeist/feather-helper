#!/bin/sh

# Get the last tag
lastTag=$(git describe --tags "$(git rev-list --tags --max-count=1)")

# Print it to the console for verification
echo "Publishing to $REGISTRY_URL with tag $lastTag"

# creating .npmrc
echo "//$REGISTRY_URL/:_authToken=$REGISTRY_TOKEN" > .npmrc

# Publish to NPM
npm publish --registry "https://$REGISTRY_URL/"
