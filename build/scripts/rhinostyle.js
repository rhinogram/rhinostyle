webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Input = exports.Button = undefined;
	
	var _Button = __webpack_require__(52);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Input = __webpack_require__(85);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button2.default;
	exports.Input = _Input2.default;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(30);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(31);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Input = _react2.default.createClass({
	  displayName: 'RhinoInput',
	
	  propTypes: {
	    groupClass: _react2.default.PropTypes.string,
	    inputClass: _react2.default.PropTypes.string,
	    label: _react2.default.PropTypes.string,
	    labelClass: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string,
	    placeholder: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.oneOf(['email', 'password', 'text']),
	    value: _react2.default.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      label: '',
	      name: '',
	      type: 'text'
	    };
	  },
	  getInputDOMNode: function getInputDOMNode() {
	    return this.refs.input;
	  },
	  getValue: function getValue() {
	    return this.getInputDOMNode().value;
	  },
	  render: function render() {
	    var _props = this.props;
	    var groupClass = _props.groupClass;
	    var inputClass = _props.inputClass;
	    var label = _props.label;
	    var labelClass = _props.labelClass;
	    var name = _props.name;
	    var placeholder = _props.placeholder;
	    var size = _props.size;
	    var type = _props.type;
	    var value = _props.value;
	
	    var props = _objectWithoutProperties(_props, ['groupClass', 'inputClass', 'label', 'labelClass', 'name', 'placeholder', 'size', 'type', 'value']);
	
	    var cxGroup = (0, _classnames2.default)('form__group', groupClass);
	    var cxLabel = (0, _classnames2.default)(labelClass);
	    var cxInput = (0, _classnames2.default)('form__control', inputClass);
	
	    var showLabel = function showLabel() {
	      if (label) {
	        return _react2.default.createElement(
	          'label',
	          { htmlFor: name, className: cxLabel },
	          label
	        );
	      }
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { className: cxGroup },
	      showLabel(),
	      _react2.default.createElement('input', _extends({}, props, { value: value, type: type, className: cxInput, id: name, placeholder: placeholder, ref: 'input' }))
	    );
	  }
	});
	
	exports.default = Input;

/***/ }

});
//# sourceMappingURL=rhinostyle.js.map