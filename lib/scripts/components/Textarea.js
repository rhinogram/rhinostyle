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

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Textarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      charactersLeft: '',
      value: ''
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value,
        charactersLeft: _this.props.maxCharacters - event.target.value.length
      });

      if (_this.props.onChange) {
        _this.props.onChange(event.target.name, event.target.value.trimLeft());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (event) {
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    });

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.initialValue) {
        this.setState({
          value: this.props.initialValue.trimRight()
        });
      }

      if (this.props.maxCharacters && this.props.initialValue) {
        this.setState({
          charactersLeft: this.props.maxCharacters - this.props.initialValue.length
        });
      } else if (this.props.maxCharacters) {
        this.setState({
          charactersLeft: this.props.maxCharacters
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValue !== this.props.initialValue) {
        this.setState({
          value: nextProps.initialValue,
          charactersLeft: this.props.maxCharacters - nextProps.initialValue.length
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          abbrMaxCharacters = _this$props.abbrMaxCharacters,
          className = _this$props.className,
          disabled = _this$props.disabled,
          explanationMessage = _this$props.explanationMessage,
          label = _this$props.label,
          maxCharacters = _this$props.maxCharacters,
          naked = _this$props.naked,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          rows = _this$props.rows,
          validationMessage = _this$props.validationMessage;
      var textAreaClasses = (0, _classnames.default)('form__control', {
        'form__control--error': validationMessage,
        'form__control--naked': naked
      });
      var formGroupClasses = (0, _classnames.default)('form__group', className);
      var characterCountClasses = (0, _classnames.default)('form__character-count', {
        'form__character-count--danger': this.state.charactersLeft < 11
      });

      var showCharacterCount = function showCharacterCount() {
        if (maxCharacters) {
          return _react.default.createElement("div", {
            className: characterCountClasses
          }, _this2.state.charactersLeft, " ", !abbrMaxCharacters && _react.default.createElement("span", null, "character", _this2.state.charactersLeft !== 1 ? 's' : '', " left"));
        }

        return false;
      };

      return _react.default.createElement("div", {
        className: formGroupClasses
      }, _react.default.createElement(_.FormLabel, {
        id: this.id,
        required: required
      }, label), _react.default.createElement("textarea", {
        id: this.id,
        name: name,
        className: textAreaClasses,
        rows: rows,
        placeholder: placeholder,
        readOnly: readOnly,
        value: this.state.value,
        onChange: this.handleChange,
        onMouseDown: this.handleMouseDown,
        disabled: disabled
      }), (validationMessage || explanationMessage || showCharacterCount()) && _react.default.createElement("div", {
        className: "form__control-footer"
      }, (validationMessage || explanationMessage) && _react.default.createElement("div", {
        className: "form__control-footer__left"
      }, _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      })), showCharacterCount()));
    }
  }]);

  return Textarea;
}(_react.default.Component);

Textarea.propTypes = {
  abbrMaxCharacters: _propTypes.default.bool,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  explanationMessage: _propTypes.default.string,
  initialValue: _propTypes.default.string,
  label: _propTypes.default.string,
  maxCharacters: _propTypes.default.number,
  naked: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  rows: _propTypes.default.number,
  validationMessage: _propTypes.default.string
};
Textarea.defaultProps = {
  rows: 3
};
var _default = Textarea;
exports.default = _default;