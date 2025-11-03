import React from "react";

export type Platform = "auto" | "mac" | "windows" | "linux";
export type KeyVariant = "solid" | "soft" | "outline" | "ghost";
export type KeySize = "xs" | "sm" | "md" | "lg";

export interface KeyMapping {
  [key: string]: {
    mac: string;
    windows: string;
    linux: string;
  };
}

export interface KbdProps {
  variant?: KeyVariant;
  size?: KeySize;
  children: React.ReactNode;
  className?: string;
}

export interface ShortcutProps {
  combo: string | string[];
  platform?: Platform;
  useSymbols?: boolean;
  variant?: KeyVariant;
  size?: KeySize;
  separator?: React.ReactNode;
  renderKey?: (
    display: string,
    rawToken: string,
    index: number
  ) => React.ReactNode;
  className?: string;
}
