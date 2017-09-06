import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import React from 'react';
import onClickOutside from 'react-onclickoutside';

import { UtilitySystem } from '../components';

class DropdownWrapper extends React.Component {
  static displayName = 'RhinoDropdownWrapper';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    onComplete: PropTypes.func,
    onReverseComplete: PropTypes.func,
    onReverseStart: PropTypes.func,
    onStart: PropTypes.func,
  };

  static defaultProps = {
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
  };

  componentDidMount = () => {
    const $dropdown = this.dropdown;
    const $dropdownMenu = $dropdown.querySelector('.dropdown__menu');
    const $dropdownToggle = $dropdown.querySelector('.dropdown__toggle');

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $dropdown.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        // Add active/open classes
        $dropdown.classList.add(UtilitySystem.config.classes.open);

        if ($dropdownToggle) {
          $dropdownToggle.classList.add(UtilitySystem.config.classes.active);
        }

        // Toggle aria state
        $dropdown.setAttribute('aria-expanded', true);

        // Fire off prop update
        this.props.onStart();
      },
      onComplete: () => {
        const $input = $dropdown.querySelector('input[type="text"]');

        // If dropdown contains input (for filtering), focus on that
        if ($input) {
          $input.focus();
        } else {
          // Focus on active dropdown
          $dropdown.focus();
        }

        // Fire off prop update
        this.props.onComplete();
      },
      onUpdate: () => {
        const newTime = $dropdown.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            this.props.onReverseStart();

            // Remove active/open classes
            $dropdown.classList.remove(UtilitySystem.config.classes.open);

            if ($dropdownToggle) {
              $dropdownToggle.classList.remove(UtilitySystem.config.classes.active);
            }

            // Toggle aria state
            $dropdown.setAttribute('aria-expanded', false);
          }
        }
        lastTime = newTime;
      },
      onReverseComplete: () => {
        // Fire off prop update
        this.props.onReverseComplete();
      },
    });

    $dropdown.timeline
      .set($dropdownMenu, {
        display: 'block',
      })
      .to($dropdownMenu, 0.175, {
        css: {
          y: 0,
          scale: 1,
          opacity: 1,
        },
        ease: UtilitySystem.config.easingBounce,
      });
  }

  handleClickOutside = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div aria-haspopup="true" aria-expanded="false" ref={ref => (this.dropdown = ref)} className={this.props.className}>{this.props.children}</div>
    );
  }
}

export default onClickOutside(DropdownWrapper);
