var url = require("url");
var tcpserver = require("./tcp/tcpserver");

// not implemented
function list(request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end();
}

function control(request, response) {
  var queryData = url.parse(request.url, true).query;
  var result = tcpserver.send(parseInt(queryData["id"])
      , queryData["toggle"]);
  resp = {"result": result};
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(JSON.stringify(resp));
  response.end();
}

exports.control = control;
