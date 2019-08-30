"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _LabelExample = _interopRequireDefault(require("./examples/Label.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var LabelDocs = {
  iconBump: "Move icon up or down slightly for precise positioning <code>oneOf(['down', 'up'])</code>",
  // eslint-disable-line single-quotes
  type: "<code>oneOf(['default', 'primary', 'secondary', 'accent'])</code>" // eslint-disable-line single-quotes

};
var LabelScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Label: _components.Label,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var LabelApp = function LabelApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Label Types"), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Label, {
    label: "DEFAULT"
  }), _react.default.createElement(_components.Label, {
    type: "secondary",
    label: "SECONDARY"
  }), _react.default.createElement(_components.Label, {
    type: "accent",
    label: "ACCENT"
  }), _react.default.createElement(_components.Label, {
    type: "danger",
    label: "DANGER"
  }), _react.default.createElement(_components.Label, {
    label: "DEFAULT",
    icon: "cog"
  }))), _react.default.createElement("div", {
    className: "u-m-b"
  }, _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Label, {
    label: "Default"
  }), _react.default.createElement(_components.Label, {
    type: "secondary",
    label: "Secondary"
  }), _react.default.createElement(_components.Label, {
    type: "accent",
    label: "Accent"
  }), _react.default.createElement(_components.Label, {
    type: "danger",
    label: "Danger"
  }), _react.default.createElement(_components.Label, {
    label: "Default",
    icon: "cog"
  }))), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.Label, {
    label: "default"
  }), _react.default.createElement(_components.Label, {
    type: "secondary",
    label: "secondary"
  }), _react.default.createElement(_components.Label, {
    type: "accent",
    label: "accent"
  }), _react.default.createElement(_components.Label, {
    type: "danger",
    label: "danger"
  }), _react.default.createElement(_components.Label, {
    label: "default",
    icon: "cog"
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _LabelExample.default,
    scope: LabelScope,
    component: _components.Label,
    propDescriptions: LabelDocs
  })));
};

_reactDom.default.render(_react.default.createElement(LabelApp, null), document.getElementById('root'));