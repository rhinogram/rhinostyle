"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

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

var MessageBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MessageBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MessageBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.target.value
      });

      if (_this.props.onInput) {
        _this.props.onInput(event.target.name, event.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event.target.name, event.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (_this.props.onKeyPress) {
        _this.props.onKeyPress(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleHeightChange", function (height, instance) {
      if (_this.props.onHeightChange) {
        _this.props.onHeightChange(height, instance);
      }
    });

    return _this;
  }

  _createClass(MessageBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focus && this.rhinoTextArea) {
        this.rhinoTextArea.focus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValue !== this.props.initialValue) {
        this.setState({
          value: nextProps.initialValue
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.focus !== this.props.focus && this.props.focus) {
        this.rhinoTextArea.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          required = _this$props.required,
          rows = _this$props.rows,
          className = _this$props.className,
          disabled = _this$props.disabled,
          label = _this$props.label,
          naked = _this$props.naked,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          maxHeight = _this$props.maxHeight;
      var textAreaClasses = (0, _classnames.default)('form__control u-overflow-y-auto', {
        'form__control--naked': naked
      });
      var formGroupClasses = (0, _classnames.default)('form__group', className);
      var messageBoxStyle = {
        maxHeight: maxHeight
      };
      return _react.default.createElement("div", {
        className: formGroupClasses
      }, _react.default.createElement(_.FormLabel, {
        id: this.id,
        required: required
      }, label), _react.default.createElement(_reactTextareaAutosize.default, {
        name: name,
        id: this.id,
        rows: rows,
        placeholder: placeholder,
        className: textAreaClasses,
        style: messageBoxStyle,
        value: this.state.value,
        onKeyPress: this.handleKeyPress,
        onInput: this.handleChange,
        onClick: this.handleClick,
        onHeightChange: this.handleHeightChange,
        disabled: disabled,
        inputRef: function inputRef(ref) {
          return _this2.rhinoTextArea = ref;
        }
      }));
    }
  }]);

  return MessageBox;
}(_react.default.Component);

MessageBox.propTypes = {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  onInput: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  onHeightChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  maxHeight: _propTypes.default.string,
  naked: _propTypes.default.bool,
  initialValue: _propTypes.default.string,
  focus: _propTypes.default.bool,
  rows: _propTypes.default.number
};
MessageBox.defaultProps = {
  rows: 1,
  maxHeight: '20rem'
};
var _default = MessageBox;
exports.default = _default;