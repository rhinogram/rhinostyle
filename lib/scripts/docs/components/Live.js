"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLive = require("react-live");

var _Docs = _interopRequireDefault(require("./Docs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Live = function Live(props) {
  // Add `Fragment` to every scope by default
  var scopeProps = props.scope;
  scopeProps.Fragment = _react.Fragment;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Docs.default, {
    component: props.component,
    propDescriptions: props.propDescriptions
  }), _react.default.createElement(_reactLive.LiveProvider, {
    scope: scopeProps,
    code: props.code,
    mountStylesheet: false,
    transformCode: function transformCode(input) {
      return Babel.transform(input, {
        presets: ['stage-0', 'react']
      }).code;
    }
  }, _react.default.createElement(_reactLive.LiveEditor, null), _react.default.createElement(_reactLive.LivePreview, null), _react.default.createElement(_reactLive.LiveError, null)));
};

Live.propTypes = {
  component: _propTypes.default.func,
  code: _propTypes.default.string.isRequired,
  scope: _propTypes.default.object.isRequired,
  propDescriptions: _propTypes.default.object
};
var _default = Live;
exports.default = _default;