#!/bin/bash
# Set this to 1 to automatically attempt a fix when an error occurs while running npm start.
fix=1


# Stuff to do at first run(submodule, npm install).
if [[ -d "public" && -n "$(find public -prune -empty 2>/dev/null)" ]] || [[ ! -d "public" ]]; then
  npm install
 
fi


npm start || [[ $fix = 1 ]] && npm install && npm update 