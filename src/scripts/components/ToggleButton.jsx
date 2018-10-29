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
    const { available, className } = this.props;

    const buttonBaseClass = 'toggle-button';
    const toggleButtonStyleClasses = {
      'toggle-button--strikethrough': !available,
      'button--outline-primary': available,

    };

    const classes = cx(buttonBaseClass, className, {
      ...toggleButtonStyleClasses,
    });
    return (
      <button type="button" className={classes} onClick={this.handleClick}>
        <span className="button__text-wrapper">{this.props.children}</span>
      </button>
    );
  }
}

ToggleButton.propTypes = {
  available: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  variable: PropTypes.object.isRequired,
};

export default ToggleButton;
