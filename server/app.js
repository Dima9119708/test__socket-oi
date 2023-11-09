import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: '*'
  }
});

const messages = []

io.on('connection', socket => {
  socket.on('new user', (name) => {
    console.log('name', name)
  })
  // we listen for this event from the clients
  socket.on('message', (message) => {

  });
});
