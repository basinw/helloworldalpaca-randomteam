// --------------------
//    ENV FILE CONFIG
// --------------------
require('dotenv').config()

// -----------------------
//   IMPORT DEPENDENCIES
// -----------------------
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

// ----------------------
//     INITIAL SERVER
// ----------------------
const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// api
const routes = require('./server/routes.js')
server.use('/api/v1', routes)

if (process.env.NODE_ENV === 'PRODUCTION') {
  server.use(express.static(path.resolve(__dirname, '.', 'build')))
  server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

// listen port 3003
var app = server.listen(3003, (err) => {
  if (err) throw err
  console.log('> Ready on http://localhost:3003')
})

module.exports = server