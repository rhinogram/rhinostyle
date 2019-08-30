"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("./components");

var _sizesExample = _interopRequireDefault(require("./examples/Grid/sizes.example.txt"));

var _collapseExample = _interopRequireDefault(require("./examples/Grid/collapse.example.txt"));

var _sourceOrderExample = _interopRequireDefault(require("./examples/Grid/sourceOrder.example.txt"));

var _offsetExample = _interopRequireDefault(require("./examples/Grid/offset.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var GridScope = {
  React: _react.default,
  ReactDOM: _reactDom.default
};

var LabelApp = function LabelApp() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Grid"), _react.default.createElement("div", {
    className: "site-text-lead"
  }, _react.default.createElement("p", null, "We have rolled our own 12-column flexbox grid system. Columns that add-up to more than 12 automatically get some space in-between. Because of the complexity around class modifiers, we have decided to leave the implementation up to standard HTML classes and not as a React component."), _react.default.createElement("p", null, _react.default.createElement("strong", null, "Note:"), " There should be no whitespace modifiers attached to ", _react.default.createElement("code", null, ".row"), " or its direct children. You can attach them on adjacent DOM or by wrapping the component in a ", _react.default.createElement("code", null, "<div>"), "."))), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Column-size Playground"), _react.default.createElement("p", null, "Columns are constructed with the following naming pattern: ", _react.default.createElement("code", null, ".column-[1-12]"), ". If you'd like to present different block widths on certain breakpoints, you can use the following: ", _react.default.createElement("code", null, ".column-[1-12]@[xsmall,small,medium]"), "."), _react.default.createElement("p", null, "You can chain these classes together for unique widths based on our global breakpoints: ", _react.default.createElement("code", null, ".column-10 column-8@xsmall column-6@small column-4@medium"), "."), _react.default.createElement(_components.Live, {
    code: _sizesExample.default,
    scope: GridScope
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Collapsed Playground"), _react.default.createElement("p", null, "By applying the ", _react.default.createElement("code", null, ".row--collapsed"), " modifier you can remove the automatic spacing provided by our grid system."), _react.default.createElement(_components.Live, {
    code: _collapseExample.default,
    scope: GridScope
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Source-order Playground"), _react.default.createElement("p", null, "Depending on the screen-size, you may need to adjust the order of illustrations and/or text. You may use the", _react.default.createElement("code", null, ".column--first"), " or ", _react.default.createElement("code", null, ".column--last"), " modifier attached directly to a specific ", _react.default.createElement("code", null, "column"), ". If you'd like to have this behavior available at different breakpoints, you may use the following: ", _react.default.createElement("code", null, ".column--first@[xsmall,small,medium]"), "or ", _react.default.createElement("code", null, ".column--last@[xsmall,small,medium]"), "."), _react.default.createElement(_components.Live, {
    code: _sourceOrderExample.default,
    scope: GridScope
  })), _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Offset Playground"), _react.default.createElement("p", null, "Offsets allow you to space out your columns more selectively across each axis. You may use the", _react.default.createElement("code", null, ".column-offset-[1-12]"), " modifier attached directly to a specific ", _react.default.createElement("code", null, "column"), ". If you'd like to have this behavior available at different breakpoints, you may use the following:", _react.default.createElement("code", null, ".column-offset-[1-12]@[xsmall,small,medium]"), "."), _react.default.createElement(_components.Live, {
    code: _offsetExample.default,
    scope: GridScope
  })));
};

_reactDom.default.render(_react.default.createElement(LabelApp, null), document.getElementById('root'));