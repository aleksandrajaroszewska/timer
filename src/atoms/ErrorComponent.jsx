/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class ErrorComponent extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('błąd', error, errorInfo);
  }

  render() {
    const { message, children } = this.props;
    const { hasError } = this.state;
    return hasError ? message : children;
  }
}

export default ErrorComponent;
