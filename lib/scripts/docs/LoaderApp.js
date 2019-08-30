"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _LoaderCircleExample = _interopRequireDefault(require("./examples/LoaderCircle.example.txt"));

var _LoaderPulseExample = _interopRequireDefault(require("./examples/LoaderPulse.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var LoaderCircleDocs = {
  pause: 'Pause animation. This is normally used if the loader is in the DOM, but not visible - to save on performance',
  size: "<code>oneOf(['xsmall', 'small', 'large'])</code>" // eslint-disable-line single-quotes

};
var LoaderCircleScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  LoaderCircle: _components.LoaderCircle,
  UtilityInlineGrid: _components.UtilityInlineGrid
};
var LoaderPulseDocs = {
  pause: 'Pause animation. This is normally used if the loader is in the DOM, but not visible - to save on performance',
  type: "<code>oneOf(['default', 'accent', 'secondary'])</code>" // eslint-disable-line single-quotes

};
var LoaderPulseScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  LoaderPulse: _components.LoaderPulse
};

var LoaderApp = function LoaderApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "LoaderCircle Sizes"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "size=\"xsmall | small | large\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement(_components.LoaderCircle, {
    size: "xsmall"
  }), _react.default.createElement(_components.LoaderCircle, {
    size: "small"
  }), _react.default.createElement(_components.LoaderCircle, null), _react.default.createElement(_components.LoaderCircle, {
    size: "large"
  }))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "LoaderCircle Playground"), _react.default.createElement(_components2.Live, {
    code: _LoaderCircleExample.default,
    scope: LoaderCircleScope,
    component: _components.LoaderCircle,
    propDescriptions: LoaderCircleDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "LoaderPulse Types"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"default | secondary | accent\"")), _react.default.createElement(_components.UtilityList, {
    space: true
  }, _react.default.createElement(_components.UtilityListItem, null, _react.default.createElement(_components.LoaderPulse, null)), _react.default.createElement(_components.UtilityListItem, null, _react.default.createElement(_components.LoaderPulse, {
    type: "accent"
  })), _react.default.createElement(_components.UtilityListItem, null, _react.default.createElement(_components.LoaderPulse, {
    type: "secondary"
  })))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "LoaderPulse Playground"), _react.default.createElement(_components2.Live, {
    code: _LoaderPulseExample.default,
    scope: LoaderPulseScope,
    component: _components.LoaderPulse,
    propDescriptions: LoaderPulseDocs
  })));
};

_reactDom.default.render(_react.default.createElement(LoaderApp, null), document.getElementById('root'));