const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"]
    }});

    let players = [];

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);
    players.push(socket.id);

    if (players.length === 1) {
        io.emit('isSpaceshipPlayer');
    };

    socket.on('playerMove', function(playerCoord){
        socket.broadcast.emit('playerMove',playerCoord)
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});