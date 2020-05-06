const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const index = require("./routes/index");
const app = express(); 

app.use(index);

const server = require('http').Server(app);
const io = require('socket.io')(server);

/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
*/

//app.use(express.static(path.join(__dirname, 'client/public/index.html')));

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('connection', {message: 'Connection established.'});
    socket.on('message', data => {
        console.log(`message received from ${data.name} saying ${data.message}`);
        io.emit('receivedMessage', {name: data.name, text: data.message});
    });
});

//socket.emit('message', {Calder: 'Hey how are you'});

server.listen(port, () => {
    console.log(`Server running on port ${port}...`);
})