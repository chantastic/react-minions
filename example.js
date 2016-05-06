require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMinions = require("react-minions");

var _srcMinionize = require("../../src/Minionize");

var _srcMinionize2 = _interopRequireDefault(_srcMinionize);

var APIArticle = function APIArticle(_ref) {
  var abstract = _ref.abstract;
  var children = _ref.children;
  var example = _ref.example;
  var title = _ref.title;
  var usage = _ref.usage;

  var props = _objectWithoutProperties(_ref, ["abstract", "children", "example", "title", "usage"]);

  return _react2["default"].createElement(
    "article",
    props,
    _react2["default"].createElement(
      "h2",
      null,
      title
    ),
    _react2["default"].createElement(
      "p",
      null,
      abstract
    ),
    children,
    _react2["default"].createElement(
      "h3",
      null,
      "Usage"
    ),
    usage,
    _react2["default"].createElement(
      "h3",
      null,
      "Example"
    ),
    _react2["default"].createElement(
      "pre",
      null,
      _react2["default"].createElement(
        "code",
        null,
        example
      )
    )
  );
};
APIArticle.propTypes = {
  abstract: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node.isRequired,
  example: _react.PropTypes.node.isRequired,
  title: _react.PropTypes.string.isRequired,
  usage: _react.PropTypes.node.isRequired
};
APIArticle.defaultProps = {
  children: ""
};

var MyComponent = function MyComponent(props) {
  return _react2["default"].createElement(
    "div",
    props,
    "hi"
  );
};

var MinionizedComponent = (0, _srcMinionize2["default"])(MyComponent);

var App = function App() {
  return _react2["default"].createElement(
    "div",
    null,
    _react2["default"].createElement(
      "div",
      null,
      "Testing ground",
      _react2["default"].createElement(
        _reactMinions.Debug,
        { minions: { mn: "p-0", md: "p-1" } },
        "Testing"
      ),
      _react2["default"].createElement(
        MinionizedComponent,
        { className: "blah", minions: { mn: "p-0", md: "p-1" } },
        "Yo"
      ),
      _react2["default"].createElement(
        _reactMinions.Base,
        { className: "blah", minions: { mn: "p-0", md: "p-1" } },
        "hi"
      )
    ),
    _react2["default"].createElement(APIArticle, {
      abstract: "A classnames wrapper that accepts objects of media-query keywords",
      example: "minionClassNames(this.props.className)",
      title: "minionClassNames",
      usage: "minionClassNames(minions: <Object>, other: <Any>)\nminionClassNames({ mn: \"p-0\", md: \"p-1\" }, \"something-else\")\n\n// => \"something-else p-0@mn p-1@md\""
    }),
    _react2["default"].createElement(APIArticle, {
      abstract: "An HoC for adding minions to existing Components",
      example: "none yet",
      title: "Minionize",
      usage: "const Greeting = (props) => <div {...props} />\n\nconst MinionsGreeting = Minionize(Greeting)\n\n<MinionsGreeting minions={{ mn: \"m-1\" }}>Greeting</MinionsGreeting>\n\n//=> <div class=\"m-1@mn\">Greeting</div>\n"
    }),
    _react2["default"].createElement(APIArticle, {
      abstract: "display: block",
      example: _react2["default"].createElement(
        _reactMinions.Block,
        null,
        "This is a ",
        _react2["default"].createElement(
          "code",
          null,
          "Block"
        )
      ),
      title: "Block",
      usage: "<Block className=\"m-2\" />\n\n// => <div style=\"display: block\" class=\"m-2r\"></div>"
    }),
    _react2["default"].createElement(
      APIArticle,
      {
        abstract: "The foundation of it all",
        example: _react2["default"].createElement(
          _reactMinions.Base,
          null,
          "This is the ",
          _react2["default"].createElement(
            "code",
            null,
            "Base"
          ),
          " component "
        ),
        title: "Base",
        usage: "<Base minions={{ mn: \"p-0\", md: \"p-1\" }} />\n\n// => <div class=\"p-0@mn p-1@md\"></div>"
      },
      _react2["default"].createElement(
        "code",
        null,
        "Base"
      ),
      " is the foundation of the available `react-minions` components. It can be used directly but you might be more inclined to use the provided HoC or `minionClassNames` function. ",
      _react2["default"].createElement(
        "code",
        null,
        "Base"
      ),
      " honor these keys:",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "mn"
      ),
      ",",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "xs"
      ),
      ",",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "sm"
      ),
      ",",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "md"
      ),
      ",",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "lg"
      ),
      ",",
      " ",
      _react2["default"].createElement(
        "code",
        null,
        "xl"
      ),
      "."
    )
  );
};

_reactDom2["default"].render(_react2["default"].createElement(App, null), document.getElementById("app"));

},{"../../src/Minionize":2,"react":undefined,"react-dom":undefined,"react-minions":undefined}],2:[function(require,module,exports){
/* eslint-disable react/prop-types */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _minionClassNames = require("./minionClassNames");

var _minionClassNames2 = _interopRequireDefault(_minionClassNames);

var Minionize = function Minionize(Composed) {
  return (function (_Component) {
    _inherits(Minionize, _Component);

    function Minionize() {
      _classCallCheck(this, Minionize);

      _get(Object.getPrototypeOf(Minionize.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Minionize, [{
      key: "render",
      value: function render() {
        var _props = this.props;
        var className = _props.className;
        var minions = _props.minions;

        var props = _objectWithoutProperties(_props, ["className", "minions"]);

        return _react2["default"].createElement(Composed, _extends({
          className: (0, _minionClassNames2["default"])(minions, className)
        }, props));
      }
    }]);

    return Minionize;
  })(_react.Component);
};

exports["default"] = Minionize;
module.exports = exports["default"];

},{"./minionClassNames":3,"react":undefined}],3:[function(require,module,exports){
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

},{"classnames":undefined}]},{},[1]);
