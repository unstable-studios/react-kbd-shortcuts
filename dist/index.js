"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Key", {
  enumerable: true,
  get: function get() {
    return _Key["default"];
  }
});
Object.defineProperty(exports, "KeyCombo", {
  enumerable: true,
  get: function get() {
    return _KeyCombo["default"];
  }
});
Object.defineProperty(exports, "useKeyCombo", {
  enumerable: true,
  get: function get() {
    return _hooks.useKeyCombo;
  }
});
var _Key = _interopRequireDefault(require("./components/Key"));
var _KeyCombo = _interopRequireDefault(require("./components/KeyCombo"));
var _hooks = require("./hooks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }