/**
 * A simple ExpressJS server app
 */
'use strict';

var express = require('express');
var path = require('path');
var app = express();

// app.get('/', function(req, res) {

//   // Toggle between serving public/index.html
//   // and sending a text 'Ola Mundo!' to see
//   // nodemon restarting the server upon edit

//   res.sendfile('public/index.html');
// //  res.send('Ola Mundo!');

// });

app.use("/resource",function(req,res){

	res.json({hello : "world"});

});

app.use(express.static('./dist'));

app.listen(3000, 'localhost');
app.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});