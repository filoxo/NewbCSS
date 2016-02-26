/**
 * Created by cfiloteo on 11/17/15.
 */
var express = require('express'),
	app 	= express(),
	routes	= express.Router();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/'));
routes.get('/', function(req, res){
	res.render('index');
});
app.use('/test', routes);
app.listen(3000);
console.log('App running on localhost:3000')
module.exports = app;