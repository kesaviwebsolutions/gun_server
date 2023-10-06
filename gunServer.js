const Gun = require('gun');
const http = require('http');

const port = 8080; // Change to your desired port

const server = http.createServer((req, res) => {
  if (Gun.serve(req, res)) {
    return; // Requests handled by Gun server
  }
  // Handle other requests/responses here if needed
});

server.listen(port, () => {
  console.log(`GunDB server started on port ${port}`);
});

const gun = Gun({ web: server });
