"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TweenMax = require("gsap/TweenMax");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _ = require(".");

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

var DropdownWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownWrapper, _React$Component);

  function DropdownWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var $dropdown = _this.dropdown;
      var $dropdownMenu = $dropdown.querySelector('.dropdown__menu');
      var $dropdownToggle = $dropdown.querySelector('.dropdown__toggle');
      var forward = true;
      var lastTime = 0; // Attach GSAP

      $dropdown.timeline = new _TweenMax.TimelineMax({
        paused: true,
        onStart: function onStart() {
          // Add active/open classes
          $dropdown.classList.add(_.UtilitySystem.config.classes.open);

          if ($dropdownToggle) {
            $dropdownToggle.classList.add(_.UtilitySystem.config.classes.active);
          } // Toggle aria state


          $dropdown.setAttribute('aria-expanded', true); // Fire off prop update

          if (_this.props.onStart) _this.props.onStart();
        },
        onComplete: function onComplete() {
          var $input = $dropdown.querySelector('input[type="text"]'); // If dropdown contains input (for filtering), focus on that if autoFocusInput props is true or undefined

          if ($input && _this.props.autoFocusInput) {
            $input.focus();
          } else {
            // Focus on active dropdown
            $dropdown.focus();
          } // Fire off prop update


          if (_this.props.onComplete) _this.props.onComplete();
        },
        onUpdate: function onUpdate() {
          var newTime = $dropdown.timeline.time();

          if (forward && newTime < lastTime || !forward && newTime > lastTime) {
            forward = !forward;

            if (!forward) {
              // Fire off prop update
              if (_this.props.onReverseStart) _this.props.onReverseStart(); // Remove active/open classes

              $dropdown.classList.remove(_.UtilitySystem.config.classes.open);

              if ($dropdownToggle) {
                $dropdownToggle.classList.remove(_.UtilitySystem.config.classes.active);
              } // Toggle aria state


              $dropdown.setAttribute('aria-expanded', false);
            }
          }

          lastTime = newTime;
        },
        onReverseComplete: function onReverseComplete() {
          // Fire off prop update
          if (_this.props.onReverseComplete) _this.props.onReverseComplete();
        }
      });
      $dropdown.timeline.set($dropdownMenu, {
        display: 'block'
      }).to($dropdownMenu, 0.175, {
        css: {
          y: 0,
          scale: 1,
          opacity: 1
        },
        ease: _.UtilitySystem.config.easingBounce
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.props.handleClick();
    });

    return _this;
  }

  _createClass(DropdownWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        "aria-haspopup": "true",
        "aria-expanded": "false",
        ref: function ref(_ref) {
          return _this2.dropdown = _ref;
        },
        className: this.props.className
      }, this.props.children);
    }
  }]);

  return DropdownWrapper;
}(_react.default.Component);

DropdownWrapper.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  handleClick: _propTypes.default.func,
  onComplete: _propTypes.default.func,
  onReverseComplete: _propTypes.default.func,
  onReverseStart: _propTypes.default.func,
  onStart: _propTypes.default.func,
  autoFocusInput: _propTypes.default.bool
};

var _default = (0, _reactOnclickoutside.default)(DropdownWrapper);

exports.default = _default;