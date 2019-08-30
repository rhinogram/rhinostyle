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

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selected: _this.props.selected ? _this.props.selected : -1
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var selected = parseInt(event.target.value, 10) ? parseInt(event.target.value, 10) : event.target.value;

      _this.setState({
        selected: selected
      });

      if (_this.props.onSelect) {
        _this.props.onSelect(event.target.name, selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    return _this;
  }

  _createClass(Select, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.selected !== this.props.selected) {
        this.setState({
          selected: newProps.selected
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          explanationMessage = _this$props.explanationMessage,
          label = _this$props.label,
          name = _this$props.name,
          options = _this$props.options,
          required = _this$props.required,
          validationMessage = _this$props.validationMessage;
      var classes = (0, _classnames.default)('rhinoselect__select', 'form__control', 'form__control--chevron', _defineProperty({
        'form__control--error': validationMessage
      }, _.UtilitySystem.config.classes.disabled, disabled));
      var formGroupClasses = (0, _classnames.default)('form__group', className);

      var renderOpts = function renderOpts(option) {
        // If the option has options as well we're in an `<optgroup>`
        if (option.options) {
          return _react.default.createElement("optgroup", {
            key: option.id,
            label: option.value
          }, option.options.map(function (childOption) {
            return _react.default.createElement("option", {
              key: childOption.id,
              value: childOption.id
            }, childOption.value);
          }));
        } // We're in a default single-level `<option>`


        return _react.default.createElement("option", {
          key: option.id,
          value: option.id
        }, option.value);
      };

      return _react.default.createElement("div", {
        className: formGroupClasses
      }, _react.default.createElement(_.FormLabel, {
        id: this.id,
        required: required
      }, label), _react.default.createElement("div", {
        className: "rhinoselect"
      }, _react.default.createElement("select", {
        className: classes,
        disabled: disabled,
        id: this.id,
        name: name,
        value: this.state.selected,
        onChange: this.onChange
      }, options.map(renderOpts))), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }));
    }
  }]);

  return Select;
}(_react.default.Component);

Select.propTypes = {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  explanationMessage: _propTypes.default.string,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  options: _propTypes.default.array.isRequired,
  onSelect: _propTypes.default.func,
  required: _propTypes.default.bool,
  selected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  validationMessage: _propTypes.default.string
};
Select.defaultProps = {
  disabled: false,
  required: false,
  selected: -1
};
var _default = Select;
exports.default = _default;