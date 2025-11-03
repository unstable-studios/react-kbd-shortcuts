"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseKeyCombo = parseKeyCombo;
// Parses a natural-ish key combo string into an array of normalized key names
// Example: "ctrl+shift+K" => ["Ctrl", "Shift", "K"]
// Example: "command option S" => ["Meta", "Alt", "S"]

var KEY_ALIASES = {
  ctrl: "Ctrl",
  control: "Ctrl",
  cmd: "Meta",
  command: "Meta",
  win: "Meta",
  option: "Alt",
  alt: "Alt",
  shift: "Shift",
  enter: "Enter",
  esc: "Escape",
  escape: "Escape",
  tab: "Tab",
  space: "Space",
  plus: "+"
};
function parseKeyCombo(input) {
  if (!input || typeof input !== "string") return [];
  return input.toLowerCase().replace(/\s*\+\s*/g, "+") // normalize pluses
  .split(/\s+|\+/).map(function (key) {
    return KEY_ALIASES[key] || key.toUpperCase();
  }).filter(Boolean);
}