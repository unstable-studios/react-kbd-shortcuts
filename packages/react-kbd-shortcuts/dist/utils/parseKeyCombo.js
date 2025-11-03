const KEY_ALIASES = {
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
  plus: "+",
  minus: "-",
  backspace: "Backspace",
  capslock: "CapsLock",
  insert: "Insert",
  ins: "Insert",
  pause: "Pause",
  scrolllock: "ScrollLock",
  numlock: "NumLock",
  printscreen: "PrintScreen",
  prtsc: "PrintScreen",
  // Function keys
  f1: "F1",
  f2: "F2",
  f3: "F3",
  f4: "F4",
  f5: "F5",
  f6: "F6",
  f7: "F7",
  f8: "F8",
  f9: "F9",
  f10: "F10",
  f11: "F11",
  f12: "F12",
  // Numpad keys
  num0: "Numpad0",
  num1: "Numpad1",
  num2: "Numpad2",
  num3: "Numpad3",
  num4: "Numpad4",
  num5: "Numpad5",
  num6: "Numpad6",
  num7: "Numpad7",
  num8: "Numpad8",
  num9: "Numpad9",
  nummultiply: "NumpadMultiply",
  numadd: "NumpadAdd",
  numsubtract: "NumpadSubtract",
  numdecimal: "NumpadDecimal",
  numdivide: "NumpadDivide",
  // Symbol keys
  comma: "Comma",
  period: "Period",
  slash: "Slash",
  backslash: "Backslash",
  semicolon: "Semicolon",
  quote: "Quote",
  bracketleft: "BracketLeft",
  bracketright: "BracketRight",
  equal: "Equal",
  // Media keys
  volumedown: "VolumeDown",
  volumeup: "VolumeUp",
  volumemute: "VolumeMute",
  // Lock keys
  caps: "CapsLock",
  scroll: "ScrollLock",
  num: "NumLock",
  // Arrow keys
  up: "ArrowUp",
  uparrow: "ArrowUp",
  arrowup: "ArrowUp",
  down: "ArrowDown",
  downarrow: "ArrowDown",
  arrowdown: "ArrowDown",
  left: "ArrowLeft",
  leftarrow: "ArrowLeft",
  arrowleft: "ArrowLeft",
  right: "ArrowRight",
  rightarrow: "ArrowRight",
  arrowright: "ArrowRight",
  // Page navigation
  pageup: "PageUp",
  pagedown: "PageDown",
  pgup: "PageUp",
  pgdn: "PageDown",
  // Home/End/Delete
  home: "Home",
  end: "End",
  delete: "Delete",
  del: "Delete"
};
const KEY_SYMBOLS = {
  Ctrl: "\u2303",
  Meta: "\u2318",
  // Command on Mac, Windows key on PC
  Alt: "\u2325",
  Shift: "\u21E7",
  Enter: "\u21B5",
  Escape: "\u238B",
  Tab: "\u21E5",
  Backspace: "\u232B",
  Delete: "\u2326",
  CapsLock: "\u21EA",
  ArrowUp: "\u2191",
  ArrowDown: "\u2193",
  ArrowLeft: "\u2190",
  ArrowRight: "\u2192",
  PageUp: "\u21DE",
  PageDown: "\u21DF",
  Home: "\u2196",
  End: "\u2198"
};
function parseKeyCombo(input, useSymbols = false) {
  if (!input || typeof input !== "string") return [];
  const keys = input.toLowerCase().replace(/\s*\+\s*/g, "+").split(/\s+|\+/).map((key) => KEY_ALIASES[key] || key.toUpperCase()).filter(Boolean);
  if (useSymbols) {
    return keys.map((key) => KEY_SYMBOLS[key] || key);
  }
  return keys;
}

export { parseKeyCombo };
//# sourceMappingURL=parseKeyCombo.js.map
