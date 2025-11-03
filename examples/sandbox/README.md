# react-kbd-shortcuts-sandbox

Demo application showcasing the `react-kbd-shortcuts` library.

## 🚀 Development

From the **monorepo root**:

```bash
# Run both library watch + dev server
pnpm dev

# Or run just the sandbox
pnpm dev:sandbox
```

From **this directory**:

```bash
pnpm dev
```

**Note**: The sandbox imports from `../../packages/react-kbd-shortcuts/dist`, so make sure the library is built first or run the library in watch mode.

## 🏗️ Building

```bash
pnpm build
```

This will:

1. Run TypeScript compilation (`tsc -b`)
2. Build for production with Vite

## 📦 Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- react-kbd-shortcuts (workspace dependency)
