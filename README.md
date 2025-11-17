# react-kbd-shortcuts

A headless React library for parsing and rendering keyboard shortcuts from natural language input. Easily convert phrases like "ctrl+shift+K" or "command option S" into normalized key arrays, and render them with full control over styling and markup. Includes logic-only hooks and components for maximum flexibility - ideal for building custom shortcut UIs, documentation, or interactive help overlays.

**[📺 View Live Demo](https://unstable-studios.github.io/react-kbd-shortcuts/)**

✨ **Features:**

- **Headless**: No built-in styles - render shortcuts your way
- **Natural input**: Parse human-friendly shortcut strings
- **OS-aware**: Mac, Windows, and Linux specific key names
- **Symbol mode**: Unicode symbols (⌘, ⌃, ⌥) or text labels
- **Render props**: Complete control over markup and styling
- **TypeScript**: Full type safety with exported types
- **React hooks & components**: Use logic in any React app

## Installation

```bash
npm install react-kbd-shortcuts
# or
npm install react-kbd-shortcuts
# or
yarn add react-kbd-shortcuts
```

## Quick Start

```jsx
import { Key, KeyCombo, useKeyCombo } from "react-kbd-shortcuts";

// Individual key
<Key>Ctrl</Key>

// Key combination
<KeyCombo combo="ctrl+shift+k" />

// With symbols
<KeyCombo combo="cmd+s" useSymbols />

// Hook for logic
const keys = useKeyCombo("ctrl+alt+delete");
```

## Usage Examples

### Key Component

```jsx
import { Key } from "react-kbd-shortcuts";

// Basic usage
<Key>Ctrl</Key>

// With HTML props
<Key className="key-style" onClick={handleClick}>Enter</Key>

// Custom rendering
<Key render={(content) => (
  <button className="key-button">{content}</button>
)}>
  Escape
</Key>
```

### KeyCombo Component

```jsx
import { KeyCombo } from "react-kbd-shortcuts";

// Basic usage
<KeyCombo combo="ctrl+shift+K" />

// With HTML props
<KeyCombo combo="ctrl+s" className="shortcut" data-action="save" />

// Custom rendering
<KeyCombo
  combo="command option S"
  render={(keys) => (
    <div className="custom-combo">
      {keys.map((key, idx) => (
        <kbd key={key} className="key">
          {key}
        </kbd>
      ))}
    </div>
  )}
/>
```

### useKeyCombo Hook

```jsx
import { useKeyCombo } from "react-kbd-shortcuts";

function MyComponent() {
  // Basic usage
  const keys = useKeyCombo("ctrl alt delete");

  // With symbols
  const symbols = useKeyCombo("cmd+shift+p", true);

  // OS-specific
  const macKeys = useKeyCombo("ctrl+cmd+s", false, "mac");

  return (
    <div>
      <div>Keys: {keys.join(" + ")}</div>
      <div>Symbols: {symbols.join(" ")}</div>
      <div>Mac: {macKeys.join(" + ")}</div>
    </div>
  );
}
```

## Advanced Features

### OS-Specific Key Names

Use the `os` prop to render platform-specific key names:

```jsx
import { KeyCombo, type SupportedOS } from "react-kbd-shortcuts";

// Mac: "Control + Cmd + S"
<KeyCombo combo="ctrl+cmd+s" os="mac" />

// Windows: "Ctrl + Win + S"
<KeyCombo combo="ctrl+cmd+s" os="windows" />

// Linux: "Ctrl + Super + S"
<KeyCombo combo="ctrl+cmd+s" os="linux" />

// Auto-detect (example)
const os: SupportedOS = navigator.platform.includes('Mac') ? 'mac' : 'windows';
<KeyCombo combo="ctrl+cmd+s" os={os} />
```

### Symbol Mode

Pass `useSymbols={true}` to render Unicode symbols instead of text:

```jsx
// Text mode (default): "Ctrl + Shift + K"
<KeyCombo combo="ctrl+shift+K" />

// Symbol mode: "⌃ + ⇧ + K"
<KeyCombo combo="ctrl+shift+K" useSymbols />

// OS-specific symbols
<KeyCombo combo="ctrl+cmd" os="mac" useSymbols />     // "⌃ + ⌘"
<KeyCombo combo="ctrl+cmd" os="windows" useSymbols /> // "Ctrl + ⊞"
<KeyCombo combo="ctrl+cmd" os="linux" useSymbols />   // "Ctrl + ◆"
```

### Render Props

Both `Key` and `KeyCombo` support render props for complete control:

```jsx
// Key with custom rendering
<Key render={(content) => (
  <span className="custom-key" role="button">
    {content}
  </span>
)}>
  Ctrl
</Key>

// KeyCombo with custom rendering
<KeyCombo
  combo="cmd+shift+p"
  render={(keys) => (
    <div className="shortcut-display">
      {keys.map((key, i) => (
        <React.Fragment key={i}>
          <kbd className="key">{key}</kbd>
          {i < keys.length - 1 && <span className="separator">+</span>}
        </React.Fragment>
      ))}
    </div>
  )}
/>

// Combining with OS and symbols
<KeyCombo
  combo="ctrl+cmd+s"
  os="mac"
  useSymbols
  render={(keys) => (
    <code className="shortcut">{keys.join('')}</code>
  )}
/>
```

### TypeScript Support

Full TypeScript support with exported types:

```tsx
import {
  Key,
  KeyCombo,
  useKeyCombo,
  type SupportedOS,
  type KeyProps,
  type KeyComboProps,
} from "react-kbd-shortcuts";

interface ShortcutProps {
  combo: string;
  os: SupportedOS;
}

function Shortcut({ combo, os }: ShortcutProps) {
  return <KeyCombo combo={combo} os={os} useSymbols />;
}
```

**Available symbols:**

- Ctrl → ⌃
- Meta (Command/Win) → ⌘
- Alt (Option) → ⌥
- Shift → ⇧
- Enter → ↵
- Escape → ⎋
- Tab → ⇥
- Backspace → ⌫
- Delete → ⌦
- CapsLock → ⇪
- Arrow keys → ↑ ↓ ← →
- PageUp/Down → ⇞ ⇟
- Home/End → ↖ ↘

## API Reference

### Components

#### `<Key>`

Renders a single keyboard key.

**Props:**

- `children` - The key content to display
- `render?` - Custom render function `(content) => ReactNode`
- `...props` - Any standard HTML attributes (className, onClick, etc.)

#### `<KeyCombo>`

Renders a keyboard shortcut combination.

**Props:**

- `combo?` - Shortcut string (e.g., "ctrl+shift+k")
- `useSymbols?` - Use Unicode symbols instead of text
- `os?` - Target OS: "mac" | "windows" | "linux"
- `render?` - Custom render function `(keys: string[]) => ReactNode`
- `...props` - Any standard HTML attributes

### Hooks

#### `useKeyCombo(input, useSymbols?, os?)`

Parses shortcut string and returns key array.

**Parameters:**

- `input` - Shortcut string to parse
- `useSymbols?` - Return symbols instead of text
- `os?` - Target OS for key names

**Returns:** `string[]` - Array of parsed key names

### Functions

#### `parseKeyCombo(input, useSymbols?, os?)`

Direct parser function (same as hook but not React-specific).

### Types

```tsx
type SupportedOS = "mac" | "windows" | "linux";

interface KeyProps {
  children?: ReactNode;
  render?: (content: ReactNode) => ReactNode;
  [key: string]: any;
}

interface KeyComboProps {
  combo?: string;
  render?: (keys: string[]) => ReactNode;
  useSymbols?: boolean;
  os?: SupportedOS | null;
  [key: string]: any;
}
```

## Supported Keys

### Modifiers

- `ctrl`, `control` → Ctrl (Control on Mac)
- `cmd`, `command`, `win` → Cmd (Win on Windows, Super on Linux)
- `alt`, `option` → Alt (Option on Mac)
- `shift` → Shift

### Navigation

- `up`, `down`, `left`, `right`, `uparrow`, `downarrow`, `leftarrow`, `rightarrow` → Arrow keys
- `home`, `end`
- `pageup`, `pagedown`, `pgup`, `pgdn` → Page Up/Down

### Editing

- `enter`, `tab`, `space`
- `backspace`, `delete`, `del`
- `esc`, `escape`

### Function Keys

- `f1` through `f12` → F1-F12

### Symbols

- `comma`, `period`, `slash`, `backslash`
- `semicolon`, `quote`
- `bracketleft`, `bracketright`
- `equal`, `plus`, `minus`

### Numpad

- `num0` through `num9` → Numpad digits
- `nummultiply`, `numadd`, `numsubtract`, `numdecimal`, `numdivide` → Numpad operators

### Lock & Special Keys

- `capslock`, `caps` → Caps Lock
- `numlock`, `num` → Num Lock
- `scrolllock`, `scroll` → Scroll Lock
- `insert`, `ins`
- `pause`
- `printscreen`, `prtsc` → Print Screen

### Media Keys

- `volumeup`, `volumedown`, `volumemute`

## Examples

### Common Shortcuts

```jsx
// Save
<KeyCombo combo="ctrl+s" />

// Copy/Paste
<KeyCombo combo="ctrl+c" />
<KeyCombo combo="ctrl+v" />

// Undo/Redo
<KeyCombo combo="ctrl+z" />
<KeyCombo combo="ctrl+shift+z" />

// Search
<KeyCombo combo="ctrl+f" />

// Command palette
<KeyCombo combo="cmd+shift+p" useSymbols />
```

### Documentation Style

```jsx
function DocumentationExample() {
  return (
    <div>
      <p>
        Press <KeyCombo combo="ctrl+k" /> to open search, or{" "}
        <KeyCombo combo="cmd+shift+p" os="mac" useSymbols /> to open commands.
      </p>
    </div>
  );
}
```

### Interactive Shortcuts

```jsx
function InteractiveShortcut({ combo, onTrigger }) {
  return (
    <KeyCombo
      combo={combo}
      className="shortcut-button"
      onClick={onTrigger}
      role="button"
      tabIndex={0}
      render={(keys) => (
        <div className="flex items-center gap-1">
          {keys.map((key, i) => (
            <kbd key={i} className="px-2 py-1 bg-gray-100 rounded">
              {key}
            </kbd>
          ))}
        </div>
      )}
    />
  );
}
```

## Development

### Building

```bash
# Build once
npm run build

# Build and watch for changes
npm run dev
```

### Project Structure

```
react-kbd-shortcuts/
├── src/
│   ├── components/       # React components
│   ├── hooks/           # React hooks
│   ├── utils/           # Parser utilities
│   └── index.js         # Main entry
├── dist/                # Built ESM output (gitignored)
├── index.d.ts           # TypeScript definitions
└── rollup.config.mjs    # Build configuration
```

### Testing Changes

Use the sandbox example to test changes during development:

```bash
# Build the library in watch mode
npm run dev

# In another terminal, run the sandbox
cd examples/sandbox
npm run dev
```

The sandbox imports from `dist/`, so the library auto-rebuilds when you edit source files.
