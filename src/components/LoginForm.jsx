/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    // eslint-disable-next-line prettier/prettier
    emailInput:"",
    passwordInput: '',
  };

  onEmailChange = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { emailInput, passwordInput } = this.state;
    const { loginAttempt } = this.props;
    loginAttempt({ email: emailInput, password: passwordInput });
    this.setState({ emailInput: '', passwordInput: '' });
  };

  render() {
    const { error } = this.props;
    const { emailInput, passwordInput } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form">
        {error && <div className="login-error">{error}</div>}
        <h2> zaloguj się</h2>
        <label>
          podaj email
          <input
            onChange={this.onEmailChange}
            value={emailInput}
            type="text"
            autoComplete="username"
          />
        </label>

        <label>
          podaj hasło
          <input
            value={passwordInput}
            type="password"
            autoComplete="current-password"
            onChange={this.onPasswordChange}
          />
        </label>
        <button type="submit">Zaloguj</button>
      </form>
    );
  }
}

export default LoginForm;
