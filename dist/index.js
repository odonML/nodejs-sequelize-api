"use strict";

require("dotenv/config");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = process.env.PORT;

function main() {
  _app["default"].listen(port, function () {
    return console.log("run server in port ".concat(port));
  });
}

main();