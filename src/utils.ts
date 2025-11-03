import { Platform, KeyMapping } from "./types";

// Key symbol mappings for different platforms
export const KEY_MAPPINGS: KeyMapping = {
  // Modifier keys
  cmd: { mac: "⌘", windows: "Ctrl", linux: "Ctrl" },
  command: { mac: "⌘", windows: "Ctrl", linux: "Ctrl" },
  ctrl: { mac: "⌃", windows: "Ctrl", linux: "Ctrl" },
  control: { mac: "⌃", windows: "Ctrl", linux: "Ctrl" },
  alt: { mac: "⌥", windows: "Alt", linux: "Alt" },
  option: { mac: "⌥", windows: "Alt", linux: "Alt" },
  shift: { mac: "⇧", windows: "Shift", linux: "Shift" },
  meta: { mac: "⌘", windows: "Win", linux: "Super" },

  // Special keys
  enter: { mac: "↵", windows: "Enter", linux: "Enter" },
  return: { mac: "↵", windows: "Enter", linux: "Enter" },
  tab: { mac: "⇥", windows: "Tab", linux: "Tab" },
  space: { mac: "␣", windows: "Space", linux: "Space" },
  spacebar: { mac: "␣", windows: "Space", linux: "Space" },
  backspace: { mac: "⌫", windows: "Backspace", linux: "Backspace" },
  delete: { mac: "⌦", windows: "Delete", linux: "Delete" },
  escape: { mac: "⎋", windows: "Esc", linux: "Esc" },
  esc: { mac: "⎋", windows: "Esc", linux: "Esc" },

  // Arrow keys
  up: { mac: "↑", windows: "↑", linux: "↑" },
  down: { mac: "↓", windows: "↓", linux: "↓" },
  left: { mac: "←", windows: "←", linux: "←" },
  right: { mac: "→", windows: "→", linux: "→" },

  // Function keys
  f1: { mac: "F1", windows: "F1", linux: "F1" },
  f2: { mac: "F2", windows: "F2", linux: "F2" },
  f3: { mac: "F3", windows: "F3", linux: "F3" },
  f4: { mac: "F4", windows: "F4", linux: "F4" },
  f5: { mac: "F5", windows: "F5", linux: "F5" },
  f6: { mac: "F6", windows: "F6", linux: "F6" },
  f7: { mac: "F7", windows: "F7", linux: "F7" },
  f8: { mac: "F8", windows: "F8", linux: "F8" },
  f9: { mac: "F9", windows: "F9", linux: "F9" },
  f10: { mac: "F10", windows: "F10", linux: "F10" },
  f11: { mac: "F11", windows: "F11", linux: "F11" },
  f12: { mac: "F12", windows: "F12", linux: "F12" },
};

// Detect the current platform
export function detectPlatform(): Exclude<Platform, "auto"> {
  if (typeof window === "undefined") return "linux"; // SSR fallback

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("mac")) return "mac";
  if (userAgent.includes("win")) return "windows";
  return "linux";
}

// Parse a combo string into individual keys
export function parseCombo(combo: string | string[]): string[] {
  if (Array.isArray(combo)) {
    return combo.map((key) => key.toLowerCase().trim());
  }

  // Split by common separators and normalize
  return combo
    .toLowerCase()
    .split(/[\s+\-_]+/)
    .map((key) => key.trim())
    .filter(Boolean);
}

// Normalize a key for the given platform
export function normalizeKey(
  key: string,
  platform: Exclude<Platform, "auto">,
  useSymbols: boolean = true
): string {
  const normalizedKey = key.toLowerCase().trim();
  const mapping = KEY_MAPPINGS[normalizedKey];

  if (mapping) {
    const platformKey = mapping[platform];
    // On Mac, if useSymbols is false, use the Windows/Linux version
    if (platform === "mac" && !useSymbols) {
      return mapping.windows || mapping.linux || key;
    }
    return platformKey;
  }

  // If no mapping found, return the key as-is but capitalized
  return key.charAt(0).toUpperCase() + key.slice(1);
}

// Get the resolved platform
export function resolvePlatform(platform: Platform): Exclude<Platform, "auto"> {
  return platform === "auto" ? detectPlatform() : platform;
}
