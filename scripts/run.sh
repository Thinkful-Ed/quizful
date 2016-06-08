#!/bin/bash
./scripts/run_mongod.sh
nodemon server.js
# Now we know mongo is ready. seed the DB and start the server
