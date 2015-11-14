var server = require("./server");
var router = require("./router");
var deviceController = require("./deviceController");
var sequenceController = require("./sequenceController");
var tcpserver = require("./tcp/tcpserver");

var handle = {}
//handle["/device/list"] = deviceController.list;
handle["/device/control"] = deviceController.control;
//handle["/sequece/add"] = sequenceController.add;
//handle["/sequence/edit"] = sequenceController.edit;
//handle["/sequence/delete"] = sequenceController.remove;

tcpserver.start();
server.start(router.route, handle);
