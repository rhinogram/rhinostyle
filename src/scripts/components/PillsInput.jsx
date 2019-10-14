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
          <Input
            format={this.props.inputFormat}
            naked
            onChange={this.handleChange}
            name={this.props.name}
            focus={this.state.isInputFocused}
            onFocus={() => this.setInputFocusState(true)}
            onBlur={() => this.setInputFocusState(false)}
            initialValue={this.props.initialInputValue}
          />
        </div>
      </div>
    );
  }
}

PillsInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  pills: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
  onPillCloseIconClick: PropTypes.func,
  initialInputValue: PropTypes.string.isRequired,
  pillType: PropTypes.string,
  pillCloseIconClassName: PropTypes.string,
  inputFormat: PropTypes.object,
};

PillsInput.defaultProps = {
  pillType: 'powder-blue',
  onPillCloseIconClick: () => {},
};

export default PillsInput;
