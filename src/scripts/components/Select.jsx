/* eslint-disable no-debugger */
/* eslint-disable no-console */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import { FormExplanationMessage, FormValidationMessage, FormLabel, UtilitySystem } from '.';

class Select extends React.Component {
  state = {
    selected: this.props.selected ? this.props.selected : -1,
    isSelectorOpen: false,
  }

  componentDidMount() {
    const selectedOption = this.props.options.find(option => option.id === this.state.selected);
    if (selectedOption) this.setState({ selectedOptionValue: selectedOption.value });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selected !== prevState.selected) {
      const selectedOption = nextProps.options.find(option => option.id === nextProps.selected);
      const toUpdateState = {
        selected: nextProps.selected,
      };

      if (selectedOption) toUpdateState.selectedOptionValue = selectedOption.value;
      return toUpdateState;
    } else return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({ selected: this.props.selected }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  onBlur = () => {
    this.selectRef.size = 0;
    this.setState({
      isSelectorOpen: false,
    });
  }

  onFocus = () => {
    this.selectRef.size = 6;
    this.setState({
      isSelectorOpen: true,
    });
  }

  onChange = (event) => {
    const selected = parseInt(event.target.value, 10) ? parseInt(event.target.value, 10) : event.target.value;
    const selectedOption = this.props.options.find(option => option.id === selected);

    this.setState({
      selected,
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
    const { className, disabled, explanationMessage, label, name, options, required, validationMessage } = this.props;
    const { isSelectorOpen } = this.state;

    const classes = cx('rhinoselect__select', 'form__control', {
      // eslint-disable-next-line quote-props
      'rhinoselect__open': !!isSelectorOpen,
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
          <optgroup key={option.id} label={option.value}>
            {option.options.map(childOption => <option key={childOption.id} value={childOption.id}>{childOption.value}</option>)}
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
          <span
            ref={(ref) => { this.selectLabelRef = ref; }}
            className={selectLabelClasses}
            onClick={this.onClick}
          >
            {this.state.selectedOptionValue}
          </span>
          <div className="rhinoselect">
            <select
              ref={(ref) => { this.selectRef = ref; }}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              className={classes}
              disabled={disabled}
              id={this.id}
              name={name}
              value={this.state.selected}
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
  explanationMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validationMessage: PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  selected: -1,
};

export default Select;
