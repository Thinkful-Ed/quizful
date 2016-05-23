var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    text:String,
    correctAnswer:String,
    possibleAnswers:[String],
    language:String,
    curriculum:[String],
    unit:String
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
