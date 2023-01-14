"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createjs", {
  enumerable: true,
  get: function get() {
    return _createjs.default;
  }
});
Object.defineProperty(exports, "createxliff", {
  enumerable: true,
  get: function get() {
    return _createxliff.default;
  }
});
Object.defineProperty(exports, "createxliff12", {
  enumerable: true,
  get: function get() {
    return _createxliff2.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "js2xliff", {
  enumerable: true,
  get: function get() {
    return _js2xliff.default;
  }
});
Object.defineProperty(exports, "jsToXliff12", {
  enumerable: true,
  get: function get() {
    return _jsToXliff.default;
  }
});
Object.defineProperty(exports, "sourceOfjs", {
  enumerable: true,
  get: function get() {
    return _sourceOfjs.default;
  }
});
Object.defineProperty(exports, "targetOfjs", {
  enumerable: true,
  get: function get() {
    return _targetOfjs.default;
  }
});
Object.defineProperty(exports, "xliff12ToJs", {
  enumerable: true,
  get: function get() {
    return _xliff12ToJs.default;
  }
});
Object.defineProperty(exports, "xliff2js", {
  enumerable: true,
  get: function get() {
    return _xliff2js.default;
  }
});
var _xliff2js = _interopRequireDefault(require("./xliff2js.js"));
var _xliff12ToJs = _interopRequireDefault(require("./xliff12ToJs.js"));
var _js2xliff = _interopRequireDefault(require("./js2xliff.js"));
var _jsToXliff = _interopRequireDefault(require("./jsToXliff12.js"));
var _targetOfjs = _interopRequireDefault(require("./targetOfjs.js"));
var _sourceOfjs = _interopRequireDefault(require("./sourceOfjs.js"));
var _createjs = _interopRequireDefault(require("./createjs.js"));
var _createxliff = _interopRequireDefault(require("./createxliff.js"));
var _createxliff2 = _interopRequireDefault(require("./createxliff12.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  xliff2js: _xliff2js.default,
  xliff12ToJs: _xliff12ToJs.default,
  js2xliff: _js2xliff.default,
  jsToXliff12: _jsToXliff.default,
  targetOfjs: _targetOfjs.default,
  sourceOfjs: _sourceOfjs.default,
  createjs: _createjs.default,
  createxliff: _createxliff.default,
  createxliff12: _createxliff2.default
};
exports.default = _default;