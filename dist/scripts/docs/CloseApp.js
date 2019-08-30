"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _CloseExample = _interopRequireDefault(require("./examples/Close.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CloseDocs = {};
var CloseScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Close: _components.Close
};

var CloseApp = function CloseApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Close"), _react.default.createElement("p", {
    className: "site-text-lead"
  }, "The Close component is used within numerous components - particularly in our feedback system.")), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _CloseExample.default,
    scope: CloseScope,
    component: _components.Close,
    propDescriptions: CloseDocs
  })));
};

_reactDom.default.render(_react.default.createElement(CloseApp, null), document.getElementById('root'));