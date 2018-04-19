import PropTypes from 'prop-types';
import React from 'react';

const FormValidationMessage = (props) => {
  const { validationMessage } = props;

  return (
    validationMessage ?
      <div className="form__validation-message">{validationMessage}</div> : null
  );
};

FormValidationMessage.propTypes = {
  validationMessage: PropTypes.string,
};

export default FormValidationMessage;
