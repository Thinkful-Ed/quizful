var mongoose = require('mongoose');
// default to a 'localhost' configuration:
var connection_string = 'localhost/quiz-dev';
if(global.environment == 'test'){
    connection_string = 'localhost/quiz-test';    
}

// if OPENSHIFT env variables are present, use the available connection info:

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}
mongoose.connect('mongodb://'+connection_string);