import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-datepicker';

import { UtilitySystem } from '../components';

const Date = (props) => {
  const { className, explanationMessage, validationMessage, label, name, required, ...opts } = props;
  const formGroupClasses = cx('form__group', className);
  const inputClasses = cx('form__control', {
    'form__control--error':  validationMessage,
  });
  const id = `${name}-${UtilitySystem.generateUUID()}`;

  const showLabel = () => {
    if (label) {
      return (
        <label // eslint-disable-line jsx-a11y/label-has-for
          htmlFor={id}
        >
          {label}{required && <span className="form__asterisk">*</span>}
        </label>
      );
    }

    return false;
  };

  const showValidationMessage = () => {
    if (validationMessage) {
      return <div className="form__validation-message">{validationMessage}</div>;
    }

    return false;
  };

  const showExplanationMessage = () => {
    if (explanationMessage) {
      return <div className="form__explanation-message">{explanationMessage}</div>;
    }

    return false;
  };

  return (
    <div className={formGroupClasses}>
      {showLabel()}
      <DatePicker
        name={name}
        id={id}
        className={inputClasses}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        {...opts}
      />
      {showValidationMessage()}
      {showExplanationMessage()}
    </div>
  );
};

Date.displayName = 'RhinoDate';

Date.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

Date.defaultProps = {
  className: '',
};

export default Date;
