"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverBody = function CoverBody(props) {
  var children = props.children,
      className = props.className,
      contentMiddle = props.contentMiddle,
      size = props.size;
  var containerClasses = (0, _classnames.default)('cover__body__container', className, {
    'cover__body__container--small': !size || size === 'small',
    'cover__body__container--medium': size === 'medium',
    'cover__body__container--large': size === 'large'
  });
  var bodyClasses = (0, _classnames.default)('cover__body', {
    'cover__body--content-middle': contentMiddle
  });
  return _react.default.createElement("div", {
    className: bodyClasses
  }, _react.default.createElement("div", {
    className: containerClasses
  }, children));
};

CoverBody.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  contentMiddle: _propTypes.default.bool,
  size: _propTypes.default.string
};
var _default = CoverBody;
exports.default = _default;