webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(45);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(67);

	var _componentPlayground = __webpack_require__(68);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var progressBarExample = __webpack_require__(421);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  ProgressBar: _components.ProgressBar
	};

	var ProgressBarApp = _react2.default.createClass({
	  displayName: 'Rhinostyle Progress Bar Example',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
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
	});

	_reactDom2.default.render(_react2.default.createElement(ProgressBarApp, null), document.getElementById('js-app'));

/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = "var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n      \t<ProgressBar progress={30} />\n        <br/>\n        <ProgressBar progress={60} showLabel={true} type='primary' />\n        <br/>\n        <ProgressBar progress={90} showLabel={true} type='temperature' />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});