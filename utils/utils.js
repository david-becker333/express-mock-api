

var serverConfig = require('../config');
var fs = require("fs");


module.exports = {
    
    getData: function (file) {

        function readJsonFileSync(filepath, encoding) {

            if (typeof (encoding) == 'undefined') {
                encoding = 'utf8';
            }
            var file = fs.readFileSync(filepath, encoding);
            return JSON.parse(file);
        }

        var filepath = serverConfig.baseDirectory + file;
        return readJsonFileSync(filepath);
    },

    getApiPath: function (resource, extension) {

        // if the extension is not defined then just pass the url path
        if (!extension) {
            return toApiUri(resource);
        }
        return toFileApiUri(resource, extension);
    },

    getFilePath: function (resource, extension) {
        
        var ext = extension || 'json'
        if (extension) {
            ext = extension;
        }
        return toFileApiUri2(resource, extension);
    }


}





function toApiUri(resource) {
    return serverConfig.apiUriPath + resource
};

function toFileApiUri(resource, extension) {
    return serverConfig.apiUriPath + resource + "." + extension;
};

function toFileApiUri2(resource, extension) {
    return resource + "." + extension;
};


