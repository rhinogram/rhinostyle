webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(51);

	var _componentPlayground = __webpack_require__(52);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var avatarExample = __webpack_require__(419);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Avatar: _components.Avatar
	};

	var AvatarApp = _react2.default.createClass({
	  displayName: 'Rhinostyle Avatar Example',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        { classNames: 'site-headline' },
	        'Avatars'
	      ),
	      _react2.default.createElement(
	        'section',
	        { classNames: 'site-section' },
	        _react2.default.createElement(
	          'h3',
	          { classNames: 'site-subheadline' },
	          'Avatar Types'
	        ),
	        _react2.default.createElement(
	          'div',
	          { classNames: 'u-m-b-md' },
	          _react2.default.createElement(
	            'h5',
	            { classNames: 'site-miniheadline' },
	            'Patient Avatar'
	          ),
	          _react2.default.createElement(
	            'p',
	            { classNames: 'site-copy' },
	            'Patient avatars require the ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar--patient'
	            ),
	            ' modifier.'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient' },
	            'CA'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient' },
	            _react2.default.createElement(
	              'svg',
	              { classNames: 'avatar__icon' },
	              _react2.default.createElement('use', { xlinkHref: '#icon-user' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { classNames: 'u-m-b-md' },
	          _react2.default.createElement(
	            'h5',
	            { classNames: 'site-miniheadline' },
	            'Member Avatar'
	          ),
	          _react2.default.createElement(
	            'p',
	            { classNames: 'site-copy' },
	            'Member avatars require the ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar--member'
	            ),
	            ' modifier.'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--member' },
	            'CA'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--member' },
	            _react2.default.createElement(
	              'svg',
	              { classNames: 'avatar__icon' },
	              _react2.default.createElement('use', { xlinkHref: '#icon-user' })
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'section',
	        { classNames: 'site-section' },
	        _react2.default.createElement(
	          'h3',
	          { classNames: 'site-subheadline' },
	          'Avatar Sizes'
	        ),
	        _react2.default.createElement(
	          'div',
	          { classNames: 'u-m-b-md' },
	          _react2.default.createElement(
	            'h5',
	            { classNames: 'site-miniheadline' },
	            'Large Avatar'
	          ),
	          _react2.default.createElement(
	            'p',
	            { classNames: 'site-copy' },
	            'Add the ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar--lg'
	            ),
	            ' modifier to ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar'
	            ),
	            ' for large size.'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient avatar--lg' },
	            'CA'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient avatar--lg' },
	            _react2.default.createElement(
	              'svg',
	              { classNames: 'avatar__icon' },
	              _react2.default.createElement('use', { xlinkHref: '#icon-user' })
	            )
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--member avatar--lg' },
	            'CA'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h5',
	            { classNames: 'site-miniheadline' },
	            'Small Avatar'
	          ),
	          _react2.default.createElement(
	            'p',
	            { classNames: 'site-copy' },
	            'Add the ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar--sm'
	            ),
	            ' modifier to ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'avatar'
	            ),
	            ' for small size.'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient avatar--sm' },
	            'CA'
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--patient avatar--sm' },
	            _react2.default.createElement(
	              'svg',
	              { classNames: 'avatar__icon' },
	              _react2.default.createElement('use', { xlinkHref: '#icon-user' })
	            )
	          ),
	          _react2.default.createElement(
	            'figure',
	            { classNames: 'avatar avatar--member avatar--sm' },
	            'CA'
	          )
	        )
	      )
	    );
	  }
	});

	_reactDom2.default.render(_react2.default.createElement(AvatarApp, null), document.getElementById('js-app'));

/***/ },

/***/ 419:
/***/ function(module, exports) {

	module.exports = "var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <Avatar type=\"member\">IG</Avatar>\n        <Avatar type=\"patient\" size=\"large\">CA</Avatar>\n        <Avatar type=\"member\" size=\"small\" style={{backgroundImage: \"url(//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg)\"}}></Avatar>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});