const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
mongoose.connect(config.dbUrl);
app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('dev'))

require('./src/routes').routes(app)

const server = http.createServer(app)

const port = process.env.port || '9900'
server.listen(port)
