var path = require('path');
var express = require('express');

var app = express();

app.get('/', function (req, res){
    res.send('Hello World!! Put something in ./public :)');
});

var staticPath = path.resolve(__dirname, '../public');
app.use(express.static(staticPath));

app.listen('3000', 'localhost', function () {
  console.log('Server listening at localhost:3000');
});

