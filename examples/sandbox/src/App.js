import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("h1", { children: "Vite + React" }), _jsx("div", { className: "card", children: _jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["count is ", count] }) }), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }) }));
}
export default App;
