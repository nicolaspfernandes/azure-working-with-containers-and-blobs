'use strict';

module.exports = (server, services) => {

    let underscore = require('underscore');
    require('./containerController')(server, services, underscore);
    require('./containerBlobController')(server, services, underscore);
};