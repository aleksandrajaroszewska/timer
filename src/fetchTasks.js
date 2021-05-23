async function makeRequest(url, method, body, accessToken) {
  const jsonBody = JSON.stringify(body);

  console.log({ accessToken });

  const headers = {
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  const response = await fetch(url, {
    method,
    headers,
    body: body ? jsonBody : null,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data;
}
const baseUrl = 'http://localhost:4000/taskBoxes';

const tasksApi = {
  async getAllTasks(accessToken) {
    const allTaskBoxes = await makeRequest(baseUrl, 'GET', null, accessToken);
    return allTaskBoxes;
  },

  async addTask(taskToAdd, accessToken) {
    const addedTask = await makeRequest(baseUrl, 'POST', taskToAdd, accessToken);
    return addedTask;
  },
  async replaceTask(taskToReplace, accessToken) {
    const replacedTask = await makeRequest(
      `${baseUrl}/${taskToReplace.id}`,
      'PUT',
      taskToReplace,
      accessToken
    );
    return replacedTask;
  },
  removeTask: async function removeTask(taskToRemove, accessToken) {
    makeRequest(`${baseUrl}/${taskToRemove.id}`, 'DELETE', null, accessToken);
  },
};

export default tasksApi;
