'use strict';
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    text:String,
    correctAnswer:String,
    possibleAnswers:[String]
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
