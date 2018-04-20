import PropTypes from 'prop-types';
import React from 'react';

const FormExplanationMessage = (props) => {
  const { explanationMessage } = props;

  return (
    explanationMessage ?
      <div className="form__explanation-message">{explanationMessage}</div> : null
  );
};

FormExplanationMessage.propTypes = {
  explanationMessage: PropTypes.string,
};

export default FormExplanationMessage;
