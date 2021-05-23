async function makeRequest(url, method, body) {
  const jsonBody = JSON.stringify(body) || undefined;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonBody,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data;
}
const baseUrl = 'http://localhost:4000';

const fetchAuthenticationApi = {
  async login(credentials) {
    const result = await makeRequest(`${baseUrl}/login`, 'POST', credentials);
    return result;
  },
};

export default fetchAuthenticationApi;
