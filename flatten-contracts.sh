#!/usr/bin/env bash
rm -rf src/flats/*
./node_modules/.bin/truffle-flattener contracts/PHDToken.sol > flats/PHD_flat.sol
