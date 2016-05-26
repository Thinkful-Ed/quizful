var Question = require('../models/question');

exports.run = function(callback, errback) {
    Question.create(
        {
            'text':'var foo = 10 + \'20\';',
            'correctAnswer':'1020',
            'possibleAnswers':['30','\'30\'','TypeError'],
            'language':'JavaScript',
            'curriculum':'FEWD001',
            'unit':'4'
        },
        
        function(err, items) {
            if (err) {
                errback(err);
                return;
            }
            callback(items);
        });
};

if (require.main === module) {
    require('./connect');
    exports.run(function() {
        var mongoose = require('mongoose');
        mongoose.disconnect();
    }, function(err) {
        console.error(err);
    });
}