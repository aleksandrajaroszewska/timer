/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import TaskBoxes from './TaskBoxes';

class Wrapper extends Component {
  state = {
    title: 'Co robisz ?',
    totalTime: 120,
    isEditable: true,
  };

  onChoose = () => {};

  handleConfirm = () => {
    const { isEditable } = this.state;
    this.setState({ isEditable: !isEditable });
  };

  handleTitleChange = (event) => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleTimeChange = (event) => {
    const totalTime = event.target.value;
    this.setState({ totalTime });
  };

  render() {
    const { title, totalTime } = this.state;

    return (
      <div className="main-wrapper">
        <h1>powtórka z React</h1>
        <TaskBoxes title={title} totaTime={totalTime} />
      </div>
    );
  }
}

export default Wrapper;
