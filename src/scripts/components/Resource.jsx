import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ResourceRight, UtilitySystem } from '../components';

class Resource extends React.Component {
  hasRightColumn = () => {
    const { children } = this.props;
    let rightColumnInstance = false;

    React.Children.map(children, (child) => {
      if (child && child.type === ResourceRight) {
        rightColumnInstance = true;
      }
    });

    return rightColumnInstance;
  }

  handleClick = () => {
    const { disabled } = this.props;

    if (this.props.onClick && !disabled) {
      this.props.onClick();
    }
  }

  render() {
    const { className, children, active, disabled, selected, interfaceMode, unread } = this.props;

    const interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';

    const classes = cx('resource', className, {
      [UtilitySystem.config.classes.active]: active && !interfaceMode,
      'has-interface': interfaceMode,
      [`is-${interfaceClass}`]: interfaceMode,
      'is-selected': selected && !active,
      'is-unread': unread,
      'has-right-column': this.hasRightColumn(),
    });

    return (
      <div role="button" tabIndex={0} className={classes} onClick={this.handleClick} disabled={disabled}>
        {children}
      </div>
    );
  }
}

Resource.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
  onClick: PropTypes.func,
  unread: PropTypes.bool,
};

export default Resource;
