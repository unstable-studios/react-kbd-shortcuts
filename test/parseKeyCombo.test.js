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
      expect(parseKeyCombo("cmd")).toEqual(["Cmd"]);
      expect(parseKeyCombo("command")).toEqual(["Cmd"]);
      expect(parseKeyCombo("win")).toEqual(["Cmd"]);
    });
  });

  describe("combo parsing", () => {
    it("should parse plus-separated combos", () => {
      expect(parseKeyCombo("ctrl+shift+K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("cmd+a")).toEqual(["Cmd", "A"]);
    });

    it("should parse space-separated combos", () => {
      expect(parseKeyCombo("command option S")).toEqual(["Cmd", "Alt", "S"]);
      expect(parseKeyCombo("ctrl alt delete")).toEqual([
        "Ctrl",
        "Alt",
        "Delete",
      ]);
    });

    it("should handle mixed separators", () => {
      expect(parseKeyCombo("ctrl + shift K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("cmd+shift a")).toEqual(["Cmd", "Shift", "A"]);
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
      expect(parseKeyCombo("up")).toEqual(["Up"]);
      expect(parseKeyCombo("uparrow")).toEqual(["Up"]);
      expect(parseKeyCombo("arrowup")).toEqual(["Up"]);
      expect(parseKeyCombo("down")).toEqual(["Down"]);
      expect(parseKeyCombo("left")).toEqual(["Left"]);
      expect(parseKeyCombo("right")).toEqual(["Right"]);
    });

    it("should parse navigation keys", () => {
      expect(parseKeyCombo("home")).toEqual(["Home"]);
      expect(parseKeyCombo("end")).toEqual(["End"]);
      expect(parseKeyCombo("pageup")).toEqual(["Page Up"]);
      expect(parseKeyCombo("pagedown")).toEqual(["Page Down"]);
      expect(parseKeyCombo("pgup")).toEqual(["Page Up"]);
      expect(parseKeyCombo("pgdn")).toEqual(["Page Down"]);
    });

    it("should parse editing keys", () => {
      expect(parseKeyCombo("enter")).toEqual(["Enter"]);
      expect(parseKeyCombo("tab")).toEqual(["Tab"]);
      expect(parseKeyCombo("space")).toEqual(["Space"]);
      expect(parseKeyCombo("backspace")).toEqual(["Backspace"]);
      expect(parseKeyCombo("delete")).toEqual(["Delete"]);
      expect(parseKeyCombo("del")).toEqual(["Delete"]);
      expect(parseKeyCombo("esc")).toEqual(["Esc"]);
      expect(parseKeyCombo("escape")).toEqual(["Esc"]);
    });

    it("should parse lock keys", () => {
      expect(parseKeyCombo("capslock")).toEqual(["Caps Lock"]);
      expect(parseKeyCombo("caps")).toEqual(["Caps Lock"]);
      expect(parseKeyCombo("numlock")).toEqual(["Num Lock"]);
      expect(parseKeyCombo("num")).toEqual(["Num Lock"]);
      expect(parseKeyCombo("scrolllock")).toEqual(["Scroll Lock"]);
      expect(parseKeyCombo("scroll")).toEqual(["Scroll Lock"]);
    });

    it("should parse numpad keys", () => {
      expect(parseKeyCombo("num0")).toEqual(["Num 0"]);
      expect(parseKeyCombo("num9")).toEqual(["Num 9"]);
      expect(parseKeyCombo("nummultiply")).toEqual(["Num *"]);
      expect(parseKeyCombo("numadd")).toEqual(["Num +"]);
      expect(parseKeyCombo("numsubtract")).toEqual(["Num -"]);
      expect(parseKeyCombo("numdecimal")).toEqual(["Num ."]);
      expect(parseKeyCombo("numdivide")).toEqual(["Num /"]);
    });

    it("should parse symbol keys", () => {
      expect(parseKeyCombo("comma")).toEqual([","]);
      expect(parseKeyCombo("period")).toEqual(["."]);
      expect(parseKeyCombo("slash")).toEqual(["/"]);
      expect(parseKeyCombo("backslash")).toEqual(["\\"]);
      expect(parseKeyCombo("semicolon")).toEqual([";"]);
      expect(parseKeyCombo("quote")).toEqual(["'"]);
      expect(parseKeyCombo("bracketleft")).toEqual(["["]);
      expect(parseKeyCombo("bracketright")).toEqual(["]"]);
      expect(parseKeyCombo("equal")).toEqual(["="]);
      expect(parseKeyCombo("plus")).toEqual(["+"]);
      expect(parseKeyCombo("minus")).toEqual(["-"]);
    });

    it("should parse media keys", () => {
      expect(parseKeyCombo("volumeup")).toEqual(["Volume Up"]);
      expect(parseKeyCombo("volumedown")).toEqual(["Volume Down"]);
      expect(parseKeyCombo("volumemute")).toEqual(["Volume Mute"]);
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
      expect(parseKeyCombo("escape", true)).toEqual(["Esc"]);
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

  describe("OS-specific rendering", () => {
    describe("Mac OS", () => {
      it("should use Mac-specific key strings", () => {
        expect(parseKeyCombo("ctrl", false, "mac")).toEqual(["Control"]);
        expect(parseKeyCombo("cmd", false, "mac")).toEqual(["Cmd"]);
        expect(parseKeyCombo("alt", false, "mac")).toEqual(["Option"]);
        expect(parseKeyCombo("shift", false, "mac")).toEqual(["Shift"]);
      });

      it("should use Mac-specific symbols", () => {
        expect(parseKeyCombo("ctrl", true, "mac")).toEqual(["⌃"]);
        expect(parseKeyCombo("cmd", true, "mac")).toEqual(["⌘"]);
        expect(parseKeyCombo("alt", true, "mac")).toEqual(["⌥"]);
      });

      it("should handle Mac combo strings", () => {
        expect(parseKeyCombo("ctrl+cmd+s", false, "mac")).toEqual([
          "Control",
          "Cmd",
          "S",
        ]);
        expect(parseKeyCombo("ctrl+cmd+s", true, "mac")).toEqual([
          "⌃",
          "⌘",
          "S",
        ]);
      });
    });

    describe("Windows OS", () => {
      it("should use Windows-specific key strings", () => {
        expect(parseKeyCombo("ctrl", false, "windows")).toEqual(["Ctrl"]);
        expect(parseKeyCombo("cmd", false, "windows")).toEqual(["Win"]);
        expect(parseKeyCombo("alt", false, "windows")).toEqual(["Alt"]);
      });

      it("should use Windows-specific symbols", () => {
        expect(parseKeyCombo("ctrl", true, "windows")).toEqual(["Ctrl"]);
        expect(parseKeyCombo("cmd", true, "windows")).toEqual(["⊞"]);
        expect(parseKeyCombo("alt", true, "windows")).toEqual(["Alt"]);
      });

      it("should handle Windows combo strings", () => {
        expect(parseKeyCombo("ctrl+win+r", false, "windows")).toEqual([
          "Ctrl",
          "Win",
          "R",
        ]);
        expect(parseKeyCombo("ctrl+win+r", true, "windows")).toEqual([
          "Ctrl",
          "⊞",
          "R",
        ]);
      });
    });

    describe("Linux OS", () => {
      it("should use Linux-specific key strings", () => {
        expect(parseKeyCombo("ctrl", false, "linux")).toEqual(["Ctrl"]);
        expect(parseKeyCombo("cmd", false, "linux")).toEqual(["Super"]);
        expect(parseKeyCombo("alt", false, "linux")).toEqual(["Alt"]);
      });

      it("should use Linux-specific symbols", () => {
        expect(parseKeyCombo("ctrl", true, "linux")).toEqual(["Ctrl"]);
        expect(parseKeyCombo("cmd", true, "linux")).toEqual(["◆"]);
        expect(parseKeyCombo("alt", true, "linux")).toEqual(["Alt"]);
      });

      it("should handle Linux combo strings", () => {
        expect(parseKeyCombo("ctrl+cmd+t", false, "linux")).toEqual([
          "Ctrl",
          "Super",
          "T",
        ]);
        expect(parseKeyCombo("ctrl+cmd+t", true, "linux")).toEqual([
          "Ctrl",
          "◆",
          "T",
        ]);
      });
    });

    it("should fall back to default when OS is null or invalid", () => {
      expect(parseKeyCombo("ctrl+cmd+s", false, null)).toEqual([
        "Ctrl",
        "Cmd",
        "S",
      ]);
      expect(parseKeyCombo("ctrl+cmd+s", false, "invalid")).toEqual([
        "Ctrl",
        "Cmd",
        "S",
      ]);
    });
  });

  describe("user-friendly strings", () => {
    it("should use user-friendly strings by default", () => {
      expect(parseKeyCombo("ctrl")).toEqual(["Ctrl"]);
      expect(parseKeyCombo("cmd")).toEqual(["Cmd"]);
      expect(parseKeyCombo("pageup")).toEqual(["Page Up"]);
      expect(parseKeyCombo("capslock")).toEqual(["Caps Lock"]);
      expect(parseKeyCombo("up")).toEqual(["Up"]);
      expect(parseKeyCombo("num0")).toEqual(["Num 0"]);
      expect(parseKeyCombo("nummultiply")).toEqual(["Num *"]);
    });

    it("should use friendly strings in combos", () => {
      expect(parseKeyCombo("ctrl+pageup")).toEqual(["Ctrl", "Page Up"]);
      expect(parseKeyCombo("cmd+capslock")).toEqual(["Cmd", "Caps Lock"]);
    });
  });

  describe("edge cases", () => {
    it("should handle case insensitivity", () => {
      expect(parseKeyCombo("CTRL+SHIFT+K")).toEqual(["Ctrl", "Shift", "K"]);
      expect(parseKeyCombo("CoMmAnD oPtIoN s")).toEqual(["Cmd", "Alt", "S"]);
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

    it("should handle OS parameter with symbols", () => {
      expect(parseKeyCombo("ctrl+cmd", true, "mac")).toEqual(["⌃", "⌘"]);
      expect(parseKeyCombo("ctrl+cmd", true, "windows")).toEqual(["Ctrl", "⊞"]);
      expect(parseKeyCombo("ctrl+cmd", true, "linux")).toEqual(["Ctrl", "◆"]);
    });
  });
});
