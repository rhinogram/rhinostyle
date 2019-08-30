"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _ResourceExample = _interopRequireDefault(require("./examples/Resource.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ResourceScope = {
  Icon: _components.Icon,
  React: _react.default,
  ReactDOM: _reactDom.default,
  Resource: _components.Resource,
  ResourceGroup: _components.ResourceGroup,
  ResourceBottom: _components.ResourceBottom,
  ResourceIntro: _components.ResourceIntro,
  ResourceBody: _components.ResourceBody,
  ResourceRight: _components.ResourceRight
};
var ResourceDocs = {
  active: 'Adds active styling to item; normally used within a list view',
  selected: 'Used in conjunction with interfaceMode to determine an actively selected item',
  disabled: 'Disables onClick functionality and adds in additional styling',
  unavailable: 'Disables onClick functionality, but maintains hover events on resource. Adds additional styling to mute ResourceIntro and ResourceBody.',
  interfaceMode: 'Set on the parent <code>&lt;ResourceGroup /&gt;</code> ' + // eslint-disable-line single-quotes
  "is passed down to impact styling of an item <code>oneOf(['radio', 'checkbox'])</code>",
  // eslint-disable-line single-quotes
  onClick: 'Fires on click of an item',
  unread: 'Adds unread styling to an item; normally used within a list view'
};

var ResourcesApp = function ResourcesApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Resources"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "A multi-use component used to display items throughout the application.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Resources Playground"), _react.default.createElement(_components2.Live, {
    code: _ResourceExample.default,
    scope: ResourceScope,
    component: _components.Resource,
    propDescriptions: ResourceDocs
  })));
};

_reactDom.default.render(_react.default.createElement(ResourcesApp, null), document.getElementById('root'));