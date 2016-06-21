'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');

global.environment = 'test';
const server = require('../server.js');
const Question = require('../models/question');
const seed = require('../config/seed');

const should = chai.should();
const app = server.app;

chai.use(chaiHttp);

describe('Quizful', () => {
    before((done) => {
        seed.run(() => {
            done();
        });
    });

    after((done) => {
        Question.remove(() => {
            done();
        });
    });
});