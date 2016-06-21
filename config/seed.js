const Question = require('../models/question');

exports.run = (callback, errback) => {
    Question.create({
            'text':'var foo = 10 + \'20\';',
            'correctAnswer':'1020',
            'possibleAnswers':['30','\'30\'','TypeError']
        },
        
        (err, items) => {
            if (err) {
                errback(err);
                return;
            }
            callback(items);
        });
};

if (require.main === module) {
    require('./connect');
    exports.run(() => {
        const mongoose = require('mongoose');
        mongoose.disconnect();
    }, (err) => {
        console.error(err);
    });
}