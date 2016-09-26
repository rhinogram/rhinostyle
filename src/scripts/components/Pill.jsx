import React from 'react';
import cx    from 'classnames';

const Pill = (props) => {
  const { className, disabled, onClick, label, ...opts } = props;
  const classes = cx('pill', 'pill--default', className, {
    'pill--disabled':   disabled,
  });

  return (
    /* eslint no-script-url:0 */
    <a href="javascript:void(0)" className={classes} onClick={onClick} {...opts}>{label}<span className="pill__close">&times;</span></a>
  );
};

Pill.displayName = 'RhinoPill';

Pill.propTypes = {
  className: React.PropTypes.string,
  disabled:  React.PropTypes.bool,
  onClick:   React.PropTypes.func.isRequired,
  label:     React.PropTypes.string.isRequired,
};

Pill.defaultProps = {
  onClick: () => {},
};

export default Pill;
