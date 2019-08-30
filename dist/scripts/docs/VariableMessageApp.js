"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _VariableMessageExample = _interopRequireDefault(require("./examples/VariableMessage.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var VariableMessageDocs = {
  composeLabel: 'Label used above the editable text',
  previewLabel: 'Label used above the preview message bubble',
  reset: 'Allow the initial value to be reverted after edit',
  variables: 'Select options (with variable notes) that power the find/replace functionality',
  initialValue: 'Plain-text message value that should be used by default or that is currently stored in the database',
  onInput: 'Callback function when the composition area is changed',
  readOnly: 'Disable compose input, select variable option, and message preview. This would typically be used in tandem with the intialValue prop',
  variableExplanationMessage: 'Text that appears next to the variable select'
};
var VariableMessageScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  VariableMessage: _components.VariableMessage
};

var VariableMessageApp = function VariableMessageApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Variable Messages"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "Variable Messages are a composition tool that uses placeholders to create templates that substitute the actual values when in-use.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Variable Message Playground"), _react.default.createElement(_components2.Live, {
    code: _VariableMessageExample.default,
    scope: VariableMessageScope,
    component: _components.VariableMessage,
    propDescriptions: VariableMessageDocs
  })));
};

_reactDom.default.render(_react.default.createElement(VariableMessageApp, null), document.getElementById('root'));