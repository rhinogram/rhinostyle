import cx    from 'classnames';
import React from 'react';

import { Icon } from '../components';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('close', className);

  return (
    <a href="javascript:void(0)" className={classes} onClick={onClick} {...opts} role="button" title="Close"><Icon icon="close" /></a>
  );
};

Close.displayName = 'RhinoClose';

Close.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

Close.defaultProps = {
  onClick:  () => {},
};

export default Close;
