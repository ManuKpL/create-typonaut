#!/usr/bin/env bash

eslint --ext .js,.ts \
  --no-error-on-unmatched-pattern \
  --max-warnings=0 \
  "${@:-.}"
