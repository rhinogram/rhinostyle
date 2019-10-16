import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import cx from 'classnames';

import Input from './Input';
import Pill from './Pill';

class PillsInput extends React.Component {
  state = {
    isInputFocused: false,
  }

  handleChange = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(name, value);
    }
  }

  inputContainerDivRef = React.createRef();

  setInputFocusState = (isInputFocused) => {
    this.setState({ isInputFocused });
  }

  render() {
    const renderPills = () => (
      this.props.pills.map(pill => (
        <div className="pill-input__pill-container" key={pill.id}>
          <Pill
            type={this.props.pillType}
            label={pill.label}
            id={pill.id}
            closeIconClassName={this.props.pillCloseIconClassName}
            onCloseIconClick={this.props.onPillCloseIconClick}
          />
        </div>
      ))
    );

    const { inputProps } = this.props;

    const propsForInput = {
      naked: inputProps.naked || true,
      onChange: inputProps.onChange || this.handleChange,
      focus: inputProps.focus || this.state.isInputFocused,
      onFocus: inputProps.onFocus || this.setInputFocusState(true),
      onBlur: inputProps.onBlur || this.setInputFocusState(false),
      ...this.props.inputProps,
    };

    const inputClasses = cx('form__control', 'pill-input__container', this.props.className, {
      'form__control--is-focused': this.state.isInputFocused,
    });

    return (
      <div
        className={inputClasses}
        ref={this.inputContainerDivRef}
        onClick={() => this.setInputFocusState(true)}
      >
        {renderPills()}
        <div className="pill-input__input-container">
          <Input {...propsForInput} />
        </div>
      </div>
    );
  }
}

PillsInput.propTypes = {
  className: PropTypes.string,
  pills: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
  onPillCloseIconClick: PropTypes.func,
  pillType: PropTypes.string,
  pillCloseIconClassName: PropTypes.string,
  inputProps: PropTypes.shape({
    addon: PropTypes.oneOf(['left', 'right', 'both']),
    autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
    autoComplete: PropTypes.oneOf(['off', 'on']),
    children: PropTypes.node,
    className: PropTypes.string,
    clear: PropTypes.bool,
    customHTMLAttributes: PropTypes.object,
    customInputClasses: PropTypes.string,
    disabled: PropTypes.bool,
    explanationMessage: PropTypes.string,
    focus: PropTypes.bool,
    format: PropTypes.object,
    initialValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    naked: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onInit: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyPress: PropTypes.func,
    onKeyUp: PropTypes.func,
    onClear: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseDown: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['large']),
    type: PropTypes.oneOf(['email', 'password', 'text', 'number', 'search', 'tel']),
    validationMessage: PropTypes.string,
  }),
};

PillsInput.defaultProps = {
  pillType: 'powder-blue',
  onPillCloseIconClick: () => {},
};

export default PillsInput;
