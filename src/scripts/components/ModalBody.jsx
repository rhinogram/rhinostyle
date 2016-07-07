import React from 'react';
import cx    from 'classnames';

const ModalBody = (props) => <div className={cx('modal__body', props.className)}>{props.children}</div>;

ModalBody.displayName = 'RhinoModalBody';

ModalBody.propTypes = {
  children:   React.PropTypes.node,
  className:  React.PropTypes.string,
};

export default ModalBody;
