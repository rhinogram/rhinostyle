"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _CoverBodyExample = _interopRequireDefault(require("./examples/CoverBody.example.txt"));

var _CoverExample = _interopRequireDefault(require("./examples/Cover.example.txt"));

var _CoverFooterExample = _interopRequireDefault(require("./examples/CoverFooter.example.txt"));

var _CoverHeaderExample = _interopRequireDefault(require("./examples/CoverHeader.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CoverDocs = {};
var CoverHeaderDocs = {
  icon: 'Attaches Icon to the header',
  iconClassName: 'Adds class to the header Icon'
};
var CoverBodyDocs = {
  size: "<code>oneOf(['small', 'medium', 'large'])</code>",
  // eslint-disable-line single-quotes
  contentMiddle: 'Vertically center content within Cover'
};
var CoverFooterDocs = {};
var CoverScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Input: _components.Input,
  Cover: _components.Cover,
  CoverHeader: _components.CoverHeader,
  CoverBody: _components.CoverBody,
  CoverFooter: _components.CoverFooter,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var CoverApp = function CoverApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Cover Example"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Although the ", _react.default.createElement("code", null, "<Cover />"), " component is written inline, it actually renders outside of the main application to retiain proper styling."), _react.default.createElement(_components2.Live, {
    code: _CoverExample.default,
    scope: CoverScope,
    component: _components.Cover,
    propDescriptions: CoverDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "CoverHeader"), _react.default.createElement(_components2.Live, {
    code: _CoverHeaderExample.default,
    scope: CoverScope,
    component: _components.CoverHeader,
    propDescriptions: CoverHeaderDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "CoverBody"), _react.default.createElement(_components2.Live, {
    code: _CoverBodyExample.default,
    scope: CoverScope,
    component: _components.CoverBody,
    propDescriptions: CoverBodyDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "CoverFooter"), _react.default.createElement(_components2.Live, {
    code: _CoverFooterExample.default,
    scope: CoverScope,
    component: _components.CoverFooter,
    propDescriptions: CoverFooterDocs
  })));
};

_reactDom.default.render(_react.default.createElement(CoverApp, null), document.getElementById('root'));