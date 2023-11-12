/* 
  Filename: ComplexCode.js

  Description: This code demonstrates a complex JavaScript application implementing a real-time chat system using WebSockets.
*/

// WebSocket Server Implementation
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();

// Create WebSocket server instance
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Set();

// Handle new client connections
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Add client to the Set
  clients.add(ws);

  // Notify all clients about the new connection
  clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send('New client connected');
    }
  });

  // Handle messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Notify all clients about the received message
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Message: ${message}`);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');

    // Remove client from the Set
    clients.delete(ws);

    // Notify all clients about the disconnection
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('Client disconnected');
      }
    });
  });
});

// Start the server
server.listen(8080, () => {
  console.log('WebSocket server is running on port 8080');
});

// Client Application Implementation
const client = new WebSocket('ws://localhost:8080');

// Handle connection open event
client.onopen = () => {
  console.log('Connected to WebSocket server');

  // Send a welcome message to the server
  client.send('Hello server!');
};

// Handle received messages from the server
client.onmessage = (message) => {
  console.log(`Received message from server: ${message.data}`);
};

// Handle connection close event
client.onclose = () => {
  console.log('Disconnected from WebSocket server');
};
