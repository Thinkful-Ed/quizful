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
        {
            'text':'What is the term for attaching an event handler higher up on the DOM, and only triggering the callback on specific child elements?',
            'correctAnswer':'event delegation',
            'possibleAnswers':['event bubbling','DOM traversal','Searchin the DOM'],
            'language':'JavaScript',
            'curriculum':'FEWD001',
            'unit':'4'
        },
        {
            'text':'What is the name of the function triggered by an event handler?',
            'correctAnswer':'callback function',
            'possibleAnswers':['react function','event handler','event delegation'],
            'language':'JavaScript',
            'curriculum':'FEWD001',
            'unit':'4'
        },
        {
            'text':' What will this code print? var name = \'Joe\'; var fn = function() {console.log(name);var name = \'Bhaumik\';console.log(name);};fn();console.log(name);',
            'correctAnswer':'Joe, Bhaumik, Joe',
            'possibleAnswers':['Joe, Joe, Joe','Bhaumik, Bhaumik, Bhaumik,','Bhaumik, Bhaumik, Joe'],
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