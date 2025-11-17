---
"react-kbd-shortcuts": minor
---

## New Features

- **OS-Aware Key Parsing**: Added support for Mac, Windows, and Linux specific key mappings
- **User-Friendly String Mappings**: Added `KEY_STRINGS` parallel to `KEY_SYMBOLS` for better default text output
- **Render Props Support**: Added headless render prop functionality to `Key` component
- **Standard HTML Props**: Both `Key` and `KeyCombo` components now accept standard HTML attributes
- **TypeScript Support**: Added `SupportedOS` type and complete interface definitions

## Improvements

- Better key symbol representations with Unicode symbols
- OS-specific modifier key names (Control/Cmd/Option on Mac, Ctrl/Win/Alt on Windows/Linux)
- Comprehensive test coverage with 91 test cases
- Complete README documentation with API reference and examples

## Breaking Changes

- Default output now uses user-friendly strings instead of internal key names (e.g., "Cmd" instead of "Meta")
- Set `useSymbols=true` to get Unicode symbols, or handle the new string format
