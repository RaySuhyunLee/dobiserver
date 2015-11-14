var net = require("net");

port = 9000;

var dogis = [];
var isBegin = false;

function getBegin() {
  return isBegin;
}

function begin() {
  var server = net.createServer(function(socket) {
    var id = dogis.length;
    dogis.push({"id": id, "socket": socket});
    socket.write('S' + id + '\r\n');
    //socket.pipe(socket);
    //
    socket.on('data', function(data) {
      console.log(data);
    });
  });

  server.listen(port, '127.0.0.1');
  console.log("TCP server running at port " + port);

  isBegin = true;
}

function send(id, msg) {
  for(var i in dogis) {
    if(dogis[i]["id"] === id) {
      dogis[i]["socket"].write(msg);
      return true;
    }
  }

  return false;
}

exports.send = send;
exports.begin = begin;
exports.getBegin = getBegin;
