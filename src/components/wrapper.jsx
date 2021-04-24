/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../atoms/Task';
import Creator from './Creator';
import Error from '../atoms/Error';

import Timer from './Timer';
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

class Wrapper extends Component {
  state = {
    taskBoxes: [],
    currentTitle: '',
    currentTime: '',
    currentTaskId: 0,
    isEditable: true,
  };

  addTask = (task) => {
    this.setState((prevState) => {
      const taskBoxes = [...prevState.taskBoxes, task];
      return {
        taskBoxes,
      };
    });
  };

  removeTask = (indexToRemove) => {
    this.setState((prevState) => {
      const taskBoxes = prevState.taskBoxes.filter((task, index) => index !== indexToRemove);
      return {
        taskBoxes,
      };
    });
  };

  updateTask = (indexToUpdate, updatedTask) => {
    this.setState((prevState) => {
      const taskBoxes = prevState.taskBoxes.map((task, index) => {
        return index === indexToUpdate ? updatedTask : task;
      });
      return {
        taskBoxes,
      };
    });
  };

  setCurrentTaskId = (currentTaskId) => {
    this.setState({ currentTaskId, isEditable: false });
  };

  onEdit = () => {
    this.setState({ isEditable: true, currentTime: '' });
  };

  handleCreate = () => {
    const { currentTitle, currentTime } = this.state;
    try {
      this.addTask({ id: uuidv4(), title: currentTitle, totalTime: currentTime });
      this.setState({ currentTitle: '', currentTime: '' });
    } catch (error) {
      console.lgg('error');
    }
  };

  onCurrentTimeChange = (event) => {
    this.setState({ currentTime: event.target.value });
  };

  onCurrentTitleChange = (event) => {
    this.setState({ currentTitle: event.target.value });
  };

  render() {
    const { taskBoxes, currentTitle, currentTime, currentTaskId, isEditable } = this.state;

    const activeTask = taskBoxes.filter((task) => {
      if (task.id === currentTaskId) {
        return task;
      }
      return false;
    });

    return (
      <div className="main-wrapper">
        <h1> co dziś zamierzasz zrobić ?</h1>
        {activeTask.length > 0 && (
          <Timer
            title={activeTask[0].title}
            totalTime={activeTask[0].totalTime}
            isEditable={isEditable}
          />
        )}
        <Creator
          inactive={!isEditable}
          onCreate={this.handleCreate}
          onCurrentTimeChange={this.onCurrentTimeChange}
          onCurrentTitleChange={this.onCurrentTitleChange}
          currentTitle={currentTitle}
          currentTime={currentTime}
          onEdit={this.onEdit}
        />

        {taskBoxes.map((task, index) => (
          <Error key={task.id} message="musisz dodać czas do odliczenia">
            <Task
              inactive={!isEditable}
              title={task.title}
              totalTime={task.totalTime}
              onDelete={() => this.removeTask(index)}
              onTimeChange={(event) => {
                this.updateTask(index, { ...task, totalTime: event.target.value });
              }}
              onTitleChange={(event) => {
                this.updateTask(index, { ...task, title: event.target.value });
              }}
              onChoose={() => this.setCurrentTaskId(task.id)}
              onEdit={this.onEdit}
            />
          </Error>
        ))}
      </div>
    );
  }
}

export default Wrapper;
