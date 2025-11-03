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
});
