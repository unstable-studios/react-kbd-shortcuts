import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import KeyCombo from "../src/components/KeyCombo.jsx";

describe("KeyCombo", () => {
  describe("default rendering", () => {
    it("should render a simple combo", () => {
      render(<KeyCombo combo="ctrl+k" />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("K")).toBeInTheDocument();
      expect(screen.getByText("+", { exact: false })).toBeInTheDocument();
    });

    it("should render space-separated combo", () => {
      render(<KeyCombo combo="command shift S" />);
      expect(screen.getByText("Meta")).toBeInTheDocument();
      expect(screen.getByText("Shift")).toBeInTheDocument();
      expect(screen.getByText("S")).toBeInTheDocument();
    });

    it("should render with plus signs between keys", () => {
      const { container } = render(<KeyCombo combo="ctrl+alt+delete" />);
      const text = container.textContent;
      expect(text).toBe("Ctrl + Alt + Delete");
    });

    it("should render nothing for empty combo", () => {
      const { container } = render(<KeyCombo combo="" />);
      expect(container.querySelector("span")).toBeInTheDocument();
      expect(container.querySelector("span").textContent).toBe("");
    });

    it("should use default empty string if no combo provided", () => {
      const { container } = render(<KeyCombo />);
      expect(container.querySelector("span")).toBeInTheDocument();
    });
  });

  describe("symbol mode", () => {
    it("should render symbols when useSymbols is true", () => {
      render(<KeyCombo combo="ctrl+shift+k" useSymbols />);
      expect(screen.getByText("⌃")).toBeInTheDocument();
      expect(screen.getByText("⇧")).toBeInTheDocument();
      expect(screen.getByText("K")).toBeInTheDocument();
    });

    it("should render command symbol", () => {
      render(<KeyCombo combo="cmd+s" useSymbols />);
      expect(screen.getByText("⌘")).toBeInTheDocument();
      expect(screen.getByText("S")).toBeInTheDocument();
    });

    it("should render arrow symbols", () => {
      render(<KeyCombo combo="ctrl+up" useSymbols />);
      expect(screen.getByText("⌃")).toBeInTheDocument();
      expect(screen.getByText("↑")).toBeInTheDocument();
    });
  });

  describe("custom render prop", () => {
    it("should use custom render function", () => {
      const customRender = (keys) => (
        <div data-testid="custom">
          {keys.map((key, idx) => (
            <kbd key={idx}>{key}</kbd>
          ))}
        </div>
      );

      render(<KeyCombo combo="ctrl+k" render={customRender} />);

      const custom = screen.getByTestId("custom");
      expect(custom).toBeInTheDocument();

      const kbds = custom.querySelectorAll("kbd");
      expect(kbds).toHaveLength(2);
      expect(kbds[0].textContent).toBe("Ctrl");
      expect(kbds[1].textContent).toBe("K");
    });

    it("should pass parsed keys to render function", () => {
      const customRender = (keys) => (
        <span data-testid="keys">{keys.join("-")}</span>
      );

      render(<KeyCombo combo="command shift S" render={customRender} />);
      expect(screen.getByTestId("keys")).toHaveTextContent("Meta-Shift-S");
    });

    it("should work with symbols in custom render", () => {
      const customRender = (keys) => (
        <div data-testid="symbols">{keys.join("")}</div>
      );

      render(<KeyCombo combo="ctrl+k" useSymbols render={customRender} />);
      expect(screen.getByTestId("symbols")).toHaveTextContent("⌃K");
    });

    it("should handle empty keys array in custom render", () => {
      const customRender = (keys) => (
        <span data-testid="empty">
          {keys.length === 0 ? "No keys" : keys.join("+")}
        </span>
      );

      render(<KeyCombo combo="" render={customRender} />);
      expect(screen.getByTestId("empty")).toHaveTextContent("No keys");
    });
  });

  describe("complex combos", () => {
    it("should render three-key combo", () => {
      const { container } = render(<KeyCombo combo="ctrl+alt+delete" />);
      expect(container.textContent).toBe("Ctrl + Alt + Delete");
    });

    it("should render function key combo", () => {
      const { container } = render(<KeyCombo combo="ctrl+f5" />);
      expect(container.textContent).toBe("Ctrl + F5");
    });

    it("should render navigation keys", () => {
      const { container } = render(<KeyCombo combo="shift+home" />);
      expect(container.textContent).toBe("Shift + Home");
    });

    it("should handle arrow keys", () => {
      render(<KeyCombo combo="ctrl+shift+up" />);
      expect(screen.getByText("Ctrl")).toBeInTheDocument();
      expect(screen.getByText("Shift")).toBeInTheDocument();
      expect(screen.getByText("ArrowUp")).toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("should handle single key", () => {
      const { container } = render(<KeyCombo combo="k" />);
      expect(container.textContent).toBe("K");
      expect(container.textContent).not.toContain("+");
    });

    it("should be case insensitive", () => {
      const { container: container1 } = render(<KeyCombo combo="CTRL+K" />);
      const { container: container2 } = render(<KeyCombo combo="ctrl+k" />);
      expect(container1.textContent).toBe(container2.textContent);
    });

    it("should handle mixed separators", () => {
      const { container } = render(<KeyCombo combo="ctrl + shift k" />);
      expect(container.textContent).toBe("Ctrl + Shift + K");
    });
  });
});
