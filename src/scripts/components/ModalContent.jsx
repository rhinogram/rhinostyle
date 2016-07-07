import React from 'react';
import cx    from 'classnames';

const ModalContent = (props) => <div className={cx('modal__content', props.className)}>{props.children}</div>;

ModalContent.displayName = 'RhinoModalContent';

ModalContent.propTypes = {
  children:   React.PropTypes.node,
  className:  React.PropTypes.string,
};

export default ModalContent;
