const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Load the certificate and key
const sslServerOptions = {
  key: fs.readFileSync(path.join(__dirname, 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'server.cert')),
};

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});

// Create an HTTPS server
https.createServer(sslServerOptions, app).listen(3000, () => {
  console.log('HTTPS Server running on https://localhost:3000');
});
