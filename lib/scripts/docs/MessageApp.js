"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _MessageExample = _interopRequireDefault(require("./examples/Message.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var MessageDocs = {
  type: "<code>oneOf(['primary', 'note'])</code>",
  // eslint-disable-line single-quotes
  direction: "Message tail direction <code>oneOf(['inbound', 'outbound'])</code>" // eslint-disable-line single-quotes

};
var MessageScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Message: _components.Message,
  UtilityInlineGrid: _components.UtilityInlineGrid
};

var MessageApp = function MessageApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Message Types"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "type=\"default | primary | note\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement("div", null, _react.default.createElement(_components.Message, null, "Default Message ", _react.default.createElement("a", {
    href: "https://www.rhinogram.com"
  }, "rhinogram.com"))), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    type: "primary"
  }, "Primary Message ", _react.default.createElement("a", {
    href: "https://www.rhinogram.com"
  }, "rhinogram.com"))), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    type: "note"
  }, "Note Message ", _react.default.createElement("a", {
    href: "https://www.rhinogram.com"
  }, "rhinogram.com"))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Message Direction"), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Inbound Message"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "direction=\"inbound\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "inbound"
  }, "Default Message")), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "inbound",
    type: "primary"
  }, "Primary Message")), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "inbound",
    type: "note"
  }, "Note Message")))), _react.default.createElement("div", {
    className: "u-m-b-large"
  }, _react.default.createElement("h5", {
    className: "site-miniheadline"
  }, "Outbound Message"), _react.default.createElement("p", {
    className: "site-copy"
  }, _react.default.createElement("code", null, "direction=\"outbound\"")), _react.default.createElement(_components.UtilityInlineGrid, null, _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "outbound"
  }, "Default Message")), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "outbound",
    type: "primary"
  }, "Primary Message")), _react.default.createElement("div", null, _react.default.createElement(_components.Message, {
    direction: "outbound",
    type: "note"
  }, "Note Message"))))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Playground"), _react.default.createElement(_components2.Live, {
    code: _MessageExample.default,
    scope: MessageScope,
    component: _components.Message,
    propDescriptions: MessageDocs
  })));
};

_reactDom.default.render(_react.default.createElement(MessageApp, null), document.getElementById('root'));