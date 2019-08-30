"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _TweenMax = require("gsap/TweenMax");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var Cover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cover, _React$Component);

  function Cover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      renderCover: false
    });

    _defineProperty(_assertThisInitialized(_this), "onReverseComplete", function () {
      _this.setState({
        renderCover: false
      }, function () {
        if (_this.props.onReverseComplete) {
          _this.props.onReverseComplete();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "attachTimeline", function () {
      var $body = document.body;
      var $cover = _this.cover;
      var forward = true;
      var lastTime = 0; // Attach timeline to each instance

      $cover.timeline = new _TweenMax.TimelineMax({
        paused: !_this.props.open,
        onStart: function onStart() {
          $body.classList.add('cover-open');
          $cover.classList.add(_.UtilitySystem.config.classes.open); // Fire off prop update

          if (_this.props.onStart) _this.props.onStart();
        },
        onUpdate: function onUpdate() {
          var newTime = $cover.timeline.time();

          if (forward && newTime < lastTime || !forward && newTime > lastTime) {
            forward = !forward;

            if (!forward) {
              // Fire off prop update
              if (_this.props.onReverseStart) _this.props.onReverseStart();
              $body.classList.remove('cover-open');
              $cover.classList.remove(_.UtilitySystem.config.classes.open);
            }
          }

          lastTime = newTime;
        },
        onComplete: function onComplete() {
          // Focus on active cover for screen readers
          $cover.focus(); // Fire off prop update

          if (_this.props.onComplete) _this.props.onComplete();
        },
        onReverseComplete: function onReverseComplete() {
          // Fire off function that handles prop update and removal from DOM
          if (_this.onReverseComplete) _this.onReverseComplete();
        }
      });
      $cover.timeline.set($cover, {
        css: {
          display: 'flex'
        }
      }).to($cover, 0.5, {
        css: {
          opacity: 1,
          y: 0
        },
        ease: _.UtilitySystem.config.easing
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openCover", function () {
      var $cover = _this.cover;
      $cover.timeline.play();
    });

    _defineProperty(_assertThisInitialized(_this), "closeCover", function () {
      var $cover = _this.cover;
      $cover.timeline.reverse();
    });

    return _this;
  }

  _createClass(Cover, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.open && nextProps.open) {
        this.setState({
          renderCover: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.attachTimeline();
      }

      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.openCover();
        } else {
          this.closeCover();
        }
      }
    }
    /**
     * Called after the cover animation is done closing
     * Takes care of removing `<Cover />` from DOM
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      var classes = (0, _classnames.default)('cover', className);
      var renderCover = this.state.renderCover;
      return renderCover && _reactDom.default.createPortal(_react.default.createElement("div", {
        className: classes,
        ref: function ref(_ref) {
          return _this2.cover = _ref;
        }
      }, children), document.body);
    }
  }]);

  return Cover;
}(_react.default.Component);

Cover.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  open: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  onReverseComplete: _propTypes.default.func,
  onReverseStart: _propTypes.default.func,
  onStart: _propTypes.default.func
};
var _default = Cover;
exports.default = _default;