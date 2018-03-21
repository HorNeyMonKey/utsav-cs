var express = require('express');
var http = require('http');
var path = require('path');
// var example_events = require('./example_events');

var app = express();


// app.set("views", path.resolve(__dirname, "views"));
var publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get('/', function(req, res){
	 res.sendFile(publicPath + "/index.html"); 
});

// app.get('/events', function(req, res){
// 		app.locals.json = example_events;

// 	  res.render("events"); 
// });


// app.get('/events/*', function(req, res){
// 	 app.locals.events  = example_events[req.originalUrl.slice(8, req.originalUrl.length)].events;

// 	  res.render("category2"); 
// });

// app.get('/technical', function(req, res){
// 	  res.render("technical"); 
// });

// app.get('/cultural/event_*', function(req, res){
// 	var index = req.originalUrl.slice(16, req.originalUrl.length);
// 	//res.send(index);
// 	// app.locals.event = example_events[index];
// 	app.locals.event = example_events;
// 	res.render("event"); 
// });

// app.get('/technical/event_*', function(req, res){
// 	var index = req.originalUrl.slice(17, req.originalUrl.length);
// 	//res.send(index);
// 	app.locals.event = example_events[index];
// 	res.render("event"); 
// });

// app.set("view engine", "ejs");

// app.get('/cultural/event1', function(req, res){
// 	 res.render("event"); 
// });

app.listen(80, function(){
	console.log("Started at 80.");
})
