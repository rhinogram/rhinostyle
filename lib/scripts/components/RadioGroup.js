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

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedValue: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      _this.setState({
        selectedValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var _this$props = _this.props,
          blockGroup = _this$props.blockGroup,
          children = _this$props.children,
          name = _this$props.name,
          inline = _this$props.inline;
      var selectedValue = _this.state.selectedValue;
      var returnChild = null;
      return _react.default.Children.map(children, function (child) {
        if (child.type === _.Radio) {
          var onChange = function onChange() {
            if (child.props.value) {
              if (_this.props.onChange) {
                _this.handleChange(child.props.value);

                _this.props.onChange(child.props.value);
              } else {
                _this.handleChange(child.props.value);
              }
            }
          };

          returnChild = _react.default.cloneElement(child, {
            onChange: onChange,
            selectedValue: selectedValue,
            name: name
          });
        } else if (child.type === _.SlidingRadio) {
          var _onChange = function _onChange(value) {
            if (_this.props.onChange) {
              _this.handleChange(value);

              _this.props.onChange(value);
            } else {
              _this.handleChange(value);
            }
          };

          returnChild = _react.default.cloneElement(child, {
            onChange: _onChange,
            selectedValue: selectedValue,
            name: name
          });
        } else {
          returnChild = child;
        }

        if (inline || blockGroup) {
          return returnChild;
        }

        return _react.default.createElement(_.UtilityListItem, null, returnChild);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      var _this$props2 = _this.props,
          blockGroup = _this$props2.blockGroup,
          inline = _this$props2.inline;

      if (inline) {
        return _react.default.createElement(_.UtilityInlineGrid, {
          size: "regular"
        }, _this.renderChildren());
      } else if (blockGroup) {
        return _react.default.createElement("div", {
          className: "form__block-group--radio"
        }, _this.renderChildren());
      }

      return _react.default.createElement(_.UtilityList, {
        space: true,
        className: "u-m-a-0"
      }, _this.renderChildren());
    });

    return _this;
  }

  _createClass(RadioGroup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        selectedValue: this.props.selectedValue
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.selectedValue !== this.props.selectedValue) {
        this.setState({
          selectedValue: newProps.selectedValue
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          explanationMessage = _this$props3.explanationMessage,
          label = _this$props3.label,
          required = _this$props3.required,
          validationMessage = _this$props3.validationMessage;
      var classes = (0, _classnames.default)('form__group', className);
      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement(_.FormLabel, {
        required: required,
        id: ""
      }, label), this.renderItems(), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }));
    }
  }]);

  return RadioGroup;
}(_react.default.Component);

RadioGroup.propTypes = {
  blockGroup: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  explanationMessage: _propTypes.default.string,
  inline: _propTypes.default.bool,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  selectedValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  validationMessage: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = RadioGroup;
exports.default = _default;