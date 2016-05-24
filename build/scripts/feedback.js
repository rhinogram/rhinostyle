webpackJsonp([4],{

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

	var feedbackExample = __webpack_require__(420);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Callout: _components.Callout,
	  Toast: _components.Toast,
	  Icon: _components.Icon
	};

	var FeedbackApp = _react2.default.createClass({
	  displayName: 'Rhinostyle Feedback Examples',

	  onClick: function onClick(event) {
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
	  },
	  render: function render() {
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
	});

	_reactDom2.default.render(_react2.default.createElement(FeedbackApp, null), document.getElementById('js-app'));

/***/ },

/***/ 420:
/***/ function(module, exports) {

	module.exports = "var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <Callout head=\"Default Callout\" body=\"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool.\" />\n        <Toast type=\"secondary\" body={<span><Icon icon=\"checkmark\" /> Default notification - <a href=\"#\" className=\"notify__link\">click link</a></span>} />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});