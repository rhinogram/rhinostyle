"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TweenMax = require("gsap/TweenMax");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _components = require("../../components");

var NotificationActions = _interopRequireWildcard(require("../actions"));

var _constants = _interopRequireDefault(require("../constants"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AUTO_DISMISS_TIME = _constants.default.autodismissTime;
var TOAST_TIMING = 0.5;

var NotificationContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotificationContainer, _React$Component);

  function NotificationContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NotificationContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotificationContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hideNotification", function () {
      var $toast = _reactDom.default.findDOMNode(_this.toast);

      $toast.timeline.play();
    });

    return _this;
  }

  _createClass(NotificationContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var $toast = _reactDom.default.findDOMNode(this.toast); // Adds in bottom spacing
      // Separating this out from timeline since we are using the `reverse()` to show the toast which adds in the alternate of the default props 💥


      var bottomSpacing = new _TweenMax.TimelineMax({
        paused: true
      }).to($toast, TOAST_TIMING, {
        marginBottom: _components.UtilitySystem.config.contentSpacing / 2,
        ease: _components.UtilitySystem.config.easing
      });
      var forward = true;
      var lastTime = 0; // Attach GSAP

      $toast.timeline = new _TweenMax.TimelineMax({
        paused: true,
        onStart: function onStart() {
          // Remove ottom spacing for stacked toast notifications
          bottomSpacing.reverse();
          $toast.setAttribute('aria-hidden', true); // Fire off prop update

          if (_this2.props.onStart) _this2.props.onStart();
        },
        onUpdate: function onUpdate() {
          var newTime = $toast.timeline.time();

          if (forward && newTime < lastTime || !forward && newTime > lastTime) {
            forward = !forward;

            if (!forward) {
              // Fire off prop update
              if (_this2.props.onReverseStart) _this2.props.onReverseStart(); // Bottom spacing for stacked toast notifications

              bottomSpacing.play();
              $toast.classList.remove(_components.UtilitySystem.config.classes.hidden);
              $toast.classList.remove(_components.UtilitySystem.config.classes.uHidden);
              $toast.setAttribute('aria-hidden', false);
            }
          }

          lastTime = newTime;
        },
        onComplete: function onComplete() {
          $toast.classList.remove(_components.UtilitySystem.config.classes.hidden);
          NotificationActions.removeNotification(_this2.props.notification.id); // Fire off prop update

          if (_this2.props.onComplete) _this2.props.onComplete();
        },
        onReverseComplete: function onReverseComplete() {
          // Fire off prop update
          if (_this2.props.onReverseComplete) _this2.props.onReverseComplete();
        }
      });
      $toast.timeline.to($toast, TOAST_TIMING, {
        css: {
          marginTop: -$toast.offsetHeight,
          transformOrigin: 'center center',
          y: '50%',
          opacity: 0
        },
        ease: _components.UtilitySystem.config.easing
      });
      /**
       * Since the `componentDidMount()` is run when we'd like to render and start the animation,
       * we progress the animation to the end; which "shows" the toast,
       * and then play the animation after the interval
       * */

      $toast.timeline.progress(1, true).reverse();
      setTimeout(function () {
        // Only auto init close if it's not already closed (or in the process of closing)
        if ($toast.timeline.progress() !== 1) {
          $toast.timeline.play();
        }
      }, AUTO_DISMISS_TIME);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$notificat = this.props.notification,
          body = _this$props$notificat.body,
          type = _this$props$notificat.type;
      return _react.default.createElement(_components.Toast, {
        ref: function ref(_ref) {
          return _this3.toast = _ref;
        },
        type: type,
        body: body,
        onDismiss: this.hideNotification
      });
    }
  }]);

  return NotificationContainer;
}(_react.default.Component);

NotificationContainer.propTypes = {
  notification: _propTypes.default.object,
  onDismiss: _propTypes.default.func,
  // eslint-disable-line react/no-unused-prop-types
  onComplete: _propTypes.default.func,
  onReverseComplete: _propTypes.default.func,
  onReverseStart: _propTypes.default.func,
  onStart: _propTypes.default.func
};
var _default = NotificationContainer;
exports.default = _default;