import React from "react";
import { KbdProps } from "./types";

// Variant styles for the kbd element
const variantStyles = {
  solid: "bg-zinc-900 text-white border-zinc-900",
  soft: "bg-zinc-100 text-zinc-900 border-zinc-200",
  outline: "bg-transparent text-zinc-900 border-zinc-300",
  ghost: "bg-transparent text-zinc-700 border-transparent",
};

// Size styles for the kbd element
const sizeStyles = {
  xs: "text-xs px-1.5 py-1 min-w-[1.5rem] h-6",
  sm: "text-sm px-2 py-1 min-w-[2rem] h-7",
  md: "text-base px-2.5 py-1.5 min-w-[2.5rem] h-9",
  lg: "text-md px-3 py-2 min-w-[3rem] h-11",
};

// Base styles that apply to all kbd elements
const baseStyles =
  "inline-flex items-center justify-center font-mono font-medium border rounded-md select-none shadow-sm";

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
