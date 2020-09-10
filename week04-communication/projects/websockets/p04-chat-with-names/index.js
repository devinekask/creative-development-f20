const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 80;

const io = require('socket.io')(server);

const clients = {};
io.on('connection', socket => {
  clients[socket.id] = { id: socket.id };
  console.log('Socket connected', socket.id);

  socket.on('name', name => {
    console.log('name', name);
    // check if the name is valid
    if (!name || !name.trim || name.trim().length === 0) {
      return;
    }
    name = name.trim();
    for (const socketId in clients) {
      if (clients.hasOwnProperty(socketId)) {
        const client = clients[socketId];
        if (client.name === name) {
          // name is already taken
          return;
        }
      }
    }
    clients[socket.id].name = name;
    // send the name back - it is ok!
    socket.emit('name', name);
  });

  socket.on('message', message => {
    if (!clients[socket.id].name) {
      return;
    }
    console.log('message', message);
    io.sockets.emit(`message`, clients[socket.id], message);
  });

  socket.on('disconnect', () => {
    delete clients[socket.id];
  });

});

app.use(express.static('public'));

server.listen(port, () => {
 console.log(`App listening on port ${port}!`);
});