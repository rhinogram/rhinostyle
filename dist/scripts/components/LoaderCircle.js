"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _TweenMax = require("gsap/TweenMax");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoaderCircle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoaderCircle, _React$Component);

  function LoaderCircle() {
    _classCallCheck(this, LoaderCircle);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoaderCircle).apply(this, arguments));
  }

  _createClass(LoaderCircle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $loader = this.loader;
      $loader.timeline = new _TweenMax.TimelineMax({
        repeat: -1,
        paused: this.props.pause
      }).to($loader, 0.75, {
        rotation: '360deg',
        ease: _TweenMax.Linear.easeNone
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var $loader = this.loader;

      if (this.props.pause) {
        $loader.timeline.pause();
      } else if ($loader.timeline.paused() && !this.props.pause) {
        $loader.timeline.play();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size;
      var classes = (0, _classnames.default)('loader-circle', className, {
        'loader-circle--large': size === 'large',
        'loader-circle--small': size === 'small',
        'loader-circle--xsmall': size === 'xsmall'
      });
      return _react.default.createElement("div", {
        className: classes,
        ref: function ref(_ref) {
          return _this.loader = _ref;
        }
      });
    }
  }]);

  return LoaderCircle;
}(_react.default.Component);

LoaderCircle.propTypes = {
  className: _propTypes.default.string,
  pause: _propTypes.default.bool,
  size: _propTypes.default.string
};
LoaderCircle.defaultProps = {
  pause: false
};
var _default = LoaderCircle;
exports.default = _default;