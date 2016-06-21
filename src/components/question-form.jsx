import React, {Component} from 'react';
import Nav from './nav';

export default class SubmitQuestion extends Component {
  constructor() {
    super();
    this.getInput = this.getInput.bind(this);
    this.state = {
      question: '',
      answer: '',
      incorrect: ''
    }
  }
  getInput(e) {
    console.log();
    switch (e.target.id) {
      case 'question':
        this.setState({
          question: e.target.value
        });
        break;
      case 'correct-answer':
        this.setState({
          answer: e.target.value
        });
        break;
      case 'other-answers':
        this.setState({
          incorrect: e.target.value
        });
        break;
    }
    console.log(this.state);
  }

  render() {
    return (
      <section className="question-page">
        <Nav />
        <form className="question submitQ login-form">
          <h2>Want to add your own question? Then fill in the form below.</h2>
          <p>
            For the incorrect answers, use a comma seperated list.
            e.g - option 1, option 2, option 3
          </p>
          <div className="login-block">
            <input id="question" type="text" onChange={this.getInput} required/>
            <label htmlFor="question">Your Question...</label>
          </div>
          <div className="login-block">
            <input id="correct-answer" type="text" onChange={this.getInput} required/>
            <label htmlFor="correct-answer">Correct Answer...</label>
          </div>
          <div className="login-block">
            <input id="other-answers" type="text" onChange={this.getInput} required/>
            <label htmlFor="other-answers">Incorrect Answers...</label>
          </div>
        </form>
      </section>
    )
  }
}
