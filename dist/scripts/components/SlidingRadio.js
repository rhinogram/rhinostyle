"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ = require(".");

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

var SlidingRadio =
/*#__PURE__*/
function (_Component) {
  _inherits(SlidingRadio, _Component);

  function SlidingRadio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SlidingRadio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SlidingRadio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedValue: _this.props.selectedValue || ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.selectedValue !== _this.props.selectedValue) {
        _this.setState({
          selectedValue: _this.props.selectedValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      _this.setState({
        selectedValue: value
      });

      if (_this.props.onChange) _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "getLabelStyle", function (_ref) {
      var value = _ref.value,
          type = _ref.type;
      var isChecked = value === _this.state.selectedValue;
      var style;

      if (!isChecked) {
        style = 'u-font-weight-normal';
      } else if (type === 'danger') {
        style = 'u-text-danger';
      } else if (type === 'warning') {
        style = 'u-text-warning';
      } else if (type === 'secondary') {
        style = 'u-text-secondary';
      }

      return style;
    });

    return _this;
  }

  _createClass(SlidingRadio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          disabled = _this$props.disabled,
          options = _this$props.options,
          className = _this$props.className,
          label = _this$props.label,
          required = _this$props.required,
          name = _this$props.name;
      var selectedValue = this.state.selectedValue;
      var classes = (0, _classnames.default)('rhinoslidingradio', _defineProperty({}, _.UtilitySystem.config.classes.disabled, disabled));
      return _react.default.createElement("div", {
        className: "form__group"
      }, _react.default.createElement(_.FormLabel, {
        id: "",
        required: required
      }, label), _react.default.createElement("div", {
        className: classes
      }, options.map(function (option) {
        return _react.default.createElement("div", {
          key: option.value,
          className: className
        }, _react.default.createElement("input", {
          className: "rhinoslidingradio__input",
          type: "radio",
          disabled: disabled,
          name: name,
          value: option.value,
          id: name + option.value,
          checked: option.value === selectedValue,
          onChange: function onChange() {
            return _this2.handleChange(option.value);
          }
        }), _react.default.createElement("label", {
          // eslint-disable-line jsx-a11y/label-has-for
          className: "rhinoslidingradio__label ".concat(_this2.getLabelStyle(option)),
          htmlFor: name + option.value
        }, option.label));
      })));
    }
  }]);

  return SlidingRadio;
}(_react.Component);

SlidingRadio.propTypes = {
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  selectedValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  options: _propTypes.default.array.isRequired
};
SlidingRadio.defaultProps = {
  disabled: false,
  onChange: function onChange() {
    return true;
  }
};
var _default = SlidingRadio;
exports.default = _default;