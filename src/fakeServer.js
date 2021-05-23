import { v4 as uuidv4 } from 'uuid';

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const fakeServerTasks = [
  { id: '1', title: 'title', totalTime: 15 },
  { id: '2', title: 'title 2', totalTime: 5 },
  { id: '3', title: 'title 2', totalTime: 5 },
];

function findIndexById(id) {
  const result = fakeServerTasks.findIndex((task) => task.id === id);
  if (result < 0) {
    throw new Error('no task');
  }
  return result;
}

const tasksApi = {
  async getAllTasks() {
    await wait(2000);
    return fakeServerTasks;
  },
  addTask: async function addTask(taskToAdd) {
    console.log({ taskToAdd });
    await wait(1000);
    fakeServerTasks.push({ ...taskToAdd, id: uuidv4() });
  },
  replaceTask: async function replaceTask(taskToReplace) {
    await wait(1000);
    if (!taskToReplace.id) {
      throw new Error('cannot replace');
    }
    const index = findIndexById(taskToReplace.id);
    const replacedTask = { ...taskToReplace };
    fakeServerTasks[index] = replacedTask;
    return replacedTask;
  },
  removeTask: async function removeTask(taskToRemove) {
    await wait(1000);
    if (!taskToRemove.id) {
      throw new Error('cannot remove');
    }
    const index = findIndexById(taskToRemove.id);
    fakeServerTasks.splice(index, 1);
  },
};

export default tasksApi;
