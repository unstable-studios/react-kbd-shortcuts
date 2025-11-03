import React, { useState } from "react";
import {
  Shortcut,
  Kbd,
  Platform,
  KeyVariant,
  KeySize,
  parseCombo,
  normalizeKey,
  detectPlatform,
} from "@unstablestudios/react-kbd-shortcuts";

function App() {
  const [platform, setPlatform] = useState<Platform>("auto");
  const [useSymbols, setUseSymbols] = useState(true);
  const [variant, setVariant] = useState<KeyVariant>("soft");
  const [size, setSize] = useState<KeySize>("sm");
  const [customCombo, setCustomCombo] = useState("cmd+k");

  const detectedPlatform = detectPlatform();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Kbd Shortcuts Playground
          </h1>
          <p className="text-lg text-gray-600">
            Interactive demo of{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              @unstablestudios/react-kbd-shortcuts
            </code>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Detected platform:{" "}
            <span className="font-semibold">{detectedPlatform}</span>
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value as Platform)}
                className="w-full p-2 border rounded-md"
              >
                <option value="auto">Auto</option>
                <option value="mac">Mac</option>
                <option value="windows">Windows</option>
                <option value="linux">Linux</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as KeyVariant)}
                className="w-full p-2 border rounded-md"
              >
                <option value="solid">Solid</option>
                <option value="soft">Soft</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as KeySize)}
                className="w-full p-2 border rounded-md"
              >
                <option value="xs">XS</option>
                <option value="sm">SM</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={(e) => setUseSymbols(e.target.checked)}
                  className="mr-2"
                />
                Use Symbols (Mac)
              </label>
            </div>
          </div>
        </div>

        {/* Basic Examples */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Basic Examples</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">String combo:</span>
              <Shortcut
                combo="cmd+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Array combo:</span>
              <Shortcut
                combo={["ctrl", "shift", "p"]}
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">With modifier keys:</span>
              <Shortcut
                combo="cmd+alt+shift+delete"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
              />
            </div>
          </div>
        </div>

        {/* All Variants */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">All Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(["solid", "soft", "outline", "ghost"] as KeyVariant[]).map(
              (v) => (
                <div key={v} className="text-center">
                  <div className="mb-2">
                    <Shortcut
                      combo="cmd+k"
                      platform={platform}
                      useSymbols={useSymbols}
                      variant={v}
                      size={size}
                    />
                  </div>
                  <span className="text-xs text-gray-500 capitalize">{v}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* All Sizes */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">All Sizes</h2>
          <div className="flex items-center justify-center space-x-8">
            {(["xs", "sm", "md", "lg"] as KeySize[]).map((s) => (
              <div key={s} className="text-center">
                <div className="mb-2">
                  <Shortcut
                    combo="cmd+k"
                    platform={platform}
                    useSymbols={useSymbols}
                    variant={variant}
                    size={s}
                  />
                </div>
                <span className="text-xs text-gray-500 uppercase">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Separators */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Separators</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Default ("+"):</span>
              <Shortcut
                combo="cmd+shift+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Arrow ("→"):</span>
              <Shortcut
                combo="cmd+shift+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
                separator="→"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Dot ("·"):</span>
              <Shortcut
                combo="cmd+shift+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
                separator="·"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Space (" "):</span>
              <Shortcut
                combo="cmd+shift+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
                separator=" "
              />
            </div>
          </div>
        </div>

        {/* Common Shortcuts */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Common Shortcuts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Copy:</span>
                <Shortcut
                  combo="cmd+c"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Paste:</span>
                <Shortcut
                  combo="cmd+v"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Undo:</span>
                <Shortcut
                  combo="cmd+z"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Select All:</span>
                <Shortcut
                  combo="cmd+a"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Search:</span>
                <Shortcut
                  combo="cmd+f"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">New Tab:</span>
                <Shortcut
                  combo="cmd+t"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Close Tab:</span>
                <Shortcut
                  combo="cmd+w"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Refresh:</span>
                <Shortcut
                  combo="cmd+r"
                  platform={platform}
                  useSymbols={useSymbols}
                  variant={variant}
                  size={size}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Key Renderer */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Key Renderer</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Rainbow keys:</span>
              <Shortcut
                combo="cmd+shift+k"
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
                renderKey={(display, raw, index) => (
                  <Kbd
                    variant={variant}
                    size={size}
                    className={`${
                      index === 0
                        ? "bg-red-100 border-red-300 text-red-800"
                        : index === 1
                        ? "bg-blue-100 border-blue-300 text-blue-800"
                        : "bg-green-100 border-green-300 text-green-800"
                    }`}
                  >
                    {display}
                  </Kbd>
                )}
              />
            </div>
          </div>
        </div>

        {/* Primitive Kbd Component */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Primitive Kbd Component
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Single key:</span>
              <Kbd variant={variant} size={size}>
                ⌘
              </Kbd>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Custom content:</span>
              <Kbd variant={variant} size={size}>
                Ctrl+C
              </Kbd>
            </div>
          </div>
        </div>

        {/* Custom Combo Tester */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Combo Tester</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter a combo:
              </label>
              <input
                type="text"
                value={customCombo}
                onChange={(e) => setCustomCombo(e.target.value)}
                placeholder="e.g., cmd+shift+p, alt+enter"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Result:</span>
              <Shortcut
                combo={customCombo}
                platform={platform}
                useSymbols={useSymbols}
                variant={variant}
                size={size}
              />
            </div>
          </div>
        </div>

        {/* Low-level Parse Utilities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Parse Utilities</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">
                parseCombo("cmd+shift+k"):
              </div>
              <code className="text-xs bg-gray-100 p-2 rounded block">
                {JSON.stringify(parseCombo("cmd+shift+k"))}
              </code>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">
                normalizeKey("cmd", "{detectedPlatform}",{" "}
                {useSymbols ? "true" : "false"}):
              </div>
              <code className="text-xs bg-gray-100 p-2 rounded block">
                "{normalizeKey("cmd", detectedPlatform, useSymbols)}"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
