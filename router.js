function route(handle, pathname, request, response) {
  if(typeof handle[pathname] === 'function') {
    handle[pathname](request, response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Wrong command");
    response.end();
  }
}

exports.route = route;
