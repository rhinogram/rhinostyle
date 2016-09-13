import React from 'react';
import cx    from 'classnames';

const CoverFooter = (props) => <div className={cx('modal__footer', props.className)}>{props.children}</div>;

CoverFooter.displayName = 'RhinoCoverFooter';

CoverFooter.propTypes = {
  children:   React.PropTypes.node,
  className:  React.PropTypes.string,
};

export default CoverFooter;
