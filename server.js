var http = require('http');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'easetech',
  password : 'summer08',
  database : 'easetech'
});
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'chat'
// });

//

var connectedUsers = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/template/chat.html');
});
console.log(__dirname + '/template/js');
app.use("/js", express.static(__dirname + '/template/js'));
io.on('connection', function(socket){

  socket.on('disconnect', function(){
    findUser(connectedUsers,socket);
  });


  socket.on('user joined' , function(username){
  console.log(username+ ' joined');
  connectedUsers[username] = socket.id;
  console.log(connectedUsers);
  });

  socket.on('chat message' , function(msg){
    io.emit('chat message' , msg);

    // connection.connect();
    // connection.query("INSERT INTO `try`(`msg`) VALUES ('" + msg + "')", function(err, rows, fields) {
    // });
    // connection.end();
  });
});

http.listen(process.env.PORT || 8080, function(){
  console.log('listening on port 8080');
});

function findUser(obj , id){
  for (var i = 0; i < obj.length; i++) {
    console.log(obj[i]);
  }
}
