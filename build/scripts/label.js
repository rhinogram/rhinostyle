webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(31);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(43);

	var _componentPlayground = __webpack_require__(48);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var labelExample = __webpack_require__(427);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Label: _components.Label
	};

	var LabelApp = function (_React$Component) {
	  _inherits(LabelApp, _React$Component);

	  function LabelApp() {
	    _classCallCheck(this, LabelApp);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LabelApp).apply(this, arguments));
	  }

	  _createClass(LabelApp, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'site-headline' },
	          'Labels'
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Label Types'
	          ),
	          _react2.default.createElement(_components.Label, { label: 'default label' }),
	          _react2.default.createElement(_components.Label, { type: 'primary', label: 'primary label' }),
	          _react2.default.createElement(_components.Label, { type: 'secondary', label: 'secondary label' }),
	          _react2.default.createElement(_components.Label, { type: 'accent', label: 'accent label' })
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Playground'
	          ),
	          _react2.default.createElement(_componentPlayground2.default, { codeText: labelExample, scope: exampleScope, noRender: false })
	        )
	      );
	    }
	  }]);

	  return LabelApp;
	}(_react2.default.Component);

	LabelApp.displayName = 'Rhinostyle Label Example';


	_reactDom2.default.render(_react2.default.createElement(LabelApp, null), document.getElementById('js-app'));

/***/ },

/***/ 427:
/***/ function(module, exports) {

	module.exports = "class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Label label=\"ben bruning\" />\n        <Label type=\"primary\" label=\"craig anthony\" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});