/* eslint-disable react/prop-types */
import React from 'react';
import Clock from '../atoms/Clock';
import ProgressBar from '../atoms/ProgressBar';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
    };
  }

  handleStart = () => {
    this.setState({ isRunning: true });
  };

  handleStop = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
    });
  };

  render() {
    const { isPaused, isRunning, pausesCount } = this.state;
    return (
      <div className="timer">
        <h1>Uczę się skrótów klawiszowych</h1>
        <Clock />
        <ProgressBar />
        <div className="buttons-wrapper">
          <button onClick={this.handleStart} type="button" disabled={isRunning}>
            Start
          </button>
          <button onClick={this.handleStop} type="button" disabled={!isRunning}>
            Stop
          </button>
          <button type="button" disabled={!isRunning}>
            {isPaused ? 'Wznów' : 'Pauzuj'}
          </button>
        </div>
        Liczba przerw: {pausesCount}
      </div>
    );
  }
}

export default Timer;
