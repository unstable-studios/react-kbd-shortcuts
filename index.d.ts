import * as React from "react";

export interface KeyProps {
  children: React.ReactNode;
}
export declare const Key: React.FC<KeyProps>;

export interface KeyComboProps {
  combo?: string;
  render?: (keys: string[]) => React.ReactNode;
  useSymbols?: boolean;
}
export declare const KeyCombo: React.FC<KeyComboProps>;

export declare function useKeyCombo(
  input: string,
  useSymbols?: boolean
): string[];
