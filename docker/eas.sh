#!/bin/sh

mkdir -p \
  .build/expo/build \
  .build/expo/output \
  .build/node/cache \
  .build/node/npm \
  .build/yarn/berry/cache \
  .yarn/berry/cache \
  .build/gradle 

docker run -ti --rm \
  -w /opt/sayok/expo/android \
  -v $(pwd):/opt/sayok/expo \
  -e EAS_LOCAL_BUILD_SKIP_CLEANUP=1 \
  -e EAS_LOCAL_BUILD_WORKINGDIR=/home/node/.expo/build \
  -e EAS_LOCAL_BUILD_ARTIFACTS_DIR=/home/node/.expo/output \
  -v $(pwd)/.build/node/cache:/home/node/.cache \
  -v $(pwd)/.build/yarn:/home/node/.yarn \
  -v $(pwd)/.build/node/npm:/home/node/.npm \
  -v $(pwd)/.build/expo:/home/node/.expo \
  -v $(pwd)/.build/gradle:/home/node/.gradle \
  --network host \
  crazychenz/eas $@
