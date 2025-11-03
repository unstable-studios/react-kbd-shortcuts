import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';
import { useKeyCombo } from '../hooks/useKeyCombo.js';

const KeyCombo = ({ combo = "", render, useSymbols = false }) => {
  const keys = useKeyCombo(combo, useSymbols);
  if (typeof render === "function") {
    return render(keys);
  }
  return /* @__PURE__ */ jsx("span", { children: keys.map((key, idx) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("span", { children: key }),
    idx < keys.length - 1 && " + "
  ] }, key)) });
};

export { KeyCombo as default };
//# sourceMappingURL=KeyCombo.js.map
