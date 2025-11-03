import { type ReactNode } from "react";

export interface KeyProps {
  children?: ReactNode;
}
export declare function Key(props: KeyProps): ReactNode;

export interface KeyComboProps {
  combo?: string;
  render?: (keys: string[]) => ReactNode;
  useSymbols?: boolean;
}
export declare function KeyCombo(props: KeyComboProps): ReactNode;

export declare function useKeyCombo(
  input: string,
  useSymbols?: boolean
): string[];
