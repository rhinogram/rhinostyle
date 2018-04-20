import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const FormLabel = (props) => {
  const { children, className, id, required } = props;
  const classes = cx(className);

  return (
    children ?
      <label // eslint-disable-line jsx-a11y/label-has-for
        htmlFor={id}
        className={classes}
      >
        {children} {required && <span className="form__asterisk">*</span>}
      </label> : null
  );
};

FormLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default FormLabel;
