var chai = require('chai');
var chaiHttp = require('chai-http');

global.environment = 'test';
var server = require('../server.js');
var Question = require('../models/question');
var seed = require('../config/seed');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Quizful', function() {
    before(function(done) {
        seed.run(function() {
            done();
        });
    });

    after(function(done) {
        Question.remove(function() {
            done();
        });
    });
});