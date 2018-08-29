

var express = require('express')
    , cors = require('cors')
    , app = express()
    , bodyParser = require('body-parser');
var utils = require('./utils/utils');
var serverConfig = require('./config');
var fs = require("fs"),
    json;

/**
 * Server object module
 *
 * @public
 */
var Server = function () {

    if (!(this instanceof Server)) {
        return new Server();
    }

    var server = this;

    /**
     * Adds a sub-router.
     *
     * @param {String} path
     * @param {Router} route
     * @return void
     * @public
     */
    server.route = function (path, route) {
        app.use(utils.getApiPath(path), route);
    }




    /**
     * Starts the express server.
     *
     * @param {Number} options
     * @return {Router} which is an callable function
     * @public
     */
    server.start = function (port, callback) {

        // apply cors global
        //app.all('*', cors(serverConfig.corsOptions));
      
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }));

        // start the server and listen on port
        app.listen(port, callback);
    }




    /**
     * "stop" - stops the server.
     *
     * @param {Object} options
     * @return void
     * @public
     */
    server.stop = function (options) {
        //TODO - implement possible options
    }

}

if (typeof module === "object" && module && typeof module.exports === "object") {
    module.exports = Server;
} else {
    window.Server = Server;

    if (typeof define === "function" && define.amd) {
        define("server", [], function () { return Server; });
    }
}
