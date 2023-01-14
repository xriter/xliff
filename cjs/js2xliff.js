"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _xmlJs = _interopRequireDefault(require("xml-js"));
var _ElementTypes = _interopRequireDefault(require("./inline-elements/ElementTypes2.js"));
var _objectToXml = require("./xml-js/objectToXml.js");
var _escape = _interopRequireDefault(require("./util/escape.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var js2xliffClb = function js2xliffClb(obj, opt, cb) {
  if (!cb && typeof opt === 'function') {
    cb = opt;
    opt = {
      indent: '  '
    };
  }
  opt = opt || {
    indent: '  '
  };
  var options = {
    spaces: opt.indent !== undefined ? opt.indent : '  '
  };
  var rootAttributes = {
    xmlns: 'urn:oasis:names:tc:xliff:document:2.0',
    version: '2.0',
    srcLang: obj.sourceLanguage,
    trgLang: obj.targetLanguage
  };
  var root = (0, _objectToXml.makeElement)('xliff', rootAttributes, true);
  Object.keys(obj.resources).forEach(function (nsName) {
    var fileChildren = createUnitTags(obj.resources[nsName]);
    var f = (0, _objectToXml.makeElement)('file', {
      id: nsName
    }, fileChildren);
    root.elements.push(f);
  });
  var xmlJs = {
    elements: [root]
  };
  var xml = _xmlJs.default.js2xml(xmlJs, options);
  if (cb) cb(null, xml);
  return xml;
};
function createUnitTags(unitElements) {
  return Object.keys(unitElements).map(function (key) {
    if (unitElements[key].groupUnits) {
      return createGroupUnitTag(key, unitElements[key]);
    } else {
      return createUnitTag(key, unitElements[key]);
    }
  });
}
function createGroupUnitTag(id, group) {
  var additionalAttributes = group.additionalAttributes != null ? group.additionalAttributes : {};
  var groupUnits = createUnitTags(group.groupUnits);
  return (0, _objectToXml.makeElement)('group', Object.assign({
    id: (0, _escape.default)(id)
  }, additionalAttributes), groupUnits);
}
function createUnitTag(id, unit) {
  var segment = (0, _objectToXml.makeElement)('segment', null, true);
  if (!unit.source && unit.target) unit.source = '';
  if (unit.source) segment.elements.push((0, _objectToXml.makeElement)('source', null, (0, _objectToXml.makeValue)(unit.source, _ElementTypes.default)));
  if (unit.target !== undefined) segment.elements.push((0, _objectToXml.makeElement)('target', null, (0, _objectToXml.makeValue)(unit.target, _ElementTypes.default)));
  var subEle = [segment];
  if ('note' in unit) {
    var noteElms = [];
    createNoteObjects(unit.note).forEach(function (noteObj) {
      noteElms.push((0, _objectToXml.makeElement)('note', null, [noteObj]));
    });
    subEle.unshift((0, _objectToXml.makeElement)('notes', null, noteElms));
  }
  var additionalAttributes = unit.additionalAttributes != null ? unit.additionalAttributes : {};
  return (0, _objectToXml.makeElement)('unit', Object.assign({
    id: (0, _escape.default)(id)
  }, additionalAttributes), subEle);
}
function createNoteObjects(note) {
  var arrNote = [];
  var baseNote = (0, _objectToXml.makeText)(note);
  if (Array.isArray(baseNote.text)) {
    baseNote.text.forEach(function (text) {
      arrNote.push({
        type: baseNote.type,
        text: text
      });
    });
  } else {
    arrNote.push(baseNote);
  }
  return arrNote;
}
var js2xliff = function js2xliff(obj, opt, cb) {
  if (!cb && opt === undefined) {
    return new Promise(function (resolve, reject) {
      return js2xliffClb(obj, opt, function (err, ret) {
        return err ? reject(err) : resolve(ret);
      });
    });
  }
  if (!cb && typeof opt !== 'function') {
    return new Promise(function (resolve, reject) {
      return js2xliffClb(obj, opt, function (err, ret) {
        return err ? reject(err) : resolve(ret);
      });
    });
  }
  return js2xliffClb(obj, opt, cb);
};
js2xliff.js2xliffClb = js2xliffClb;
var _default = js2xliff;
exports.default = _default;
module.exports = exports.default;