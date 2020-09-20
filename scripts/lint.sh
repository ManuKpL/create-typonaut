#!/usr/bin/env bash

eslint src/**/*.{ts,js} \
  --no-error-on-unmatched-pattern \
  --max-warnings=0
