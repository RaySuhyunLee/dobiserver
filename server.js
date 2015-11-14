var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("[Server] Request for " + pathname + " received");

    route(handle, pathname, request, response);
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has started on port 8000. Press Ctlr + c to stop.");
}

exports.start = start;
