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

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      checked: _this.props.isChecked
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    _defineProperty(_assertThisInitialized(_this), "toggleChecked", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(_this.props.name, !_this.state.checked, event);
      }

      _this.setState({
        checked: !_this.state.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (e) {
      if (e.keyCode === 13) {
        _this.checkboxLabel.click();
      }
    });

    return _this;
  }

  _createClass(Checkbox, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.isChecked !== this.props.isChecked) {
        this.setState({
          checked: newProps.isChecked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          disabled = _this$props.disabled,
          name = _this$props.name,
          title = _this$props.title,
          value = _this$props.value,
          type = _this$props.type;
      var checked = this.state.checked;
      var classes = (0, _classnames.default)('rhinobox', "rhinobox--".concat(type), className, _defineProperty({}, _.UtilitySystem.config.classes.disabled, disabled));
      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement("input", {
        value: value,
        className: "rhinobox__input",
        type: "checkbox",
        disabled: disabled,
        name: name,
        id: this.id,
        checked: checked,
        onChange: this.toggleChecked,
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        title: title
      }), label && _react.default.createElement("label", {
        // eslint-disable-line jsx-a11y/label-has-for
        className: "rhinobox__label",
        htmlFor: this.id,
        ref: function ref(checkboxLabel) {
          _this2.checkboxLabel = checkboxLabel;
        }
      }, label), checked && children && _react.default.createElement("div", {
        className: "form__block-group__meta"
      }, children));
    }
  }]);

  return Checkbox;
}(_react.default.Component);

Checkbox.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  isChecked: _propTypes.default.bool,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  title: _propTypes.default.string,
  value: _propTypes.default.string,
  type: _propTypes.default.oneOf(['primary', 'secondary'])
};
Checkbox.defaultProps = {
  isChecked: false,
  type: 'primary'
};
var _default = Checkbox;
exports.default = _default;