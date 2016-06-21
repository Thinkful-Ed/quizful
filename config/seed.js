const Question = require('../models/question');

exports.run = (callback, errback) => {
    Question.create({
            'text':'What is the purpose of the DOCTYPE declaration?',
            'correctAnswer':'It tells the browser what type of document your HTML file is.',
            'possibleAnswers':['It tells the HTML file how to render','It tells the DOM where to start','It lets other developers know where the beginning of the code is'],
            'language':'HTML'
        },
        {
            'text':'What are the 3 most common properties used with the CSS rule "display"?',
            'correctAnswer':'block, inline-block, inline',
            'possibleAnswers':['margin, padding, border','relative, absolute, fixed','solid, dotted, dashed'],
            'language':'CSS'
        },
        {
            'text':'What tag should you use to create a link to another page?',
            'correctAnswer':'<a href=""></a>',
            'possibleAnswers':['<link href="" />','<script src=""></script>','<clickme goto=""></clickme>'],
            'language':'HTML'
        },
        {
            'text':'What is event propagation?',
            'correctAnswer':'The idea that when an event is triggered, the information travels through all the parent elements all the way up the DOM',
            'possibleAnswers':['The idea that you can create events by seeding','The idea that you can create an event from another event','The idea that you can attach an event handler only after the element is created'],
            'language':'JavaScript'
        },
        {
            'text':'Which of these contains ONLY falsey values (in JavaScript)?',
            'correctAnswer':'0, "", null, undefined',
            'possibleAnswers':['"0", null, false','"false", null, 0','true, false, on, off'],
            'language':'JavaScript'
        },
        {
            'text':'What is "scope" in JavaScript?',
            'correctAnswer':'scope refers to the lexical environment of a variable.',
            'possibleAnswers':['scope is the object that controllers bind variables to','scope is the nifty device boat captains use to avoid iceburgs','scope refers to the outline of a project'],
            'language':'JavaScript'
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