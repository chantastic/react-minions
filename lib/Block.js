"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Base = require("./Base");

var _Base2 = _interopRequireDefault(_Base);

function getStyles(style) {
  return _extends({}, style, {
    display: "block"
  });
}

function getProps(_ref) {
  var style = _ref.style;

  var props = _objectWithoutProperties(_ref, ["style"]);

  return _extends({
    tagName: "div"
  }, props, {
    componentClassName: "Block",
    style: getStyles(style)
  });
}

var Block = function Block(props) {
  return _react2["default"].createElement(_Base2["default"], getProps(props));
};

exports["default"] = Block;
module.exports = exports["default"];