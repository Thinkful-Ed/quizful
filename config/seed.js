var Question = require('../models/question');

exports.run = function(callback, errback) {
    Question.create(
        {
            'text':'This is a question',
            'correctAnswer':'this is the correct answer',
            'possibleAnswers':['pne','two','three']
        },
        {
            'text':'This is a question1',
            'correctAnswer':'this is the correct answer1',
            'possibleAnswers':['pne1','two1','three1']
        },
        {
            'text':'This is a question2',
            'correctAnswer':'this is the correct answer2',
            'possibleAnswers':['pne2','two2','three2']
        },
        {
            'text':'This is a question3',
            'correctAnswer':'this is the correct answer3',
            'possibleAnswers':['pne3','two3','three3']
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