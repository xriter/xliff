import convert from 'xml-js';
import ElementTypes2 from './inline-elements/ElementTypes2.js';
import { makeElement, makeText, makeValue } from './xml-js/objectToXml.js';
import escape from './util/escape.js';
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
  var root = makeElement('xliff', rootAttributes, true);
  Object.keys(obj.resources).forEach(function (nsName) {
    var fileChildren = createUnitTags(obj.resources[nsName]);
    var f = makeElement('file', {
      id: nsName
    }, fileChildren);
    root.elements.push(f);
  });
  var xmlJs = {
    elements: [root]
  };
  var xml = convert.js2xml(xmlJs, options);
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
  return makeElement('group', Object.assign({
    id: escape(id)
  }, additionalAttributes), groupUnits);
}
function createUnitTag(id, unit) {
  var segment = makeElement('segment', null, true);
  if (!unit.source && unit.target) unit.source = '';
  if (unit.source) segment.elements.push(makeElement('source', null, makeValue(unit.source, ElementTypes2)));
  if (unit.target !== undefined) segment.elements.push(makeElement('target', null, makeValue(unit.target, ElementTypes2)));
  var subEle = [segment];
  if ('note' in unit) {
    var noteElms = [];
    createNoteObjects(unit.note).forEach(function (noteObj) {
      noteElms.push(makeElement('note', null, [noteObj]));
    });
    subEle.unshift(makeElement('notes', null, noteElms));
  }
  var additionalAttributes = unit.additionalAttributes != null ? unit.additionalAttributes : {};
  return makeElement('unit', Object.assign({
    id: escape(id)
  }, additionalAttributes), subEle);
}
function createNoteObjects(note) {
  var arrNote = [];
  var baseNote = makeText(note);
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
export default js2xliff;