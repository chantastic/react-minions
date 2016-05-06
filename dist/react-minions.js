(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactMinions = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./minionClassNames":5}],2:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Base":1}],3:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Base":1,"./minionClassNames":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _Base = require("./Base");

var _Base2 = _interopRequireDefault(_Base);

var _Block = require("./Block");

var _Block2 = _interopRequireDefault(_Block);

var _Debug = require("./Debug");

var _Debug2 = _interopRequireDefault(_Debug);

exports["default"] = {
  Base: _Base2["default"],
  Block: _Block2["default"],
  Debug: _Debug2["default"]
};
module.exports = exports["default"];

},{"./Base":1,"./Block":2,"./Debug":3}],5:[function(require,module,exports){
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

},{"classnames":undefined}]},{},[4])(4)
});