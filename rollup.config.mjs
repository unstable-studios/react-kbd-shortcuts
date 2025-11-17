import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

// react is a peer; don't bundle it
const external = ["react", "react-dom", "react/jsx-runtime"];

export default [
  {
    input: "src/index.js", // your actual entry is src/index.js (JS + JSX)
    external,
    plugins: [
      nodeResolve({ extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"] }),
      esbuild({
        jsx: "automatic", // React JSX transform
        target: "es2019",
        sourceMap: true,
        loaders: {
          ".js": "jsx",
          ".jsx": "jsx",
        },
      }),
      commonjs(),
    ],
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
  },
];
