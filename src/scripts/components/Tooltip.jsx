/* global Modernizr */
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { TimelineMax } from 'gsap/TweenMax';

import { UtilitySystem } from '../UtilitySystem';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.isTooltipOpen = false; // We don't use React state because setState is asyncronous and we need syncronous changes here.
    this.tooltipTimer = undefined; // Store setInterval when using tooltip delay. Used in order to clearInterval when needed.
  }

  /**
   * @NOTE Attaching event listeners here is not ideal,
   * but `onMouseEnter` (and `onMouseOver`) is not reliably fired;
   * as well as the context of the currentTarget being incorrect.
   * */
  componentDidMount() {
    const tooltipTrigger = this.getTooltipTrigger();

    /**
     * Add event listeners
     * Tooltips using Modernizr we detect whether we're dealing with a touch device
     * in order to attach the correct event listener. The tooltip works with
     * HOVER on non-touch devices, and CLICK on touch devices.
     *
     * @NOTE: We're not using native touch event sequence since touch devices will emulate a
     * click event and this is the most reliable way to toggle the tooltip.
     *  */
    if (!Modernizr.touchevents) {
      tooltipTrigger.addEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.addEventListener('mouseleave', this.closeTooltip.bind(this));
    }
    if (Modernizr.touchevents || Modernizr.pointerevents) {
      tooltipTrigger.addEventListener('click', this.toggleTooltip.bind(this));
    }
  }

  componentWillUnmount() {
    const tooltipTrigger = this.getTooltipTrigger();

    // Remove event listeners from non-touch devices
    if (!Modernizr.touchevents) {
      tooltipTrigger.removeEventListener('mouseenter', this.createTooltip.bind(this));
      tooltipTrigger.removeEventListener('mouseleave', this.closeTooltip.bind(this));
    }
  }

  /**
   * Get tooltip trigger
   * @return {HTMLElement} DOM Node where tooltip originates
   */
  getTooltipTrigger = () => {
    const { tooltipTrigger } = this;

    // If this a React component; get DOM reference
    if (typeof this.tooltipTrigger === 'object') {
      return ReactDOM.findDOMNode(this.tooltipTrigger);
    }

    return tooltipTrigger;
  }

  /**
   * Create tooltip
   * @param {MouseEvent} e mouse enter event
   * @return {void}
   */
  createTooltip = (e) => {
    e.preventDefault();

    if (this.tooltipId) {
      return;
    }

    // Random ID
    this.tooltipId = `tooltip-${UtilitySystem.generateUUID()}`;

    const $tooltip = document.createElement('div');
    const $tooltipContent = document.createElement('div');

    $tooltip.setAttribute('id', this.tooltipId);
    $tooltip.setAttribute('role', 'tooltip');
    $tooltip.classList.add('tooltip');
    $tooltipContent.classList.add('tooltip-inner', `tooltip-inner--${this.props.type}`);

    const tooltipContent = this.props.content;

    // If tooltip content is valid HTMl (wrapped in object), convert to HTML and inject
    $tooltipContent.innerHTML = typeof tooltipContent === 'object' ? ReactDOMServer.renderToStaticMarkup(tooltipContent) : tooltipContent;

    $tooltip.appendChild($tooltipContent);
    // Set placement as parameter
    $tooltip.placement = this.props.placement;

    document.body.appendChild($tooltip);

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        this.isTooltipOpen = true;
      },
      onReverseComplete: () => {
        this.removeTooltip($tooltip);
        this.isTooltipOpen = false;
      },
    });

    let transformOrigin;

    switch ($tooltip.placement) { // eslint-disable-line default-case
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
      transformOrigin,
      scale: 0.75,
    })
      .to($tooltip, 0.175, {
        css: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
        },
        ease: UtilitySystem.config.easingBounce,
      });

    this.styleTooltip($tooltip);
  }

  /**
   * Figure out direction and position
   * @param {HTMLElement} tooltip Div element for tooltip
   * @return {void}
   */
  styleTooltip = (tooltip) => {
    const $tooltip = tooltip;
    const tooltipTrigger = this.getTooltipTrigger();

    const rect = tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${$tooltip.placement}`);

    // Grab dimensions of link
    const linkDim = { w: rect.width, h: rect.height };

    // Tooltip dimensions
    const tooltipDim = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };

    const scrollYOffset = window.pageYOffset || document.documentElement.scrollTop;
    const scrollXOffset = window.pageXOffset || document.documentElement.scrollLeft;

    // Apply styling
    switch ($tooltip.placement) { // eslint-disable-line default-case
      case 'top':
        $tooltip.style.top = `${(rect.top + scrollYOffset) - tooltipDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'bottom':
        $tooltip.style.top = `${(rect.top + scrollYOffset) + linkDim.h}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset + (linkDim.w / 2)) - (tooltipDim.w / 2)}px`;
        break;
      case 'left':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${(rect.left + scrollXOffset) - tooltipDim.w}px`;
        break;
      case 'right':
        $tooltip.style.top = `${(rect.top + scrollYOffset + (linkDim.h / 2)) - (tooltipDim.h / 2)}px`;
        $tooltip.style.left = `${rect.left + scrollXOffset + linkDim.w}px`;
        break;
    }

    this.openTooltip($tooltip);
  }

  /**
   * Open tooltip
   * @param  {HTMLElement} tooltip The DOM node where tooltip originates
   * @return {void}
   */
  openTooltip(tooltip) {
    const { delay } = this.props;

    if (delay) {
      // Takes care of multiple PropTypes
      const delayDuration = Number.isInteger(delay) ? delay : 1000;

      this.tooltipTimer = setTimeout(() => {
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
  closeTooltip() {
    // Cancel delayed tooltip open if user hovers out of target. On 'mouseleave'.
    if (this.tooltipTimer) {
      clearInterval(this.tooltipTimer);
    }

    document.querySelector(`#${this.tooltipId}`).timeline.reverse();

    this.tooltipTimer = undefined;
    this.isTooltipOpen = false;
  }

  /**
   * Remove tooltip from DOM
   * @param {HTMLElement} tooltip DOM node where tooltip originates.
   * @return {void}
   */
  removeTooltip(tooltip) {
    tooltip.remove();
    this.tooltipId = undefined;
  }

  /**
   * Open or close tooltip based on its current state.
   * Used only on touch devices that rely on click events since a click could
   * call for either opening or closing.
   * @param {event} e
   * @return {void}
   */
  toggleTooltip(e) {
    if (!this.isTooltipOpen) {
      this.createTooltip(e);
    } else {
      this.closeTooltip(e);
    }
  }

  renderChildren = () => {
    const { children } = this.props;

    const returnChild = React.cloneElement(React.Children.only(children), {
      ref: (node) => {
        this.tooltipTrigger = node;
      },
    });

    return returnChild;
  };

  render() {
    return React.Children.only(this.renderChildren());
  }
}

Tooltip.propTypes = {
  delay: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.number.isRequired,
  ]),
  children: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  type: PropTypes.oneOf(['light', 'dark']),
};

Tooltip.defaultProps = {
  delay: false,
  placement: 'top',
  type: 'light',
};

export default Tooltip;
