"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../components");

var _components2 = require("./components");

var _AlertExample = _interopRequireDefault(require("./examples/Alert.example.txt"));

var _ToastExample = _interopRequireDefault(require("./examples/Toast.example.txt"));

var _SystemAlertExample = _interopRequireDefault(require("./examples/SystemAlert.example.txt"));

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

var AlertDocs = {
  onDismiss: 'Called when dimissed',
  type: "<code>oneOf(['danger', 'default', 'info', 'success'])</code>" // eslint-disable-line single-quotes

};
var AlertScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Alert: _components.Alert,
  Button: _components.Button,
  Checkbox: _components.Checkbox,
  Icon: _components.Icon
};
var ToastDocs = {
  onDismiss: 'Called when dismissed',
  type: "<code>oneOf(['danger', 'default', 'success'])</code>" // eslint-disable-line single-quotes

};
var ToastScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  Toast: _components.Toast,
  Icon: _components.Icon
};
var SystemAlertDocs = {
  onDismiss: 'Called when dismissed',
  type: "<code>oneOf(['danger', 'default', 'info', 'success'])</code>",
  // eslint-disable-line single-quotes
  urlText: 'Defaults to "More Information"'
};
var SystemAlertScope = {
  React: _react.default,
  ReactDOM: _reactDom.default,
  SystemAlert: _components.SystemAlert,
  Icon: _components.Icon
};

var FeedbackApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeedbackApp, _React$Component);

  function FeedbackApp() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FeedbackApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FeedbackApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      _components.NotificationActions.addNotification({
        body: 'This is an alert in a toast notification',
        icon: 'warning',
        type: 'danger',
        onDismiss: function onDismiss() {
          /* eslint no-console:0 */
          console.log('I run when the notification was dismissed');
        }
      });
    });

    return _this;
  }

  _createClass(FeedbackApp, [{
    key: "render",

    /* eslint-disable no-alert */
    value: function render() {
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Feedback"), _react.default.createElement("p", {
        className: "site-text-lead"
      }, "Numberous components make up our feedback system: Alert, SystemAlert, and Toast.")), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Alert"), _react.default.createElement("div", {
        className: "u-m-b-large"
      }, _react.default.createElement(_components.Alert, {
        title: "This is a danger alert!",
        titleIcon: "star",
        type: "danger",
        onDismiss: function onDismiss() {
          return alert('dismissed!');
        }
      }, "This is a danger alert for dangerous stuff. ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com"), " | ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com")), _react.default.createElement(_components.Alert, {
        title: "This is a default  alert!",
        titleIcon: "star",
        onDismiss: function onDismiss() {
          return alert('dismissed!');
        }
      }, "This is a default alert for default stuff. ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com"), " | ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com")), _react.default.createElement(_components.Alert, {
        title: "This is a info alert!",
        titleIcon: "star",
        type: "info",
        onDismiss: function onDismiss() {
          return alert('dismissed!');
        }
      }, "This is a info alert for info stuff. ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com"), " | ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com")), _react.default.createElement(_components.Alert, {
        title: "This is a success alert!",
        titleIcon: "star",
        type: "success",
        onDismiss: function onDismiss() {
          return alert('dismissed!');
        }
      }, "This is a success alert for success stuff. ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com"), " | ", _react.default.createElement("a", {
        href: "https://www.rhinogram.com"
      }, "rhinogram.com"))), _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Alert Playground"), _react.default.createElement(_components2.Live, {
        code: _AlertExample.default,
        scope: AlertScope,
        component: _components.Alert,
        propDescriptions: AlertDocs
      })), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "SystemAlert"), _react.default.createElement("div", {
        className: "u-m-b-large"
      }, _react.default.createElement("div", {
        className: "site-example-systemalerts"
      }, _react.default.createElement(_components.SystemAlert, {
        type: "danger",
        body: "Danger System Alert"
      }), _react.default.createElement(_components.SystemAlert, {
        type: "default",
        body: "Default System Alert"
      }), _react.default.createElement(_components.SystemAlert, {
        type: "info",
        body: "Info System Alert"
      }), _react.default.createElement(_components.SystemAlert, {
        type: "success",
        body: "Success System Alert"
      }))), _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "SystemAlert Playground"), _react.default.createElement(_components2.Live, {
        code: _SystemAlertExample.default,
        scope: SystemAlertScope,
        component: _components.SystemAlert,
        propDescriptions: SystemAlertDocs
      })), _react.default.createElement("section", {
        className: "site-section"
      }, _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Toast"), _react.default.createElement("p", {
        className: "site-copy"
      }, "To see a toast in action, ", _react.default.createElement(_components.Button, {
        reset: true,
        className: "u-text-primary",
        onClick: this.onClick
      }, "click here"), "."), _react.default.createElement("div", {
        className: "site-example-toasts u-m-b-large"
      }, _react.default.createElement(_components.Toast, {
        type: "default",
        body: "Default toast notification"
      }), _react.default.createElement(_components.Toast, {
        type: "success",
        body: "Success toast notification"
      }), _react.default.createElement(_components.Toast, {
        type: "danger",
        body: "Danger toast notification"
      })), _react.default.createElement("h3", {
        className: "site-subheadline"
      }, "Toast Playground"), _react.default.createElement(_components2.Live, {
        code: _ToastExample.default,
        scope: ToastScope,
        component: _components.Toast,
        propDescriptions: ToastDocs
      })));
    }
  }]);

  return FeedbackApp;
}(_react.default.Component);

_reactDom.default.render(_react.default.createElement(FeedbackApp, null), document.getElementById('root'));