"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UtilityInlineGrid = function UtilityInlineGrid(props) {
  var align = props.align,
      className = props.className,
      size = props.size;
  var classes = (0, _classnames.default)('u-inline-grid', className, {
    'u-inline-grid--small': size === 'small',
    '': size === 'regular',
    'u-inline-grid--large': size === 'large',
    'u-inline-grid--middle': align === 'middle',
    'u-inline-grid--right': align === 'right',
    'u-inline-grid--between': align === 'between'
  });
  return _react.default.createElement("div", {
    className: classes
  }, props.children);
};

UtilityInlineGrid.propTypes = {
  align: _propTypes.default.oneOf(['middle', 'right', 'between']),
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'regular', 'large'])
};
UtilityInlineGrid.defaultProps = {
  size: 'small'
};
var _default = UtilityInlineGrid;
exports.default = _default;