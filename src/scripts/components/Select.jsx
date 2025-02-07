/* global Modernizr */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormExplanationMessage from './FormExplanationMessage';
import FormValidationMessage from './FormValidationMessage';
import FormLabel from './FormLabel';
import { UtilitySystem } from '../UtilitySystem';

class Select extends React.Component {
  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;
  state = {
    isSelectorOpen: false,
    openPosition: 'bottom',
    isParentScrollEventsAdded: false, // will remove this if we got better solution
  };

  componentDidMount() {
    const selectedOption = Select.getSelectedOption(this.props.options, this.props.selected);

    if (selectedOption) {
      this.setState({ selectedOptionValue: selectedOption.value });
    }
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

  componentWillUnmount() {
    // will remove this if we got better solution
    this.removeParentScrollEvents();
  }

  // will remove this if we got better solution
  closeOnParentScroll = () => {
    const parentClasses = ['app-page__container', 'modal is-open', 'modal-open'];
    parentClasses.forEach((parentClass) => {
      const elem = document.getElementsByClassName(parentClass)[0];
      if (elem) {
        elem.addEventListener('scroll', () => {
          if (this.selectRef) this.selectRef.blur();
        });
      }
    });
  };

  // will remove this if we got better solution
  removeParentScrollEvents = () => {
    const parentClasses = ['app-page__container', 'modal is-open', 'modal-open'];

    if (!this.state.isParentScrollEventsAdded) return;

    parentClasses.forEach((parentClass) => {
      const elem = document.getElementsByClassName(parentClass)[0];

      if (elem && this.selectRef) {
        elem.removeEventListener('scroll', () => {
          if (this.selectRef) this.selectRef.blur();
        });
      }
    });
  };

  static getSelectedOption = (options, optionId) => {
    let totalOptions = [];
    options.forEach((option) => {
      if (option.options) {
        totalOptions = [...totalOptions, ...option.options];
      } else {
        totalOptions.push(option);
      }
    });

    return totalOptions.find((option) => option.id === optionId);
  };

  getTotalVisibleOptions = () => {
    let count = 0;
    this.props.options.forEach((option) => {
      count += 1;
      if (option.options) {
        count += option.options.length;
      }
    });
    return count;
  };

  onBlur = () => {
    this.selectRef.size = 1;
    this.setState({
      isSelectorOpen: false,
    });
  };

  getPosition = (optionLength) => {
    const selectHeight = this.selectRef.offsetHeight;
    const windowHeight = window.innerHeight;
    const optionHeight = this.selectRef.options[0].offsetHeight;
    const menuHeight = Math.min(selectHeight, optionLength * optionHeight);
    const instOffsetWithMenu = this.selectRef.getBoundingClientRect().bottom + menuHeight;

    if (instOffsetWithMenu >= windowHeight) return 'top';
    return 'bottom';
  };

  onFocus = () => {
    // will remove this if we got better solution
    if (!this.state.isParentScrollEventsAdded) this.closeOnParentScroll();

    const totalSize = this.getTotalVisibleOptions();

    if (totalSize > this.props.visibleOptionLength) {
      this.selectRef.size = this.props.visibleOptionLength;
    } else {
      this.selectRef.size = totalSize === 1 ? 2 : totalSize;
    }
    const optionHeight = this.selectRef.options[0].offsetHeight;
    this.selectRef.scrollTop = this.selectRef.selectedIndex * optionHeight;
    this.setState({
      isSelectorOpen: true,
      openPosition: this.getPosition(this.selectRef.size),
      isParentScrollEventsAdded: true,
    });
  };

  onChange = (event) => {
    const selected = typeof event.target.value === 'string' && Number(event.target.value) ? parseInt(event.target.value, 10) : event.target.value;
    const selectedOption = Select.getSelectedOption(this.props.options, selected);

    this.setState({
      selectedOptionValue: selectedOption.value,
    });

    if (this.props.onSelect) {
      this.props.onSelect(event.target.name, selected);
    }
    this.selectRef.blur();
  };

  onClick = () => this.selectRef.focus();

  render() {
    const { className, disabled, explanationMessage, label, name, options, required, validationMessage } = this.props;
    const { isSelectorOpen, openPosition } = this.state;

    const classes = cx('rhinoselect__select', 'form__control', {
      rhinoselect__open: !!(isSelectorOpen && !Modernizr.touchevents),
      rhinoselect__open__top: !!(isSelectorOpen && !Modernizr.touchevents && openPosition === 'top'),
      'rhinoselect__single-option': isSelectorOpen && this.getTotalVisibleOptions() === 1,
      [UtilitySystem.config.classes.disabled]: disabled,
    });

    const selectLabelClasses = cx('select__label', {
      'form__control--error': validationMessage,
      'select__label--placeholder': !this.state.selectedOptionValue && this.props.placeholder,
    });

    const formGroupClasses = cx('form__group', className);

    const renderOpts = (option) => {
      // If the option has options as well we're in an `<optgroup>`
      if (option.options) {
        return (
          <optgroup key={option.id} label={option.value} className="u-p-t-small u-p-b-small">
            {option.options.map((childOption) => (
              <option className="u-p-t-small u-p-b-small" key={childOption.id} value={childOption.id}>
                {childOption.value}
              </option>
            ))}
          </optgroup>
        );
      }

      // We're in a default single-level `<option>`
      return (
        <option className="u-p-t-small u-p-b-small" key={option.id} value={option.id}>
          {option.value}
        </option>
      );
    };
    return (
      <div className={formGroupClasses}>
        <FormLabel id={this.id} required={required}>
          {label}
        </FormLabel>
        <div className="form__group--wrapper">
          {!disabled && (
            <span
              ref={(ref) => {
                this.selectLabelRef = ref;
              }}
              className={selectLabelClasses}
              onClick={this.onClick}
            >
              {this.state.selectedOptionValue || this.props.placeholder}
            </span>
          )}
          <div className="rhinoselect">
            <select
              ref={(ref) => {
                this.selectRef = ref;
              }}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              className={classes}
              disabled={disabled}
              id={this.id}
              name={name}
              value={this.props.selected}
              onChange={this.onChange}
              data-cypress={this.props.dataCypress}
              title={this.props.title || label}
            >
              {options.map(renderOpts)}
            </select>
          </div>
        </div>
        {(validationMessage || explanationMessage) && (
          <>
            <FormValidationMessage validationMessage={validationMessage} />
            <FormExplanationMessage explanationMessage={explanationMessage} />
          </>
        )}
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
  placeholder: PropTypes.string,
  dataCypress: PropTypes.string,
  title: PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  required: false,
  visibleOptionLength: 6,
};

export default Select;
