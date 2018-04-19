import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const FormLabel = (props) => {
  const { className, label, id, required } = props;
  const classes = cx(className);

  return (
    label ?
      <label // eslint-disable-line jsx-a11y/label-has-for
        htmlFor={id}
        className={classes}
      >
        {label} {required && <span className="form__asterisk">*</span>}
      </label> : null
  );
};

FormLabel.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default FormLabel;
