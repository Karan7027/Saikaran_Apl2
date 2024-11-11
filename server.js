const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle a GET request to '/api/message'
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve the main page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <title>My Node.js Server</title>
        <script>
          async function fetchMessage() {
            const response = await fetch('/api/message');
            const data = await response.json();
            document.getElementById('server-response').innerText = data.message;
          }
        </script>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <button onclick="fetchMessage()">Get Message from Server</button>
        <p id="server-response"></p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
