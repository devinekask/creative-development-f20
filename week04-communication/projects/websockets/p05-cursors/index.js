const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 80;

const io = require('socket.io')(server);

const clients = {};
io.on('connection', socket => {
  clients[socket.id] = { id: socket.id };
  console.log('Socket connected', socket.id);

  clients[socket.id].x = 0;
  clients[socket.id].y = 0;

  socket.on('update', data => {
    clients[socket.id].x = data.x;
    clients[socket.id].y = data.y;
  });

  socket.on('disconnect', () => {
    delete clients[socket.id];
  });

});

app.use(express.static('public'));

server.listen(port, () => {
  console.log(`App listening on port ${port}!`);

  setInterval(() => {
    io.sockets.emit('update', clients);
  }, 100);
});