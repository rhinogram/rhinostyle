import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

class Resource extends React.Component {
  handleClick = () => {
    const { disabled } = this.props;

    if (this.props.onClick && typeof (this.props.onClick === 'function') && !disabled) {
      this.props.onClick();
    }
  }

  render() {
    const { children, className, active, disabled, selected, interfaceMode, unread } = this.props;

    const interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';

    const classes = cx('resource', className, {
      [UtilitySystem.config.classes.active]: active && !interfaceMode,
      'has-interface': interfaceMode,
      [`is-${interfaceClass}`]: interfaceMode,
      'is-selected': selected && !active,
      'is-unread': unread,
    });

    return (
      <div role="button" tabIndex={0} className={classes} onClick={this.handleClick} disabled={disabled}>
        {children}
      </div>
    );
  }
}

Resource.displayName = 'RhinoResource';

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

Resource.defaultProps = {
  className: '',
  active: false,
  selected: false,
  interfaceMode: null,
  onClick: () => {},
};

export default Resource;
