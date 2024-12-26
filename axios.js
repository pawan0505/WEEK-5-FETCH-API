//------AXIOS-------------
// npm install axios

// import axios from 'axios';
const axios = require("axios");

//get request
async function main() {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
	console.log(response.data);
}
main();

// Making a POST request
// async function main() {
//     const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1")
//     console.log(response.data);
// }
// main();


// Send a POST request
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });