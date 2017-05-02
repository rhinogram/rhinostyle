import cx    from 'classnames';
import React from 'react';

import { Icon } from '../components';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('button--reset close', className);

  return (
    <button type="button" className={classes} onClick={onClick} {...opts} role="button" aria-label="Close"><Icon icon="close" /></button>
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
