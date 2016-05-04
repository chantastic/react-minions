"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var getUnitShorthand = function getUnitShorthand(u) {
  return u.slice(0, 1);
};

var Base = function Base(_ref) {
  var m = _ref.m;
  var my = _ref.my;
  var mx = _ref.mx;
  var mt = _ref.mt;
  var mr = _ref.mr;
  var mb = _ref.mb;
  var ml = _ref.ml;
  var p = _ref.p;
  var py = _ref.py;
  var px = _ref.px;
  var pt = _ref.pt;
  var pr = _ref.pr;
  var pb = _ref.pb;
  var pl = _ref.pl;
  var unit = _ref.unit;
  var className = _ref.className;

  var props = _objectWithoutProperties(_ref, ["m", "my", "mx", "mt", "mr", "mb", "ml", "p", "py", "px", "pt", "pr", "pb", "pl", "unit", "className"]);

  var classes = (0, _classnames2["default"])({}, typeof className === "string" && className, typeof className === "object" && typeof className.mn === "string" && className.mn.split(" ").map(function (c) {
    return c + "@mn";
  }).join(" "), typeof className === "object" && typeof className.xs === "string" && className.xs.split(" ").map(function (c) {
    return c + "@xs";
  }).join(" "), typeof className === "object" && typeof className.sm === "string" && className.sm.split(" ").map(function (c) {
    return c + "@sm";
  }).join(" "), typeof className === "object" && typeof className.md === "string" && className.md.split(" ").map(function (c) {
    return c + "@md";
  }).join(" "), typeof className === "object" && typeof className.lg === "string" && className.lg.split(" ").map(function (c) {
    return c + "@lg";
  }).join(" "), typeof className === "object" && typeof className.xl === "string" && className.xl.split(" ").map(function (c) {
    return c + "@xl";
  }).join(" "), typeof m === "number" && "m-" + m + getUnitShorthand(unit), typeof m === "object" && typeof m.mn === "number" && "m-" + m.mn + getUnitShorthand(unit) + "@mn", typeof m === "object" && typeof m.xs === "number" && "m-" + m.xs + getUnitShorthand(unit) + "@xs", typeof m === "object" && typeof m.sm === "number" && "m-" + m.sm + getUnitShorthand(unit) + "@sm", typeof m === "object" && typeof m.md === "number" && "m-" + m.md + getUnitShorthand(unit) + "@md", typeof m === "object" && typeof m.lg === "number" && "m-" + m.lg + getUnitShorthand(unit) + "@lg", typeof m === "object" && typeof m.xl === "number" && "m-" + m.xl + getUnitShorthand(unit) + "@xl", typeof my === "number" && "my-" + my + getUnitShorthand(unit), typeof my === "object" && typeof my.mn === "number" && "my-" + my.mn + getUnitShorthand(unit) + "@mn", typeof my === "object" && typeof my.xs === "number" && "my-" + my.xs + getUnitShorthand(unit) + "@xs", typeof my === "object" && typeof my.sm === "number" && "my-" + my.sm + getUnitShorthand(unit) + "@sm", typeof my === "object" && typeof my.md === "number" && "my-" + my.md + getUnitShorthand(unit) + "@md", typeof my === "object" && typeof my.lg === "number" && "my-" + my.lg + getUnitShorthand(unit) + "@lg", typeof my === "object" && typeof my.xl === "number" && "my-" + my.xl + getUnitShorthand(unit) + "@xl", typeof mx === "number" && "mx-" + mx + getUnitShorthand(unit), typeof mx === "object" && typeof mx.mn === "number" && "mx-" + mx.mn + getUnitShorthand(unit) + "@mn", typeof mx === "object" && typeof mx.xs === "number" && "mx-" + mx.xs + getUnitShorthand(unit) + "@xs", typeof mx === "object" && typeof mx.sm === "number" && "mx-" + mx.sm + getUnitShorthand(unit) + "@sm", typeof mx === "object" && typeof mx.md === "number" && "mx-" + mx.md + getUnitShorthand(unit) + "@md", typeof mx === "object" && typeof mx.lg === "number" && "mx-" + mx.lg + getUnitShorthand(unit) + "@lg", typeof mx === "object" && typeof mx.xl === "number" && "mx-" + mx.xl + getUnitShorthand(unit) + "@xl", typeof mt === "number" && "mt-" + mt + getUnitShorthand(unit), typeof mt === "object" && typeof mt.mn === "number" && "mt-" + mt.mn + getUnitShorthand(unit) + "@mn", typeof mt === "object" && typeof mt.xs === "number" && "mt-" + mt.xs + getUnitShorthand(unit) + "@xs", typeof mt === "object" && typeof mt.sm === "number" && "mt-" + mt.sm + getUnitShorthand(unit) + "@sm", typeof mt === "object" && typeof mt.md === "number" && "mt-" + mt.md + getUnitShorthand(unit) + "@md", typeof mt === "object" && typeof mt.lg === "number" && "mt-" + mt.lg + getUnitShorthand(unit) + "@lg", typeof mt === "object" && typeof mt.xl === "number" && "mt-" + mt.xl + getUnitShorthand(unit) + "@xl", typeof mr === "number" && "mr-" + mr + getUnitShorthand(unit), typeof mr === "object" && typeof mr.mn === "number" && "mr-" + mr.mn + getUnitShorthand(unit) + "@mn", typeof mr === "object" && typeof mr.xs === "number" && "mr-" + mr.xs + getUnitShorthand(unit) + "@xs", typeof mr === "object" && typeof mr.sm === "number" && "mr-" + mr.sm + getUnitShorthand(unit) + "@sm", typeof mr === "object" && typeof mr.md === "number" && "mr-" + mr.md + getUnitShorthand(unit) + "@md", typeof mr === "object" && typeof mr.lg === "number" && "mr-" + mr.lg + getUnitShorthand(unit) + "@lg", typeof mr === "object" && typeof mr.xl === "number" && "mr-" + mr.xl + getUnitShorthand(unit) + "@xl", typeof mb === "number" && "mb-" + mb + getUnitShorthand(unit), typeof mb === "object" && typeof mb.mn === "number" && "mb-" + mb.mn + getUnitShorthand(unit) + "@mn", typeof mb === "object" && typeof mb.xs === "number" && "mb-" + mb.xs + getUnitShorthand(unit) + "@xs", typeof mb === "object" && typeof mb.sm === "number" && "mb-" + mb.sm + getUnitShorthand(unit) + "@sm", typeof mb === "object" && typeof mb.md === "number" && "mb-" + mb.md + getUnitShorthand(unit) + "@md", typeof mb === "object" && typeof mb.lg === "number" && "mb-" + mb.lg + getUnitShorthand(unit) + "@lg", typeof mb === "object" && typeof mb.xl === "number" && "mb-" + mb.xl + getUnitShorthand(unit) + "@xl", typeof ml === "number" && "ml-" + ml + getUnitShorthand(unit), typeof ml === "object" && typeof ml.mn === "number" && "ml-" + ml.mn + getUnitShorthand(unit) + "@mn", typeof ml === "object" && typeof ml.xs === "number" && "ml-" + ml.xs + getUnitShorthand(unit) + "@xs", typeof ml === "object" && typeof ml.sm === "number" && "ml-" + ml.sm + getUnitShorthand(unit) + "@sm", typeof ml === "object" && typeof ml.md === "number" && "ml-" + ml.md + getUnitShorthand(unit) + "@md", typeof ml === "object" && typeof ml.lg === "number" && "ml-" + ml.lg + getUnitShorthand(unit) + "@lg", typeof ml === "object" && typeof ml.xl === "number" && "ml-" + ml.xl + getUnitShorthand(unit) + "@xl", typeof p === "number" && "p-" + p + getUnitShorthand(unit), typeof p === "object" && typeof p.mn === "number" && "p-" + p.mn + getUnitShorthand(unit) + "@mn", typeof p === "object" && typeof p.xs === "number" && "p-" + p.xs + getUnitShorthand(unit) + "@xs", typeof p === "object" && typeof p.sm === "number" && "p-" + p.sm + getUnitShorthand(unit) + "@sm", typeof p === "object" && typeof p.md === "number" && "p-" + p.md + getUnitShorthand(unit) + "@md", typeof p === "object" && typeof p.lg === "number" && "p-" + p.lg + getUnitShorthand(unit) + "@lg", typeof p === "object" && typeof p.xl === "number" && "p-" + p.xl + getUnitShorthand(unit) + "@xl", typeof py === "number" && "py-" + py + getUnitShorthand(unit), typeof py === "object" && typeof py.mn === "number" && "py-" + py.mn + getUnitShorthand(unit) + "@mn", typeof py === "object" && typeof py.xs === "number" && "py-" + py.xs + getUnitShorthand(unit) + "@xs", typeof py === "object" && typeof py.sm === "number" && "py-" + py.sm + getUnitShorthand(unit) + "@sm", typeof py === "object" && typeof py.md === "number" && "py-" + py.md + getUnitShorthand(unit) + "@md", typeof py === "object" && typeof py.lg === "number" && "py-" + py.lg + getUnitShorthand(unit) + "@lg", typeof py === "object" && typeof py.xl === "number" && "py-" + py.xl + getUnitShorthand(unit) + "@xl", typeof px === "number" && "px-" + px + getUnitShorthand(unit), typeof px === "object" && typeof px.mn === "number" && "px-" + px.mn + getUnitShorthand(unit) + "@mn", typeof px === "object" && typeof px.xs === "number" && "px-" + px.xs + getUnitShorthand(unit) + "@xs", typeof px === "object" && typeof px.sm === "number" && "px-" + px.sm + getUnitShorthand(unit) + "@sm", typeof px === "object" && typeof px.md === "number" && "px-" + px.md + getUnitShorthand(unit) + "@md", typeof px === "object" && typeof px.lg === "number" && "px-" + px.lg + getUnitShorthand(unit) + "@lg", typeof px === "object" && typeof px.xl === "number" && "px-" + px.xl + getUnitShorthand(unit) + "@xl", typeof pt === "number" && "pt-" + pt + getUnitShorthand(unit), typeof pt === "object" && typeof pt.mn === "number" && "pt-" + pt.mn + getUnitShorthand(unit) + "@mn", typeof pt === "object" && typeof pt.xs === "number" && "pt-" + pt.xs + getUnitShorthand(unit) + "@xs", typeof pt === "object" && typeof pt.sm === "number" && "pt-" + pt.sm + getUnitShorthand(unit) + "@sm", typeof pt === "object" && typeof pt.md === "number" && "pt-" + pt.md + getUnitShorthand(unit) + "@md", typeof pt === "object" && typeof pt.lg === "number" && "pt-" + pt.lg + getUnitShorthand(unit) + "@lg", typeof pt === "object" && typeof pt.xl === "number" && "pt-" + pt.xl + getUnitShorthand(unit) + "@xl", typeof pr === "number" && "pr-" + pr + getUnitShorthand(unit), typeof pr === "object" && typeof pr.mn === "number" && "pr-" + pr.mn + getUnitShorthand(unit) + "@mn", typeof pr === "object" && typeof pr.xs === "number" && "pr-" + pr.xs + getUnitShorthand(unit) + "@xs", typeof pr === "object" && typeof pr.sm === "number" && "pr-" + pr.sm + getUnitShorthand(unit) + "@sm", typeof pr === "object" && typeof pr.md === "number" && "pr-" + pr.md + getUnitShorthand(unit) + "@md", typeof pr === "object" && typeof pr.lg === "number" && "pr-" + pr.lg + getUnitShorthand(unit) + "@lg", typeof pr === "object" && typeof pr.xl === "number" && "pr-" + pr.xl + getUnitShorthand(unit) + "@xl", typeof pb === "number" && "pb-" + pb + getUnitShorthand(unit), typeof pb === "object" && typeof pb.mn === "number" && "pb-" + pb.mn + getUnitShorthand(unit) + "@mn", typeof pb === "object" && typeof pb.xs === "number" && "pb-" + pb.xs + getUnitShorthand(unit) + "@xs", typeof pb === "object" && typeof pb.sm === "number" && "pb-" + pb.sm + getUnitShorthand(unit) + "@sm", typeof pb === "object" && typeof pb.md === "number" && "pb-" + pb.md + getUnitShorthand(unit) + "@md", typeof pb === "object" && typeof pb.lg === "number" && "pb-" + pb.lg + getUnitShorthand(unit) + "@lg", typeof pb === "object" && typeof pb.xl === "number" && "pb-" + pb.xl + getUnitShorthand(unit) + "@xl", typeof pl === "number" && "pl-" + pl + getUnitShorthand(unit), typeof pl === "object" && typeof pl.mn === "number" && "pl-" + pl.mn + getUnitShorthand(unit) + "@mn", typeof pl === "object" && typeof pl.xs === "number" && "pl-" + pl.xs + getUnitShorthand(unit) + "@xs", typeof pl === "object" && typeof pl.sm === "number" && "pl-" + pl.sm + getUnitShorthand(unit) + "@sm", typeof pl === "object" && typeof pl.md === "number" && "pl-" + pl.md + getUnitShorthand(unit) + "@md", typeof pl === "object" && typeof pl.lg === "number" && "pl-" + pl.lg + getUnitShorthand(unit) + "@lg", typeof pl === "object" && typeof pl.xl === "number" && "pl-" + pl.xl + getUnitShorthand(unit) + "@xl");

  return _react2["default"].createElement("div", _extends({}, props, { className: classes }));
};

var SCALE = _react.PropTypes.oneOf([0, .25, .5, .75, 1, 2, 3, 4]);

var MEASUREMENTS = _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.shape({
  mn: SCALE,
  xs: SCALE,
  sm: SCALE,
  md: SCALE,
  lg: SCALE,
  xl: SCALE
})]);

var UNITS = _react.PropTypes.oneOf(["px", "em", "rem", "p", "e", "r"]);

/*eslint-disable react/sort-prop-types */
Base.propTypes = {
  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
    mn: _react.PropTypes.string,
    xs: _react.PropTypes.string,
    sm: _react.PropTypes.string,
    md: _react.PropTypes.string,
    lg: _react.PropTypes.string,
    xl: _react.PropTypes.string
  })]).isRequired,
  m: MEASUREMENTS,
  my: MEASUREMENTS,
  mx: MEASUREMENTS,
  mt: MEASUREMENTS,
  mr: MEASUREMENTS,
  mb: MEASUREMENTS,
  ml: MEASUREMENTS,
  p: MEASUREMENTS,
  py: MEASUREMENTS,
  px: MEASUREMENTS,
  pt: MEASUREMENTS,
  pr: MEASUREMENTS,
  pb: MEASUREMENTS,
  pl: MEASUREMENTS,
  unit: UNITS.isRequired
};
/*eslint-enable react/sort-prop-types */

Base.defaultProps = {
  className: "",
  unit: "rem"
};

exports["default"] = Base;
module.exports = exports["default"];