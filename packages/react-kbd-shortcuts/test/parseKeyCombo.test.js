import { describe, it, expect } from "vitest";
import { parseKeyCombo } from "../src/utils/parseKeyCombo.js";

describe("parseKeyCombo", () => {
  describe("basic functionality", () => {
    it("should return empty array for empty input", () => {
      expect(parseKeyCombo("")).toEqual([]);
      expect(parseKeyCombo(null)).toEqual([]);
      expect(parseKeyCombo(undefined)).toEqual([]);
    });

    it("should parse single key", () => {
      expect(parseKeyCombo("A")).toEqual(["A"]);
      expect(parseKeyCombo("k")).toEqual(["K"]);
    });

    it("should parse modifier keys", () => {
      expect(parseKeyCombo("ctrl")).toEqual(["Ctrl"]);
      expect(parseKeyCombo("control")).toEqual(["Ctrl"]);
      expect(parseKeyCombo("shift")).toEqual(["Shift"]);
      expect(parseKeyCombo("alt")).toEqual(["Alt"]);
      expect(parseKeyCombo("option")).toEqual(["Alt"]);
    });

    it("should parse command/meta keys", () => {
      expect(parseKeyCombo("cmd")).toEqual(["Meta"]);
      expect(parseKeyCombo("command")).toEqual(["Meta"]);
      expect(parseKeyCombo("win")).toEqual(["Meta"]);
    });
  });

  describe("combo parsing", () => {
    it("should parse plus-separated combos", () => {
      expect(parseKeyCombo("ctrl+shift+K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("cmd+a")).toEqual(["Meta", "A"]);
    });

    it("should parse space-separated combos", () => {
      expect(parseKeyCombo("command option S")).toEqual(["Meta", "Alt", "S"]);
      expect(parseKeyCombo("ctrl alt delete")).toEqual([
        "Ctrl",
        "Alt",
        "Delete",
      ]);
    });

    it("should handle mixed separators", () => {
      expect(parseKeyCombo("ctrl + shift K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("cmd+shift a")).toEqual(["Meta", "Shift", "A"]);
    });

    it("should normalize whitespace around plus signs", () => {
      expect(parseKeyCombo("ctrl + shift + k")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("ctrl  +  shift  +  k")).toEqual([
        "Ctrl",
        "Shift",
        "K",
      ]);
    });
  });

  describe("special keys", () => {
    it("should parse function keys", () => {
      expect(parseKeyCombo("f1")).toEqual(["F1"]);
      expect(parseKeyCombo("f12")).toEqual(["F12"]);
      expect(parseKeyCombo("ctrl+f5")).toEqual(["Ctrl", "F5"]);
    });

    it("should parse arrow keys", () => {
      expect(parseKeyCombo("up")).toEqual(["ArrowUp"]);
      expect(parseKeyCombo("uparrow")).toEqual(["ArrowUp"]);
      expect(parseKeyCombo("arrowup")).toEqual(["ArrowUp"]);
      expect(parseKeyCombo("down")).toEqual(["ArrowDown"]);
      expect(parseKeyCombo("left")).toEqual(["ArrowLeft"]);
      expect(parseKeyCombo("right")).toEqual(["ArrowRight"]);
    });

    it("should parse navigation keys", () => {
      expect(parseKeyCombo("home")).toEqual(["Home"]);
      expect(parseKeyCombo("end")).toEqual(["End"]);
      expect(parseKeyCombo("pageup")).toEqual(["PageUp"]);
      expect(parseKeyCombo("pagedown")).toEqual(["PageDown"]);
      expect(parseKeyCombo("pgup")).toEqual(["PageUp"]);
      expect(parseKeyCombo("pgdn")).toEqual(["PageDown"]);
    });

    it("should parse editing keys", () => {
      expect(parseKeyCombo("enter")).toEqual(["Enter"]);
      expect(parseKeyCombo("tab")).toEqual(["Tab"]);
      expect(parseKeyCombo("space")).toEqual(["Space"]);
      expect(parseKeyCombo("backspace")).toEqual(["Backspace"]);
      expect(parseKeyCombo("delete")).toEqual(["Delete"]);
      expect(parseKeyCombo("del")).toEqual(["Delete"]);
      expect(parseKeyCombo("esc")).toEqual(["Escape"]);
      expect(parseKeyCombo("escape")).toEqual(["Escape"]);
    });

    it("should parse lock keys", () => {
      expect(parseKeyCombo("capslock")).toEqual(["CapsLock"]);
      expect(parseKeyCombo("caps")).toEqual(["CapsLock"]);
      expect(parseKeyCombo("numlock")).toEqual(["NumLock"]);
      expect(parseKeyCombo("num")).toEqual(["NumLock"]);
      expect(parseKeyCombo("scrolllock")).toEqual(["ScrollLock"]);
      expect(parseKeyCombo("scroll")).toEqual(["ScrollLock"]);
    });

    it("should parse numpad keys", () => {
      expect(parseKeyCombo("num0")).toEqual(["Numpad0"]);
      expect(parseKeyCombo("num9")).toEqual(["Numpad9"]);
      expect(parseKeyCombo("nummultiply")).toEqual(["NumpadMultiply"]);
      expect(parseKeyCombo("numadd")).toEqual(["NumpadAdd"]);
      expect(parseKeyCombo("numsubtract")).toEqual(["NumpadSubtract"]);
      expect(parseKeyCombo("numdecimal")).toEqual(["NumpadDecimal"]);
      expect(parseKeyCombo("numdivide")).toEqual(["NumpadDivide"]);
    });

    it("should parse symbol keys", () => {
      expect(parseKeyCombo("comma")).toEqual(["Comma"]);
      expect(parseKeyCombo("period")).toEqual(["Period"]);
      expect(parseKeyCombo("slash")).toEqual(["Slash"]);
      expect(parseKeyCombo("backslash")).toEqual(["Backslash"]);
      expect(parseKeyCombo("semicolon")).toEqual(["Semicolon"]);
      expect(parseKeyCombo("quote")).toEqual(["Quote"]);
      expect(parseKeyCombo("bracketleft")).toEqual(["BracketLeft"]);
      expect(parseKeyCombo("bracketright")).toEqual(["BracketRight"]);
      expect(parseKeyCombo("equal")).toEqual(["Equal"]);
      expect(parseKeyCombo("plus")).toEqual(["+"]);
      expect(parseKeyCombo("minus")).toEqual(["-"]);
    });

    it("should parse media keys", () => {
      expect(parseKeyCombo("volumeup")).toEqual(["VolumeUp"]);
      expect(parseKeyCombo("volumedown")).toEqual(["VolumeDown"]);
      expect(parseKeyCombo("volumemute")).toEqual(["VolumeMute"]);
    });
  });

  describe("symbol mode", () => {
    it("should return symbols when useSymbols is true", () => {
      expect(parseKeyCombo("ctrl", true)).toEqual(["⌃"]);
      expect(parseKeyCombo("cmd", true)).toEqual(["⌘"]);
      expect(parseKeyCombo("alt", true)).toEqual(["⌥"]);
      expect(parseKeyCombo("shift", true)).toEqual(["⇧"]);
    });

    it("should convert combo to symbols", () => {
      expect(parseKeyCombo("ctrl+shift+k", true)).toEqual(["⌃", "⇧", "K"]);
      expect(parseKeyCombo("command option s", true)).toEqual(["⌘", "⌥", "S"]);
    });

    it("should use symbols for special keys", () => {
      expect(parseKeyCombo("enter", true)).toEqual(["↵"]);
      expect(parseKeyCombo("escape", true)).toEqual(["⎋"]);
      expect(parseKeyCombo("tab", true)).toEqual(["⇥"]);
      expect(parseKeyCombo("backspace", true)).toEqual(["⌫"]);
      expect(parseKeyCombo("delete", true)).toEqual(["⌦"]);
    });

    it("should use symbols for arrow keys", () => {
      expect(parseKeyCombo("up", true)).toEqual(["↑"]);
      expect(parseKeyCombo("down", true)).toEqual(["↓"]);
      expect(parseKeyCombo("left", true)).toEqual(["←"]);
      expect(parseKeyCombo("right", true)).toEqual(["→"]);
    });

    it("should keep regular characters as-is when no symbol exists", () => {
      expect(parseKeyCombo("a", true)).toEqual(["A"]);
      expect(parseKeyCombo("ctrl+k", true)).toEqual(["⌃", "K"]);
    });
  });

  describe("edge cases", () => {
    it("should handle case insensitivity", () => {
      expect(parseKeyCombo("CTRL+SHIFT+K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("CoMmAnD oPtIoN s")).toEqual(["Meta", "Alt", "S"]);
    });

    it("should filter out empty strings", () => {
      expect(parseKeyCombo("ctrl++shift")).toEqual(["Ctrl", "Shift"]);
      expect(parseKeyCombo("ctrl  shift")).toEqual(["Ctrl", "Shift"]);
    });

    it("should handle non-string input gracefully", () => {
      expect(parseKeyCombo(123)).toEqual([]);
      expect(parseKeyCombo({})).toEqual([]);
      expect(parseKeyCombo([])).toEqual([]);
    });
  });
});
