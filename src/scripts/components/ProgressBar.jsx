import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ProgressBar = (props) => {
  const { className, progress, showLabel, type } = props;
  const classes = cx('progress', className);
  const barClasses = cx('progress__bar', {
    'progress__bar--default': type === 'default',
    'progress__bar--primary': type === 'primary',
    'progress__bar--secondary': type === 'secondary',
    'progress__bar--temperature': type === 'temperature',
  });

  let progressTranslation = progress;
  let label = null;

  progressTranslation = parseInt(progress, 10);

  if (!Number.isInteger(progressTranslation) || progressTranslation < 0) {
    progressTranslation = 0;
  }

  if (showLabel && progressTranslation > 1) {
    label = (
      <div className="progress__bar__slider__label">{`${progressTranslation}%`}</div>
    );
  }

  const style = {
    transform: `translateX(${progressTranslation}%)`,
  };

  return (
    <div className={classes}>
      <div className={barClasses}>
        <div className="progress__bar__slider" style={style}>
          {label}
        </div>
      </div>
    </div>
  );
};

ProgressBar.displayName = 'RhinoProgressBar';

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
  showLabel: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'primary', 'secondary', 'temperature']),
};

ProgressBar.defaultProps = {
  progress: 0,
  showLabel: false,
  type: 'default',
};

export default ProgressBar;
