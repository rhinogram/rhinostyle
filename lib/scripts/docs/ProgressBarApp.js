"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _ProgressBarExample = _interopRequireDefault(require("./examples/ProgressBar.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ProgressBarDocs = {
  progress: 'The initial \'fill\' of the ProgressBar',
  showLabel: 'Show the progress in % on the ProgressBar',
  type: "<code>oneOf(['default', 'primary', 'secondary', 'temperature'])</code>" // eslint-disable-line single-quotes

};
var ProgressBarScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  ProgressBar: _components.ProgressBar
};

var ProgressBarApp = function ProgressBarApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "ProgressBar Types"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"default | primary | secondary | temperature\"")), _react.default.createElement(_components.ProgressBar, {
    progress: 20,
    className: "u-m-b"
  }), _react.default.createElement(_components.ProgressBar, {
    progress: 40,
    type: "primary",
    className: "u-m-b"
  }), _react.default.createElement(_components.ProgressBar, {
    progress: 60,
    type: "secondary",
    className: "u-m-b"
  }), _react.default.createElement(_components.ProgressBar, {
    progress: 80,
    type: "temperature",
    className: "u-m-b"
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "ProgressBar Labels"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Include ", _react.default.createElement("code", null, "showLabel"), " property to create progress bar label."), _react.default.createElement(_components.ProgressBar, {
    progress: 60,
    showLabel: true,
    type: "primary"
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _ProgressBarExample.default,
    scope: ProgressBarScope,
    component: _components.ProgressBar,
    propDescriptions: ProgressBarDocs
  })));
};

_reactDom.default.render(_react.default.createElement(ProgressBarApp, null), document.getElementById('root'));