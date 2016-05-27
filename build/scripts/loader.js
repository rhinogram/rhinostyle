webpackJsonp([3],{

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

	var labelExample = __webpack_require__(428);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Loader: _components.Loader
	};

	var LoaderApp = function (_React$Component) {
	  _inherits(LoaderApp, _React$Component);

	  function LoaderApp() {
	    _classCallCheck(this, LoaderApp);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LoaderApp).apply(this, arguments));
	  }

	  _createClass(LoaderApp, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'site-headline' },
	          'Loaders'
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Loader Pulse'
	          ),
	          _react2.default.createElement(
	            'div',
	            { 'class': 'u-m-b-md' },
	            _react2.default.createElement(_components.Loader, null),
	            _react2.default.createElement(_components.Loader, { type: 'accent' }),
	            _react2.default.createElement(_components.Loader, { type: 'secondary' })
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Loader Line'
	          ),
	          _react2.default.createElement(
	            'div',
	            { 'class': 'u-m-b-md' },
	            _react2.default.createElement(_components.Loader, { type: 'line' })
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Playground'
	          ),
	          _react2.default.createElement(_componentPlayground2.default, { codeText: loaderExample, scope: exampleScope, noRender: false })
	        )
	      );
	    }
	  }]);

	  return LoaderApp;
	}(_react2.default.Component);

	LoaderApp.displayName = 'Rhinostyle Loader Example';


	_reactDom2.default.render(_react2.default.createElement(LoaderApp, null), document.getElementById('js-app'));

	//     <div class="loader-pulse loader-pulse--default">
	//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
	//     </div>

	//     <div class="loader-pulse loader-pulse--accent">
	//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
	//     </div>

	//     <div class="loader-pulse loader-pulse--secondary">
	//       <span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span><span class="loader-pulse__pulse"></span>
	//     </div>
	//
	//   </div>
	//
	//
	//

	//
	//     <div class="loader-line loader-line--default">
	//       <span class="loader-line__line"></span><span class="loader-line__line"></span>
	//     </div>
	//

/***/ },

/***/ 428:
/***/ function(module, exports) {

	module.exports = "class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Loader type=\"secondary\" /><br />\n        <Loader type=\"line\" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});