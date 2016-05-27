webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(39);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _components = __webpack_require__(61);

	var _componentPlayground = __webpack_require__(67);

	var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var buttonExample = __webpack_require__(422);
	var exampleScope = {
	  React: _react2.default,
	  ReactDOM: _reactDom2.default,
	  Button: _components.Button,
	  Icon: _components.Icon
	};

	var ButtonApp = function (_React$Component) {
	  _inherits(ButtonApp, _React$Component);

	  function ButtonApp() {
	    _classCallCheck(this, ButtonApp);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonApp).apply(this, arguments));
	  }

	  _createClass(ButtonApp, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: 'site-headline' },
	          'Buttons'
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Button Types'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            null,
	            'Default'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            { type: 'primary' },
	            'Primary'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            { type: 'secondary' },
	            'Secondary'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            { outline: true },
	            'Default Outline'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            { type: 'primary', outline: true },
	            'Primary Outline'
	          ),
	          _react2.default.createElement(
	            _components.Button,
	            { type: 'link' },
	            'Link'
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Button Sizes'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'large' },
	              'Large'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              'Default'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'small' },
	              'Small'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'large' },
	              'Large'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'large' },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' }),
	              ' Large'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'large', iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              'Default'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              _react2.default.createElement(_components.Icon, { icon: 'cog' }),
	              ' Default'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'small' },
	              'Small'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'small' },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' }),
	              ' Small'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { size: 'small', iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Button Modifiers'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b-md' },
	            _react2.default.createElement(
	              'h5',
	              { className: 'site-miniheadline' },
	              'Block Buttons'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'site-copy' },
	              'Add ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'block=',
	                '{true}'
	              ),
	              ' to create a block level button.'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { block: true },
	              'Block Button'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'h5',
	              { className: 'site-miniheadline' },
	              'Icon-Only Buttons'
	            ),
	            _react2.default.createElement(
	              'p',
	              { className: 'site-copy' },
	              'Add ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'iconOnly=',
	                '{true}'
	              ),
	              ' when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance.'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'sms' })
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'email' })
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'secondary', iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'cog' })
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { outline: true, iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'clock' })
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { outline: true, type: 'primary', iconOnly: true },
	              _react2.default.createElement(_components.Icon, { icon: 'pencil' })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Button States'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              'Default'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { classes: 'active' },
	              'Default Active'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { classes: 'disabled' },
	              'Default Disabled'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary' },
	              'Primary'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', classes: 'active' },
	              'Primary Active'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', classes: 'disabled' },
	              'Primary Disabled'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'secondary' },
	              'Secondary'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'secondary', classes: 'active' },
	              'Secondary Active'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'secondary', classes: 'disabled' },
	              'Secondary Disabled'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { outline: true },
	              'Default Outline'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { outline: true, classes: 'active' },
	              'Default Outline Active'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { outline: true, classes: 'disabled' },
	              'Default Outline Disabled'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', outline: true },
	              'Primary Outline'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', outline: true, classes: 'active' },
	              'Primary Outline Active'
	            ),
	            _react2.default.createElement(
	              _components.Button,
	              { type: 'primary', outline: true, classes: 'disabled' },
	              'Primary Outline Disabled'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'site-section' },
	          _react2.default.createElement(
	            'h3',
	            { className: 'site-subheadline' },
	            'Button Ellipsis'
	          ),
	          _react2.default.createElement(
	            'h5',
	            { className: 'site-miniheadline' },
	            'Long Text Inside Buttons'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Wrap long button text in ',
	            _react2.default.createElement(
	              'code',
	              null,
	              'u-text-overflow'
	            ),
	            ' utility class in order to allow ellipsis. This rule applies to dropdowns as well.'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'u-m-b' },
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              _react2.default.createElement(
	                'span',
	                { className: 'u-text-overflow' },
	                'Button With Really Long Name'
	              )
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              _components.Button,
	              null,
	              _react2.default.createElement(_components.Icon, { icon: 'lock' }),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                { className: 'u-text-overflow' },
	                'Button With Really Long Name and Icon'
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
	          _react2.default.createElement(_componentPlayground2.default, { codeText: buttonExample, scope: exampleScope, noRender: false })
	        )
	      );
	    }
	  }]);

	  return ButtonApp;
	}(_react2.default.Component);

	ButtonApp.displayName = 'Rhinostyle Button Example';


	_reactDom2.default.render(_react2.default.createElement(ButtonApp, null), document.getElementById('js-app'));

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = "class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>Default</Button>\n        <Button type=\"primary\">Primary</Button>\n        <Button type=\"secondary\" iconOnly={true}><Icon icon=\"cog\" /></Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n"

/***/ }

});