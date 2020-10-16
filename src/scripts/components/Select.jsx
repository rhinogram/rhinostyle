/* eslint-disable quote-props */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { FormExplanationMessage, FormValidationMessage, FormLabel, UtilitySystem } from '.';

class Select extends React.Component {
  state = {
    isSelectorOpen: false,
  }

  componentDidMount() {
    const selectedOption = Select.getSelectedOption(this.props.options, this.props.selected);
    if (selectedOption) this.setState({ selectedOptionValue: selectedOption.value });
  }

  static getDerivedStateFromProps(nextProps) {
    const selectedOption = Select.getSelectedOption(nextProps.options, nextProps.selected);
    const toUpdateState = {};

    if (selectedOption) {
      toUpdateState.selectedOptionValue = selectedOption.value;
      return toUpdateState;
    }
    return null;
  }

  static getSelectedOption = (options, optionId) => {
    let totalOptions = [];
    options.forEach((option) => {
      if (option.options) {
        totalOptions = [...totalOptions, ...option.options];
      } else {
        totalOptions.push(option);
      }
    });

    return totalOptions.find(option => option.id === optionId);
  }

  getTotalVisbleOptions = () => {
    let count = 0;
    this.props.options.forEach((option) => {
      count += 1;
      if (option.options) {
        count += option.options.length;
      }
    });
    return count;
  }

  onBlur = () => {
    this.selectRef.size = 0;
    this.setState({
      isSelectorOpen: false,
    });
  }

  onFocus = () => {
    const totalSize = this.getTotalVisbleOptions();
    this.selectRef.size = totalSize > this.props.visibleOptionLength ? this.props.visibleOptionLength : totalSize;
    this.setState({
      isSelectorOpen: true,
    });
  }

  onChange = (event) => {
    const selected = parseInt(event.target.value, 10) ? parseInt(event.target.value, 10) : event.target.value;
    const selectedOption = Select.getSelectedOption(this.props.options, selected);

    this.setState({
      // selected,
      selectedOptionValue: selectedOption.value,
    });

    if (this.props.onSelect) {
      this.props.onSelect(event.target.name, selected);
    }
    this.selectRef.blur();
  }

  onClick = () => {
    this.selectRef.focus();
    this.onFocus();
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  render() {
    const { className, disabled, explanationMessage, label, name, options, required, validationMessage, position } = this.props;
    const { isSelectorOpen } = this.state;

    const classes = cx('rhinoselect__select', 'form__control', {
      'rhinoselect__open': !!isSelectorOpen,
      'rhinoselect__open__top': !!(isSelectorOpen && position === 'top'),
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    const selectLabelClasses = cx('select__label', {
      'form__control--error': validationMessage,
    });

    const formGroupClasses = cx('form__group', className);

    const renderOpts = (option) => {
      // If the option has options as well we're in an `<optgroup>`
      if (option.options) {
        return (
          <optgroup key={option.id} label={option.value} className={this.state.isSelectorOpen ? 'u-p-t-small u-p-b-small' : ''}>
            {option.options.map(childOption =>
              (
                <option className={this.state.isSelectorOpen ? 'u-p-t-small u-p-b-small' : ''} key={childOption.id} value={childOption.id}>
                  {childOption.value}
                </option>
              ))}
          </optgroup>
        );
      }

      // We're in a default single-level `<option>`
      return (
        <option className={this.state.isSelectorOpen ? 'u-p-t-small u-p-b-small' : ''} key={option.id} value={option.id}>{option.value}</option>
      );
    };

    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>{label}</FormLabel>
        <div className="form__group--wrapper">
          {!disabled && (
          <span
            ref={(ref) => { this.selectLabelRef = ref; }}
            className={selectLabelClasses}
            onClick={this.onClick}
          >
            {this.state.selectedOptionValue}
          </span>)}
          <div className="rhinoselect">
            <select
              ref={(ref) => { this.selectRef = ref; }}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              className={classes}
              disabled={disabled}
              id={this.id}
              name={name}
              value={this.props.selected}
              onChange={this.onChange}
            >
              {options.map(renderOpts)}
            </select>
          </div>
        </div>
        {(validationMessage || explanationMessage) && (
          <Fragment>
            <FormValidationMessage validationMessage={validationMessage} />
            <FormExplanationMessage explanationMessage={explanationMessage} />
          </Fragment>)}
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  visibleOptionLength: PropTypes.number,
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
  position: PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  visibleOptionLength: 6,
  position: 'bottom',
};

export default Select;
