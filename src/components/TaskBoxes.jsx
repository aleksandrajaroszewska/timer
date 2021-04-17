/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../atoms/Task';
import Creator from './Creator';

import Timer from './Timer';
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

class TaskBoxes extends Component {
  state = {
    taskBoxes: [],
    currentTitle: '',
    currentTime: 10,
    currentTaskId: 0,
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
    this.setState({ currentTaskId });
    console.log(currentTaskId);
  };

  handleCreate = () => {
    const { currentTitle, currentTime } = this.state;
    this.addTask({ id: uuidv4(), title: currentTitle, totalTime: currentTime });
    this.setState({ currentTitle: '', currentTime: 0 });
  };

  onTitleChange = (event) => {
    this.updateTask(index, { ...task, title: event.target.value });
  };

  onTimeChange = (event) => {
    this.updateTask(index, { ...task, title: event.target.value });
  };

  onCurrentTimeChange = (event) => {
    this.setState({ currentTime: event.target.value });
  };

  onCurrentTitleChange = (event) => {
    this.setState({ currentTitle: event.target.value });
  };

  render() {
    const { taskBoxes, currentTitle, currentTime, currentTaskId } = this.state;
    console.log(currentTaskId);

    // const choosenTitle = taskBoxes.filter((task) => {
    //   return task.title;
    // });

    const activeTask = taskBoxes.filter((task) => {
      if (task.id === currentTaskId) {
        return task;
      }
      return false;
    });

    return (
      <div>
        <Creator
          onCreate={this.handleCreate}
          onCurrentTimeChange={this.onCurrentTimeChange}
          onCurrentTitleChange={this.onCurrentTitleChange}
          currentTitle={currentTitle}
          currentTime={currentTime}
        />
        {taskBoxes &&
          taskBoxes.map((task, index) => (
            <Task
              key={task.id}
              title={task.title}
              totalTime={task.totalTime}
              onEdit={() => {
                this.updateTask(index, { ...task, title: 'updated task' });
              }}
              onDelete={() => this.removeTask(index)}
              onTimeChange={(event) => {
                this.updateTask(index, { ...task, totalTime: event.target.value });
              }}
              onTitleChange={(event) => {
                this.updateTask(index, { ...task, title: event.target.value });
              }}
              onChoose={() => this.setCurrentTaskId(task.id)}
            />
          ))}
        <Timer
          title={activeTask.length > 0 ? activeTask[0].title : 'not choosen'}
          totalTime={activeTask.length > 0 ? activeTask[0].totalTime : 0}
          isEditable={false}
        />
      </div>
    );
  }
}

export default TaskBoxes;
