# react-kbd-shortcuts

A headless React library for parsing and rendering keyboard shortcuts from natural language input. Easily convert phrases like "ctrl+shift+K" or "command option S" into normalized key arrays, and render them with full control over styling and markup. Includes logic-only hooks and components for maximum flexibility - ideal for building custom shortcut UIs, documentation, or interactive help overlays.

- Headless: No built-in styles - render shortcuts your way.
- Natural input: Parse human-friendly shortcut strings.
- React hooks & components: Use logic in any React app.
- Customizable: Style and structure output however you want.

## Usage Examples

### Key Component

```jsx
import { Key } from "react-kbd-shortcuts";

<Key>Ctrl</Key>;
```

### KeyCombo Component (default rendering)

```jsx
import { KeyCombo } from "react-kbd-shortcuts";

<KeyCombo combo="ctrl+shift+K" />;
```

### KeyCombo Component (custom rendering)

```jsx
import { KeyCombo } from "react-kbd-shortcuts";

<KeyCombo
  combo="command option S"
  render={(keys) => (
    <div>
      {keys.map((key, idx) => (
        <span key={key} style={{ padding: 4, border: "1px solid #ccc" }}>
          {key}
        </span>
      ))}
    </div>
  )}
/>;
```

### useKeyCombo Hook

```jsx
import { useKeyCombo } from "react-kbd-shortcuts";

function MyComponent() {
  const keys = useKeyCombo("ctrl alt delete");
  return <pre>{JSON.stringify(keys)}</pre>;
}
```

### Using Symbols Instead of Text

Pass `useSymbols={true}` to render Unicode symbols (⌘, ⌃, ⌥, etc.) instead of text labels:

```jsx
import { KeyCombo } from "react-kbd-shortcuts";

// Text mode (default): "Ctrl + Shift + K"
<KeyCombo combo="ctrl+shift+K" />

// Symbol mode: "⌃ + ⇧ + K"
<KeyCombo combo="ctrl+shift+K" useSymbols />

// With hook
function MyComponent() {
  const keys = useKeyCombo("command shift S", true);
  return <span>{keys.join(" + ")}</span>; // "⌘ + ⇧ + S"
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

## Supported Keys

### Modifiers

- `ctrl`, `control` → Ctrl
- `cmd`, `command`, `win` → Meta (⌘ on Mac, ⊞ on Windows)
- `alt`, `option` → Alt
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
