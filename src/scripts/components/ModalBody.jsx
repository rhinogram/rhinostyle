import PropTypes from 'prop-types';
import React from 'react';

const ModalBody = props => <div className="modal__body">{props.children}</div>;

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
