"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _moment = _interopRequireDefault(require("moment"));

var _components = require("../components");

var _components2 = require("./components");

var _DateExample = _interopRequireDefault(require("./examples/Date.example.txt"));

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

var DateDocs = {};
var DateScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Date: _components.Date,
  Label: _components.Label,
  moment: _moment.default
};

var DateApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateApp, _React$Component);

  function DateApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      startDate: (0, _moment.default)()
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (date) {
      _this.setState({
        startDate: date
      });
    });

    return _this;
  }

  _createClass(DateApp, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "DatePicker ", _react.default.createElement(_components.Label, {
        className: "u-m-l-small",
        type: "accent",
        label: "third party"
      })), _react.default.createElement("p", {
        className: "site-copy"
      }, "We are using", _react.default.createElement("a", {
        href: "https://hacker0x01.github.io/react-datepicker/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "react-datepicker"), "with custom styling. We have wrapped it within our own to provide sensible defaults for our application. Refer to that repos documentation about everything else available, but be aware we only include a subset of styles to meet our needs, instead of including and overriding the entire stylesheet provided."), _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "column-3@small"
      }, _react.default.createElement(_components.Date, {
        name: "date",
        selected: this.state.startDate,
        onChange: this.handleChange,
        showYearDropdown: true,
        showMonthDropdown: true,
        dropdownMode: "select"
      })))), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Playground"), _react.default.createElement(_components2.Live, {
        code: _DateExample.default,
        scope: DateScope,
        component: _components.Date,
        propDescriptions: DateDocs
      })));
    }
  }]);

  return DateApp;
}(_react.default.Component);

_reactDom.default.render(_react.default.createElement(DateApp, null), document.getElementById('root'));