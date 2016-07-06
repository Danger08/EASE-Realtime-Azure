var http = require('http');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//mysql
var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'db4free.net',
//   user     : 'easetech',
//   password : 'summer08',
//   database : 'easetech'
// });


//
users = [];
connection = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/HTMLPage.html');
});

io.on('connection', function(socket){
  io.emit('chat message' , 'a user conected');


  socket.on('disconnect', function(){
  console.log('user disconnected');
  });

  socket.on('chat message' , function(msg){
    io.emit('chat message' , msg);
    // var connection = mysql.createConnection({
    //   host     : 'localhost',
    //   user     : 'root',
    //   password : 'root',
    //   database : 'chat'
    // });
    // connection.connect();
    // connection.query("INSERT INTO `try`(`msg`) VALUES ('" + msg + "')", function(err, rows, fields) {
    // });
    // connection.end();
  });
});

http.listen(process.env.PORT || 8080, function(){
  console.log('listening on port 8080');
});
