import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Key from "../src/components/Key.jsx";

describe("Key", () => {
  it("should render a kbd element", () => {
    render(<Key>Ctrl</Key>);
    const kbd = screen.getByText("Ctrl");
    expect(kbd.tagName).toBe("KBD");
  });

  it("should render children content", () => {
    render(<Key>Shift</Key>);
    expect(screen.getByText("Shift")).toBeInTheDocument();
  });

  it("should render special characters", () => {
    render(<Key>⌘</Key>);
    expect(screen.getByText("⌘")).toBeInTheDocument();
  });

  it("should render multiple characters", () => {
    render(<Key>Enter</Key>);
    expect(screen.getByText("Enter")).toBeInTheDocument();
  });

  it("should render empty kbd if no children", () => {
    const { container } = render(<Key />);
    const kbd = container.querySelector("kbd");
    expect(kbd).toBeInTheDocument();
    expect(kbd.textContent).toBe("");
  });

  it("should render numeric children", () => {
    render(<Key>5</Key>);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should be accessible as a kbd element", () => {
    const { container } = render(<Key>F1</Key>);
    const kbd = container.querySelector("kbd");
    expect(kbd).toBeInTheDocument();
    expect(kbd).toHaveTextContent("F1");
  });

  it("should accept standard HTML props", () => {
    render(
      <Key className="custom-key" data-testid="test-key">
        Ctrl
      </Key>
    );
    const kbd = screen.getByTestId("test-key");
    expect(kbd).toHaveClass("custom-key");
    expect(kbd.tagName).toBe("KBD");
  });

  describe("render prop", () => {
    it("should use custom render function when provided", () => {
      const customRender = (content) => (
        <span data-testid="custom-key" className="custom">
          {content}
        </span>
      );

      render(<Key render={customRender}>Ctrl</Key>);

      const customElement = screen.getByTestId("custom-key");
      expect(customElement).toBeInTheDocument();
      expect(customElement).toHaveClass("custom");
      expect(customElement.tagName).toBe("SPAN");
      expect(customElement).toHaveTextContent("Ctrl");
    });

    it("should pass children to render function", () => {
      const customRender = (content) => (
        <button data-testid="key-button">Key: {content}</button>
      );

      render(<Key render={customRender}>Enter</Key>);

      const button = screen.getByTestId("key-button");
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveTextContent("Key: Enter");
    });

    it("should work with complex children", () => {
      const customRender = (content) => (
        <div data-testid="complex-key">{content}</div>
      );

      render(
        <Key render={customRender}>
          <span>⌘</span>
        </Key>
      );

      const element = screen.getByTestId("complex-key");
      const span = element.querySelector("span");
      expect(span).toHaveTextContent("⌘");
    });

    it("should not apply HTML props when using render function", () => {
      const customRender = (content) => (
        <div data-testid="custom-rendered">{content}</div>
      );

      render(
        <Key
          render={customRender}
          className="should-not-apply"
          style={{ color: "red" }}
        >
          Ctrl
        </Key>
      );

      const element = screen.getByTestId("custom-rendered");
      expect(element).not.toHaveClass("should-not-apply");
      expect(element).not.toHaveStyle({ color: "red" });
    });
  });
});
