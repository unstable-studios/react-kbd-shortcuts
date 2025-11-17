import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useKeyCombo } from "../src/hooks/useKeyCombo.js";

describe("useKeyCombo", () => {
  it("should parse simple key combo", () => {
    const { result } = renderHook(() => useKeyCombo("ctrl+k"));
    expect(result.current).toEqual(["Ctrl", "K"]);
  });

  it("should parse space-separated combo", () => {
    const { result } = renderHook(() => useKeyCombo("command shift S"));
    expect(result.current).toEqual(["Cmd", "Shift", "S"]);
  });

  it("should return symbols when useSymbols is true", () => {
    const { result } = renderHook(() => useKeyCombo("ctrl+shift+k", true));
    expect(result.current).toEqual(["⌃", "⇧", "K"]);
  });

  it("should handle empty input", () => {
    const { result } = renderHook(() => useKeyCombo(""));
    expect(result.current).toEqual([]);
  });

  it("should update when input changes", () => {
    const { result, rerender } = renderHook(({ combo }) => useKeyCombo(combo), {
      initialProps: { combo: "ctrl+a" },
    });

    expect(result.current).toEqual(["Ctrl", "A"]);

    rerender({ combo: "cmd+b" });
    expect(result.current).toEqual(["Cmd", "B"]);
  });

  it("should update when useSymbols changes", () => {
    const { result, rerender } = renderHook(
      ({ useSymbols }) => useKeyCombo("ctrl+k", useSymbols),
      { initialProps: { useSymbols: false } }
    );

    expect(result.current).toEqual(["Ctrl", "K"]);

    rerender({ useSymbols: true });
    expect(result.current).toEqual(["⌃", "K"]);
  });

  it("should handle complex combos", () => {
    const { result } = renderHook(() => useKeyCombo("ctrl+alt+delete"));
    expect(result.current).toEqual(["Ctrl", "Alt", "Delete"]);
  });

  it("should work with function keys", () => {
    const { result } = renderHook(() => useKeyCombo("ctrl+f5"));
    expect(result.current).toEqual(["Ctrl", "F5"]);
  });

  describe("OS-specific rendering", () => {
    it("should use Mac-specific strings", () => {
      const { result } = renderHook(() =>
        useKeyCombo("ctrl+cmd+s", false, "mac")
      );
      expect(result.current).toEqual(["Control", "Cmd", "S"]);
    });

    it("should use Windows-specific strings", () => {
      const { result } = renderHook(() =>
        useKeyCombo("ctrl+cmd+s", false, "windows")
      );
      expect(result.current).toEqual(["Ctrl", "Win", "S"]);
    });

    it("should use Linux-specific strings", () => {
      const { result } = renderHook(() =>
        useKeyCombo("ctrl+cmd+s", false, "linux")
      );
      expect(result.current).toEqual(["Ctrl", "Super", "S"]);
    });

    it("should use OS-specific symbols", () => {
      const { result: macResult } = renderHook(() =>
        useKeyCombo("ctrl+cmd", true, "mac")
      );
      expect(macResult.current).toEqual(["⌃", "⌘"]);

      const { result: winResult } = renderHook(() =>
        useKeyCombo("ctrl+cmd", true, "windows")
      );
      expect(winResult.current).toEqual(["Ctrl", "⊞"]);

      const { result: linuxResult } = renderHook(() =>
        useKeyCombo("ctrl+cmd", true, "linux")
      );
      expect(linuxResult.current).toEqual(["Ctrl", "◆"]);
    });

    it("should update when OS changes", () => {
      const { result, rerender } = renderHook(
        ({ os }) => useKeyCombo("ctrl+cmd+s", false, os),
        { initialProps: { os: "mac" } }
      );

      expect(result.current).toEqual(["Control", "Cmd", "S"]);

      rerender({ os: "windows" });
      expect(result.current).toEqual(["Ctrl", "Win", "S"]);

      rerender({ os: "linux" });
      expect(result.current).toEqual(["Ctrl", "Super", "S"]);
    });

    it("should handle null OS gracefully", () => {
      const { result } = renderHook(() =>
        useKeyCombo("ctrl+cmd+s", false, null)
      );
      expect(result.current).toEqual(["Ctrl", "Cmd", "S"]);
    });
  });
});
