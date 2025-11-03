import React from "react";
import { ShortcutProps } from "./types";
import { Kbd } from "./Kbd";
import { parseCombo, normalizeKey, resolvePlatform } from "./utils";

export function Shortcut({
  combo,
  platform = "auto",
  useSymbols = true,
  variant = "soft",
  size = "sm",
  separator = "+",
  renderKey,
  className = "",
}: ShortcutProps) {
  const resolvedPlatform = resolvePlatform(platform);
  const keys = parseCombo(combo);

  const renderSeparator = (index: number) => {
    if (index === keys.length - 1) return null;

    return (
      <span key={`sep-${index}`} className="mx-1 text-gray-400 select-none">
        {separator}
      </span>
    );
  };

  const renderKeyElement = (key: string, index: number) => {
    const normalizedKey = normalizeKey(key, resolvedPlatform, useSymbols);

    if (renderKey) {
      return renderKey(normalizedKey, key, index);
    }

    return (
      <Kbd variant={variant} size={size}>
        {normalizedKey}
      </Kbd>
    );
  };

  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          {renderKeyElement(key, index)}
          {renderSeparator(index)}
        </React.Fragment>
      ))}
    </span>
  );
}
