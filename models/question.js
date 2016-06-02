var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    text:String,
    correctAnswer:String,
    possibleAnswers:[String]
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
