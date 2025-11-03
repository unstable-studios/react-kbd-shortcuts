import React from "react";
import { useKeyCombo } from "../hooks/useKeyCombo";

// Headless KeyCombo: accepts a combo string and a render prop
const KeyCombo = ({ combo = "", render, useSymbols = false }) => {
  const keys = useKeyCombo(combo, useSymbols);
  if (typeof render === "function") {
    return render(keys);
  }
  // Default rendering (can be styled by user)
  return (
    <span>
      {keys.map((key, idx) => (
        <React.Fragment key={key}>
          <span>{key}</span>
          {idx < keys.length - 1 && " + "}
        </React.Fragment>
      ))}
    </span>
  );
};

export default KeyCombo;
