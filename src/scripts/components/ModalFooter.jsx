import cx from 'classnames';
import React from 'react';

const ModalFooter = props => <div className={cx('modal__footer')}>{props.children}</div>;

ModalFooter.displayName = 'RhinoModalFooter';

ModalFooter.propTypes = {
  children: React.PropTypes.node,
};

export default ModalFooter;
