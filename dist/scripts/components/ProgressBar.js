"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(props) {
  var className = props.className,
      progress = props.progress,
      showLabel = props.showLabel,
      type = props.type;
  var classes = (0, _classnames.default)('progress', className);
  var barClasses = (0, _classnames.default)('progress__bar', {
    'progress__bar--default': type === 'default',
    'progress__bar--primary': type === 'primary',
    'progress__bar--secondary': type === 'secondary',
    'progress__bar--temperature': type === 'temperature'
  });
  var progressTranslation = progress;
  var label = null;
  progressTranslation = parseInt(progress, 10);

  if (!Number.isInteger(progressTranslation) || progressTranslation < 0) {
    progressTranslation = 0;
  }

  if (showLabel && progressTranslation > 1) {
    label = _react.default.createElement("div", {
      className: "progress__bar__slider__label"
    }, "".concat(progressTranslation, "%"));
  }

  var style = {
    transform: "translateX(".concat(progressTranslation, "%)")
  };
  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: barClasses
  }, _react.default.createElement("div", {
    className: "progress__bar__slider",
    style: style
  }, label)));
};

ProgressBar.propTypes = {
  className: _propTypes.default.string,
  progress: _propTypes.default.number,
  showLabel: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['default', 'primary', 'secondary', 'temperature'])
};
ProgressBar.defaultProps = {
  progress: 0,
  showLabel: false,
  type: 'default'
};
var _default = ProgressBar;
exports.default = _default;