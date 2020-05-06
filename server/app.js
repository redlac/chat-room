const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const index = require("./routes/index");
const app = express(); 

app.use(index);

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