import React from 'react';
import { TimelineMax } from 'gsap';
import onClickOutside from 'react-onclickoutside';
import { config } from '../config';

class DropdownWrapper extends React.Component {
  static displayName = 'RhinoDropdownWrapper';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    // disableOnClickOutside: React.PropTypes.func,
    // enableOnClickOutside: React.PropTypes.func,
    handleClick: React.PropTypes.func,
    onComplete: React.PropTypes.func,
    onReverseComplete: React.PropTypes.func,
    onReverseStart: React.PropTypes.func,
    onStart: React.PropTypes.func,
  };

  static defaultProps = {
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
  };

  componentDidMount = () => {
    const $dropdown = this.dropdown;

    let forward = true;
    let lastTime = 0;

    // Attach GSAP
    $dropdown.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        $dropdown.classList.add(config.classes.open);
        // Toggle aria state
        $dropdown.setAttribute('aria-expanded', true);

        // Fire off prop update
        this.props.onStart();
      },
      onComplete: () => {
        // Focus on active dropdown
        $dropdown.focus();

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

            $dropdown.classList.remove(config.classes.open);
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
    .to($dropdown.querySelector('.dropdown__menu'), 0.25, {
      css: {
        display: 'block',
        y: 0,
        opacity: 1,
      },
      ease: config.easing,
    });
  }

  handleClickOutside = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <div ref={ref => this.dropdown = ref} className={this.props.className}>{this.props.children}</div>
    );
  }
}

export default onClickOutside(DropdownWrapper);
