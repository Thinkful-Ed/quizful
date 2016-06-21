'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');

global.environment = 'test';
const app = require('../server.js');
const Question = require('../models/question');
// const seed = require('../config/seed');

const should = chai.should();


chai.use(chaiHttp);

describe('Quizful', () => {
    before((done) => {
        Question.create({
            'text':'test text',
            'correctAnswer':'test answer',
            'possibleAnswers':['test answer 1','test answer 2','test answer 3'],
            'language':'HTML'
        },
         (err, items) => {
            if (err) {
                console.log(err);
                return;
            }
            done();
        }
        )
    });

    after((done) => {
        Question.remove(() => {
            done();
        });
    });
     it('should list questions on GET', (done) => {
        chai.request(app)
            .get('/questions')
            .end(function(err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.should.be.length(1);
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('text');
                res.body[0].text.should.equal('test text');
                res.body[0].should.have.property('correctAnswer');
                res.body[0].correctAnswer.should.equal('test answer')
                res.body[0].should.have.property('possibleAnswers');
                res.body[0].possibleAnswers.should.be.a('array');
                res.body[0].possibleAnswers.should.be.length(3);
                res.body[0].possibleAnswers[0].should.equal('test answer 1')
                res.body[0].should.have.property('language');
                res.body[0].language.should.equal('HTML')
                done();
            });
    });
});