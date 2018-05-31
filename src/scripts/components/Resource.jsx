import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { ResourceRight, UtilitySystem } from '../components';

class Resource extends React.Component {
  hasRightColumn = false; // eslint-disable-line react/sort-comp

  getChildren = () => {
    const { children } = this.props;

    return React.Children.map(children, (child) => {
      if (!child) return false;

      if (child.type === ResourceRight) {
        this.hasRightColumn = true;
      }

      return child;
    });
  }

  handleClick = () => {
    const { disabled } = this.props;

    if (this.props.onClick && !disabled) {
      this.props.onClick();
    }
  }

  render() {
    const { className, active, disabled, selected, interfaceMode, unread } = this.props;

    const interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';

    const classes = cx('resource', className, {
      [UtilitySystem.config.classes.active]: active && !interfaceMode,
      'has-interface': interfaceMode,
      [`is-${interfaceClass}`]: interfaceMode,
      'is-selected': selected && !active,
      'is-unread': unread,
      'has-right-column': this.hasRightColumn,
    });

    return (
      <div role="button" tabIndex={0} className={classes} onClick={this.handleClick} disabled={disabled}>
        {this.getChildren()}
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
