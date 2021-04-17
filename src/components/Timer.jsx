import React, { Component } from 'react';

import Clock from '../atoms/Clock';
import ProgressBar from '../atoms/ProgressBar';
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

class Timer extends Component {
  state = {
    isRunning: false,
    isPaused: false,
    pausesCount: 0,
    elapsedTime: 0,
  };

  handleStart = () => {
    this.setState({ isRunning: true });
    this.startTimer();
  };

  handleStop = () => {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsedTime: 0,
    });
    this.stopTimer();
  };

  togglePause = () => {
    this.setState(function (prevState) {
      const isPaused = !prevState.isPaused;
      console.log(isPaused);
      if (isPaused) {
        console.log(this.intervalId, 'start pause');
        this.stopTimer();
      } else {
        console.log(this.intervalId, 'stop pause');
        this.startTimer();
      }
      return {
        isPaused,
        pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount,
      };
    });
  };

  startTimer() {
    this.intervalId = window.setInterval(() => {
      console.log(this.intervalId);
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 0.1,
      }));
    }, 100);
  }

  stopTimer() {
    console.log(this.intervalId);
    window.clearInterval(this.intervalId);
  }

  render() {
    const { isPaused, isRunning, pausesCount, elapsedTime } = this.state;
    const { title, totalTime, isEditable } = this.props;

    const leftTime = totalTime - elapsedTime;
    const minutesLeft = Math.floor(leftTime / 60);
    const secondsLeft = Math.floor(leftTime % 60);
    const percentProgress = (elapsedTime / totalTime) * 100.0;

    return (
      <div className={isEditable ? 'inactive timer' : 'timer'}>
        <h2>{title}</h2>
        <Clock minutes={minutesLeft} seconds={secondsLeft} inactive={isPaused} />
        <ProgressBar percent={percentProgress} inactive={isPaused} />
        <div className="buttons-wrapper">
          <button onClick={this.handleStart} type="button" disabled={isRunning}>
            Start
          </button>
          <button onClick={this.handleStop} type="button" disabled={!isRunning}>
            Stop
          </button>
          <button onClick={this.togglePause} disabled={!isRunning} type="button">
            {isPaused ? 'Wznów' : 'Pauzuj'}
          </button>
        </div>
        Liczba przerw:
        {pausesCount}
      </div>
    );
  }
}

export default Timer;
