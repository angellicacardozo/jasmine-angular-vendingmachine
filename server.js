var http = require('http')
    ,app = require('./config/express');

var port = process.env.PORT || 3000;

http.createServer(app).listen(3000, function() {
    console.log('Server listening on: ' + this.address().port);
});