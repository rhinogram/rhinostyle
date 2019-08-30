"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _ModalExample = _interopRequireDefault(require("./examples/Modal.example.txt"));

var _ModalHeaderExample = _interopRequireDefault(require("./examples/ModalHeader.example.txt"));

var _ModalBodyExample = _interopRequireDefault(require("./examples/ModalBody.example.txt"));

var _ModalFooterExample = _interopRequireDefault(require("./examples/ModalFooter.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ModalDocs = {
  size: "<code>oneOf(['small', 'large'])</code>" // eslint-disable-line single-quotes

};
var ModalHeaderDocs = {
  onClose: 'Callback function to execute in addition to closing the modal',
  title: 'String to represent the Modal Header',
  titleSub: 'String to add subtitle to header'
};
var ModalBodyDocs = {};
var ModalFooterDocs = {};
var ModalScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Button: _components.Button,
  Input: _components.Input,
  Modal: _components.Modal,
  ModalHeader: _components.ModalHeader,
  ModalBody: _components.ModalBody,
  ModalFooter: _components.ModalFooter,
  Icon: _components.Icon,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var ModalApp = function ModalApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Modal Example"), _react.default.createElement("p", {
    className: "site-copy"
  }, "Although the ", _react.default.createElement("code", null, "<Modal />"), " component is written inline, it actually renders outside of the main application to retain proper styling."), _react.default.createElement(_components2.Live, {
    code: _ModalExample.default,
    scope: ModalScope,
    component: _components.Modal,
    propDescriptions: ModalDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "ModalHeader"), _react.default.createElement(_components2.Live, {
    code: _ModalHeaderExample.default,
    scope: ModalScope,
    component: _components.ModalHeader,
    propDescriptions: ModalHeaderDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "ModalBody"), _react.default.createElement(_components2.Live, {
    code: _ModalBodyExample.default,
    scope: ModalScope,
    component: _components.ModalBody,
    propDescriptions: ModalBodyDocs
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "ModalFooter"), _react.default.createElement(_components2.Live, {
    code: _ModalFooterExample.default,
    scope: ModalScope,
    component: _components.ModalFooter,
    propDescriptions: ModalFooterDocs
  })));
};

_reactDom.default.render(_react.default.createElement(ModalApp, null), document.getElementById('root'));