import React, {Component} from 'react';
import { Link } from 'react-router';

export default class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <p>Please use your Thinkful Login</p>
        <div className="login-name">
          <label for="name">Name: </label>
          <input type="text" id="name" />
        </div>
        <div className="login-email">
          <label for="email">Email: </label>
          <input type="email" id="email" />
        </div>
        <Link to={'/quiz'}><input type="submit" value="GO!" /></Link>
        <h3>-- OR --</h3>
        <div className="login-buttons">
          <button type="button" name="Github"><Link to={'/quiz'}><i className="fa fa-github" aria-hidden="true"></i><p>GitHub</p></Link></button>
          <button type="button" name="Google Plus"><Link to={'/quiz'}><i className="fa fa-google-plus" aria-hidden="true"></i><p>Google +</p></Link></button>
          <button type="button" name="Facebook"><Link to={'/quiz'}><i className="fa fa-facebook" aria-hidden="true"></i><p>Facebook</p></Link></button>
        </div>
      </form>
    )
  }
}
