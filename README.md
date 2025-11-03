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
