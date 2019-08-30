"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _NavTabsExample = _interopRequireDefault(require("./examples/NavTabs.example.txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavTabsDocs = {
  activeKey: 'Include active key',
  justified: "<code>oneOf(['auto', 'equal', 'none'])</code>",
  // eslint-disable-line single-quotes
  onSelect: 'On select of nav item'
};
var NavTabsScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  NavTabs: _components.NavTabs,
  NavTabsItem: _components.NavTabsItem
};

var NavigationApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationApp, _React$Component);

  function NavigationApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeKey: 1,
      activeStackedKey: 3,
      activeEqualKey: 1,
      activeAutoKey: 1
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveKey", function (index) {
      _this.setState({
        activeKey: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveStackedKey", function (index) {
      _this.setState({
        activeStackedKey: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveEqualKey", function (index) {
      _this.setState({
        activeEqualKey: index
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateActiveAutoKey", function (index) {
      _this.setState({
        activeAutoKey: index
      });
    });

    return _this;
  }

  _createClass(NavigationApp, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Navigation"), _react.default.createElement("p", {
        className: "site-text-lead"
      }, "Below you will find our set of navigation components. This page exists to demonstrate the UI of each - appearance, layout, animation, and active states. Some of these components may be used in conjunction with other components - see ", _react.default.createElement("a", {
        href: "../tabs"
      }, " Tabs"), "for example.")), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "NavTabs Types"), _react.default.createElement("div", {
        className: "u-m-b-large"
      }, _react.default.createElement("p", {
        className: "site-copy"
      }, _react.default.createElement("code", null, "type=\"default\"")), _react.default.createElement(_components.NavTabs, {
        activeKey: this.state.activeKey,
        onSelect: this.updateActiveKey
      }, _react.default.createElement(_components.NavTabsItem, {
        id: 1
      }, "Code"), _react.default.createElement(_components.NavTabsItem, {
        id: 2
      }, "Issues"), _react.default.createElement(_components.NavTabsItem, {
        id: 3
      }, "Pull Requests")))), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "NavTabs Modifiers"), _react.default.createElement("div", {
        className: "u-m-b-large"
      }, _react.default.createElement("h5", {
        className: "site-miniheadline"
      }, "Justifed, Equal Width"), _react.default.createElement("p", {
        className: "site-copy"
      }, _react.default.createElement("code", null, "justified=\"equal\"")), _react.default.createElement(_components.NavTabs, {
        activeKey: this.state.activeEqualKey,
        onSelect: this.updateActiveEqualKey,
        justified: "equal"
      }, _react.default.createElement(_components.NavTabsItem, {
        id: 1
      }, "Code"), _react.default.createElement(_components.NavTabsItem, {
        id: 2
      }, "Issues"), _react.default.createElement(_components.NavTabsItem, {
        id: 3
      }, "Pull Requests"))), _react.default.createElement("div", {
        className: "u-m-b-large"
      }, _react.default.createElement("h5", {
        className: "site-miniheadline"
      }, "Justified, Auto Width"), _react.default.createElement("p", {
        className: "site-copy"
      }, _react.default.createElement("code", null, "justified=\"auto\"")), _react.default.createElement(_components.NavTabs, {
        activeKey: this.state.activeAutoKey,
        onSelect: this.updateActiveAutoKey,
        justified: "auto"
      }, _react.default.createElement(_components.NavTabsItem, {
        id: 1
      }, "Code"), _react.default.createElement(_components.NavTabsItem, {
        id: 2
      }, "Issues"), _react.default.createElement(_components.NavTabsItem, {
        id: 3
      }, "Pull Requests")))), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "NavTabs Helper Class"), _react.default.createElement("p", {
        className: "site-copy"
      }, "Use ", _react.default.createElement("code", null, ".nav-tabs--stacked"), " helper/modifier class (with CSS media queries) when necessary to collapse tabs into stacked layout. This is particularly useful on small screens."), _react.default.createElement("div", {
        style: {
          maxWidth: '32rem'
        }
      }, _react.default.createElement(_components.NavTabs, {
        activeKey: this.state.activeStackedKey,
        onSelect: this.updateActiveStackedKey,
        className: "nav-tabs--stacked"
      }, _react.default.createElement(_components.NavTabsItem, {
        id: 1
      }, "Code"), _react.default.createElement(_components.NavTabsItem, {
        id: 2
      }, "Issues"), _react.default.createElement(_components.NavTabsItem, {
        id: 3
      }, "Pull Requests")))), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "NavTabs Playground"), _react.default.createElement(_components2.Live, {
        code: _NavTabsExample.default,
        scope: NavTabsScope,
        component: _components.NavTabs,
        propDescriptions: NavTabsDocs
      })));
    }
  }]);

  return NavigationApp;
}(_react.default.Component);

_reactDom.default.render(_react.default.createElement(NavigationApp, null), document.getElementById('root'));