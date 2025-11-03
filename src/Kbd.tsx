import React from "react";
import { KbdProps } from "./types";

// Variant styles for the kbd element
const variantStyles = {
  solid: "bg-gray-900 text-white border-gray-900",
  soft: "bg-gray-100 text-gray-900 border-gray-200",
  outline: "bg-transparent text-gray-900 border-gray-300",
  ghost: "bg-transparent text-gray-700 border-transparent",
};

// Size styles for the kbd element
const sizeStyles = {
  xs: "text-xs px-1 py-0.5 min-w-[1.25rem] h-5",
  sm: "text-sm px-1.5 py-0.5 min-w-[1.5rem] h-6",
  md: "text-base px-2 py-1 min-w-[2rem] h-8",
  lg: "text-lg px-2.5 py-1.5 min-w-[2.5rem] h-10",
};

// Base styles that apply to all kbd elements
const baseStyles =
  "inline-flex items-center justify-center font-mono font-medium border rounded select-none";

export function Kbd({
  variant = "soft",
  size = "sm",
  children,
  className = "",
}: KbdProps) {
  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];

  const classes = [baseStyles, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return <kbd className={classes}>{children}</kbd>;
}
