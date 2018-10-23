import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { LoaderCircle, UtilitySystem } from '../components';

class ToggleButton extends Component {
  //
  //
  // /**
  //  * Not widely used in the app currently, see link for pattern explaination to avoid `no-did-update-set-state` error -AL
  //  * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  //  */
  // componentDidUpdate(prevProps) {
  //   if (prevProps.selected !== this.props.selected) {
  //     this.onUpdate(() => {
  //       this.setState({
  //         available: this.props.available,
  //       });
  //     });
  //   }
  // }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.variable.value, this.props.variable.id);
    }
  }

  render() {
    const { className, onClick, size, title, type, available, ...opts } = this.props;

    const buttonBaseClass = 'toggle-button';
    const toggleButtonStyleClasses = {
      'toggle-button--strikethrough': !available,
      'button--outline-primary': available,
      'button--small': size === 'small',
      'button--large': size === 'large',
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
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  type: PropTypes.string,
  variable: PropTypes.object,
};

export default ToggleButton;
