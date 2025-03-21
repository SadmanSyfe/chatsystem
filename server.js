const http = require('http').createServer();

const io = require('socket.io')(http,{
    cors:{origin:"*"}
});
io.on('connection',(socket) => {
    console.log(socket.id)
    socket.on('message',(message)=>{
        console.log(message);
        io.emit('message',`${socket.id} > ${message} `);
    });
});

http.listen(8080);