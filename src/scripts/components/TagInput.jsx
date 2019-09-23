import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import cx from 'classnames';
import uuid from 'uuid';

import Input from './Input';
import Pill from './Pill';

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
        <div className="tag-input__tag-container">
          <Pill type={this.props.tagType} label={tag} key={uuid()} closeIconClassName={this.props.tagCloseIconClassName} />
        </div>
      ))
    );

    const tagInputClasses = cx('form__control', 'tag-input__container', {
      'form__control--is-focused': this.state.isTagInputFocused,
    });

    return (
      <div
        className={tagInputClasses}
        ref={this.divRef}
        onClick={() => this.setTagInputFocusState(true)}
      >
        {renderTags()}
        <div className="tag-input__input-container">
          <Input
            naked
            onChange={this.handleChange}
            name={this.props.name}
            focus={this.state.isTagInputFocused}
            onFocus={() => this.setTagInputFocusState(true)}
            onBlur={() => this.setTagInputFocusState(false)}
            initialValue={this.props.initialTagInputValue}
          />
        </div>
      </div>
    );
  }
}

TagInput.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
  onChange: PropTypes.func,
  initialTagInputValue: PropTypes.string.isRequired,
  tagType: PropTypes.string,
  tagCloseIconClassName: PropTypes.string,
};

TagInput.defaultProps = {
  tagType: 'powder-blue',
};

export default TagInput;
