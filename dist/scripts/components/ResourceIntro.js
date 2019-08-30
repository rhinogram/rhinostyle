"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var ResourceIntro =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResourceIntro, _React$Component);

  function ResourceIntro() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResourceIntro);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResourceIntro)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleIconClick", function (e) {
      var icon = _this.props.icon;
      e.stopPropagation();

      if (icon.onClick) {
        icon.onClick(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheckboxClick", function (name, value, event) {
      var checkbox = _this.props.checkbox;

      if (checkbox.onChange) {
        checkbox.onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMedia", function () {
      var _this$props = _this.props,
          icon = _this$props.icon,
          avatar = _this$props.avatar,
          checkbox = _this$props.checkbox;
      var output = null;
      var validIcon = icon && icon.icon;

      if (validIcon) {
        if (icon.onClick) {
          output = _react.default.createElement("div", {
            className: "u-flex"
          }, checkbox && _react.default.createElement(_.Checkbox, {
            label: checkbox.label,
            name: checkbox.name,
            isChecked: checkbox.isChecked,
            onChange: _this.handleCheckboxClick
          }), _react.default.createElement(_.Button, {
            reset: true,
            onClick: _this.handleIconClick
          }, _react.default.createElement(_.Icon, {
            bump: icon.bump,
            icon: icon.icon
          })));
        } else {
          output = _react.default.createElement("div", {
            className: "u-flex"
          }, checkbox && _react.default.createElement(_.Checkbox, {
            label: checkbox.label,
            name: checkbox.name,
            isChecked: checkbox.isChecked,
            onChange: _this.handleCheckboxClick
          }), _react.default.createElement(_.Icon, {
            bump: icon.bump,
            icon: icon.icon
          }));
        }
      } else if (avatar) {
        output = _react.default.createElement(_.Avatar, {
          size: "small",
          name: avatar.name,
          type: avatar.type,
          image: avatar.image
        });
      } else if (checkbox) {
        output = _react.default.createElement(_.Checkbox, {
          label: checkbox.label,
          name: checkbox.name,
          isChecked: checkbox.isChecked,
          onChange: _this.handleCheckboxClick
        });
      }

      if (output) {
        var classes = (0, _classnames.default)('resource__intro__media', {
          'resource__intro__media--checkbox': checkbox,
          'resource__intro__media--icon': validIcon,
          'resource__intro__media--hidden@xsmall': _this.props.hideMediaXsmall
        });
        return _react.default.createElement("div", {
          className: classes
        }, output);
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderTitle", function () {
      var _this$props2 = _this.props,
          title = _this$props2.title,
          titleSub = _this$props2.titleSub,
          children = _this$props2.children;
      var titleClasses = (0, _classnames.default)('resource__intro__title__content', {
        'has-subtitle': titleSub
      });
      var titleSubClasses = (0, _classnames.default)('resource__intro__title__sub', {
        'resource__intro__title__sub--hidden@xsmall': _this.props.hideTitleSubXsmall
      });
      return _react.default.createElement("div", {
        className: "resource__intro__title-wrapper"
      }, _react.default.createElement("div", {
        className: "resource__intro__title"
      }, _react.default.createElement("span", {
        className: titleClasses
      }, title), titleSub && _react.default.createElement("span", {
        className: titleSubClasses
      }, titleSub)), children && _react.default.createElement("div", {
        className: "resource__intro__title__meta"
      }, children));
    });

    return _this;
  }

  _createClass(ResourceIntro, [{
    key: "render",
    value: function render() {
      var classes = (0, _classnames.default)('resource__intro', {
        'has-avatar': this.props.avatar
      });
      return _react.default.createElement("div", {
        className: classes
      }, this.renderMedia(), this.renderTitle());
    }
  }]);

  return ResourceIntro;
}(_react.default.Component);

ResourceIntro.propTypes = {
  avatar: _propTypes.default.shape({
    image: _propTypes.default.string,
    name: _propTypes.default.string,
    type: _propTypes.default.oneOf(['default', 'member'])
  }),
  icon: _propTypes.default.shape({
    icon: _propTypes.default.string,
    bump: _propTypes.default.string,
    onClick: _propTypes.default.func
  }),
  checkbox: _propTypes.default.shape({
    isChecked: _propTypes.default.bool,
    label: _propTypes.default.string,
    name: _propTypes.default.string,
    onChange: _propTypes.default.func
  }),
  children: _propTypes.default.node,
  title: _propTypes.default.any,
  titleSub: _propTypes.default.string,
  hideMediaXsmall: _propTypes.default.bool,
  hideTitleSubXsmall: _propTypes.default.bool
};
var _default = ResourceIntro;
exports.default = _default;