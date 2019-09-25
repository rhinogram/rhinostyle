import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ToggleButton extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.variable);
    }
  }

  handleDrag = (event) => {
    if (this.props.onDragStart) {
      this.props.onDragStart(event, this.props.variable);
    }
  }

  render() {
    const { available, className, draggable = false, id } = this.props;

    const buttonBaseClass = 'toggle-button';
    const toggleButtonStyleClasses = {
      'toggle-button--strikethrough': !available,
      'button--primary is-outlined': available,

    };

    const classes = cx(buttonBaseClass, className, {
      ...toggleButtonStyleClasses,
    });
    return (
      <button
        type="button"
        id={id}
        className={classes}
        onClick={this.handleClick}
        draggable={draggable}
        onDragStart={event => this.handleDrag(event)}
      >
        <span className="button__text-wrapper">{this.props.children}</span>
      </button>
    );
  }
}

ToggleButton.propTypes = {
  available: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  draggable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  variable: PropTypes.object.isRequired,
  onDragStart: PropTypes.func,
  id: PropTypes.string,
};

export default ToggleButton;
