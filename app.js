/**
 * Starts Node.js server, initializes Express and Socket.io instances. 
 * Starts chat connection and enables chat listeners.
 */

 const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const index = require("./routes/index");
const app = express(); 


if (process.env.NODE_ENV === 'production'){
    //serve client build folder for production
    console.log("serving files from client/build");
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
      });
}else{
    //just run the server for development
    app.use(index);
}

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('connection', {message: 'Connection established.'});
    socket.on('message', data => {
        console.log(`message received from ${data.name} saying ${data.message}`);
        io.emit('receivedMessage', {name: data.name, text: data.message});
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})