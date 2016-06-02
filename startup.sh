#!/bin/bash
npm install
chmod +x ./run.sh
# If there's already a data folder, delete it and delete the log file
if [ -d "mongo_data" ]; then
    rm -rf mongo_data
    rm mongodb.log 
fi

# Create new data folder and log file
mkdir mongo_data
touch mongodb.log

# Start mongodb with logging
# --logpath    Without this mongod will output all log information to the standard output.
# --logappend  Ensure mongod appends new entries to the end of the logfile. We create it first so that the below tail always finds something

mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --rest  --nojournal --quiet --logpath mongodb.log --logappend &

# Wait until mongo logs that it's ready (or timeout after 60s)
COUNTER=0
grep -q 'waiting for connections on port' mongodb.log
while [[ $? -ne 0 && $COUNTER -lt 60 ]] ; do
    sleep 2
    let COUNTER+=2
    echo "Waiting for mongo to initialize... ($COUNTER seconds so far)"
    grep -q 'waiting for connections on port' mongodb.log
done

# Now we know mongo is ready. seed the DB and start the server
node config/seed.js && nodemon server.js