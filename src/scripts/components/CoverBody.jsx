import React from 'react';
import cx    from 'classnames';

const CoverBody = (props) => <div className={cx('modal__body', props.className)}>{props.children}</div>;

CoverBody.displayName = 'RhinoCoverBody';

CoverBody.propTypes = {
  children:   React.PropTypes.node,
  className:  React.PropTypes.string,
};

export default CoverBody;
