// Parses a natural-ish key combo string into an array of normalized key names
// Example: "ctrl+shift+K" => ["Ctrl", "Shift", "K"]
// Example: "command option S" => ["Meta", "Alt", "S"]

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
  del: "Delete",
};

// OS-specific key mappings
const OS_KEY_STRINGS = {
  mac: {
    Ctrl: "Control",
    Meta: "Cmd",
    Alt: "Option",
  },
  windows: {
    Ctrl: "Ctrl",
    Meta: "Win",
    Alt: "Alt",
  },
  linux: {
    Ctrl: "Ctrl",
    Meta: "Super",
    Alt: "Alt",
  },
};

// User-friendly text representations for keys
const KEY_STRINGS = {
  Ctrl: "Ctrl",
  Meta: "Cmd", // More recognizable than "Meta"
  Alt: "Alt",
  Shift: "Shift",
  Enter: "Enter",
  Escape: "Esc",
  Tab: "Tab",
  Space: "Space",
  Backspace: "Backspace",
  Delete: "Delete",
  CapsLock: "Caps Lock",
  Insert: "Insert",
  Pause: "Pause",
  ScrollLock: "Scroll Lock",
  NumLock: "Num Lock",
  PrintScreen: "Print Screen",
  ArrowUp: "Up",
  ArrowDown: "Down",
  ArrowLeft: "Left",
  ArrowRight: "Right",
  PageUp: "Page Up",
  PageDown: "Page Down",
  Home: "Home",
  End: "End",
  // Numpad keys
  Numpad0: "Num 0",
  Numpad1: "Num 1",
  Numpad2: "Num 2",
  Numpad3: "Num 3",
  Numpad4: "Num 4",
  Numpad5: "Num 5",
  Numpad6: "Num 6",
  Numpad7: "Num 7",
  Numpad8: "Num 8",
  Numpad9: "Num 9",
  NumpadMultiply: "Num *",
  NumpadAdd: "Num +",
  NumpadSubtract: "Num -",
  NumpadDecimal: "Num .",
  NumpadDivide: "Num /",
  // Symbol keys
  Comma: ",",
  Period: ".",
  Slash: "/",
  Backslash: "\\",
  Semicolon: ";",
  Quote: "'",
  BracketLeft: "[",
  BracketRight: "]",
  Equal: "=",
  // Media keys
  VolumeDown: "Volume Down",
  VolumeUp: "Volume Up",
  VolumeMute: "Volume Mute",
};

// OS-specific symbol mappings
const OS_KEY_SYMBOLS = {
  mac: {
    Ctrl: "⌃",
    Meta: "⌘",
    Alt: "⌥",
  },
  windows: {
    Ctrl: "Ctrl",
    Meta: "⊞",
    Alt: "Alt",
  },
  linux: {
    Ctrl: "Ctrl",
    Meta: "◆",
    Alt: "Alt",
  },
};

// Symbol representations for keys (Unicode/ASCII equivalents)
const KEY_SYMBOLS = {
  Ctrl: "⌃",
  Meta: "⌘", // Command on Mac, Windows key on PC
  Alt: "⌥",
  Shift: "⇧",
  Enter: "↵",
  Escape: "Esc",
  Tab: "⇥",
  Space: "␣",
  Backspace: "⌫",
  Delete: "⌦",
  CapsLock: "⇪",
  Insert: "Ins",
  Pause: "⏸",
  ScrollLock: "⤓",
  NumLock: "⇭",
  PrintScreen: "⎙",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  PageUp: "PgUp",
  PageDown: "PgDn",
  Home: "Home",
  End: "End",

  // Numpad keys
  Numpad0: "№0",
  Numpad1: "№1",
  Numpad2: "№2",
  Numpad3: "№3",
  Numpad4: "№4",
  Numpad5: "№5",
  Numpad6: "№6",
  Numpad7: "№7",
  Numpad8: "№8",
  Numpad9: "№9",
  NumpadMultiply: "№×",
  NumpadAdd: "№+",
  NumpadSubtract: "№−",
  NumpadDecimal: "№.",
  NumpadDivide: "№÷",
  // Symbol keys
  Comma: ",",
  Period: ".",
  Slash: "/",
  Backslash: "\\",
  Semicolon: ";",
  Quote: "'",
  BracketLeft: "[",
  BracketRight: "]",
  Equal: "=",
  // Media keys
  VolumeDown: "♪−",
  VolumeUp: "♪+",
  VolumeMute: "♪✕",
};

export function parseKeyCombo(input, useSymbols = false, os = null) {
  if (!input || typeof input !== "string") return [];
  const keys = input
    .toLowerCase()
    .replace(/\s*\+\s*/g, "+") // normalize pluses
    .split(/\s+|\+/)
    .map((key) => KEY_ALIASES[key] || key.toUpperCase())
    .filter(Boolean);

  // Apply OS-specific mappings if specified
  const osStrings = os && OS_KEY_STRINGS[os] ? OS_KEY_STRINGS[os] : {};
  const osSymbols = os && OS_KEY_SYMBOLS[os] ? OS_KEY_SYMBOLS[os] : {};

  if (useSymbols) {
    return keys.map((key) => osSymbols[key] || KEY_SYMBOLS[key] || key);
  }

  // Use OS-specific strings first, then fall back to generic strings
  return keys.map((key) => osStrings[key] || KEY_STRINGS[key] || key);
}
