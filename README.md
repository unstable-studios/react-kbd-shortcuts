# react-kbd-shortcuts

A monorepo for the `react-kbd-shortcuts` library and examples.

**[View the interactive demo →](https://unstable-studios.github.io/react-kbd-shortcuts/)**

## Packages

- **[packages/react-kbd-shortcuts](./packages/react-kbd-shortcuts)** - The main library
- **[examples/sandbox](./examples/sandbox)** - Demo application

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Development

**Run everything in parallel** (recommended for library development):

```bash
pnpm dev
```

This runs both:

- Library build in watch mode (`rollup -c -w`)
- Sandbox dev server (`vite`)

**Or run individually:**

```bash
# Library only (watch mode)
pnpm dev:lib

# Sandbox only
pnpm dev:sandbox
```

### Building

Build all packages:

```bash
pnpm build
```

### Structure

```
react-kbd-shortcuts/
├── packages/
│   └── react-kbd-shortcuts/    # Library source & build
│       ├── src/                # Source files (.js with JSX)
│       ├── dist/               # Built output (ESM)
│       └── index.d.ts          # TypeScript definitions
└── examples/
    └── sandbox/                # Demo app using the library
        └── src/
```

### How it Works

- The library builds `.js` files (with JSX) → ESM output in `dist/`
- The sandbox imports from `dist/` (not `src/`)
- In dev mode, Rollup watches for changes and rebuilds automatically
- Vite hot-reloads when dist files change

## Scripts

- `pnpm dev` - Run library watch + sandbox dev server in parallel
- `pnpm dev:lib` - Run library in watch mode only
- `pnpm dev:sandbox` - Run sandbox dev server only
- `pnpm build` - Build all packages
- `pnpm lint` - Lint all packages

## Tech Stack

- **Build**: Rollup + esbuild (for library), Vite (for sandbox)
- **Package Manager**: pnpm with workspaces
- **Language**: JavaScript with JSX, TypeScript for sandbox
- **Framework**: React 19
