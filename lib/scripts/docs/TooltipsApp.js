"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _TooltipsExample = _interopRequireDefault(require("./examples/Tooltips.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TooltipsScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Icon: _components.Icon,
  Tooltip: _components.Tooltip,
  UtilityInlineGrid: _components.UtilityInlineGrid
};
var TooltipsDocs = {
  children: 'Only accepts one child',
  placement: "Position of tooltip  <code>oneOf(['top', 'right', 'bottom', 'left'])</code>",
  // eslint-disable-line single-quotes
  content: 'Content of tooltip. May contain HTML or other components',
  delay: 'Delay showing the tooltip onmouseenter or click. Can be either the prop itself (defaults 1000 milliseconds) or you can pass in a value',
  type: "Color scheme of tooltip <code>oneOf(['light', 'dark'])</code>" // eslint-disable-line single-quotes

};

var TooltipsApp = function TooltipsApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Tooltips"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Our tooltips can be attached to any valid element, including other React components. For desktop, a tooltip is initiated on", _react.default.createElement("code", null, "mouseenter"), ", and closed on ", _react.default.createElement("code", null, "mouseleave"), " of the trigger. On touch devices, tooltips are enabled via the touch simulated", _react.default.createElement("code", null, "click"), " event")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Tooltips Playground"), _react.default.createElement(_components2.Live, {
    code: _TooltipsExample.default,
    scope: TooltipsScope,
    component: _components.Tooltip,
    propDescriptions: TooltipsDocs
  })));
};

_reactDom.default.render(_react.default.createElement(TooltipsApp, null), document.getElementById('root'));