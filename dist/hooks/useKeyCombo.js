"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyCombo = useKeyCombo;
var _parseKeyCombo = require("../utils/parseKeyCombo");
// Headless hook: parses input and returns normalized keys
function useKeyCombo(input) {
  return (0, _parseKeyCombo.parseKeyCombo)(input);
}