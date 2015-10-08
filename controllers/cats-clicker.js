var fs = require('fs'),
    qs = require('querystring'),
    config = require('../config');

exports.getFile = function(request, response) {

    var contentType = 'text/html';
    if (!!request.url.match(/.*\.css$/)) {
        contentType = 'text/css';
    }
    else if (!!request.url.match(/.*\.js$/)) {
        contentType = 'application/javascript';
    }
    response.writeHead(200, {"Content-Type": contentType});
    fs.createReadStream(config.directories.project + request.url).pipe(response);
};

exports.getAction = function (request, response) {
    fs.exists(config.database.path, function (isExists) {
        response.writeHead(200, {'Content-Type': 'application/json'});

        if (false === isExists) {
            response.end(JSON.stringify([]));

        } else {
            fs.createReadStream(config.database.path).pipe(response);
        }
    });
};

exports.postAction = function (request, response, pathname, postData) {
    postData = qs.parse(postData);

    fs.readFile(config.database.path, function (err, data) {
        data = err || !data ? [] : JSON.parse(data.toString('utf8'));
        postData.id = new Date().toISOString().replace(/[^\d]/g, '');
        data.push(postData);
        fs.writeFile(config.database.path, JSON.stringify(data), function (err) {
            if (err) {
                console.log(err);
                response.writeHead(503, {'Content-Type': 'application/json'});
                response.end(JSON.stringify({error: 'Can\'t save data. Please see server\'s console output for details.'}));

            } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(JSON.stringify(postData));
            }
        });
    });

};
