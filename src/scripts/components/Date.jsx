import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'react-datepicker';
import Cleave from 'cleave.js/react';

import { FormLabel, FormExplanationMessage, FormValidationMessage, UtilitySystem } from '.';

class Date extends React.Component {
  datePickerInput = undefined;
  render() {
    const { className, explanationMessage, validationMessage, label, name, required, ...opts } = this.props;
    const formGroupClasses = cx('form__group', className);
    const inputClasses = cx('form__control', {
      'form__control--error': validationMessage,
    });
    const id = `${name}-${UtilitySystem.generateUUID()}`;

    return (
      <div className={formGroupClasses}>
        <FormLabel id={id} required={required}>{label}</FormLabel>
        <DatePicker
          customInput={(
            <Cleave
              options={UtilitySystem.dateFormat}
            />
          )}
          shouldCloseOnSelect={false}
          name={name}
          id={id}
          className={inputClasses}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          ref={(inputRef) => (this.datePickerInput = inputRef)}
          {...opts}
        />
        <FormValidationMessage validationMessage={validationMessage} />
        <FormExplanationMessage explanationMessage={explanationMessage} />
      </div>
    );
  }
}

Date.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  validationMessage: PropTypes.string,
};

Date.defaultProps = {
  explanationMessage: 'Format MM/DD/YYYY',
};

export default Date;
