"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _UtilityInlineGridExample = _interopRequireDefault(require("./examples/UtilityInlineGrid.example.txt"));

var _UtilityListExample = _interopRequireDefault(require("./examples/UtilityList.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var UtilityInlineGridDocs = {
  align: "Align grid along x-axis <code>oneOf([middle', 'right', 'between'])</code>",
  // eslint-disable-line single-quotes
  size: "Gutter size for list <code>oneOf(['small', 'regular', 'large'])</code>" // eslint-disable-line single-quotes

};
var UtilityInlineGridScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid
};
var UtilityListDocs = {
  space: 'List items have space between them',
  border: 'List items have space and border between them'
};
var UtilityListScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  UtilityList: _components.UtilityList,
  UtilityListItem: _components.UtilityListItem
};

var UtilityComponentsApp = function UtilityComponentsApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Utility Components"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Helpers that can be used in conjunction with our components.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Inline Grid"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("p", null, "Variable-width content; like buttons and/or list items, can wrap at certain widths within our app when placed next to each other. We can use the", _react.default.createElement("code", null, "u-inline-grid"), " class to provide adequate spacing."), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Note:"), " This utility adds margin to each decendant of the class, so if the component you are interacting with has margin, wrap it in another element (such as a ", _react.default.createElement("code", null, "<div>"), ") to get around adverse spacing effects. There should be no whitespace modifiers directly attached.")), _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Inline Grid Playground"), _react.default.createElement(_components2.Live, {
    code: _UtilityInlineGridExample.default,
    scope: UtilityInlineGridScope,
    component: _components.UtilityInlineGrid,
    propDescriptions: UtilityInlineGridDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "List"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("p", null, "Create block-level lists that reset default ", _react.default.createElement("code", null, "<ul>"), " styles.")), _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "List Playground"), _react.default.createElement(_components2.Live, {
    code: _UtilityListExample.default,
    scope: UtilityListScope,
    component: _components.UtilityList,
    propDescriptions: UtilityListDocs
  })));
};

_reactDom.default.render(_react.default.createElement(UtilityComponentsApp, null), document.getElementById('root'));