var Question = require('../models/question.js');

module.exports = function(app,jsonParser) {
    app.get('/questions',function(req,res){
        Question.find({},function(err,questions){
            if(err){
                res.status(404).json({'error':err})
            }
            res.status(200).json(questions);
        })
        
    })
    app.get('/questions/:language',function(req,res){
        Question.find({"language":req.params.language},function(err,questions){
            if(err){
                res.status(404).json({'error':err})
            }
            res.status(200).json(questions);
        })
    })
    app.post('/questions/new',function(req,res){
        var possibleAnswers = req.body.possibleAnswers.split(',');
        if(!req.body.text || !req.body.correctAnswer || possibleAnswers.length < 3 || !req.body.language){
            res.status(400).json({
                'message':'You need to provide a question, a correct answer, 3 possible answers, and a programming language'
            })
        }
        Question.create({
            text:req.body.text,
            correctAnswer:req.body.correctAnswer,
            possibleAnswers:possibleAnswers,
            category:req.body.category
        },
        function (err, question) {
            if (err) {
                console.log(err);
                return;
            }
            res.status(201).json(question);
        }
        )
    })
}
