"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyCombo = useKeyCombo;
var _parseKeyCombo = require("../utils/parseKeyCombo");
// Headless hook: parses input and returns normalized keys
function useKeyCombo(input) {
  var useSymbols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _parseKeyCombo.parseKeyCombo)(input, useSymbols);
}