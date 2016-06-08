#!/bin/bash
npm install
# chmod +x ./scripts/run.sh

chmod +x ./scripts/*
./scripts/create_db.sh

# Now we know mongo is ready. seed the DB and start the server
node config/seed.js && nodemon server.js