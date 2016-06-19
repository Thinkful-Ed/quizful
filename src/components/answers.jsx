import React, {Component} from 'react'

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: ""
    }
    this.qCheck = this.qCheck.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      class: ""
    })
  }
  qCheck(e) {
    if (e.target.textContent === this.props.answer) {
      this.setState({
        class: "fa fa-check"
      });
    }
    else {
      this.setState({
        class: "fa fa-times"
      })
    }
  }
  render() {
    return <li onClick={this.qCheck}>{this.props.name}<i className={this.state.class} aria-hidden="true"></i></li>
  }
}
