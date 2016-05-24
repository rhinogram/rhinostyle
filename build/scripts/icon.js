webpackJsonp([2],{

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

	var iconExample = __webpack_require__(420);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Icon: _components.Icon
	};

	var IconApp = _react2.default.createClass({
	  displayName: 'Rhinostyle Icon Example',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        { className: 'site-headline' },
	        'Icons'
	      ),
	      _react2.default.createElement(
	        'section',
	        { className: 'site-section' },
	        _react2.default.createElement(
	          'h3',
	          { className: 'site-subheadline' },
	          'SVG Icons'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'bar-graph' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Bar Graph'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'calendar' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Calendar'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'checkmark' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Checkmark'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'checkmark-circle' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Checkmark Circle'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'chevron-left' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Chevron Left'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'chevron-right' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Chevron Right'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'chevron-up' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Chevron Up'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'chevron-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Chevron Down'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'clock' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Clock'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'close' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Close'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'cog' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Cog'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'email' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Email'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'inbox' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Inbox'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'lock' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Lock'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'logo-circle-facebook' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Logo Circle Facebook'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'logo-circle-twitter' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Logo Circle Twitter'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'pencil' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Pencil'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'search' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Search'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'sms' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'SMS'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'trash' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Trash'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'user' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'User'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'site-swatch' },
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__sample' },
	            _react2.default.createElement(_components.Icon, { icon: 'warning' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'site-swatch__text' },
	            _react2.default.createElement(
	              'strong',
	              null,
	              'Warning'
	            )
	          )
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
	        _react2.default.createElement(_componentPlayground2.default, { codeText: iconExample, scope: exampleScope, noRender: false })
	      )
	    );
	  }
	});

	_reactDom2.default.render(_react2.default.createElement(IconApp, null), document.getElementById('js-app'));

/***/ },

/***/ 420:
/***/ function(module, exports) {

	module.exports = "var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div style={{fontSize:'4rem'}}>\n        <Icon icon=\"cog\" />\n        <Icon icon=\"chevron-right\" />\n        <Icon icon=\"warning\" />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});