import React from 'react';
import cx    from 'classnames';

const ModalFooter = (props) => <div className={cx('modal__footer', props.className)}>{props.children}</div>;

ModalFooter.displayName = 'RhinoModalFooter';

ModalFooter.propTypes = {
  children:   React.PropTypes.node,
  className:  React.PropTypes.string,
};

export default ModalFooter;
