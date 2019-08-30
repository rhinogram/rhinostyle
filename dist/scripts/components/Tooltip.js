"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _TweenMax = require("gsap/TweenMax");

var _UtilitySystem = require("../UtilitySystem");

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

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isTooltipOpen", false);

    _defineProperty(_assertThisInitialized(_this), "tooltipDelayTimeoutId", undefined);

    _defineProperty(_assertThisInitialized(_this), "getTooltipTrigger", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          tooltipTrigger = _assertThisInitialize.tooltipTrigger; // If this a React component; get DOM reference


      if (_typeof(_this.tooltipTrigger) === 'object') {
        return _reactDom.default.findDOMNode(_this.tooltipTrigger);
      }

      return tooltipTrigger;
    });

    _defineProperty(_assertThisInitialized(_this), "createTooltip", function (e) {
      e.preventDefault();

      if (_this.tooltipId) {
        return;
      } // Random ID


      _this.tooltipId = "tooltip-".concat(_UtilitySystem.UtilitySystem.generateUUID());
      var $tooltip = document.createElement('div');
      var $tooltipContent = document.createElement('div');
      $tooltip.setAttribute('id', _this.tooltipId);
      $tooltip.setAttribute('role', 'tooltip');
      $tooltip.classList.add('tooltip'); // Because classList.add function do not works with multiple arguments in IE

      $tooltipContent.classList.add('tooltip-inner');
      $tooltipContent.classList.add("tooltip-inner--".concat(_this.props.type));
      var tooltipContent = _this.props.content; // If tooltip content is valid HTMl (wrapped in object), convert to HTML and inject

      $tooltipContent.innerHTML = _typeof(tooltipContent) === 'object' ? _server.default.renderToStaticMarkup(tooltipContent) : tooltipContent;
      $tooltip.appendChild($tooltipContent); // Set placement as parameter

      $tooltip.placement = _this.props.placement;
      document.body.appendChild($tooltip); // Attach GSAP

      $tooltip.timeline = new _TweenMax.TimelineMax({
        paused: true,
        onStart: function onStart() {
          _this.isTooltipOpen = true;
        },
        onReverseComplete: function onReverseComplete() {
          _this.removeTooltip($tooltip);

          _this.isTooltipOpen = false;
        }
      });
      var transformOrigin;

      switch ($tooltip.placement) {
        // eslint-disable-line default-case
        case 'top':
          transformOrigin = 'center bottom';
          break;

        case 'bottom':
          transformOrigin = 'center top';
          break;

        case 'left':
          transformOrigin = 'right center';
          break;

        case 'right':
          transformOrigin = 'left center';
          break;
      }

      $tooltip.timeline.set($tooltip, {
        transformOrigin: transformOrigin,
        scale: 0.75
      }).to($tooltip, 0.175, {
        css: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1
        },
        ease: _UtilitySystem.UtilitySystem.config.easingBounce
      });

      _this.styleTooltip($tooltip);
    });

    _defineProperty(_assertThisInitialized(_this), "styleTooltip", function (tooltip) {
      var $tooltip = tooltip;

      var tooltipTrigger = _this.getTooltipTrigger();

      var rect = tooltipTrigger.getBoundingClientRect();
      $tooltip.classList.add("tooltip--".concat($tooltip.placement)); // Grab dimensions of link

      var linkDim = {
        w: rect.width,
        h: rect.height
      }; // Tooltip dimensions

      var tooltipDim = {
        w: $tooltip.offsetWidth,
        h: $tooltip.offsetHeight
      };
      var scrollYOffset = window.pageYOffset || document.documentElement.scrollTop;
      var scrollXOffset = window.pageXOffset || document.documentElement.scrollLeft; // Apply styling

      switch ($tooltip.placement) {
        // eslint-disable-line default-case
        case 'top':
          $tooltip.style.top = "".concat(rect.top + scrollYOffset - tooltipDim.h, "px");
          $tooltip.style.left = "".concat(rect.left + scrollXOffset + linkDim.w / 2 - tooltipDim.w / 2, "px");
          break;

        case 'bottom':
          $tooltip.style.top = "".concat(rect.top + scrollYOffset + linkDim.h, "px");
          $tooltip.style.left = "".concat(rect.left + scrollXOffset + linkDim.w / 2 - tooltipDim.w / 2, "px");
          break;

        case 'left':
          $tooltip.style.top = "".concat(rect.top + scrollYOffset + linkDim.h / 2 - tooltipDim.h / 2, "px");
          $tooltip.style.left = "".concat(rect.left + scrollXOffset - tooltipDim.w, "px");
          break;

        case 'right':
          $tooltip.style.top = "".concat(rect.top + scrollYOffset + linkDim.h / 2 - tooltipDim.h / 2, "px");
          $tooltip.style.left = "".concat(rect.left + scrollXOffset + linkDim.w, "px");
          break;
      }

      _this.openTooltip($tooltip);
    });

    _defineProperty(_assertThisInitialized(_this), "closeTooltip", function () {
      // Cancel delayed tooltip open if user hovers out of target. On 'mouseleave'.
      if (_this.tooltipDelayTimeoutId) {
        clearTimeout(_this.tooltipDelayTimeoutId);
      }

      if (_this.tooltipId) {
        document.querySelector("#".concat(_this.tooltipId)).timeline.reverse();
      }

      _this.tooltipDelayTimeoutId = undefined;
      _this.isTooltipOpen = false;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTooltip", function (e) {
      if (!_this.isTooltipOpen) {
        _this.createTooltip(e);
      } else {
        _this.closeTooltip(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;

      var returnChild = _react.default.cloneElement(_react.default.Children.only(children), {
        ref: function ref(node) {
          _this.tooltipTrigger = node;
        }
      });

      return returnChild;
    });

    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    // Store setTimeout when using tooltip delay. Used in order to clearTimeout when needed.

    /**
     * @NOTE Attaching event listeners here is not ideal,
     * but `onMouseEnter` (and `onMouseOver`) is not reliably fired;
     * as well as the context of the currentTarget being incorrect.
     * */
    value: function componentDidMount() {
      window.addEventListener('scroll', this.closeTooltip, true);
      var tooltipTrigger = this.getTooltipTrigger();
      /**
       * Add event listeners for tooltips triggers.
       * Using Modernizr we detect whether we're dealing with a touch device
       * in order to attach the correct event listener. The tooltip works with
       * HOVER on non-touch devices, and CLICK on touch devices.
       *
       * @NOTE: We're not using native touch event sequence since touch devices will emulate a
       * click event and this is the most reliable way to toggle the tooltip.
       *  */

      if (!Modernizr.touchevents) {
        tooltipTrigger.addEventListener('mouseenter', this.createTooltip);
        tooltipTrigger.addEventListener('mouseleave', this.closeTooltip);
      }

      if (Modernizr.touchevents || Modernizr.pointerevents) {
        tooltipTrigger.addEventListener('click', this.toggleTooltip);
        tooltipTrigger.addEventListener('focusout', this.closeTooltip);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var tooltipTrigger = this.getTooltipTrigger();
      window.removeEventListener('scroll', this.closeTooltip); // Remove event listeners from non-touch devices

      if (!Modernizr.touchevents) {
        tooltipTrigger.removeEventListener('mouseenter', this.createTooltip);
        tooltipTrigger.removeEventListener('mouseleave', this.closeTooltip);
      }

      if (Modernizr.touchevents || Modernizr.pointerevents) {
        tooltipTrigger.removeEventListener('click', this.toggleTooltip);
        tooltipTrigger.removeEventListener('focusout', this.closeTooltip);
      }
    }
    /**
     * Get tooltip trigger
     * @return {HTMLElement} DOM Node where tooltip originates
     */

  }, {
    key: "openTooltip",

    /**
     * Open tooltip
     * @param  {HTMLElement} tooltip The DOM node where tooltip originates
     * @return {void}
     */
    value: function openTooltip(tooltip) {
      var delay = this.props.delay;

      if (delay) {
        // Takes care of multiple PropTypes
        var delayDuration = Number.isInteger(delay) ? delay : 1000;
        this.tooltipDelayTimeoutId = setTimeout(function () {
          tooltip.timeline.play();
        }, delayDuration);
      } else {
        tooltip.timeline.play();
      }
    }
    /**
     * Close tooltip
     * @return {void}
     */

  }, {
    key: "removeTooltip",

    /**
     * Remove tooltip from DOM
     * @param {HTMLElement} tooltip DOM node where tooltip originates.
     * @return {void}
     */
    value: function removeTooltip(tooltip) {
      this.tooltipId = undefined; // Using removeChild as remove function do not works in IE

      tooltip.parentNode.removeChild(tooltip);
    }
    /**
     * Open or close tooltip based on its current state.
     * Used only on touch devices that rely on click events since a click could
     * call for either opening or closing.
     * @param {event} e
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      return _react.default.Children.only(this.renderChildren());
    }
  }]);

  return Tooltip;
}(_react.default.Component);

Tooltip.propTypes = {
  delay: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired]),
  children: _propTypes.default.node.isRequired,
  content: _propTypes.default.any.isRequired,
  placement: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  type: _propTypes.default.oneOf(['light', 'dark'])
};
Tooltip.defaultProps = {
  delay: false,
  placement: 'top',
  type: 'light'
};
var _default = Tooltip;
exports.default = _default;