#!/usr/bin/env bash

babel src \
  -d lib \
  --extensions '.ts,.js' \
  --ignore **/__tests__/**/*,**/__mocks__/**/*,**/mocks/**/*,src/**/*.test.ts,src/**/*.spec.ts \
  "${@}"
