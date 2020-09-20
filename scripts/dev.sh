#!/usr/bin/env bash

run-s dev:clean &&
  concurrently "run-s dev:build" "run-s dev:run" \
    -n build,nodemon \
    --timestamp-format "HH:mm:ss.SSS" \
    --prefix "[{time}:{name}]"
