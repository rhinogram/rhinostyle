import React      from 'react';
import classNames from 'classnames';

const ProgressBar = React.createClass({
  displayName: 'RhinoProgressBar',

  propTypes: {
    /**
     * Optionally include additional classes.
     */
    classes:   React.PropTypes.string,
    /**
     * Number 1-100 representing a percentage.
     */
    progress:  React.PropTypes.number,
    /**
     * Set to 'true' to show label in progress bar.
     */
    showLabel: React.PropTypes.bool,
    /**
     * Optionally include type.
     */
    type:      React.PropTypes.oneOf(['default', 'primary', 'secondary', 'temperature'])
  },

  getDefaultProps() {
    return {
      progress:    0,
      showLabel:   false,
      type:        'default'
    };
  },

  render() {
    const { classes, progress, showLabel, type, ...props } = this.props;

    let progressTranslation = progress;

    progressTranslation = parseInt(progress, 10);

    if (isNaN(progressTranslation) || progressTranslation < 0) {
      progressTranslation = 0;
    }

    const cx = classNames('progress__bar', {
      'progress__bar--default':  type === 'default',
      'progress__bar--primary':  type === 'primary',
      'progress__bar--secondary':  type === 'secondary',
      'progress__bar--temperature':  type === 'temperature'
    });

    const cy = classNames('progress', classes);

    /**
     * Style for progressing bar
     */
    const style = {
      transform: `translateX(${progressTranslation}%)`,
      WebkitTransform: `translateX(${progressTranslation}%)`
    };

    /**
     * If showLabel is true and progress is more than 1, construct label
     */
    let label = null;

    if (showLabel && progressTranslation > 1) {
      label = (
        <div className='progress__bar__slider__label'>{progressTranslation + '%'}</div>
      );
    }

    return (
      <div className={cy}>
        <div className={cx}>
          <div className='progress__bar__slider' style={style}>
            {label}
          </div>
        </div>
      </div>
    );
  }
});

export default ProgressBar;
