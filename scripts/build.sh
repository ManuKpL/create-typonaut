#!/usr/bin/env bash

babel src \
  -d lib \
  --extensions '.ts,.js' \
  --ignore src/**/__tests__/**/*,src/**/*.test.ts,src/**/*.spec.ts \
  "${@}"
