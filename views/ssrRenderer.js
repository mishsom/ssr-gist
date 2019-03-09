"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./component/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return (0, _server.renderToString)(_react.default.createElement(_App.default, null));
};

exports.default = _default;