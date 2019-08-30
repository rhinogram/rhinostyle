"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

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

var Avatar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      imageError: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageError", function () {
      _this.setState({
        imageError: true
      });
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.image) {
        this.setState({
          imageError: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          image = _this$props.image,
          size = _this$props.size,
          type = _this$props.type;
      var name = this.props.name ? this.props.name.trim() : '';
      var classes = (0, _classnames.default)('avatar', className, {
        'avatar--xsmall': size === 'xsmall',
        'avatar--small': size === 'small',
        'avatar--large': size === 'large',
        'avatar--xlarge': size === 'xlarge',
        'avatar--default': type === 'default',
        'avatar--member': type === 'member'
      });
      var styles = {
        backgroundImage: "url(".concat(image, ")")
      }; // If image exists, use image for background

      if (image && !this.state.imageError) {
        return _react.default.createElement("figure", {
          className: classes,
          style: styles
        }, _react.default.createElement("img", {
          alt: name,
          onError: this.handleImageError,
          style: {
            display: 'none'
          },
          src: image
        }));
      } // If no image and no name, use icon


      if (!image && !name) {
        return _react.default.createElement("figure", {
          className: classes
        }, _react.default.createElement(_.Icon, {
          className: "avatar__icon",
          icon: "user"
        }));
      }

      var splitName = null;
      var initials = null;

      if (name) {
        splitName = name.split(' ');
        initials = splitName[0][0] + splitName[splitName.length - 1][0];
      } // https://stackoverflow.com/a/48841447/1026742
      // For text alignment


      return _react.default.createElement("svg", {
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: classes
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "50"
      }), _react.default.createElement("text", {
        x: "50",
        y: "50",
        textAnchor: "middle",
        dy: "0.35em",
        fontSize: "40"
      }, initials));
    }
  }]);

  return Avatar;
}(_react.default.Component);

Avatar.propTypes = {
  className: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  size: _propTypes.default.oneOf(['xsmall', 'small', 'default', 'large', 'xlarge']),
  src: _propTypes.default.string,
  // eslint-disable-line react/no-unused-prop-types
  type: _propTypes.default.oneOf(['default', 'member'])
};
Avatar.defaultProps = {
  size: 'default',
  type: 'default'
};
var _default = Avatar;
exports.default = _default;