/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import jwt from 'jsonwebtoken';
import LoginForm from './components/LoginForm';
import Wrapper from './components/Wrapper';
import fetchAuthenticationApi from './fetchAuthenticationApi';

class App extends Component {
  state = {
    accessToken: null,
    previousLoginAttemptFailed: false,
  };

  isUserLoggedIn = () => {
    const { accessToken } = this.state;
    return !!accessToken;
  };

  getUserEmail = () => {
    const { accessToken } = this.state;
    console.log(jwt.decode(accessToken));
    return jwt.decode(accessToken).email;
  };

  logout = () => {
    console.log('logout');
    this.setState({ accessToken: null, previousLoginAttemptFailed: false });
  };

  loginAttempt = (credentials) => {
    fetchAuthenticationApi
      .login(credentials)
      .then(({ accessToken }) => {
        this.setState({ accessToken, previousLoginAttemptFailed: false });
      })
      .catch(() => {
        console.log('error in login attempt');
        this.setState({ previousLoginAttemptFailed: true });
      });
  };

  render() {
    const { previousLoginAttemptFailed, accessToken } = this.state;
    return (
      <div>
        {this.isUserLoggedIn() ? (
          <div>
            <header className="header">
              <h3>
                <span>Witaj</span>
                {this.getUserEmail()}
              </h3>
              <button onClick={this.logout} type="button">
                Wyloguj się
              </button>
            </header>
            <h1> co dziś zamierzasz zrobić ?</h1>
            <Wrapper accessToken={accessToken} />
          </div>
        ) : (
          <LoginForm
            error={previousLoginAttemptFailed ? 'nie udało się zalogować' : null}
            loginAttempt={this.loginAttempt}
          />
        )}
      </div>
    );
  }
}

export default App;
