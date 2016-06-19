import React, {Component} from 'react';
import Nav from './nav';
import Answer from './answers';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.lastQuestion = this.lastQuestion.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }
  componentWillMount() {
    this.setState({
      questions: [
        {
          question: "What color is blue:",
          possAnswers: ["Blue", "Red", "Green"],
          correctAnswer: "Blue",
        },
        {
          question: "What is 2 + 2",
          possAnswers: ["4", "22", "Arrrgh Math!"],
          correctAnswer: "4",
        }
      ],
      currentQ: 0
    });
  }
  nextQuestion() {
    this.setState({
      currentQ: this.state.currentQ + 1,
    });
  }
  lastQuestion() {
    this.setState({
      currentQ: this.state.currentQ - 1,
    });
  }
  resetQuiz() {
    this.setState({
      currentQ: 0
    });
  }
  render() {
    if (this.state.currentQ < this.state.questions.length) {
      let allAnswers = [];
      this.state.questions[this.state.currentQ].possAnswers.forEach((item, i) => {
        allAnswers.push(<Answer key={i} answer={this.state.questions[this.state.currentQ].correctAnswer} name={item} />)
      })
      return (
        <section className="question-page">
          <Nav />
          <div className="question">
            <p>Question {this.state.currentQ + 1} of {this.state.questions.length}</p>
            <h1>{this.state.questions[this.state.currentQ].question}</h1>
            <ul className="answers">
              {allAnswers}
            </ul>
            <button className="prev-button" type="button" onClick={this.lastQuestion}>Previous Question</button>
            <button className="next-button" type="button" onClick={this.nextQuestion}>Next Question</button>
          </div>
        </section>
      )
    }
    else {
      return (
        <section className="question-page">
          <Nav />
          <div className="question">
            <h1>Congratulations!</h1>
            <p>You Win...or something</p>
            <button onClick={this.resetQuiz} type="button" className="next-button">Restart</button>
          </div>
        </section>
      )
    }
  }
}
