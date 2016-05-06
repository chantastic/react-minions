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

var _minionClassNames = require("./minionClassNames");

var _minionClassNames2 = _interopRequireDefault(_minionClassNames);

function getStyles(style) {
  return _extends({}, style, {
    display: "debug"
  });
}

function getProps(_ref) {
  var style = _ref.style;

  var props = _objectWithoutProperties(_ref, ["style"]);

  return _extends({
    tagName: "div"
  }, props, {
    componentClassName: "Debug",
    style: getStyles(style)
  });
}

var DataSection = function DataSection(_ref2) {
  var data = _ref2.data;
  var title = _ref2.title;

  var props = _objectWithoutProperties(_ref2, ["data", "title"]);

  return _react2["default"].createElement(
    "section",
    { className: "mb-1r bbw-1p bc-l.9" },
    _react2["default"].createElement(
      "strong",
      null,
      title
    ),
    _react2["default"].createElement(
      "pre",
      { className: "p-1 gc-l.9 bs-3p" },
      _react2["default"].createElement(
        "code",
        null,
        typeof data === "object" ? JSON.stringify(data, null, 2) : data
      )
    )
  );
};

var Debug = function Debug(props) {
  var className = props.className;
  var minions = props.minions;

  return _react2["default"].createElement(
    _Base2["default"],
    null,
    _react2["default"].createElement(
      "h3",
      null,
      "DEBUG"
    ),
    _react2["default"].createElement(DataSection, {
      title: "props",
      data: props
    }),
    _react2["default"].createElement(DataSection, {
      title: "minions resolved className",
      data: (0, _minionClassNames2["default"])(minions, className)
    })
  );
};

exports["default"] = Debug;
module.exports = exports["default"];