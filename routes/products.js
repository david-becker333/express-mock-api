
var express = require('express');
var cors = require('cors');
var router = express.Router();
var utils = require('../utils/utils');
var serverConfig = require('../config');

// add cors support
router.use(cors(serverConfig.corsOptions));

// /products
router.get(path = '', function (req, res) {
    var data = utils.getData(utils.getFilePath(req.baseUrl, 'json'));
    res.send(data)
})

// /products
router.get(path = '/:id', function (req, res) {
    var data = utils.getData(utils.getFilePath(req.baseUrl, 'json'));
    res.send(data)
})

// /products
router.post(path = '', function (req, res) {
    var data = utils.getData(utils.getFilePath(req.baseUrl, 'json'));
    res.send(data)
})

// /products
router.put(path = '/:id', function (req, res) {
    var data = utils.getData(utils.getFilePath(req.baseUrl, 'json'));
    res.send(data)
})


module.exports = router


/** 
var offset = parseInt(req.query.offset || 0),
limit = parseInt(req.query.limit || 10),
totalRecords = 50000;
res.set(jsonResponseContentType)

var model = getConfig(toFileApiUri('rpms'));
var rpms = [];
var totalLimit = limit + offset

for(var i = offset; (i < totalLimit && i < totalRecords); i++) {
var item = _.clone(model);

item.type = i > 5 ? "EEB" : "Upgrade",
item.name = "NBAPP" + i + "-" + item.type +"-3.1-1.x86_64.rpm";
item.version = i > 5 ? "2.7.3" : "3.0";
item.sizeInMB = i > 5 ? 200 : 2085;
item.dateUploaded = Date.now();

rpms.push(item);
}
var responseData = _.assign(GENERIC_LIST_RESPONSE, {

data: rpms
});

res.send(responseData);

*/



/**
  //console.log("req: ", req);

    var filename = "Polaris-Visual.pdf";
    var imagePath = __dirname + fileUriPath + "/" + filename;
    //var file = getFile(imagePath);
    //console.log("** file: ", file);
    //var contentType = {'content-type': 'application/pdf; charset=ISO-8859-1'}
    fs.readFile(imagePath, function (err, data) {
      if (err) throw err;
      res.contentType(filename);
      //res.send(data);
      res.write(data);
      res.end();
    });

    var body = fs.readFileSync(imagePath);
     res.contentType(filename);
     res.send(body);

    //res.set(imageResponseContentType)
    //res.send(getFile(imagePath));
 */
