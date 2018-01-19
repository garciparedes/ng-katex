#!/bin/bash
find ./dist -type f  -exec sed -i '' s:node_modules/katex:../katex:g {} \;