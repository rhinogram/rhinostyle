const React = require('react');
const cx    = require('classnames');

const { assign, omit } = require('lodash');

module.exports = React.createClass({
  displayName: 'Progress Bar',

  propTypes: {
    /**
     * Optionally include additional class name(s).
     */
    className: React.PropTypes.string,
    /**
     * Number 1-100 representing a percentage.
     */
    progress:  React.PropTypes.number,
    /**
     * Set to 'true' to show label in progress bar.
     */
    showLabel: React.PropTypes.bool,
    /**
     * Options: xs, sm, lg.
     */
    size:      React.PropTypes.oneOf(['', 'xs', 'sm', 'lg']),
    /**
     * Optionally include type.
     */
    type:      React.PropTypes.oneOf(['attention', 'danger', 'info', 'primary', 'success', 'success-to-danger', 'warning'])
  },

  getDefaultProps() {
    return {
      progress:    0,
      showLabel:   false,
      size:        '',
      type:        'primary'
    };
  },

  render() {
    let props = assign({}, this.props);

    const {
      className,
      progress,
      showLabel,
      size,
      type
    } = props;

    props = omit(props, ['className', 'progress', 'showLabel', 'size', 'type']);

    let progressTranslation = progress;

    progressTranslation = parseInt(progress, 10);

    if (isNaN(progressTranslation) || progressTranslation < 0 || progressTranslation < 3) {
      progressTranslation = 3;
    }

    const classes = cx('progress-bar', className, {
      'progress-bar--attention':          type === 'attention',
      'progress-bar--danger':             type === 'danger',
      'progress-bar--info':               type === 'info',
      'progress-bar--primary':            type === 'primary',
      'progress-bar--success':            type === 'success',
      'progress-bar--success-to-danger':  type === 'success-to-danger',
      'progress-bar--warning':            type === 'warning',
      'progress-bar--xs':                 size === 'xs',
      'progress-bar--sm':                 size === 'sm',
      'progress-bar--lg':                 size === 'lg'
    });

    /**
     * Style for progressing bar
     */
    const style = {
      transform: `translateX(${progressTranslation}%)`,
      WebkitTransform: `translateX(${progressTranslation}%)`
    };

    /**
     * If showLabel is true and size isn't extra small, construct label
     */
    let label = null;

    if (showLabel && size !== 'xs') {
      label = (
        <div className='progress-bar__bar__label'>{progressTranslation + '%'}</div>
      );
    }

    return (
      <div className={classes} {...props} >
        <div className='progress-bar__bar' style={style}>
          {label}
        </div>
      </div>
    );

  }
});