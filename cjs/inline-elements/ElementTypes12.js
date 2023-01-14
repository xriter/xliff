"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ElementTypes = _interopRequireDefault(require("./ElementTypes.js"));
var _makeInlineElement = _interopRequireDefault(require("./makeInlineElement.js"));
var _elementTypeToTagMap, _factories;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = {
  elementTypeToTagMap: (_elementTypeToTagMap = {}, _defineProperty(_elementTypeToTagMap, _ElementTypes.default.Standalone, 'x'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.GenericSpan, 'g'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.GenericSpanStart, 'bx'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.GenericSpanEnd, 'ex'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.Span, 'ph'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.SpanStart, 'bpt'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.SpanEnd, 'ept'), _defineProperty(_elementTypeToTagMap, _ElementTypes.default.Marker, 'mrk'), _elementTypeToTagMap),
  tagToElementTypeMap: {
    x: _ElementTypes.default.Standalone,
    g: _ElementTypes.default.GenericSpan,
    bx: _ElementTypes.default.GenericSpanStart,
    ex: _ElementTypes.default.GenericSpanEnd,
    ph: _ElementTypes.default.Span,
    bpt: _ElementTypes.default.SpanStart,
    ept: _ElementTypes.default.SpanEnd,
    mrk: _ElementTypes.default.Marker
  },
  factories: (_factories = {}, _defineProperty(_factories, _ElementTypes.default.Standalone, function (attributes) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.Standalone, attributes);
  }), _defineProperty(_factories, _ElementTypes.default.GenericSpan, function (attributes, contents) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.GenericSpan, attributes, contents);
  }), _defineProperty(_factories, _ElementTypes.default.GenericSpanStart, function (attributes) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.GenericSpanStart, attributes);
  }), _defineProperty(_factories, _ElementTypes.default.GenericSpanEnd, function (attributes) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.GenericSpanEnd, attributes);
  }), _defineProperty(_factories, _ElementTypes.default.Span, function (attributes, contents) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.Span, attributes, contents);
  }), _defineProperty(_factories, _ElementTypes.default.SpanStart, function (attributes, contents) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.SpanStart, attributes, contents);
  }), _defineProperty(_factories, _ElementTypes.default.SpanEnd, function (attributes, contents) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.SpanEnd, attributes, contents);
  }), _defineProperty(_factories, _ElementTypes.default.Marker, function (attributes, contents) {
    return (0, _makeInlineElement.default)(_ElementTypes.default.Marker, attributes, contents);
  }), _factories)
};
exports.default = _default;
module.exports = exports.default;