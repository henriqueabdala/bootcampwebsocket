const app = require('express')()
const socket = require('socket.io')
let server = null
let io = null

app.get('/init', (req, res) => {
  if (!server) {
    server = res.socket.server
    io = socket(server)
    io.on('connection',  (socket) => {
      console.log(`${socket.handshake.headers.referer} conectou!`);
      socket.on('sendMsg', msg => {
        console.log(`${msg} recebido!`)
        socket.broadcast.emit('receivedMsg', msg);
      })
      socket.on('disconnect', () => console.log(`${socket.handshake.headers.referer} desconectou!`))
    })
  }
  res.send('Server Iniciado');
})

module.exports = app