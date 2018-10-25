import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ToggleButton extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.variable.value, this.props.variable.id);
    }
  }

  render() {
    const { className, onClick, title, type, available, ...opts } = this.props;

    const buttonBaseClass = 'toggle-button';
    const toggleButtonStyleClasses = {
      'toggle-button--strikethrough': !available,
      'button--outline-primary': available,

    };

    const classes = cx(buttonBaseClass, className, {
      ...toggleButtonStyleClasses,
    });
    return (
      <button type="button" className={classes} onClick={this.handleClick} title={this.props.title} {...opts}>
        <span className="button__text-wrapper">{this.props.children}</span>
      </button>
    );
  }
}

ToggleButton.propTypes = {
  available: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  variable: PropTypes.object,
};

export default ToggleButton;
