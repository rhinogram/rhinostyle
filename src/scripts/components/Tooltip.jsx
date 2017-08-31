import PropTypes from 'prop-types';
import React from 'react';
import { TimelineMax } from 'gsap';

import { UtilitySystem } from '../UtilitySystem';

class Tooltip extends React.Component {
  /**
   * Create tooltip
   * @return {void}
   */
  createTooltip = () => {
    // Random ID
    this.tooltipId = `tooltip-${Math.random().toString().slice(2, 11)}`;

    const $tooltip = document.createElement('div');
    const $tooltipContent = document.createElement('div');

    $tooltip.setAttribute('id', this.tooltipId);
    $tooltip.setAttribute('role', 'tooltip');
    $tooltip.classList.add('tooltip');

    $tooltipContent.classList.add('tooltip-inner');
    $tooltipContent.innerHTML = this.props.content;

    $tooltip.appendChild($tooltipContent);
    // Set placement as parameter
    $tooltip.placement = this.props.placement;

    document.body.appendChild($tooltip);

    // Attach GSAP
    $tooltip.timeline = new TimelineMax({
      paused: true,
      onReverseComplete: () => {
        this.removeTooltip($tooltip);
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
      scale: 0.5,
    })
      .to($tooltip, 0.25, {
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
   * Figure out direciton and position
   * @return {void}
   */
  styleTooltip = (tooltip) => {
    const $tooltip = tooltip;
    const rect = this.tooltipTrigger.getBoundingClientRect();

    $tooltip.classList.add(`tooltip--${$tooltip.placement}`);

    // Grab dimensions of link
    const linkDim = { w: this.tooltipTrigger.offsetWidth, h: this.tooltipTrigger.offsetHeight };

    // Tooltip dimensions
    const td = { w: $tooltip.offsetWidth, h: $tooltip.offsetHeight };
    const tooltipDim = { w: td.w, h: td.h };

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
   * @param  {node} tooltip
   * @return {void}
   */
  openTooltip(tooltip) {
    tooltip.timeline.play();
  }

  /**
   * Close tooltip
   * @param  {node} tooltip
   * @return {void}
   */
  closeTooltip(tooltip) {
    tooltip.timeline.reverse();
  }

  /**
   * Remove tooltip from DOM
   * @param  {node} tooltip
   * @return {void}
   */
  removeTooltip(tooltip) {
    tooltip.remove();
  }

  renderChildren = () => {
    const { children } = this.props;

    const onMouseOver = () => {
      this.createTooltip();
    };

    const onMouseLeave = () => {
      this.closeTooltip(document.querySelector(`#${this.tooltipId}`));
    };

    const returnChild = React.cloneElement(React.Children.only(children), {
      onMouseOver,
      onMouseLeave,
      ref: (node) => {
        // Keep your own reference
        this.tooltipTrigger = node;
      },
    });

    return returnChild;
  };

  render() {
    return React.Children.only(this.renderChildren());
  }
}

Tooltip.displayName = 'RhinoTooltip';

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
