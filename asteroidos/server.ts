import express, { Application } from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import SpaceshipBack from './backendClasses/spaceShipBack';

const app: Application = express();
const server: http.Server = http.createServer(app);
const io: SocketIOServer = new SocketIOServer(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

let players: String[] = [];
let spaceship: SpaceshipBack = new SpaceshipBack(300,300);

io.on('connection', function (socket: Socket) {
    console.log('A user connected: ' + socket.id);
    players.push(socket.id);

    //Le premier joueur connecté
    if (players.length === 1) {
        io.emit('isSpaceshipPlayer');
    };

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });

    const SPEED: number = 5;
    socket.on('keydown',(keycode) =>{
        switch (keycode) {
            case 'KeyW':
                spaceship.moveY(-SPEED)
              break;
            case 'KeyS':
                spaceship.moveY(SPEED)
              break;
            case 'KeyA':
                spaceship.moveX(-SPEED)
              break;
            case 'KeyD':
                spaceship.moveX(SPEED)
              break;
          }
    })

    socket.on('asteroidsPosition', function (asteroidsCoordX) {
        socket.broadcast.emit('newAsteo', asteroidsCoordX)
    });

});

setInterval(()=>{
    io.emit('updateSpaceship', spaceship.getCoords());
},1500)

server.listen(3000, function () {
    console.log('Server started!');
})