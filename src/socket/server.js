var app = require('express')();
//var http = require('http').createServer(app);

const http = require('http').createConnection({ port: 3000 }, () => {
    // 'connect' listener.
    console.log('connected to server!');
});

var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

});


http.listen(3000, function () {
    console.log('listening on *:3000');
});


