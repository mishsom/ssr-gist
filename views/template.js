"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(content) {
  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <link rel=\"stylesheet\" href=\"/assets/styles.css\">\n    <title>Title</title>\n</head>\n<body>\n<div id=\"root\">".concat(content, "</div>\n<script src=\"/assets/bundle.js\"></script>\n</body>\n</html>");
};

exports.default = _default;