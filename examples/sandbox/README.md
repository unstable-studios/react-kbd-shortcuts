# react-kbd-shortcuts-sandbox

Demo application showcasing the `react-kbd-shortcuts` library.

## 🚀 Development

From the **library root** (`../../`):

```bash
# Build the library in watch mode
npm run dev
```

From **this directory** (in another terminal):

```bash
npm run dev
```

**Note**: The sandbox imports from `../../dist`, so make sure the library is built first or run the library in watch mode.

## 🏗️ Building

```bash
npm run build
```

This will:

1. Run TypeScript compilation (`tsc -b`)
2. Build for production with Vite

## 📦 Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- react-kbd-shortcuts (local file dependency)
