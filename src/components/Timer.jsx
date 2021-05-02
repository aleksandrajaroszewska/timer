import React, { Component } from 'react';

import Clock from '../atoms/Clock';
import ProgressBar from '../atoms/ProgressBar';

import { getMinutesAndSecondsFromDurationInSeconds } from '../helpers';

/* eslint-disable react/prop-types */

class Timer extends Component {
  state = {
    isRunning: false,
    isPaused: false,
    pausesCount: 0,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.intervalId = null;
  }

  componentDidUpdate(prevState) {
    const { title, totalTime } = this.props;

    if (title !== prevState.title || totalTime !== prevState.totalTime) {
      this.handleStop();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

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
    this.setState((prevState) => {
      const isPaused = !prevState.isPaused;

      if (isPaused) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
      return {
        isPaused,
        pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount,
      };
    });
  };

  startTimer() {
    if (this.intervalId === null) {
      this.intervalId = window.setInterval(() => {
        console.log('timer started');
        this.setState((prevState) => ({
          elapsedTime: prevState.elapsedTime + 0.1,
        }));
      }, 100);
    }
  }

  stopTimer() {
    console.log('timer ends');
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const { isPaused, isRunning, pausesCount, elapsedTime } = this.state;
    const { title, totalTime, isEditable } = this.props;
    const leftTime = totalTime - elapsedTime;

    const [minutesLeft, secondsLeft] = getMinutesAndSecondsFromDurationInSeconds(leftTime);

    const percentProgress = (elapsedTime / totalTime) * 100.0;

    if (isEditable) {
      this.stopTimer();
    }

    // log cheetsheet
    // console.group('group');
    // console.log({ totalTime, secondsLeft });
    // console.groupCollapsed('collapsed');
    // console.info('this is info');
    // console.debug('this is debug');
    // console.warn('this is warn');
    // console.error('this is erroe');
    // console.groupEnd('end');
    // console.table('to log array');
    // console.trace('this is stack trace');
    // console.groupEnd('end');
    // console.count('count render');
    // console.log(
    //   '%c tralaalalall kokoko  %c tetetet %c tetststt',
    //   'color: green',
    //   'color: pink',
    //   'background:blue'
    // );

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
