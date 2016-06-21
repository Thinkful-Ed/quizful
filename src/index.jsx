import React from 'react'
import ReactDOM from 'react-dom';
import LoginPage from './components/login-page';
import Question from './components/question';
import { Router, Route, Link, browserHistory } from 'react-router';
import SubmitQuestion from './components/question-form';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={LoginPage} />
    <Route path="quiz" component={Question} />
    <Route path="submit-question" component={SubmitQuestion} />
  </Router>
)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<SubmitQuestion />, document.querySelector('.app'));
});
