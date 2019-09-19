import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import cx from 'classnames';
import uuid from 'uuid';

import Input from './Input';
import Pill from './Pill';
import UtilityInlineGrid from './UtilityInlineGrid';

class TagInput extends React.Component {
  state = {
    isTagInputFocused: false,
  }

  handleChange = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(name, value);
    }
  }

  divRef = React.createRef();

  setTagInputFocusState = (isTagInputFocused) => {
    this.setState({ isTagInputFocused });
  }

  render() {
    const renderTags = () => (
      this.props.tags.map(tag => (
        <Pill type="primary" label={tag} key={uuid()} />
      ))
    );

    const tagInputClasses = cx('form__control', 'form__control--tag-input', {
      'form__control--is-focused': this.state.isTagInputFocused,
    });

    return (
      <div
        className={tagInputClasses}
        ref={this.divRef}
        onClick={() => this.setTagInputFocusState(true)}
      >
        <UtilityInlineGrid>
          {renderTags()}
          <Input
            naked
            onChange={this.handleChange}
            name={this.props.name}
            focus={this.state.isTagInputFocused}
            onFocus={() => this.setTagInputFocusState(true)}
            onBlur={() => this.setTagInputFocusState(false)}
            initialValue={this.props.initialTagInputValue}
          />
        </UtilityInlineGrid>
      </div>
    );
  }
}

TagInput.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onChange: PropTypes.func,
  initialTagInputValue: PropTypes.string.isRequired,
};

export default TagInput;
