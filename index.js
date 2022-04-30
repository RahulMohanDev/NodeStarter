const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser')
const publicRoutes = require('./routes/public')
const formRoutes = require('./routes/form')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/',publicRoutes);
app.use('/form',formRoutes);
const server = http.createServer(app);
server.listen(3000);
