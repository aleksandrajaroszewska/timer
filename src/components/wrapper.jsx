/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../atoms/Task';
import Creator from './Creator';
import ErrorComponent from '../atoms/ErrorComponent';
import Timer from './Timer';
import tasksApi from '../fetchTasks';
/* eslint-disable func-names */
/* eslint-disable react/prop-types */

class Wrapper extends Component {
  state = {
    taskBoxes: [],
    loading: true,
    error: false,
    currentTitle: '',
    currentTime: '',
    currentTaskId: 0,
    isEditable: true,
  };

  componentDidMount() {
    const { accessToken } = this.props;
    tasksApi
      .getAllTasks(accessToken)
      .then((taskBoxes) =>
        this.setState({
          taskBoxes,
        })
      )
      // eslint-disable-next-line react/destructuring-assignment
      .then(() => this.setState({ loading: false }));
    // .cath(() => this.setState({ error: true }));
  }

  addTask = (task) => {
    const { accessToken } = this.props;
    tasksApi.addTask(task, accessToken).then(() =>
      this.setState((prevState) => {
        console.log({ prevState, task });
        const taskBoxes = [...prevState.taskBoxes, task];
        console.log([...prevState.taskBoxes, task]);
        return { taskBoxes };
      })
    );
  };

  removeTask = (indexToRemove) => {
    const { accessToken } = this.props;
    const { taskBoxes } = this.state;
    tasksApi.removeTask(taskBoxes[indexToRemove], accessToken).then(() =>
      this.setState((prevState) => {
        const filteredTaskBoxes = prevState.taskBoxes.filter(
          (task, index) => index !== indexToRemove
        );
        return {
          taskBoxes: filteredTaskBoxes,
        };
      })
    );
  };

  updateTask = (indexToUpdate, taskToUpdate) => {
    const { accessToken } = this.props;
    tasksApi.replaceTask(taskToUpdate, accessToken).then((updatedTask) =>
      this.setState((prevState) => {
        const taskBoxes = prevState.taskBoxes.map((task, index) => {
          return index === indexToUpdate ? updatedTask : task;
        });
        return {
          taskBoxes,
        };
      })
    );
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
      console.lgg('error in creation task');
    }
  };

  onCurrentTimeChange = (event) => {
    console.log('in time chaneg');
    this.setState({ currentTime: event.target.value });
  };

  onCurrentTitleChange = (event) => {
    this.setState({ currentTitle: event.target.value });
  };

  render() {
    const {
      taskBoxes,
      currentTitle,
      currentTime,
      currentTaskId,
      isEditable,
      loading,
      error,
    } = this.state;

    const activeTask = taskBoxes.filter((task) => {
      console.log(taskBoxes);
      if (task.id === currentTaskId) {
        return task;
      }
      return false;
    });

    return (
      <div className="main-wrapper">
        {activeTask && activeTask.length > 0 && (
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

        {loading ? 'timeboxy sie ładuję' : ''}
        {error ? 'błąd' : ''}

        {taskBoxes.map((task, index) => (
          <ErrorComponent key={task.id} message="musisz dodać czas do odliczenia">
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
          </ErrorComponent>
        ))}
      </div>
    );
  }
}

export default Wrapper;
