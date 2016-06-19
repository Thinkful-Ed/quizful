import React from 'react'
import ReactDOM from 'react-dom';
import LoginPage from './components/login-page';
import Question from './components/question';
import { Router, Route, Link, browserHistory } from 'react-router'

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={LoginPage} />
    <Route path="quiz" component={Question} />
  </Router>
)

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.querySelector('.app'));
});
