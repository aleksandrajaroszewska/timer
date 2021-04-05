/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class Editor extends Component {
  state = {
    title: 'uczę się',
    totalTime: 10,
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
      <div className="editor">
        <label>
          Co robisz?
          <input onChange={this.handleTitleChange} value={title} type="text" />
        </label>
        <br />
        <label>
          Ile minut?
          <input onChange={this.handleTimeChange} value={totalTime} type="number" />
        </label>
        <br />
        <button type="button">Zacznij</button>
      </div>
    );
  }
}

export default Editor;
