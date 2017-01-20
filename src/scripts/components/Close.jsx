import React from 'react';
import cx    from 'classnames';

import Icon from './Icon';

const Close = (props) => {
  const { className, onClick, ...opts } = props;
  const classes = cx('close', className);

  /* eslint no-script-url:0 */
  return (<a href="javascript:void(0)" className={classes} onClick={onClick} {...opts} role="button" title="Close"><Icon icon="close" /></a>);
};

Close.displayName = 'RhinoClose';

Close.propTypes = {
  className: React.PropTypes.string,
  onClick:   React.PropTypes.func.isRequired,
};

Close.defaultProps = {
  onClick:  () => {},
};

export default Close;
