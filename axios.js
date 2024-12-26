//------AXIOS-------------

// Install axios via npm
// npm install axios

import axios from 'axios';

// Making a GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Handle the data from the response
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Making a POST request
axios.post('https://api.example.com/login', {
    username: 'example',
    password: 'password123'
  })
  .then(response => {
    console.log('Login success:', response.data);
  })
  .catch(error => {
    console.error('Login failed:', error);
  });