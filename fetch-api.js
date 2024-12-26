//async/await syntax get request

async function getRecentPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data = await response.json();
  console.log(data);
}
getRecentPost();

// .then syntax post request

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", 
    {
      method: "POST",
      body: {
        username: "Pawan singh",
        password: "123456"
      },
      headers: {
        "Authorization": "Bearer 123"
      }
    },
  );
  const json = await response.json;
  console.log(json.data);
}