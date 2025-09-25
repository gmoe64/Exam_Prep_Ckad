const http = require('http'); // Import the built-in http module
const port = 3000; // Define the port number for the server to listen on
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // End the response with "Hello, World!"
  res.end('Hello, World!\n');
});

// Start the server and listen for requests on the specified port and hostname
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
