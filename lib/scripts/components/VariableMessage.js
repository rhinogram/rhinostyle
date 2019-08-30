"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ = require(".");

var _constants = require("../constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VariableMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VariableMessage, _React$Component);

  function VariableMessage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VariableMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VariableMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      message: '',
      available: []
    });

    _defineProperty(_assertThisInitialized(_this), "getVariables", function (array) {
      return array.filter(function (item) {
        return item.id !== -1;
      }).reduce(function (a, b) {
        return a.concat(b.options || b);
      }, []);
    });

    _defineProperty(_assertThisInitialized(_this), "id", "".concat(_this.props.name, "-").concat(_.UtilitySystem.generateUUID()));

    _defineProperty(_assertThisInitialized(_this), "insertTextAtCursor", function (text) {
      var paste = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var sel = window.getSelection();
      var range = document.createRange(); // Make sure we're focused on the compose element

      _this.compose.focus();

      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents(); // range.insertNode($space);

        if (paste) {
          range.insertNode(document.createTextNode(text));
        } else {
          range.insertNode(text);
        } // Move caret


        range.setStartAfter(text);
        range.setEndAfter(text);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "transformVar", function (text) {
      // Re-assign text value for processing
      var value = text; // Replace text contents of variable to hide squigglies

      var regexSquiggles = /{(.*)?}/g;
      value = value.replace(regexSquiggles, '<i>{</i><div>$1</div><i>}</i>'); // Replace text contents of variable to hide underscore

      var regexUnderscores = /_/g;
      value = value.replace(regexUnderscores, '</div><b>_</b><div>'); // Build variable UI

      var $variable = document.createElement('span'); // Disable spell-checker

      $variable.setAttribute('spellcheck', false); // Do not allow the variable to be edited

      $variable.setAttribute('contenteditable', false);
      $variable.classList.add('variable-message__variable');
      $variable.innerHTML = value;

      if (!_this.props.readOnly) {
        var $close = document.createElement('span');
        $close.classList.add('variable-message__close');
        $variable.appendChild($close);
      }

      return $variable;
    });

    _defineProperty(_assertThisInitialized(_this), "insertVariable", function (text) {
      var $variable = _this.transformVar(text);

      _this.insertTextAtCursor($variable);
    });

    _defineProperty(_assertThisInitialized(_this), "removeVariable", function (text) {
      var variables = _this.getVariables(_this.props.variables);

      var split = _this.state.message.split(text).join('').split(/({.*?})/);

      var lowercaseSplit = split.map(function (e) {
        return e.toLowerCase();
      });
      variables.filter(function (v) {
        return v.value !== text;
      }).forEach(function (value) {
        var variable = value.variable;
        var isVariablePresent = lowercaseSplit.includes(variable.toLowerCase()); // See if we've found one in our `initialValue`

        if (isVariablePresent) {
          var variableIndex = lowercaseSplit.indexOf(variable.toLowerCase());
          split[variableIndex] = _this.transformVar(variable).outerHTML;
        }
      });
      _this.compose.innerHTML = split.join('');
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitValue", function () {
      var initialValue = _this.props.initialValue; // Get flat-level list of all variables

      var variables = _this.getVariables(_this.props.variables); // Split `initialValue` to target variables


      var split = initialValue.split(/({.*?})/);
      var lowercaseSplit = split.map(function (e) {
        return e.toLowerCase();
      });
      var available = []; // Loop through variables

      variables.forEach(function (value) {
        var variable = value.variable;
        var isVariablePresent = lowercaseSplit.includes(variable.toLowerCase()); // See if we've found one in our `initialValue`

        if (isVariablePresent) {
          // If so, transform the variable into HTML
          var variableIndex = lowercaseSplit.indexOf(variable.toLowerCase());
          split[variableIndex] = _this.transformVar(variable).outerHTML;
        } else {
          available.push(value.id);
        }
      });

      _this.setState({
        available: available
      }); // Set message content equal to new mixed content


      _this.compose.innerHTML = split.join(''); // Manually trigger `input` update

      _this.handleComposeInput();
    });

    _defineProperty(_assertThisInitialized(_this), "handleVariableSelection", function (name, value) {
      // Get flat-level list of all variables
      // and variable context
      var variable = _this.getVariables(_this.props.variables).find(function (el) {
        return el.id === value;
      }); // If we're on a valid variable


      if (variable.variable) {
        // Get variable value
        _this.setState(function (prevState) {
          var index = prevState.available.indexOf(value);

          if (index > -1) {
            prevState.available.splice(index, 1);

            _this.insertVariable(name);
          } else {
            prevState.available.push(value);

            _this.removeVariable(name);
          }

          return {
            available: prevState.available
          };
        }, function () {
          // Focus back on compose element
          _this.compose.focus();

          _this.handleComposeInput();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleComposeKeypress", function (e) {
      if (e.which === _constants.ENTER_KEY) {
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (k) {
      // check if delete key or backspace is pressed to see if a variable was removed
      if (k.which === _constants.BACKSPACE_KEY || k.which === _constants.DELETE_KEY) {
        var available = [];

        var split = _this.state.message.split(/({.*?})/);

        var lowercaseSplit = split.map(function (e) {
          return e.toLowerCase();
        });

        var variables = _this.getVariables(_this.props.variables);

        variables.forEach(function (value) {
          var variable = value.variable;
          var foundVariable = lowercaseSplit.indexOf(variable.toLowerCase()); // See if we've found one in our current message

          if (foundVariable === -1) {
            // If so, transform the variable into HTML
            available.push(value.id);
          }
        });

        _this.setState({
          available: available
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePaste", function (e) {
      e.preventDefault();

      if (e.clipboardData && e.clipboardData.getData) {
        var text = e.clipboardData.getData('text/plain');
        document.execCommand('insertHTML', false, text);
      } else if (window.clipboardData && window.clipboardData.getData) {
        var _text = window.clipboardData.getData('Text');

        _this.insertTextAtCursor(_text, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleComposeInput", function () {
      // Get the rawMessage content to return onInput
      var rawMessage = _this.compose.textContent.trim(); // Get only the text representation of the message
      // so we can update our DB with it


      var message = rawMessage;

      var $preview = _reactDom.default.findDOMNode(_this.preview); // Update state


      _this.setState({
        message: message
      }); // Search text to determine if variables are found in it


      _this.getVariables(_this.props.variables).forEach(function (value) {
        var variable = value.variable;

        if (variable) {
          // We found the text
          if (message.search(variable) !== -1) {
            // Swap out variables for data
            var regex = new RegExp(variable);
            message = message.replace(regex, value.variableValue);
          }
        }
      }); // Take away any trailing space


      if (message === ' ') {
        message = '';
      } // Update preview
      // May not be there based on `readOnly` prop


      if ($preview) {
        $preview.innerHTML = message;
      }

      if (_this.props.onInput) {
        _this.props.onInput(_this.props.name, rawMessage, message);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showReset", function () {
      return _this.props.reset && _this.props.initialValue && _this.props.initialValue !== _this.state.message;
    });

    _defineProperty(_assertThisInitialized(_this), "renderToggleButtons", function (variables) {
      return variables.filter(function (variable) {
        return variable.id !== -1;
      }).map(function (v) {
        if (v.options) {
          return _this.renderToggleButtons(v.options);
        }

        return _react.default.createElement(_.ToggleButton, {
          available: _this.state.available.includes(v.id),
          variable: v,
          key: v.id,
          onClick: _this.handleVariableSelection
        }, v.value);
      });
    });

    return _this;
  }

  _createClass(VariableMessage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.initialValue) {
        this.setState({
          message: this.props.initialValue
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.initialValue) {
        this.compose.textContent = this.props.initialValue;
        this.handleInitValue();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValue !== this.props.initialValue) {
        this.setState({
          message: nextProps.initialValue
        }, this.handleInitValue); // we need to run the init function everytime the component receives props to properly set the content edittable values.
      }
    }
    /**
     * Retrieves variables
     * Puts them in a flat-level array since some could be inside of `<optgroup>`s
     * @param  {array} array
     * @return {array}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          characterCountTitle = _this$props.characterCountTitle,
          characterCountWarningLength = _this$props.characterCountWarningLength,
          className = _this$props.className,
          composeLabel = _this$props.composeLabel,
          explanationMessage = _this$props.explanationMessage,
          variableExplanationMessage = _this$props.variableExplanationMessage,
          previewLabel = _this$props.previewLabel,
          name = _this$props.name,
          variables = _this$props.variables,
          readOnly = _this$props.readOnly,
          required = _this$props.required,
          showCharacterCounter = _this$props.showCharacterCounter,
          validationMessage = _this$props.validationMessage;
      var classes = (0, _classnames.default)('form__group variable-message', className);
      var message = this.state.message;
      var characterCounterClasses = (0, _classnames.default)('variable-message__character-count', {
        'variable-message__character-count--warning': message.length >= characterCountWarningLength
      });
      var variableMessageInputName = "variable-message-input-".concat(this.id);
      var variableMessagePreviewName = "variable-message-preview-".concat(this.id);
      return _react.default.createElement("div", {
        className: classes
      }, !readOnly && _react.default.createElement("div", {
        className: "variable-message__header"
      }, _react.default.createElement(_.FormLabel, {
        className: "variable-message__label",
        id: variableMessageInputName,
        required: required
      }, composeLabel), this.showReset() && _react.default.createElement("div", {
        className: "variable-message__reset"
      }, _react.default.createElement(_.Button, {
        reset: true,
        className: "u-text-muted u-text-small",
        onClick: this.handleInitValue
      }, "Undo"))), _react.default.createElement("div", {
        style: {
          position: 'relative'
        }
      }, _react.default.createElement("div", {
        id: variableMessageInputName,
        className: "variable-message__compose",
        contentEditable: !readOnly,
        onInput: this.handleComposeInput,
        onFocus: this.handleComposeInput,
        onKeyPress: this.handleComposeKeypress,
        onKeyUp: this.handleKeyUp,
        onPaste: this.handlePaste,
        name: name,
        ref: function ref(_ref) {
          return _this2.compose = _ref;
        }
      })), _react.default.createElement(_.FormExplanationMessage, {
        explanationMessage: explanationMessage
      }), _react.default.createElement(_.FormValidationMessage, {
        validationMessage: validationMessage
      }), !readOnly && _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: "variable-message__footer"
      }, variableExplanationMessage && _react.default.createElement("div", {
        className: "variable-message__explanation"
      }, variableExplanationMessage), _react.default.createElement("div", {
        className: "variable-message__footer__left"
      }, this.renderToggleButtons(variables))), showCharacterCounter && _react.default.createElement("div", {
        title: characterCountTitle,
        className: characterCounterClasses
      }, message.length), _react.default.createElement("div", {
        className: "variable-message__preview"
      }, _react.default.createElement(_.FormLabel, {
        className: "u-block",
        id: variableMessagePreviewName
      }, previewLabel), _react.default.createElement(_.Message, {
        type: "primary",
        direction: "inbound",
        ref: function ref(_ref2) {
          return _this2.preview = _ref2;
        }
      }))));
    }
  }]);

  return VariableMessage;
}(_react.default.Component);

VariableMessage.propTypes = {
  characterCountTitle: _propTypes.default.string,
  characterCountWarningLength: _propTypes.default.number,
  className: _propTypes.default.string,
  composeLabel: _propTypes.default.string,
  explanationMessage: _propTypes.default.string,
  variableExplanationMessage: _propTypes.default.string,
  previewLabel: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  reset: _propTypes.default.bool,
  variables: _propTypes.default.array.isRequired,
  onInput: _propTypes.default.func,
  initialValue: _propTypes.default.string,
  readOnly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  showCharacterCounter: _propTypes.default.bool,
  validationMessage: _propTypes.default.string
};
VariableMessage.defaultProps = {
  composeLabel: 'Message',
  previewLabel: 'Preview',
  variableExplanationMessage: 'Click to add/remove variables into your message:'
};
var _default = VariableMessage;
exports.default = _default;