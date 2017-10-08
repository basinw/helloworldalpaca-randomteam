var team = {
    frontend: [
        ['bas', 0],
        ['tae', 0],
        ['mix', 0],
        ['tul', 0],
        ['nut', 0],
        ['fluke', 0],
        ['jo', 0],
        ['a', 0],
        ['boat', 0],
        ['guide', 0]
    ]
}

module.exports = (io) => {
  io.on('connection', function(socket) {
    console.log('socket connected')

    socket.on('random', (room) => {
      console.log('random')
    })
  })
}
