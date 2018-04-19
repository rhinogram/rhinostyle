import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { FormLabel, FormValidationMessage, FormExplanationMessage, UtilitySystem } from '../components';

class Textarea extends React.Component {
  state = {
    charactersLeft: '',
    value: '',
  };

  componentWillMount() {
    if (this.props.initialValue) {
      this.setState({ value: this.props.initialValue.trimRight() });
    }

    if (this.props.maxCharacters && this.props.initialValue) {
      this.setState({ charactersLeft: this.props.maxCharacters - this.props.initialValue.length });
    } else if (this.props.maxCharacters) {
      this.setState({ charactersLeft: this.props.maxCharacters });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValue !== this.props.initialValue) {
      this.setState({
        value: nextProps.initialValue,
        charactersLeft: this.props.maxCharacters - nextProps.initialValue.length,
      });
    }
  }

  id = `${this.props.name}-${UtilitySystem.generateUUID()}`;

  _handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });

    this.setState({ charactersLeft: this.props.maxCharacters - event.target.value.length });

    if (this.props.onChange && typeof (this.props.onChange === 'function')) {
      this.props.onChange(event.target.name, event.target.value.trimLeft());
    }
  }

  render() {
    const { abbrMaxCharacters, className, disabled, explanationMessage, label, maxCharacters, naked, name, placeholder, required, rows, validationMessage } = this.props;

    const textAreaClasses = cx('form__control', {
      'form__control--error': validationMessage,
      'form__control--naked': naked,
    });
    const formGroupClasses = cx('form__group', className);
    const characterCountClasses = cx('form__character-count', {
      'form__character-count--danger': this.state.charactersLeft < 11,
    });

    const showCharacterCount = () => {
      if (maxCharacters) {
        return <div className={characterCountClasses}>{this.state.charactersLeft} {!abbrMaxCharacters ? <span>character{(this.state.charactersLeft !== 1) ? 's' : ''} left</span> : null}</div>;
      }

      return false;
    };

    return (
      <div className={formGroupClasses}>
        <FormLabel label={label} id={this.id} required={required} />
        <textarea id={this.id} name={name} className={textAreaClasses} rows={rows} placeholder={placeholder} value={this.state.value} onChange={this._handleChange} disabled={disabled} />
        {(validationMessage || explanationMessage || showCharacterCount()) &&
          <div className="form__control-footer">
            {(validationMessage || explanationMessage) &&
              <div className="form__control-footer__left">
                <FormValidationMessage validationMessage={validationMessage} />
                <FormExplanationMessage explanationMessage={explanationMessage} />
              </div>
            }
            {showCharacterCount()}
          </div>
        }
      </div>
    );
  }
}

Textarea.displayName = 'RhinoTextarea';

Textarea.propTypes = {
  abbrMaxCharacters: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  explanationMessage: PropTypes.string,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  maxCharacters: PropTypes.number,
  naked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  validationMessage: PropTypes.string,
};

Textarea.defaultProps = {
  abbrMaxCharacters: false,
  label: '',
  maxCharacters: null,
  naked: false,
  placeholder: '',
  required: false,
  rows: 3,
  validationMessage: '',
};

export default Textarea;
