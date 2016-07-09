var app = angular.module('chatapp',[]);

app.controller('chatCtrl',function($scope){
  console.log('controller loaded');
$scope.users = [{username:'daniel' , id:2} , {username:'karisha' , id:3}];

$scope.joinChat = function(username){
  var socket = io();
  socket.emit('user joined' ,username);
        $('#clientIDModal').modal('hide');
}
});
