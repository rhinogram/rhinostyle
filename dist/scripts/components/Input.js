"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _react2 = _interopRequireDefault(require("cleave.js/react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    _defineProperty(_assertThisInitialized(_this), "checkFocus", function () {
      if (_this.props.focus) _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });

      if (_this.props.onChange) {
        if (_this.props.format) {
          _this.props.onChange(event.target.name, event.target.rawValue.trimLeft(), event.target.value);
        } else {
          _this.props.onChange(event.target.name, event.target.value.trimLeft());
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (_this.props.onKeyPress) {
        _this.props.onKeyPress(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (event) {
      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      }

      _this.setState({
        value: ''
      }, function () {
        return _this.input.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.input.closest('.form__group').classList.add('has-focus');
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.input.closest('.form__group').classList.remove('has-focus');
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    });

    return _this;
  }

  _createClass(Input, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      // eslint-disable-line camelcase
      if (this.props.initialValue) {
        this.setState({
          value: this.props.initialValue.trimRight()
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkFocus();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // eslint-disable-line camelcase
      if (nextProps.initialValue !== this.props.initialValue) {
        this.setState({
          value: nextProps.initialValue
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.focus !== this.props.focus) {
        if (!this.props.focus) {
          this.input.blur();
        } else {
          this.checkFocus();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          addon = _this$props.addon,
          autoCapitalize = _this$props.autoCapitalize,
          autoComplete = _this$props.autoComplete,
          className = _this$props.className,
          clear = _this$props.clear,
          customHTMLAttributes = _this$props.customHTMLAttributes,
          customInputClasses = _this$props.customInputClasses,
          disabled = _this$props.disabled,
          explanationMessage = _this$props.explanationMessage,
          format = _this$props.format,
          id = _this$props.id,
          label = _this$props.label,
          naked = _this$props.naked,
          name = _this$props.name,
          onInit = _this$props.onInit,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          size = _this$props.size,
          type = _this$props.type,
          validationMessage = _this$props.validationMessage;
      var inputClasses = (0, _classnames.default)('form__control', customInputClasses, {
        'form__control--clear': clear,
        'form__control--naked': naked,
        'form__control--error': validationMessage,
        'form__control--large': size
      });
      var formGroupClasses = (0, _classnames.default)('form__group', className);
      var addonClasses = (0, _classnames.default)('form__addon', {
        'form__addon--large': size,
        'has-error': validationMessage,
        form__clear: clear
      });
      var inputWrapperClasses = (0, _classnames.default)('input__wrapper', {
        form__clear: clear
      });
      var input = this.state.value;
      var inputMarkup = null;

      var inputRender = function inputRender() {
        if (format) {
          return _react.default.createElement("div", {
            className: inputWrapperClasses
          }, _react.default.createElement(_react2.default, _extends({
            autoCapitalize: autoCapitalize,
            autoComplete: autoComplete,
            type: type,
            disabled: disabled,
            className: inputClasses,
            id: id || _this2.id // If parent doesn't explicitly pass an ID, we will generate one dynamically. NOTE: ONLY Pass ID when absolutely necessary.
            ,
            name: name,
            onInit: onInit,
            options: format,
            placeholder: placeholder,
            value: _this2.state.value,
            onFocus: _this2.handleFocus,
            onBlur: _this2.handleBlur,
            onKeyDown: _this2.handleKeyDown,
            onKeyPress: _this2.handleKeyPress,
            onKeyUp: _this2.handleKeyUp,
            onChange: _this2.handleChange,
            onMouseDown: _this2.handleMouseDown,
            readOnly: readOnly,
            htmlRef: function htmlRef(ref) {
              return _this2.input = ref;
            }
          }, customHTMLAttributes)), input && clear && _react.default.createElement(_.Button, {
            reset: true,
            className: "form__clear__button",
            onClick: _this2.handleClear
          }, _react.default.createElement(_.Icon, {
            icon: "close"
          })));
        }

        return _react.default.createElement("div", {
          className: inputWrapperClasses
        }, _react.default.createElement("input", _extends({
          autoCapitalize: autoCapitalize,
          autoComplete: autoComplete,
          type: type,
          disabled: disabled,
          className: inputClasses,
          id: id || _this2.id // If parent doesn't explicitly pass an ID, we will generate one dynamically. NOTE: ONLY Pass ID when absolutely necessary.
          ,
          name: name,
          placeholder: placeholder,
          value: _this2.state.value,
          onFocus: _this2.handleFocus,
          onBlur: _this2.handleBlur,
          onKeyDown: _this2.handleKeyDown,
          onKeyPress: _this2.handleKeyPress,
          onKeyUp: _this2.handleKeyUp,
          onChange: _this2.handleChange,
          onMouseDown: _this2.handleMouseDown,
          readOnly: readOnly,
          ref: function ref(_ref) {
            return _this2.input = _ref;
          }
        }, customHTMLAttributes)), input && clear && _react.default.createElement(_.Button, {
          reset: true,
          className: "form__clear__button",
          onClick: _this2.handleClear
        }, _react.default.createElement(_.Icon, {
          icon: "close"
        })));
      };

      var showInput = function showInput() {
        switch (addon) {
          case 'left':
            inputMarkup = _react.default.createElement("div", {
              className: addonClasses
            }, _react.default.createElement("div", {
              className: "form__addon__item form__addon__item--left",
              disabled: disabled
            }, _this2.props.children), inputRender());
            break;

          case 'right':
            inputMarkup = _react.default.createElement("div", {
              className: addonClasses
            }, inputRender(), _react.default.createElement("div", {
              className: "form__addon__item form__addon__item--right",
              disabled: disabled
            }, _this2.props.children));
            break;

          case 'both':
            inputMarkup = _react.default.createElement("div", {
              className: addonClasses
            }, _react.default.createElement("div", {
              className: "form__addon__item form__addon__item--left",
              disabled: disabled
            }, _this2.props.children[0]), inputRender(), _react.default.createElement("div", {
              className: "form__addon__item form__addon__item--right",
              disabled: disabled
            }, _this2.props.children[1]));
            break;

          default:
            inputMarkup = inputRender();
        }

        return inputMarkup;
      };

      return _react.default.createElement("div", {
        className: formGroupClasses
      }, _react.default.createElement(_.FormLabel, {
        id: this.id,
        required: required
      }, label), showInput(), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }));
    }
  }]);

  return Input;
}(_react.default.Component);

Input.propTypes = {
  addon: _propTypes.default.oneOf(['left', 'right', 'both']),
  autoCapitalize: _propTypes.default.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: _propTypes.default.oneOf(['off', 'on']),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  clear: _propTypes.default.bool,
  customHTMLAttributes: _propTypes.default.object,
  customInputClasses: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  explanationMessage: _propTypes.default.string,
  focus: _propTypes.default.bool,
  format: _propTypes.default.object,
  initialValue: _propTypes.default.string,
  label: _propTypes.default.string,
  naked: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onInit: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  onClear: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['large']),
  type: _propTypes.default.oneOf(['email', 'password', 'text', 'number', 'search', 'tel']),
  validationMessage: _propTypes.default.string
};
Input.defaultProps = {
  type: 'text'
};
var _default = Input;
exports.default = _default;