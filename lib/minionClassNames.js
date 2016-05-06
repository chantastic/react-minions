"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

exports["default"] = function (minionClassNames) {
  for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    other[_key - 1] = arguments[_key];
  }

  return (0, _classnames2["default"])(other, typeof minionClassNames === "object" && typeof minionClassNames.mn === "string" && minionClassNames.mn.split(" ").map(function (c) {
    return c + "@mn";
  }).join(" "), typeof minionClassNames === "object" && typeof minionClassNames.xs === "string" && minionClassNames.xs.split(" ").map(function (c) {
    return c + "@xs";
  }).join(" "), typeof minionClassNames === "object" && typeof minionClassNames.sm === "string" && minionClassNames.sm.split(" ").map(function (c) {
    return c + "@sm";
  }).join(" "), typeof minionClassNames === "object" && typeof minionClassNames.md === "string" && minionClassNames.md.split(" ").map(function (c) {
    return c + "@md";
  }).join(" "), typeof minionClassNames === "object" && typeof minionClassNames.lg === "string" && minionClassNames.lg.split(" ").map(function (c) {
    return c + "@lg";
  }).join(" "), typeof minionClassNames === "object" && typeof minionClassNames.xl === "string" && minionClassNames.xl.split(" ").map(function (c) {
    return c + "@xl";
  }).join(" "));
};

module.exports = exports["default"];