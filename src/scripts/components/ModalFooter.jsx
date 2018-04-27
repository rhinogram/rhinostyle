import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = props => <div className={cx('modal__footer')}>{props.children}</div>;

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
