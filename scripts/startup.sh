#!/bin/bash
gem install sass
npm install -g webpack nodemon
npm install
# chmod +x ./scripts/run.sh

chmod +x ./scripts/*
./scripts/create_db.sh

# Now we know mongo is ready. seed the DB and start the server
node config/seed.js
npm run easy_run