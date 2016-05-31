webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(43);

	var _componentPlayground = __webpack_require__(44);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var progressBarExample = __webpack_require__(429);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  ProgressBar: _components.ProgressBar
	};

	var ProgressBarApp = function (_React$Component) {
	  _inherits(ProgressBarApp, _React$Component);

	  function ProgressBarApp() {
	    _classCallCheck(this, ProgressBarApp);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBarApp).apply(this, arguments));
	  }

	  _createClass(ProgressBarApp, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'site-headline' },
	          'Progress Bars ',
	          _react2.default.createElement(
	            'small',
	            null,
	            '(pssst! click on progress bars!)'
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Progress Bar Types'
	          ),
	          _react2.default.createElement(_components.ProgressBar, { progress: 20, classes: 'u-m-b' }),
	          _react2.default.createElement(_components.ProgressBar, { progress: 40, type: 'primary', classes: 'u-m-b' }),
	          _react2.default.createElement(_components.ProgressBar, { progress: 60, type: 'secondary', classes: 'u-m-b' }),
	          _react2.default.createElement(_components.ProgressBar, { progress: 80, type: 'temperature', classes: 'u-m-b' })
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Progress Bar Labels'
	          ),
	          _react2.default.createElement(_components.ProgressBar, { progress: 60, showLabel: true, type: 'primary' })
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Playground'
	          ),
	          _react2.default.createElement(_componentPlayground2.default, { codeText: progressBarExample, scope: exampleScope, noRender: false })
	        )
	      );
	    }
	  }]);

	  return ProgressBarApp;
	}(_react2.default.Component);

	ProgressBarApp.displayName = 'Rhinostyle Progress Bar Example';


	_reactDom2.default.render(_react2.default.createElement(ProgressBarApp, null), document.getElementById('js-app'));

/***/ },

/***/ 429:
/***/ function(module, exports) {

	module.exports = "class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n      \t<ProgressBar progress={30} classes=\"u-m-b\" />\n        <ProgressBar progress={60} showLabel={true} type=\"primary\" classes=\"u-m-b\" />\n        <ProgressBar progress={90} showLabel={true} type=\"temperature\" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});