var _elementTypeToTagMap, _factories;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import ElementTypes from './ElementTypes.js';
import makeInlineElement from './makeInlineElement.js';
export default {
  elementTypeToTagMap: (_elementTypeToTagMap = {}, _defineProperty(_elementTypeToTagMap, ElementTypes.Standalone, 'x'), _defineProperty(_elementTypeToTagMap, ElementTypes.GenericSpan, 'g'), _defineProperty(_elementTypeToTagMap, ElementTypes.GenericSpanStart, 'bx'), _defineProperty(_elementTypeToTagMap, ElementTypes.GenericSpanEnd, 'ex'), _defineProperty(_elementTypeToTagMap, ElementTypes.Span, 'ph'), _defineProperty(_elementTypeToTagMap, ElementTypes.SpanStart, 'bpt'), _defineProperty(_elementTypeToTagMap, ElementTypes.SpanEnd, 'ept'), _defineProperty(_elementTypeToTagMap, ElementTypes.Marker, 'mrk'), _elementTypeToTagMap),
  tagToElementTypeMap: {
    x: ElementTypes.Standalone,
    g: ElementTypes.GenericSpan,
    bx: ElementTypes.GenericSpanStart,
    ex: ElementTypes.GenericSpanEnd,
    ph: ElementTypes.Span,
    bpt: ElementTypes.SpanStart,
    ept: ElementTypes.SpanEnd,
    mrk: ElementTypes.Marker
  },
  factories: (_factories = {}, _defineProperty(_factories, ElementTypes.Standalone, function (attributes) {
    return makeInlineElement(ElementTypes.Standalone, attributes);
  }), _defineProperty(_factories, ElementTypes.GenericSpan, function (attributes, contents) {
    return makeInlineElement(ElementTypes.GenericSpan, attributes, contents);
  }), _defineProperty(_factories, ElementTypes.GenericSpanStart, function (attributes) {
    return makeInlineElement(ElementTypes.GenericSpanStart, attributes);
  }), _defineProperty(_factories, ElementTypes.GenericSpanEnd, function (attributes) {
    return makeInlineElement(ElementTypes.GenericSpanEnd, attributes);
  }), _defineProperty(_factories, ElementTypes.Span, function (attributes, contents) {
    return makeInlineElement(ElementTypes.Span, attributes, contents);
  }), _defineProperty(_factories, ElementTypes.SpanStart, function (attributes, contents) {
    return makeInlineElement(ElementTypes.SpanStart, attributes, contents);
  }), _defineProperty(_factories, ElementTypes.SpanEnd, function (attributes, contents) {
    return makeInlineElement(ElementTypes.SpanEnd, attributes, contents);
  }), _defineProperty(_factories, ElementTypes.Marker, function (attributes, contents) {
    return makeInlineElement(ElementTypes.Marker, attributes, contents);
  }), _factories)
};