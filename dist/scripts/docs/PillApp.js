"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _PillExample = _interopRequireDefault(require("./examples/Pill.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PillDocs = {
  hideClose: 'Whether to show close icon',
  type: "<code>oneOf(['default', 'primary'])</code>" // eslint-disable-line single-quotes

};
var PillScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Pill: _components.Pill,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var PillApp = function PillApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Pills"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "The Pill component is used to display current filters or selections.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _PillExample.default,
    scope: PillScope,
    component: _components.Pill,
    propDescriptions: PillDocs
  })));
};

_reactDom.default.render(_react.default.createElement(PillApp, null), document.getElementById('root'));