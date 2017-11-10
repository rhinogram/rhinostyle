import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { UtilitySystem } from '../components';

class Resource extends React.Component {
  componentDidMount() {
    //console.log('test');
  }

  handleClick = () => {
    if (this.props.onClick && typeof (this.props.onClick === 'function')) {
      this.props.onClick();
    }
  }

  render() {
    const { children, className, open, selected, interfaceMode } = this.props;

    const interfaceClass = interfaceMode === 'radio' ? 'radio' : 'checkbox';

    const classes = cx('resource', className, {
      [UtilitySystem.config.classes.open]: open && !interfaceMode,
      'has-interface': interfaceMode,
      [`is-${interfaceClass}`]: interfaceMode,
      'is-selected': selected && !open,
    });

    // eslint-disable no-noninteractive-element-interactions
    return (
      <div role="button" tabIndex={0} className={classes} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

Resource.displayName = 'Rhinodio';

Resource.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  selected: PropTypes.bool,
  interfaceMode: PropTypes.oneOf(['radio', 'checkbox']),
  onClick: PropTypes.func,
};

Resource.defaultProps = {
  className: '',
  open: false,
  selected: false,
  interfaceMode: null,
  onClick: () => {},
};

export default Resource;
