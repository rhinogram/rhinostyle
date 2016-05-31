webpackJsonp([6],{

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

	var feedbackExample = __webpack_require__(424);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Callout: _components.Callout,
	  Toast: _components.Toast,
	  Icon: _components.Icon
	};

	var FeedbackApp = function (_React$Component) {
	  _inherits(FeedbackApp, _React$Component);

	  function FeedbackApp() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, FeedbackApp);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FeedbackApp)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function (event) {
	      event.preventDefault();

	      _components.NotificationActions.addNotification({
	        autoDismiss: true,
	        autodismissTime: 5000,
	        body: 'This is an alert in a toast notification',
	        onDismiss: function onDismiss() {
	          alert('You dismissed that toast');
	        },
	        type: 'danger'
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(FeedbackApp, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'site-headline' },
	          'Feedback'
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Callouts'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-sm-10' },
	              _react2.default.createElement(_components.Callout, { type: 'danger', head: 'Callout Danger', body: 'Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool.' }),
	              _react2.default.createElement(_components.Callout, { type: 'default', head: 'Callout Default', body: 'Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool.' }),
	              _react2.default.createElement(_components.Callout, { type: 'info', head: 'Callout Info', body: 'Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool.' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Toast Notifications'
	          ),
	          _react2.default.createElement(_components.Toast, { type: 'default', body: _react2.default.createElement(
	              'span',
	              null,
	              'Default notification - ',
	              _react2.default.createElement(
	                'a',
	                { href: '#', className: 'notify__link', onClick: this.onClick },
	                'click link'
	              )
	            ) }),
	          _react2.default.createElement(_components.Toast, { type: 'secondary', body: _react2.default.createElement(
	              'span',
	              null,
	              _react2.default.createElement(_components.Icon, { icon: 'checkmark' }),
	              ' Default notification - ',
	              _react2.default.createElement(
	                'a',
	                { href: '#', className: 'notify__link' },
	                'click link'
	              )
	            ) }),
	          _react2.default.createElement(_components.Toast, { type: 'danger', body: _react2.default.createElement(
	              'span',
	              null,
	              'Danger notification - ',
	              _react2.default.createElement(
	                'a',
	                { href: '#', className: 'notify__link' },
	                'click link'
	              )
	            ) })
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Playground'
	          ),
	          _react2.default.createElement(_componentPlayground2.default, { codeText: feedbackExample, scope: exampleScope, noRender: false })
	        )
	      );
	    }
	  }]);

	  return FeedbackApp;
	}(_react2.default.Component);

	FeedbackApp.displayName = 'Rhinostyle Feedback Examples';


	_reactDom2.default.render(_react2.default.createElement(FeedbackApp, null), document.getElementById('js-app'));

/***/ },

/***/ 424:
/***/ function(module, exports) {

	module.exports = "class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Callout head=\"Default Callout\" body=\"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool.\" />\n        <Toast type=\"secondary\" body={<span><Icon icon=\"checkmark\" /> Default notification - <a href=\"#\" className=\"notify__link\">click link</a></span>} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});