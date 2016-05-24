webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(39);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(60);

	var _componentPlayground = __webpack_require__(61);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pillExample = __webpack_require__(422);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Pill: _components.Pill
	};

	var PillApp = _react2.default.createClass({
	  displayName: 'Rhinostyle Pill Example',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        { className: 'site-headline' },
	        'Pills'
	      ),
	      _react2.default.createElement(
	        'section',
	        { className: 'site-section' },
	        _react2.default.createElement(_components.Pill, { label: 'Ben' })
	      ),
	      _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'h3',
	          { className: 'site-subheadline' },
	          'Playground'
	        ),
	        _react2.default.createElement(_componentPlayground2.default, { codeText: pillExample, scope: exampleScope, noRender: false })
	      )
	    );
	  }
	});

	_reactDom2.default.render(_react2.default.createElement(PillApp, null), document.getElementById('js-app'));

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = "var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <Pill label=\"Ben\" />&nbsp;&nbsp;\n        <Pill label=\"Click Me\" click={() => alert('clicked!')} />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});