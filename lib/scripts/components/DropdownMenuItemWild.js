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

var DropdownMenuItemWild =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenuItemWild, _React$Component);

  function DropdownMenuItemWild() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownMenuItemWild);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownMenuItemWild)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getChildren", function () {
      var returnChild = null;
      var children = _this.props.children;
      return _react.default.Children.map(children, function (child) {
        if (!child) return null;

        if (!child.type) {
          returnChild = child;
        } else if (child.type === _.Close) {
          returnChild = _react.default.cloneElement(child, {
            onClick: _this.handleCloseClick,
            className: (0, _classnames.default)(child.props.className, 'dropdown__menu__close')
          });
        } else {
          returnChild = child;
        }

        return returnChild;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseClick", function () {
      _this.props.handleToggle();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.props.toggleDropdown) {
        _this.props.handleToggle();
      }
    });

    return _this;
  }

  _createClass(DropdownMenuItemWild, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var classes = (0, _classnames.default)('dropdown__menu__container', className);
      return _react.default.createElement("div", {
        className: classes,
        onClick: this.handleClick
      }, this.getChildren());
    }
  }]);

  return DropdownMenuItemWild;
}(_react.default.Component);

DropdownMenuItemWild.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  handleToggle: _propTypes.default.func,
  toggleDropdown: _propTypes.default.bool
};
DropdownMenuItemWild.defaultProps = {
  handleToggle: function handleToggle() {},
  toggleDropdown: false
};
var _default = DropdownMenuItemWild;
exports.default = _default;