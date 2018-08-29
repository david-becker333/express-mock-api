var Server = require('./Server');
var productRoutes = require('./routes/products');


var server = new Server();

server.route('/products', productRoutes);

var port = 9000;
server.start(port, function () {
    console.log("We have started our server on port " + port);
})
