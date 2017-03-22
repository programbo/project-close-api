const microApi = require('micro-api');
const fetch = require('node-fetch');

const buildUrl = formId => {
  const action = formId ? `form/${formId}` : 'forms';
  const key = process.env.API_KEY;
  return `https://api.typeform.com/v1/${action}?key=${key}`;
};

const fetchData = async ({ params: { formId } }) => {
  const request = await fetch(buildUrl(formId));
  const data = await request.json();
  return data;
};

module.exports = microApi([
  {
    method: 'get',
    path: '/forms',
    handler: fetchData
  },
  {
    method: 'get',
    path: '/forms/:formId',
    handler: fetchData
  }
]);
