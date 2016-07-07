import React from 'react';
import cx    from 'classnames';

const Pill = (props) => {
  const { className, onClick, label, ...opts } = props;
  const classes = cx('pill', 'pill--default', className);

  return (
    /* eslint no-script-url:0 */
    <a href="javascript:void(0)" className={classes} onClick={onClick} {...opts}>{label}<span className="pill__close">&times;</span></a>
  );
};

Pill.displayName = 'RhinoPill';

Pill.propTypes = {
  className: React.PropTypes.string,
  onClick:   React.PropTypes.func,
  label:     React.PropTypes.string,
};

Pill.defaultProps = {
  onClick: () => {},
};

export default Pill;
