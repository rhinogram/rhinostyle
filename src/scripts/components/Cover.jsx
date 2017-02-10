/* eslint no-return-assign:0 */
import cx                 from 'classnames';
import React              from 'react';
import ReactDOM           from 'react-dom';
import { TimelineMax, Power2 } from 'gsap';

class Cover extends React.Component {
  static displayName = 'RhinoCover';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onComplete: React.PropTypes.func,
    onReverseComplete: React.PropTypes.func,
    onReverseStart: React.PropTypes.func,
    onStart: React.PropTypes.func,
  };

  static defaultProps = {
    children: null,
    className: '',
    onComplete: () => {},
    onReverseComplete: () => {},
    onReverseStart: () => {},
    onStart: () => {},
  };

  componentDidMount() {
    const $body = document.body;
    const $cover = this.cover;
    const $coverContainer = document.querySelector('[data-js="coverContainer"]');

    let forward = true;
    let lastTime = 0;

    // Attach timeline to each instance
    $cover.timeline = new TimelineMax({
      paused: true,
      onStart: () => {
        $body.classList.add('cover-open');

        // Fire off prop update
        this.props.onStart();
      },
      onUpdate: () => {
        const newTime = $cover.timeline.time();
        if ((forward && newTime < lastTime) || (!forward && newTime > lastTime)) {
          forward = !forward;
          if (!forward) {
            // Fire off prop update
            this.props.onReverseStart();

            $body.classList.remove('cover-open');
            $cover.classList.remove('is-open');
          }
        }
        lastTime = newTime;
      },
      onComplete: () => {
        // Focus on active cover for screen readers
        $cover.focus();

        // Fire off prop update
        this.props.onComplete();
      },
      onReverseComplete: () => {
        ReactDOM.unmountComponentAtNode($coverContainer);
        $body.removeChild($coverContainer);

        // Fire off prop update
        this.props.onReverseComplete();
      },
    });

    $cover.timeline
    .set($cover, {
      css: {
        display: 'flex',
      },
    })
    .to($cover, 0.25, {
      css: {
        opacity: 1,
        scale: 1,
      },
      ease: Power2.easeOut,
    });
  }

  render() {
    const { children, className } = this.props;
    const classes = cx('cover', className);

    return (
      <div className={classes} ref={ref => this.cover = ref}>
        {children}
      </div>
    );
  }
}

export default Cover;
