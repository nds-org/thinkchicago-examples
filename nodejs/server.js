var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/hello', function(req, res){
   res.send("Hello world!");
});

app.listen(8080);