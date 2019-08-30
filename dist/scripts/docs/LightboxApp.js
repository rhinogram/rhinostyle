"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _LightboxExample = _interopRequireDefault(require("./examples/Lightbox.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var LightboxDocs = {};
var LightboxScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Lightbox: _components.Lightbox
};

var LightboxApp = function LightboxApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Lightbox ", _react.default.createElement(_components.Label, {
    className: "u-m-l-small",
    type: "accent",
    label: "third party"
  })), _react.default.createElement("p", {
    className: "site-copy"
  }, "We are using", _react.default.createElement("a", {
    href: "https://github.com/fritz-c/react-image-lightbox",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "react-image-lightbox"), "for lightbox images/galleries.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Lightbox Playground"), _react.default.createElement(_components2.Live, {
    code: _LightboxExample.default,
    scope: LightboxScope,
    component: _components.Lightbox,
    propDescriptions: LightboxDocs
  })));
};

_reactDom.default.render(_react.default.createElement(LightboxApp, null), document.getElementById('root'));