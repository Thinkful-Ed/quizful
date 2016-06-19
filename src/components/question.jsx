import React, {Component} from 'react'

export default class Question extends Component {
  render() {
    return (
      <section className="question">
        <nav className="nav">
          
        </nav>
        <p>Question 1 of 10</p>
        <h1>What color is blue</h1>
        <ul className="answers">
          <li>Blue</li>
          <li>Green</li>
          <li>Orange</li>
        </ul>
      </section>
    )
  }
}
