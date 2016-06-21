'use strict';
const Question = require('../models/question.js');

module.exports = (app,jsonParser) => {
    app.get('/questions',(req,res) => {
        Question.find({},(err,questions) => {
            if(err){
                res.status(404).json({'error':err})
            }
            res.status(200).json(questions);
        })
        
    })
    app.post('/questions',(req,res) => {
        let possibleAnswers = req.body.possibleAnswers.split(',');
        if(!req.body.text || !req.body.correctAnswer || possibleAnswers.length < 3){
            res.status(400).json({
                'message':'You need to provide a question, a correct answer, 3 possible answers, and a programming language'
            })
        }
        Question.create({
            text: req.body.text,
            correctAnswer: req.body.correctAnswer,
            possibleAnswers: possibleAnswers
        },
       (err, question) => {
            if (err) {
                console.log(err);
                return;
            }
            res.status(201).json(question);
        }
        )
    })
    // TODO: Add Post/ Delete routes for editing and deleting questions
}
