var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nodeModular");


var bodyParser = require('body-parser');
var app = require('express')();
var server = require('http').Server(app);
server.listen(4040);

app.use(bodyParser.json({limit: '50mb'}));

app.get('/', function(req, res, next) {
	res.json('Online');
});

/*Modulos*/
app.use('/api/v1/clientes', require('./app/clientes'));




