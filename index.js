var server = require("./server");
var router = require("./router");
var deviceController = require("./deviceController");
var sequenceController = require("./sequenceController");

var handle = {}
//handle["/device/list"] = deviceController.list;
handle["/device/control"] = deviceController.control;
//handle["/sequece/add"] = sequenceController.add;
//handle["/sequence/edit"] = sequenceController.edit;
//handle["/sequence/delete"] = sequenceController.remove;

server.start(router.route, handle);
