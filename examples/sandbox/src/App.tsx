import { Key, KeyCombo } from "react-kbd-shortcuts";

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 px-8 py-12 max-w-6xl mx-auto font-medium tracking-tight">
        {/* Header */}
        <div className="flex gap-4 items-center justify-between border-b border-zinc-200 pb-6">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold">
            React KBD Shortcuts
          </h1>
          <a
            href="https://github.com/unstable-studios/react-kbd-shortcuts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex px-4 py-2 text-sm md:text-base rounded-lg shadow-lg text-zinc-800 bg-yellow-400 font-mono font-extrabold cursor-pointer hover:bg-yellow-300 transition">
              View on GitHub
            </button>
          </a>
        </div>

        {/* Basic Key Component */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">
            Basic Key Component
          </h2>
          <p className="text-zinc-600">
            Use the{" "}
            <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">
              Key
            </code>{" "}
            component to render individual keyboard keys:
          </p>
          <div className="flex gap-3 items-center p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <Key>Ctrl</Key>
            <Key>Shift</Key>
            <Key>Alt</Key>
            <Key>⌘</Key>
            <Key>Enter</Key>
          </div>
        </section>

        {/* KeyCombo - Default Rendering */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">
            KeyCombo - Default Rendering
          </h2>
          <p className="text-zinc-600">
            Use{" "}
            <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">
              KeyCombo
            </code>{" "}
            to parse and render keyboard shortcuts:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="ctrl+s"
              </code>
              <KeyCombo combo="ctrl+s" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="cmd+shift+p"
              </code>
              <KeyCombo combo="cmd+shift+p" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="ctrl+k ctrl+c"
              </code>
              <KeyCombo combo="ctrl+k ctrl+c" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="shift+enter"
              </code>
              <KeyCombo combo="shift+enter" />
            </div>
          </div>
        </section>

        {/* KeyCombo - Symbol Mode */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">
            KeyCombo - Symbol Mode
          </h2>
          <p className="text-zinc-600">
            Add{" "}
            <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">
              useSymbols
            </code>{" "}
            prop to render Mac-style symbols:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="cmd+s" useSymbols
              </code>
              <KeyCombo combo="cmd+s" useSymbols />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="ctrl+shift+up" useSymbols
              </code>
              <KeyCombo combo="ctrl+shift+up" useSymbols />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="alt+left" useSymbols
              </code>
              <KeyCombo combo="alt+left" useSymbols />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                combo="cmd+shift+delete" useSymbols
              </code>
              <KeyCombo combo="cmd+shift+delete" useSymbols />
            </div>
          </div>
        </section>

        {/* KeyCombo - Custom Render */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">
            KeyCombo - Custom Rendering
          </h2>
          <p className="text-zinc-600">
            Use the{" "}
            <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">
              render
            </code>{" "}
            prop for complete control over appearance:
          </p>
          <div className="flex flex-col gap-4">
            {/* Example 1: Colored Pills */}
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                Custom pill style
              </code>
              <KeyCombo
                combo="ctrl+shift+f"
                render={(keys) => (
                  <div className="flex gap-2">
                    {keys.map((key, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-blue-500 text-white font-mono font-bold text-sm"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                )}
              />
            </div>

            {/* Example 2: Keyboard-style */}
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                Keyboard-style buttons
              </code>
              <KeyCombo
                combo="alt+tab"
                render={(keys) => (
                  <div className="flex gap-2 items-center">
                    {keys.map((key, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-md bg-linear-to-b from-zinc-100 to-zinc-200 border border-zinc-300 shadow-md text-zinc-800 font-mono font-bold"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                )}
              />
            </div>

            {/* Example 3: Inline text */}
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <code className="text-sm text-zinc-500 font-mono">
                Inline documentation style
              </code>
              <p className="text-zinc-700">
                Press{" "}
                <KeyCombo
                  combo="cmd+k"
                  render={(keys) => (
                    <>
                      {keys.map((key, index) => (
                        <span key={index}>
                          <kbd className="px-2 py-1 text-sm font-mono bg-zinc-200 border border-zinc-300 rounded">
                            {key}
                          </kbd>
                          {index < keys.length - 1 && (
                            <span className="mx-1">+</span>
                          )}
                        </span>
                      ))}
                    </>
                  )}
                />{" "}
                to open the command palette
              </p>
            </div>
          </div>
        </section>

        {/* useKeyCombo Hook */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">useKeyCombo Hook</h2>
          <p className="text-zinc-600">
            Use the{" "}
            <code className="px-2 py-1 bg-zinc-100 rounded text-sm font-mono">
              useKeyCombo
            </code>{" "}
            hook for programmatic access:
          </p>
          <div className="flex flex-col gap-4 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <code className="text-sm text-zinc-700 font-mono whitespace-pre">
              {`const keys = useKeyCombo("ctrl+shift+s");
// Returns: ["Ctrl", "Shift", "S"]

const symbols = useKeyCombo("cmd+left", { useSymbols: true });
// Returns: ["⌘", "←"]`}
            </code>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-zinc-800">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Save Document</h3>
              <KeyCombo combo="ctrl+s" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Copy & Paste</h3>
              <div className="flex gap-4">
                <KeyCombo combo="ctrl+c" />
                <KeyCombo combo="ctrl+v" />
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Navigate Tabs</h3>
              <KeyCombo combo="ctrl+tab" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Search</h3>
              <KeyCombo combo="ctrl+f" />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Command Palette</h3>
              <KeyCombo combo="cmd+shift+p" useSymbols />
            </div>
            <div className="flex flex-col gap-2 p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h3 className="font-bold text-zinc-700">Quick Open</h3>
              <KeyCombo combo="ctrl+p" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 pt-8 border-t border-zinc-200">
          <p>Built with ❤️ by Unstable Studios • MIT License</p>
        </footer>
      </div>
    </>
  );
}

export default App;
