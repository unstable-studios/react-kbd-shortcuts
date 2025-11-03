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
    expect(result.current).toEqual(["Meta", "Shift", "S"]);
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
    expect(result.current).toEqual(["Meta", "B"]);
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
});
