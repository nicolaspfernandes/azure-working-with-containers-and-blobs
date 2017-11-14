'use strict';

const path = require('path');
const express = require('express');

const server = express();
const services = require('./server/services');
const controllers = require('./server/controllers')(server, services);

server.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './index.html'));
});

server.listen(3000, () => {
    console.log('Application running.');
});
