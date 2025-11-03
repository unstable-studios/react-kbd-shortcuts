# @unstablestudios/react-kbd-shortcuts

React + Tailwind-friendly component library for rendering keyboard shortcut UI. Accepts "cmd+k" or ["ctrl","shift","p"] and auto-normalizes + displays platform-aware symbols (⌘ ⌥ ⇧) on mac, and text equivalents on Windows/Linux. Purely visual; no keybinding logic.

## Installation

```bash
npm install @unstablestudios/react-kbd-shortcuts
```

## Quick Start

```tsx
import { Shortcut, Kbd } from "@unstablestudios/react-kbd-shortcuts";

function App() {
  return (
    <div>
      <Shortcut combo="cmd+k" />
      <Shortcut combo="ctrl+shift+p" platform="windows" />
      <Shortcut combo={["alt", "enter"]} size="md" variant="outline" />
    </div>
  );
}
```

## Components

### Shortcut

Main component that renders a full key combination.

#### Props

- `combo`: `string | string[]` - The key combination (e.g., "cmd+k" or ["ctrl", "shift", "p"])
- `platform`: `"auto" | "mac" | "windows" | "linux"` - Platform for key symbols (default: "auto")
- `useSymbols`: `boolean` - Use symbols on mac vs plaintext (default: true)
- `variant`: `"solid" | "soft" | "outline" | "ghost"` - Visual style (default: "soft")
- `size`: `"xs" | "sm" | "md" | "lg"` - Size scale (default: "sm")
- `separator`: `React.ReactNode` - Custom separator between keys (default: "+")
- `renderKey`: `(display: string, rawToken: string, index: number) => React.ReactNode` - Custom key renderer

### Kbd

Primitive wrapper for styling individual key glyphs.

#### Props

- `variant`: `"solid" | "soft" | "outline" | "ghost"` - Visual style (default: "soft")
- `size`: `"xs" | "sm" | "md" | "lg"` - Size scale (default: "sm")
- `children`: `React.ReactNode` - Content to display

## Examples

Run the playground to see all features:

```bash
cd examples/vite-playground
npm i
npm run dev
```

## Build

```bash
npm run build
```

## Publish

```bash
npm publish --access public
```
