import { parseKeyCombo } from "../utils/parseKeyCombo";

// Headless hook: parses input and returns normalized keys
export function useKeyCombo(input, useSymbols = false) {
  return parseKeyCombo(input, useSymbols);
}
