#!/bin/bash
# Set this to 1 to automatically attempt a fix when an error occurs while running npm start.
fix=1


# Stuff to do at first run(submodule, npm install).
npm ci

npx pm2 start index.js -i max
