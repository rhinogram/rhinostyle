import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalBody = props => <div className={cx('modal__body')}>{props.children}</div>;

ModalBody.displayName = 'RhinoModalBody';

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
