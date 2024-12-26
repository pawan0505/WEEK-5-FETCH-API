// async function getRecentPost() {
//     console.log("before sending request");
//     const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await response.json();
//     console.log(data);
//     console.log("request has been processed");
//     }
//     getRecentPost();

// Import the fetch function if needed
// const fetch = require('node-fetch'); // Use this for older versions of Node.js

// Async function to fetch data
async function getRecentPost() {
  console.log("before sending request");

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // Ensure the response is valid
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response JSON
    const data = await response.json();
    console.log(data);
    document.getElementById("posts").innerHTML = data.body

  } catch (error) {
    // Handle any errors
    console.error("Error fetching the data:", error.message);
  }

  console.log("after sending request");
  
}

// Call the function
getRecentPost();
