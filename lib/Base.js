"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _minionClassNames = require("./minionClassNames");

var _minionClassNames2 = _interopRequireDefault(_minionClassNames);

var Base = function Base(_ref) {
  var className = _ref.className;
  var componentClassName = _ref.componentClassName;
  var minions = _ref.minions;
  var tagName = _ref.tagName;

  var props = _objectWithoutProperties(_ref, ["className", "componentClassName", "minions", "tagName"]);

  var TagName = tagName || "div";

  return _react2["default"].createElement(TagName, _extends({}, props, { className: (0, _minionClassNames2["default"])(minions, componentClassName, className) }));
};

Base.propTypes = {
  className: _react.PropTypes.string.isRequired,
  componentClassName: _react.PropTypes.string.isRequired,
  minions: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
    mn: _react.PropTypes.string,
    xs: _react.PropTypes.string,
    sm: _react.PropTypes.string,
    md: _react.PropTypes.string,
    lg: _react.PropTypes.string,
    xl: _react.PropTypes.string
  })]).isRequired,
  tagName: _react.PropTypes.string.isRequired
};

Base.defaultProps = {
  className: "",
  componentClassName: "Base",
  minions: "",
  tagName: "div"
};

exports["default"] = Base;
module.exports = exports["default"];