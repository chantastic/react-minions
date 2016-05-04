require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMinions = require("react-minions");

var App = function App() {
  return _react2["default"].createElement(
    "div",
    null,
    _react2["default"].createElement(
      "article",
      null,
      _react2["default"].createElement(
        "h2",
        null,
        "Base"
      ),
      _react2["default"].createElement(
        "section",
        null,
        _react2["default"].createElement(
          "h3",
          null,
          "className (object)"
        ),
        _react2["default"].createElement(
          "code",
          null,
          "Base"
        ),
        " is a unique component. It can take a string or object as \"className\". If you provide an object, it'll honor these keys:",
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
        ".",
        _react2["default"].createElement(
          "h4",
          null,
          "Example"
        ),
        _react2["default"].createElement(
          "pre",
          null,
          _react2["default"].createElement(
            "code",
            null,
            "<Base className={{ mn: \"p-0\", md: \"p-1\" }} />\n\n// => <div class=\"p-0@mn p-1@md\"></div>"
          )
        )
      ),
      _react2["default"].createElement(
        "section",
        null,
        _react2["default"].createElement(
          "h3",
          null,
          "Props (number)"
        ),
        _react2["default"].createElement(
          "code",
          null,
          "Base"
        ),
        " accepts accepts a number of style props as well. Thes correlate directly to minions classes.",
        _react2["default"].createElement(
          "h4",
          null,
          "Example"
        ),
        _react2["default"].createElement(
          "pre",
          null,
          _react2["default"].createElement(
            "code",
            null,
            "<Base m={1} p={2} />\n\n// => <div class=\"m-1r p-2r\"></div>"
          )
        )
      ),
      _react2["default"].createElement(
        "section",
        null,
        _react2["default"].createElement(
          "h3",
          null,
          "Props (object)"
        ),
        _react2["default"].createElement(
          "code",
          null,
          "Base"
        ),
        " also accepts objects for all the same props, and keys that mirror the className prop:",
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
        ".",
        _react2["default"].createElement(
          "h4",
          null,
          "Example"
        ),
        _react2["default"].createElement(
          "pre",
          null,
          _react2["default"].createElement(
            "code",
            null,
            "<Base m={{ mn: 0, md: 1 }} p={{ mn: 1, md: 2 }} />\n\n// => <div class=\"m-0r@mn m-1r@md p-1@mn p-2r@md\"></div>"
          )
        )
      )
    )
  );
};

_reactDom2["default"].render(_react2["default"].createElement(App, null), document.getElementById("app"));

},{"react":undefined,"react-dom":undefined,"react-minions":undefined}]},{},[1]);
