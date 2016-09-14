import React from 'react';
import cx    from 'classnames';

const ModalFooter = (props) => <div className={cx('modal__footer')}>{props.children}</div>;

ModalFooter.displayName = 'RhinoModalFooter';

ModalFooter.propTypes = {
  children:   React.PropTypes.node,
};

export default ModalFooter;
