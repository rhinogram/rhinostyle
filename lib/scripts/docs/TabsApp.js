"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _TabsExample = _interopRequireDefault(require("./examples/Tabs.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsDocs = {};
var TabsScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  TabsContent: _components.TabsContent,
  TabContentPane: _components.TabContentPane,
  NavTabs: _components.NavTabs,
  NavTabsItem: _components.NavTabsItem
};

var TabsApp = function TabsApp() {
  return _react.default.createElement("section", {
    className: "site-section"
  }, _react.default.createElement("h3", {
    className: "site-subheadline"
  }, "Tabs Playground"), _react.default.createElement(_components2.Live, {
    code: _TabsExample.default,
    scope: TabsScope,
    propDescriptions: TabsDocs
  }));
};

_reactDom.default.render(_react.default.createElement(TabsApp, null), document.getElementById('root'));