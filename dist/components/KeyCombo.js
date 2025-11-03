"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useKeyCombo = require("../hooks/useKeyCombo");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Headless KeyCombo: accepts a combo string and a render prop
var KeyCombo = function KeyCombo(_ref) {
  var _ref$combo = _ref.combo,
    combo = _ref$combo === void 0 ? "" : _ref$combo,
    render = _ref.render,
    _ref$useSymbols = _ref.useSymbols,
    useSymbols = _ref$useSymbols === void 0 ? false : _ref$useSymbols;
  var keys = (0, _useKeyCombo.useKeyCombo)(combo, useSymbols);
  if (typeof render === "function") {
    return render(keys);
  }
  // Default rendering (can be styled by user)
  return /*#__PURE__*/_react["default"].createElement("span", null, keys.map(function (key, idx) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: key
    }, /*#__PURE__*/_react["default"].createElement("span", null, key), idx < keys.length - 1 && " + ");
  }));
};
var _default = exports["default"] = KeyCombo;