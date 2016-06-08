# If there's already a data folder, delete it and delete the log file
if [ -d "mongo_data" ]; then
    rm -rf mongo_data
    rm mongodb.log 
fi

# Create new data folder and log file
mkdir mongo_data
touch mongodb.log

./scripts/run_mongod.sh