import React from 'react'
import ReactDOM from 'react-dom';
import LoginPage from './components/login-page';
import Question from './components/question';



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Question />, document.querySelector('.app'));
});
