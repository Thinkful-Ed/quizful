import React from 'react'
import ReactDOM from 'react-dom';
import LoginPage from './components/login-page';



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<LoginPage />, document.querySelector('.app'));
});
