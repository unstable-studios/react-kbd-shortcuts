import { type ReactNode } from "react";

/** Supported operating systems for OS-specific key rendering */
export type SupportedOS = "mac" | "windows" | "linux";

export interface KeyProps {
  children?: ReactNode;
  render?: (content: ReactNode) => ReactNode;
  [key: string]: any; // Allow standard HTML props
}
export declare function Key(props: KeyProps): ReactNode;

export interface KeyComboProps {
  combo?: string;
  render?: (keys: string[]) => ReactNode;
  useSymbols?: boolean;
  os?: SupportedOS | null;
  [key: string]: any; // Allow standard HTML props
}
export declare function KeyCombo(props: KeyComboProps): ReactNode;

export declare function useKeyCombo(
  input: string,
  useSymbols?: boolean,
  os?: SupportedOS | null
): string[];

export declare function parseKeyCombo(
  input: string,
  useSymbols?: boolean,
  os?: SupportedOS | null
): string[];
