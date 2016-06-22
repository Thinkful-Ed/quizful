import React, {Component} from 'react';
import { Link } from 'react-router';

export default function Nav() {
    return (
      <nav>
        <ul className="nav-main">
          <li>Suggest A Question</li>
          <li className="logo">Quizful</li>
          <li className="login"><Link to={'submit-question'}>Suggest A Question</Link></li>
        </ul>
      </nav>
    )
}
