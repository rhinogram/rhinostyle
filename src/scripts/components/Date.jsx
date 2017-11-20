import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-datepicker';

const Date = (props) => {
  const { className, explanationMessage, validationMessage, label, required, ...opts } = props;
  const formGroupClasses = cx('form__group', className);
  const inputClasses = cx('form__control', {
    'form__control--error':  validationMessage,
  });

  const showLabel = () => {
    if (label) {
      return <label key="0" htmlFor={name}>{label} {required && <span className="form__asterisk">*</span>}</label>;
    }

    return false;
  };

  const showValidationMessage = () => {
    if (validationMessage) {
      return <div key="2" className="form__validation-message">{validationMessage}</div>;
    }

    return false;
  };

  const showExplanationMessage = () => {
    if (explanationMessage) {
      return <div key="3" className="form__explanation-message">{explanationMessage}</div>;
    }

    return false;
  };

  return (
    <div className={formGroupClasses}>
      {showLabel()}
      <DatePicker
        key="1"
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
