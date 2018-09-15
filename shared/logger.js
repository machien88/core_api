'use strict';

var debug = require('debug');
const appPrefix = "gocar-cleaner-api"

class Logger {
    getLogger(name) {
        var logger = debug(appPrefix + ":" + name);
        return logger;
    }
}

module.exports = (name) =>{
    return new Logger().getLogger(name);
}
