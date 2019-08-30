"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _react2 = _interopRequireDefault(require("cleave.js/react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Date =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Date, _React$Component);

  function Date() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Date);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Date)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "datePickerInput", undefined);

    return _this;
  }

  _createClass(Date, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          explanationMessage = _this$props.explanationMessage,
          validationMessage = _this$props.validationMessage,
          label = _this$props.label,
          name = _this$props.name,
          required = _this$props.required,
          opts = _objectWithoutProperties(_this$props, ["className", "explanationMessage", "validationMessage", "label", "name", "required"]);

      var formGroupClasses = (0, _classnames.default)('form__group', className);
      var inputClasses = (0, _classnames.default)('form__control', {
        'form__control--error': validationMessage
      });
      var id = "".concat(name, "-").concat(_.UtilitySystem.generateUUID());
      return _react.default.createElement("div", {
        className: formGroupClasses
      }, _react.default.createElement(_.FormLabel, {
        id: id,
        required: required
      }, label), _react.default.createElement(_reactDatepicker.default, _extends({
        customInput: _react.default.createElement(_react2.default, {
          options: _.UtilitySystem.dateFormat
        }),
        shouldCloseOnSelect: false,
        name: name,
        id: id,
        className: inputClasses,
        showYearDropdown: true,
        showMonthDropdown: true,
        dropdownMode: "select",
        ref: function ref(inputRef) {
          return _this2.datePickerInput = inputRef;
        }
      }, opts)), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }));
    }
  }]);

  return Date;
}(_react.default.Component);

Date.propTypes = {
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  explanationMessage: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  validationMessage: _propTypes.default.string
};
Date.defaultProps = {
  explanationMessage: 'Format MM/DD/YYYY'
};
var _default = Date;
exports.default = _default;